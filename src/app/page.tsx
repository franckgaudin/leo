"use client";

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { z } from "zod";
import { ChatBoard } from "@/features/chat/ChatBoard";
import { SettingsPanel } from "@/features/chat/SettingsPanel";
import { chatMessageSchema, type ChatMessage } from "@/lib/schemas/message";

const promptSchema = z.array(chatMessageSchema);

const sampleMessages: ChatMessage[] = [
  {
    id: "msg-1",
    author: "Utilisateur",
    role: "user",
    content: "Partage-moi un jeu de questions pour animer le meetup de l'équipe.",
    timestamp: "08:45",
  },
  {
    id: "msg-2",
    author: "Vibe.ai",
    role: "assistant",
    content:
      "Voici cinq questions ouvertes orientées sur la collaboration, avec un ton énergique et inclusif.",
    timestamp: "08:45",
  },
  {
    id: "msg-3",
    author: "Utilisateur",
    role: "user",
    content: "Peux-tu résumer le dernier point en trois bullets simples ?",
    timestamp: "08:46",
  },
];

const messages = promptSchema.parse(sampleMessages);

const navLinks = [
  { label: "Conversation", to: "/" },
  { label: "Préférences", to: "/settings" },
];

export default function Home() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col gap-6 px-6 py-8 sm:px-10 lg:flex-row lg:items-stretch">
        <aside className="min-w-[220px] rounded-3xl border border-white/10 bg-slate-900/30 p-6 backdrop-blur-2xl">
          <div className="flex flex-col gap-1">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Vibe AI
            </p>
            <h1 className="text-2xl font-semibold text-white">
              Tableau de bord
            </h1>
          </div>
          <nav className="mt-8 flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-2xl border border-white/5 px-4 py-3 text-sm font-medium transition ${
                    isActive ? "bg-white/10 text-white" : "text-slate-300"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-8 text-[0.8rem] text-slate-400">
            Next 16 · React Router · Zod · Tailwind v4 · shadcn · Vitest
          </div>
        </aside>
        <main className="flex flex-1 flex-col gap-6 lg:rounded-[32px]">
          <div className="flex flex-col gap-4 rounded-3xl bg-gradient-to-b from-slate-900/60 to-slate-900/95 p-6 shadow-2xl">
            <Routes>
              <Route
                index
                element={<ChatBoard messages={messages} />}
              />
              <Route path="settings" element={<SettingsPanel />} />
              <Route path="*" element={<ChatBoard messages={messages} />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
