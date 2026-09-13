"use client";

import { useState } from "react";
import { Terminal, Check, Copy, Cpu, Layers, Activity } from "lucide-react";

type TabType = "build" | "architecture" | "metrics";

export function TerminalWidget() {
  const [activeTab, setActiveTab] = useState<TabType>("build");
  const [copied, setCopied] = useState(false);

  const copySnippet = () => {
    const textToCopy =
      activeTab === "build"
        ? "$ npm run build:wanderNest\ncreating production build...\n✓ server routes compiled\n✓ authentication pipeline ready\n✓ MongoDB models validated\n✓ Cloudinary media pipeline ready\n✓ AI travel assistant initialized\n● DEPLOYED · PRODUCTION\nExpress · MongoDB · Gemini AI"
        : activeTab === "architecture"
        ? "export const stack = { runtime: 'Node.js', db: 'MongoDB', auth: 'Passport.js', ai: 'Gemini Integration' };"
        : "services: 2/2 active | auth: verified | status: operational";
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-xl border border-white/[0.08] bg-[#0c111c]/90 shadow-2xl backdrop-blur-md overflow-hidden font-mono text-xs">
      {/* Top Chrome / Window Controls */}
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#090d16] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
          <span className="ml-2 text-[11px] text-slate-400 font-sans font-medium tracking-tight">
            shashank@system: ~
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab("build")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors cursor-pointer ${
              activeTab === "build"
                ? "bg-white/[0.08] text-slate-200"
                : "text-slate-400 hover:text-slate-300 hover:bg-white/[0.03]"
            }`}
          >
            <Terminal className="h-3 w-3 text-cyan-400" />
            <span>build.sh</span>
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors cursor-pointer ${
              activeTab === "architecture"
                ? "bg-white/[0.08] text-slate-200"
                : "text-slate-400 hover:text-slate-300 hover:bg-white/[0.03]"
            }`}
          >
            <Layers className="h-3 w-3 text-teal-400" />
            <span>architecture.ts</span>
          </button>
          <button
            onClick={() => setActiveTab("metrics")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors cursor-pointer ${
              activeTab === "metrics"
                ? "bg-white/[0.08] text-slate-200"
                : "text-slate-400 hover:text-slate-300 hover:bg-white/[0.03]"
            }`}
          >
            <Activity className="h-3 w-3 text-amber-400" />
            <span>status</span>
          </button>
        </div>

        {/* Copy button */}
        <button
          onClick={copySnippet}
          aria-label="Copy terminal content"
          className="text-slate-400 hover:text-slate-200 transition-colors p-1 cursor-pointer"
        >
          {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-5 space-y-3 min-h-[230px] leading-relaxed text-slate-300 bg-[#080c14]/95 select-text">
        {activeTab === "build" && (
          <>
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-cyan-400">$</span>
              <span>npm run build:wanderNest</span>
            </div>
            <div className="text-slate-400 text-[11px] pl-4 space-y-1">
              <p>creating production build...</p>
              <p className="text-emerald-400 flex items-center gap-1.5">
                <span>✓</span> server routes compiled
              </p>
              <p className="text-emerald-400 flex items-center gap-1.5">
                <span>✓</span> authentication pipeline ready
              </p>
              <p className="text-emerald-400 flex items-center gap-1.5">
                <span>✓</span> MongoDB models validated
              </p>
              <p className="text-emerald-400 flex items-center gap-1.5">
                <span>✓</span> Cloudinary media pipeline ready
              </p>
              <p className="text-cyan-400 flex items-center gap-1.5">
                <span>✓</span> AI travel assistant initialized
              </p>
            </div>
            <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
              <span className="text-emerald-400 font-semibold">● DEPLOYED · PRODUCTION</span>
              <span className="text-slate-400">Express · MongoDB · Gemini AI</span>
            </div>
          </>
        )}

        {activeTab === "architecture" && (
          <div className="text-[11px] space-y-1.5 font-mono">
            <p className="text-slate-400">{"// Core system architectural manifesto"}</p>
            <p className="text-slate-300">
              <span className="text-cyan-400">const</span>{" "}
              <span className="text-teal-300">engineeringProfile</span> = &#123;
            </p>
            <p className="pl-4 text-slate-300">
              role: <span className="text-amber-300">&quot;Software Engineer&quot;</span>,
            </p>
            <p className="pl-4 text-slate-300">
              focus: [<span className="text-teal-300">&quot;Full-Stack&quot;</span>, <span className="text-teal-300">&quot;Backend Systems&quot;</span>, <span className="text-teal-300">&quot;AI Agents&quot;</span>],
            </p>
            <p className="pl-4 text-slate-300">
              principles: &#123;
            </p>
            <p className="pl-8 text-slate-400">
              understandFailures: <span className="text-cyan-400">true</span>,
            </p>
            <p className="pl-8 text-slate-400">
              preferSimplicity: <span className="text-cyan-400">true</span>,
            </p>
            <p className="pl-8 text-slate-400">
              productionReadyFirst: <span className="text-cyan-400">true</span>
            </p>
            <p className="pl-4 text-slate-300">&#125;,</p>
            <p className="pl-4 text-slate-300">
              db: <span className="text-amber-300">&quot;MongoDB / SQL&quot;</span>
            </p>
            <p className="text-slate-300">&#125;;</p>
          </div>
        )}

        {activeTab === "metrics" && (
          <div className="space-y-3 text-[11px]">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.04]">
                <span className="text-slate-400 block mb-1">CORE SERVICES</span>
                <span className="text-sm font-semibold text-emerald-400">2 / 2 Active</span>
                <span className="text-[10px] text-slate-400 block">WanderNest · Campus</span>
              </div>
              <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.04]">
                <span className="text-slate-400 block mb-1">SECURITY &amp; AUTH</span>
                <span className="text-sm font-semibold text-cyan-400">Verified</span>
                <span className="text-[10px] text-slate-400 block">Passport sessions + OTP</span>
              </div>
            </div>
            <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.04] space-y-1">
              <div className="flex justify-between text-slate-400">
                <span>Application Runtime</span>
                <span className="text-emerald-400">Healthy · Connected</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-full" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Terminal Footer */}
      <div className="px-4 py-2 border-t border-white/[0.06] bg-[#090d16] flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <Cpu className="h-3 w-3 text-cyan-400" /> Node.js · REST APIs · Cloudinary
        </span>
        <span className="font-mono text-[10px] text-slate-400">UTF-8 · LF</span>
      </div>
    </div>
  );
}
