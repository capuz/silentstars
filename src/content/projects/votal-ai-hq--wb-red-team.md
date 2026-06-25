---
repo: "votal-ai-hq/wb-red-team"
name: "wb-red-team"
description: "Whitebox & Blackbox red-teaming framework for LLMs & Agentic AI apps. It analyzes your app's source code to discover tools, roles, and guardrails, then generates new attacks chains across several categories and adapts over multiple multi turn rounds to find vulnerabilities"
url: "https://github.com/votal-ai-hq/wb-red-team"
homepage: "https://votal.ai"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [57, 30]
topics: ["tool-misuse", "agentic-ai", "ai-agents", "data-exfiltration", "llm", "penetration-testing", "prompt-injection", "red-team", "security", "security-testing"]
stars: 21
forks: 12
openIssues: 15
closedIssues: 8
watchers: 0
contributors: 7
recentReleases: 1
createdAt: "2026-03-06T05:58:31Z"
lastCommitAt: "2026-06-25T06:42:26Z"
lastReleaseAt: "2026-05-31T12:52:56Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 85
undervaluedScore: 48
maintainers: ["sundi133", "saivarmadpr", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/e61b60df0d8f7197db036e98ab3fcd04abefa1780323ce01238c3f60a4c7a715/votal-ai-hq/wb-red-team"
---

# Red-Team AI

**White-box red teaming for agentic AI apps. Reads your code, finds bugs specific to your stack — not generic prompt injections.**

Most LLM red-teaming tools are black-box: they treat your agent as an opaque endpoint and fire generic adversarial prompts at it. That finds the obvious stuff. It does not find the bug where your JWT secret is hardcoded in `lib/auth.ts:47`, or the path through tools `read_file → send_email` that no single-call check would catch.

Red-Team AI is built for that gap. It reads your application's source code first, learns your tools, roles, and guardrails, and then generates attacks tailored to _your_ implementation.

📖 **Full product documentation:** [docs/index.md](docs/index.md) — comprehensive manual covering configuration, white-box scanning, attack catalog, compliance, deployment, and the extension API.

---

## Why star this?

Red-Team AI finds security bugs in AI agents by reading the source code first, then generating attacks specific to your tools, auth, guardrails, routes, and policies.

Use it if you are building:
- AI agents with tools or MCP servers
- RAG apps with private data
- customer-support, finance, healthcare,…
