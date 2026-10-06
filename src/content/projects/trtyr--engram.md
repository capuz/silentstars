---
repo: "trtyr/engram"
name: "engram"
description: "Personal knowledge-management backend — memory distillation, wiki & code graph + React UI"
originalDescription: "Personal knowledge-management backend — memory distillation, wiki & code graph + React UI"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/trtyr/engram"
language: "Rust"
languages: ["Rust"]
languagePcts: [75]
topics: ["ai-agents", "code-graph", "knowledge-management", "rust", "wiki"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-28T06:17:52Z"
lastCommitAt: "2026-10-06T10:41:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["trtyr"]
openGraphImageUrl: "https://opengraph.githubassets.com/2321adb9d00c1c53c1289f5e510bad25eb74e98edcbbf6d93cf3dc7e07b96eb9/trtyr/engram"
---

# 🧠 Engram

### Turn AI's memory into distillable, retrievable, auditable, forgettable assets

**Single-user AI long-term memory platform · Rust single binary · Ten-domain MCP progressive discovery · Wiki single database · Fully traceable throughout**

> **en·gram**（/ˈenɡræm/）*n.* In neuroscience, a "memory trace" — the physical imprint left by memory in the brain.
>
> **AI's memory should not evaporate with the conversation.**

---

## 💥 What problems does it solve

Large language models' memory lives within a single session: close the window, and everything—who the user is, where the project stands, what pitfalls were encountered last time—resets to zero.
Stuffing the model with a "notepad" doesn't solve the problem, because **memory quality depends on memory governance**:

- Is what you put in trustworthy? — **Every layer must be able to replay where it came from and how it came about**
- What if it remembers wrong? — **Error correction follows a replacement chain, not overwriting**
- Can it truly forget what you don't want it to remember? — **Forgetting is a first-class citizen, not an UPDATE statement**

Engram is a "platform as tool": the platform exposes MCP and HTTP APIs…
