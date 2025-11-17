"use client";

import type { ChatMessage } from "@/lib/schemas/message";
import { PrimaryButton } from "@/components/ui/primary-button";

const quickPrompts = [
  "Écris une réponse en style conversationnel",
  "Réécris en utilisant un ton professionnel",
  "Retourne un résumé express en 3 bullets",
];

interface ChatBoardProps {
  messages: ChatMessage[];
}

export function ChatBoard({ messages }: ChatBoardProps) {
  return (
    <section className="flex h-full flex-1 flex-col gap-6 rounded-[32px] border border-white/10 bg-slate-900/60 p-8 shadow-lg backdrop-blur-2xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Flux principal
          </p>
          <h2 className="text-2xl font-semibold text-white">Session active</h2>
        </div>
        <PrimaryButton>Nouvelle conversation</PrimaryButton>
      </div>

      <div className="flex flex-1 flex-col gap-4 overflow-hidden rounded-2xl bg-slate-950/30 p-4">
        {messages.map((message) => (
          <article
            key={message.id}
            className="flex flex-col gap-1 rounded-2xl border border-white/5 bg-white/5 p-4"
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
              <span>{message.author}</span>
              <span>{message.timestamp}</span>
            </div>
            <p className="text-sm font-semibold text-white">
              {message.role === "assistant" ? "IA" : "Vous"}
            </p>
            <p className="text-base text-slate-100">{message.content}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {quickPrompts.map((prompt) => (
          <button
            key={prompt}
            className="rounded-2xl border border-white/10 px-4 py-3 text-left text-sm text-slate-300 transition hover:border-white/30 hover:text-white"
          >
            {prompt}
          </button>
        ))}
      </div>
    </section>
  );
}
