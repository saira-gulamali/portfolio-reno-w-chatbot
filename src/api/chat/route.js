// ---------------- API ROUTE (Next.js /app/api/chat/route.js) ----------------

// Create a file: app/api/chat/route.js
// Add your OpenAI API key in environment variables

export async function POST(req) {
  const { messages } = await req.json();

  const systemPrompt = `You are a helpful assistant for a renovation company.
Ask questions to qualify leads: project type, budget, timeline, and location.
Keep responses short and professional.`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((m) => ({ role: m.role, content: m.text })),
      ],
    }),
  });

  const data = await response.json();

  return new Response(
    JSON.stringify({ reply: data.choices[0].message.content }),
    { status: 200 },
  );
}
