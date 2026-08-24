"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send, User, Bot, ArrowRight, CornerDownLeft } from "lucide-react";
import { generateAnswer, type AIResponse } from "@/lib/ai/assistantEngine";
import Link from "next/link";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  sectionLink?: {
    label: string;
    href: string;
  };
}

interface AskShashankModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUGGESTED_PROMPTS = [
  "What is WanderNest AI?",
  "Tell me about Campus Marketplace",
  "What is Shashank's tech stack?",
  "What is his engineering background?",
  "How can I contact Shashank?",
];

export function AskShashankModal({ isOpen, onClose }: AskShashankModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hey! I'm Shashank's AI portfolio assistant. Ask me anything about his projects, technical stack, or background.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Keyboard shortcut: Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Auto-scroll messages to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate natural AI thinking delay
    setTimeout(() => {
      const response = generateAnswer(query);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: response.answer,
        sectionLink: response.sectionLink,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-2xl rounded-3xl border border-white/[0.12] bg-slate-900 shadow-2xl overflow-hidden flex flex-col h-[600px] max-h-[85vh] z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4 bg-slate-950/60">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h2 id="modal-title" className="text-base font-bold text-slate-100 flex items-center gap-2">
                    Ask Shashank AI
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-400">
                      LIVE
                    </span>
                  </h2>
                  <p className="text-xs text-slate-400">
                    Instant answers grounded in verified project &amp; skills data
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 font-sans text-sm">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${
                    msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                      msg.sender === "user"
                        ? "bg-cyan-500 text-slate-950 font-mono"
                        : "border border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono"
                    }`}
                  >
                    {msg.sender === "user" ? "YOU" : "SS"}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[82%] rounded-2xl p-4 leading-relaxed whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-cyan-500/15 border border-cyan-500/30 text-slate-100"
                        : "bg-slate-800/80 border border-white/[0.08] text-slate-200"
                    }`}
                  >
                    <p>{msg.text}</p>

                    {/* Section Link if provided */}
                    {msg.sectionLink && (
                      <div className="mt-3 pt-2 border-t border-white/[0.08]">
                        <Link
                          href={msg.sectionLink.href}
                          onClick={onClose}
                          className="inline-flex items-center gap-1.5 font-semibold text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <span>{msg.sectionLink.label}</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-xs">
                    SS
                  </div>
                  <div className="rounded-2xl bg-slate-800/80 border border-white/[0.08] px-4 py-3 text-slate-400 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-bounce" />
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggested Prompt Chips */}
            <div className="px-6 py-2.5 bg-slate-950/40 border-t border-white/[0.04] overflow-x-auto flex items-center gap-2 scrollbar-none">
              <span className="text-[11px] font-mono text-slate-500 shrink-0 uppercase tracking-wider">
                Ask:
              </span>
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt)}
                  disabled={isTyping}
                  className="rounded-full border border-white/[0.08] bg-slate-800/60 px-3 py-1 font-mono text-xs text-slate-300 hover:border-cyan-500/40 hover:bg-slate-700/80 hover:text-white transition-all duration-150 shrink-0 disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-3 border-t border-white/[0.08] p-4 bg-slate-950/80"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about WanderNest, skills, backend architecture..."
                className="flex-1 rounded-xl border border-white/[0.08] bg-slate-900/90 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150 shrink-0"
                aria-label="Send query"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
