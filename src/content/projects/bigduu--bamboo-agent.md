---
repo: "bigduu/Bamboo-agent"
name: "Bamboo-agent"
description: "Bamboo — a local-first AI agent runtime in Rust. Persistent memory, 22 built-in tools, skills, MCP, sub-agents, workflows & schedules behind one HTTP + WebSocket API. Embed it as a crate, or run it as a server."
readmeQualityOk: true
url: "https://github.com/bigduu/Bamboo-agent"
homepage: "https://bigduu.github.io/Bamboo-agent/"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["agent", "agentic-ai", "ai", "rust", "agent-runtime", "llm", "local-first", "mcp", "sse", "workflow"]
stars: 11
forks: 1
openIssues: 39
closedIssues: 128
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-23T13:29:34Z"
lastCommitAt: "2026-07-08T05:41:12Z"
lastReleaseAt: "2026-02-25T16:06:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 95
undervaluedScore: 51
maintainers: ["bigduu", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fdffcf5c0b3d3caeabcc92484ddfc59ff7406b017d64a0aa335ad579c98f654/bigduu/Bamboo-agent"
---

# Bamboo 🎋

### The local-first AI agent runtime, in Rust.

**Persistent memory, 22 built-in tools, skills, MCP, workflows & schedules — behind one HTTP + SSE API.**
Run it as a server, or embed the same agent loop as a Rust crate. Your data stays on your machine.

</div>

---

## What is this

Bamboo is the "brain" of an AI assistant that runs on your own machine. It does far more than chat — it takes notes, grows a searchable long-term memory, uses tools (read/write files, run commands, search the web), and automatically compacts very long conversations so the assistant never "forgets" or grinds to a halt. All of this lives inside one compact, self-hostable program, with your data staying local by default.

If Bodhi is the AI product you see, **Bamboo is the engine running underneath it.**

---

## Key Capabilities at a Glance

| Capability | What it does |
|---|---|
| 🧠 **Memory system** | Session notes, Dream notebook, cross-session durable memory, with auto-dream and background gardener |
| 🗜️ **Context compression** | Hybrid compression with rolling summary + recent-window retention, automatic trimming of oversized tool output, executed against the model's context-window…
