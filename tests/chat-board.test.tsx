"use client";

import { render, screen } from "@testing-library/react";
import { chatMessageSchema } from "@/lib/schemas/message";
import { describe, expect, test } from "vitest";
import { ChatBoard } from "@/features/chat/ChatBoard";

const parser = chatMessageSchema.array();

const messages = parser.parse([
  {
    id: "m-1",
    author: "Utilisateur",
    role: "user",
    content: "Raconte-moi une anecdote sur l'intelligence collective.",
    timestamp: "09:22",
  },
  {
    id: "m-2",
    author: "Vibe.ai",
    role: "assistant",
    content: "La dernière réunion a généré six idées concrètes pour simplifier les briefings.",
    timestamp: "09:23",
  },
]);

describe("ChatBoard", () => {
  test("rend les messages et les actions rapides", () => {
    render(<ChatBoard messages={messages} />);
    const article = screen.getByText(/La dernière réunion/i);
    expect(article).toBeInTheDocument();
    expect(screen.getByText(/Session active/)).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(4);
  });
});
