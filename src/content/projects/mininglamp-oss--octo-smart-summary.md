---
repo: "Mininglamp-OSS/octo-smart-summary"
name: "octo-smart-summary"
description: "LLM-powered conversation summarisation service for OCTO — turns group chats and threads into structured briefs with key decisions, open questions, and follow-up candidates. Supports any OpenAI-compatible LLM backend."
url: "https://github.com/Mininglamp-OSS/octo-smart-summary"
homepage: "https://github.com/Mininglamp-OSS"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["apache-2", "chat-summary", "conversation-intelligence", "golang", "llm", "mapreduce", "nlp", "octo", "openai-api", "summarization"]
stars: 17
forks: 12
openIssues: 8
closedIssues: 18
watchers: 0
contributors: 11
recentReleases: 4
createdAt: "2026-05-11T11:28:51Z"
lastCommitAt: "2026-07-02T06:34:15Z"
lastReleaseAt: "2026-06-27T05:21:56Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 88
undervaluedScore: 61
maintainers: ["lml2468", "Ranwanglc", "jeff-wilson2010"]
openGraphImageUrl: "https://opengraph.githubassets.com/00498226a89f7b77adc9905c62ff7e7562c9ebca95d438b7444f84288c0cea7d/Mininglamp-OSS/octo-smart-summary"
---

</p>

  <b>OCTO — the open workplace built for humans × AI agents.</b><br/>
  <sub>Let <b>Lobsters</b> (OpenClaw-powered digital doubles) do the <i>thinking</i> and <i>doing</i>. You focus on <i>taste</i>.</sub>
</p>

</p>

</p>

---

> 🌐 **Read in**: **English** · [简体中文](README.zh.md)

# OCTO Smart-Summary

> **LLM-powered conversation summarisation** — turn long OCTO threads, group chats, and meeting transcripts into scannable briefs.

`octo-smart-summary` is a small Go service that wraps an OpenAI-compatible
LLM endpoint behind a narrow, OCTO-aware API. Given a conversation id
(`octo-server` channel / thread / meeting), it produces a structured summary
with key decisions, unanswered questions, and follow-up candidates — ready
to hand off to `octo-matter` as draft todos.

## 🌟 Why OCTO Smart-Summary

- **Narrow service, clean contract.** Only four endpoints (`/summarise`, `/summarise/stream`, `/healthz`, `/metrics`). No user state, no side effects beyond LLM calls and per-request tracing — easy to operate, easy to swap.
- **Bring your own LLM.** The LLM URL is a configurable `LLM_API_URL`; point it at any OpenAI-compatible endpoint (self-hosted vLLM / Ollama / Claude gateway /…
