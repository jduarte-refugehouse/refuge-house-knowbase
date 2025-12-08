import { generateText } from 'ai'

export async function POST(req: Request) {
  try {
    const { messages, fileContent, filePath } = await req.json()

    const systemPrompt = `You are an expert markdown content reviewer and technical writer assistant. You're helping review and answer questions about a markdown file.

File: ${filePath}

File Content:
\`\`\`markdown
${fileContent}
\`\`\`

Your role is to:
- Answer questions about the content accurately
- Provide suggestions for improvement when asked
- Help identify issues like broken links, formatting errors, or unclear sections
- Suggest better wording or structure when appropriate
- Be concise but thorough in your responses

Always reference specific parts of the markdown when giving feedback.`

    const { text } = await generateText({
      model: 'openai/gpt-5',
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        ...messages.map((msg: { role: string; content: string }) => ({
          role: msg.role,
          content: msg.content,
        })),
      ],
      maxOutputTokens: 2000,
      temperature: 0.7,
    })

    return Response.json({ text })
  } catch (error) {
    console.error('Error in AI review:', error)
    return Response.json(
      { error: 'Failed to generate AI response' },
      { status: 500 }
    )
  }
}
