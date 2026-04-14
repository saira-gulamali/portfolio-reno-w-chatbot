"use client";
// ---------------- AI CHATBOT COMPONENT ----------------

import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! What type of renovation are you planning?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();

      setMessages([...newMessages, { role: "bot", text: data.reply }]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: "bot", text: "Something went wrong. Please try again." },
      ]);
      console.log(err);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white shadow-xl rounded-2xl flex flex-col">
      <div className="p-4 border-b font-semibold">Chat with us</div>

      <div className="p-4 h-64 overflow-y-auto space-y-2 text-sm">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-[80%] ${
              msg.role === "bot"
                ? "bg-gray-100"
                : "bg-orange-500 text-white ml-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-3 border-t flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border rounded-lg px-3 py-2 text-sm"
        />
        <button
          onClick={sendMessage}
          className="bg-orange-500 text-white px-4 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
