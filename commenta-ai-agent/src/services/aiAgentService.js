const Cerebras = require('@cerebras/cerebras_cloud_sdk');

const cerebras = new Cerebras({
  apiKey: process.env.CEREBRAS_API_KEY
});

const MCP_GATEWAY_URL = process.env.MCP_GATEWAY_URL || 'http://mcp-gateway-service:5001';


const tools = [
  {
    type: 'function',
    function: {
      name: 'get_sentiment_breakdown',
      description: 'Get sentiment breakdown (positive, negative, neutral counts) for a video',
      strict: true,
      parameters: {
        type: 'object',
        properties: {
          videoId: {
            type: 'string',
            description: 'The video ID'
          }
        },
        required: ['videoId']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'get_top_comments',
      description: 'Get top comments by sentiment type (positive/negative/controversial/questions/suggestions)',
      strict: true,
      parameters: {
        type: 'object',
        properties: {
          videoId: {
            type: 'string',
            description: 'The video ID'
          },
          type: {
            type: 'string',
            enum: ['positive', 'negative', 'controversial', 'questions', 'suggestions'],
            description: 'Type of comments to fetch'
          },
          limit: {
            type: 'number',
            description: 'Number of comments to return (default 10)'
          }
        },
        required: ['videoId', 'type']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'search_comments',
      description: 'Search comments by keyword or phrase',
      strict: true,
      parameters: {
        type: 'object',
        properties: {
          videoId: {
            type: 'string',
            description: 'The video ID'
          },
          keyword: {
            type: 'string',
            description: 'Keyword to search for'
          }
        },
        required: ['videoId', 'keyword']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'get_top_likes',
      description: 'Get top comments sorted by highest likeCount',
      strict: true,
      parameters: {
        type: 'object',
        properties: {
          videoId: {
            type: 'string',
            description: 'The video ID'
          },
          limit: {
            type: 'number',
            description: 'Number of comments to return (default 10)'
          }
        },
        required: ['videoId']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'get_top_replies',
      description: 'Get top comments sorted by highest replyCount',
      strict: true,
      parameters: {
        type: 'object',
        properties: {
          videoId: {
            type: 'string',
            description: 'The video ID'
          },
          limit: {
            type: 'number',
            description: 'Number of comments to return (default 10)'
          }
        },
        required: ['videoId']
      }
    }
  }
];


async function executeToolCall(toolName, args) {
  try {
    console.log(` Executing tool: ${toolName}`, args);

    const response = await fetch(`${MCP_GATEWAY_URL}/tools/${toolName}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(args)
    });

    if (!response.ok) {
      throw new Error(`MCP Gateway error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log(` Tool result:`, result);
    return result;

  } catch (error) {
    console.error('Tool execution error:', error);
    throw error;
  }
}

async function chatWithAI(userQuery, context) {
  console.log('\n User Query:', userQuery);
  console.log('─'.repeat(60));

  const systemPrompt = `You are an AI assistant helping YouTube creators understand their video comments and audience engagement.

Context about the video:
- Title: ${context.video.title}
- Total Comments: ${context.totalComments}
- Analysis Status: ${context.video.analysisStatus}
- video Id: ${context.videoId}

${context.summary ? `
Summary Statistics:
- Positive: ${context.summary.positiveCount}
- Negative: ${context.summary.negativeCount}
- Neutral: ${context.summary.neutralCount}
- Questions: ${context.summary.questionCount}
- Suggestions: ${context.summary.suggestionCount}
- Controversial: ${context.summary.controversialCount}
` : 'Analysis not yet complete.'}
You have access to tools to fetch specific data. Use them when needed to answer user questions accurately.
Be conversational, helpful, and provide insights based on the data.`;

  const messages = [
    {
      role: 'system',
      content: systemPrompt
    },
    {
      role: 'user',
      content: userQuery
    }
  ];
  try {
    let response = await cerebras.chat.completions.create({
      model: 'llama-4-scout-17b-16e-instruct',
      messages: messages,
      tools: tools,
      parallel_tool_calls: false,
      max_completion_tokens: 2000,
      temperature: 0.7
    });

    let assistantMessage = response.choices[0].message;
    console.log('\n LLM Response:', JSON.stringify(assistantMessage, null, 2));

    // Handle tool calls
    if (assistantMessage.tool_calls && assistantMessage.tool_calls.length > 0) {
      console.log('\n LLM wants to use tools!');

      for (const toolCall of assistantMessage.tool_calls) {
        const functionCall = toolCall.function;
        const args = JSON.parse(functionCall.arguments);

        console.log(` Calling: ${functionCall.name}`);
        const toolResult = await executeToolCall(functionCall.name, args);

        messages.push(assistantMessage);
        messages.push({
          role: 'tool',
          tool_call_id: toolCall.id,
          content: JSON.stringify(toolResult)
        });
      }

      // Get final response with tool results
      console.log('\n Sending tool results back to LLM...');
      response = await cerebras.chat.completions.create({
        model: 'llama-4-scout-17b-16e-instruct',
        messages: messages,
        max_completion_tokens: 2000,
        temperature: 0.7
      });

      assistantMessage = response.choices[0].message;
    }

    const finalResponse = assistantMessage.content || 'I processed your request but have no additional response.';
    console.log('\n Final Answer:', finalResponse);
    console.log('═'.repeat(60));

    return finalResponse;

  } catch (error) {
    console.error('AI Chat error:', error);
    throw error;
  }
}

module.exports = { chatWithAI };