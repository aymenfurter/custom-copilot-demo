export const generateCodeSuggestion = async (prompt, context, apiKey) => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant that provides code suggestions.',
          },
          {
            role: 'user',
            content: `Generate code suggestion for the following prompt:\n\n${prompt}\n\nContext:\n${context}`,
          },
        ],
        max_tokens: 100,
        n: 1,
        stop: null,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error('Error generating code suggestion:', data.error);
      return null;
    }

    if (data.choices && data.choices.length > 0) {
      return data.choices[0].message.content.trim();
    } else {
      console.error('Unexpected response format:', data);
      return null;
    }
  } catch (error) {
    console.error('Error generating code suggestion:', error);
    return null;
  }
};