---
repo: "KeyValueSoftwareSystems/agent-opfor"
name: "agent-opfor"
description: "Open-source adversary emulation for AI agents and MCP servers. "
url: "https://github.com/KeyValueSoftwareSystems/agent-opfor"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [69, 23]
topics: ["adversary-emulation", "agentic-ai", "ai-agents", "ai-red-teaming", "ai-security", "jailbreak", "llm-security", "mcp", "mcp-server", "owasp"]
stars: 11
forks: 2
openIssues: 21
closedIssues: 3
watchers: 1
contributors: 21
recentReleases: 1
createdAt: "2026-04-06T12:40:22Z"
lastCommitAt: "2026-07-03T12:23:08Z"
lastReleaseAt: "2026-06-26T09:16:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 41
maintainers: ["jithin23-kv", "arunSunnyKVS", "achuvyas-kv"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f0dc5fdc93284de839c9c85834bd6d0e2af67e621e41f2c3367555fcc4262eb/KeyValueSoftwareSystems/agent-opfor"
---

</p>

  <strong>Open-source adversary emulation for AI agents, LLM apps, and MCP servers.</strong><br/>
  Test your AI like a real attacker would — from your CLI, your IDE, or a browser extension that anyone on your team can use.
</p>

</p>

</p>

OPFOR is short for _Opposition Force_ — a military term for the unit that plays the enemy in training, so the rest of the army learns what real attacks feel like before they come. We named the tool after that idea: to defend AI agents better, you have to attack them first.

</p>

## Why we built this

We've shipped 130 products for 90 startups over the last ten years. In the last 18 months, almost every one of them had an AI agent in it — and every one of those teams hit the same wall when it came to testing.

So we built OPFOR. For ourselves first. Now open source.

Apache 2.0. Built from India.

## Quick Start

```bash
npm install -g @keyvaluesystems/agent-opfor-cli
export OPENAI_API_KEY=your-key    # or GEMINI_API_KEY, ANTHROPIC_API_KEY, etc.
```

**One-shot** — runs the setup wizard and immediately starts the scan:

```bash
opfor run
```

**Two-step** — save a config you can reuse or commit to CI:

```bash
opfor setup…
