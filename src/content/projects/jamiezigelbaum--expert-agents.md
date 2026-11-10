---
repo: "jamiezigelbaum/expert-agents"
name: "expert-agents"
description: "Machinery for creating and operating cited expert agents on OpenClaw (plugin + Vertex RAG worker)"
readmeQualityOk: true
url: "https://github.com/jamiezigelbaum/expert-agents"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-agents", "bun", "openclaw", "rag", "typescript", "vertex-ai"]
stars: 6
forks: 1
openIssues: 8
closedIssues: 11
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-30T16:51:21Z"
lastCommitAt: "2026-11-10T11:38:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 43
maintainers: ["jamiezigelbaum"]
openGraphImageUrl: "https://opengraph.githubassets.com/3de99fbfadd8a3a942b63b15606a68b6296ea6039acfc9194e3e152476b6526a/jamiezigelbaum/expert-agents"
---

---

Expert Agents turns an [OpenClaw](https://docs.openclaw.ai) assistant into a
team of specialists. Each expert has its own curated library — books, papers,
transcripts, web pages — kept as a page library: every page addressed, read
locally (text layer, then local OCR), and indexed for hybrid search. When you
ask it something, it searches and reads that library, answers with citations
back to the exact page, and says plainly when the library doesn't cover the
question.

You can create a new expert by asking for one in chat. The factory gives it its
own Git repository, its own page library, and its own Telegram bot, then
walks you through confirming each step.

## Why

General-purpose assistants blend everything they've read, and you can't tell
where an answer came from. Expert Agents gives you the opposite trade:

- **Bounded** — an expert answers only from the sources you approved, so you
  know what it knows.
- **Cited** — every answer points back to title, author and passage, so you can
  check it.
- **Honest about gaps** — when retrieval comes back thin, the expert says so
  instead of filling in from memory.
- **Yours** — each expert's persona, workspace and holdings live…
