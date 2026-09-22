---
repo: "HexamindOrganisation/hexgate"
name: "hexgate"
description: "Authorization infrastructure for AI agents - policy enforcement, signed WASM bundles, per-request user scope, and audit trail for OpenAI Agents, LangChain, Google ADK, and Pydantic AI."
readmeQualityOk: true
url: "https://github.com/HexamindOrganisation/hexgate"
homepage: "https://hexgate.ai"
language: "Python"
languages: ["Python"]
languagePcts: [78]
topics: ["agent-harness", "ai", "ai-agents", "audit-log", "authorization", "biscuit-auth", "google-adk", "langchain", "langfuse", "langgraph"]
stars: 18
forks: 4
openIssues: 30
closedIssues: 6
watchers: 0
contributors: 6
recentReleases: 6
createdAt: "2026-04-15T07:23:13Z"
lastCommitAt: "2026-09-22T08:45:41Z"
lastReleaseAt: "2026-07-15T09:21:18Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 81
undervaluedScore: 47
maintainers: ["victorludvig", "quanghexa94", "guillaume-hexamind"]
openGraphImageUrl: "https://opengraph.githubassets.com/9db24463bf39723ee051c9055ecbdd14548aa180ee07c50887247ca5ca6b8378/HexamindOrganisation/hexgate"
---

# Hexgate

**Runtime authorization for AI agents.**
On every tool call, Hexgate decides whether *this user*, in *this role*, may run *this tool* with *these arguments* — allow, deny, or require approval. For OpenAI Agents, LangChain, Google ADK, Pydantic AI, or a native runtime.

[**Website**](https://hexgate.ai) · [**Docs**](https://docs.hexgate.ai)
<br>

<br />

</div>

---

## What is Hexgate?

Hexgate is two things that move together:

- **`hexgate` — the SDK.** A Python runtime that gates every tool call through a typed `Decision` (allow / deny / approval-required), resolving the caller's role at call time to apply that role's rules. Wrap an existing agent without rewriting it, or build one natively — every decision is traced and audited with the caller's identity. [See supported frameworks →](https://docs.hexgate.ai/adapters/openai)
- **The Hexgate platform** *(optional)* — a FastAPI control plane + React dashboard for editing policy in a browser, minting per-project tokens, watching live decisions stream from a serving agent, and shipping signed WASM policy bundles to production. Available as **[Hexgate Cloud](https://app.hexgate.ai)** (hosted — set one env var, no infra)…
