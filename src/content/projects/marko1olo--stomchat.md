---
repo: "marko1olo/stomchat"
name: "stomchat"
description: "Omni-Channel Dental Patient Operator Triage & Chat Engine — Real-time WhatsApp/Telegram dispatcher with deterministic clinical triage."
readmeQualityOk: true
url: "https://github.com/marko1olo/stomchat"
homepage: "https://marko1olo.github.io/stomchat/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["telegram-bot", "clinical-triage", "dental-software", "react", "telemedicine", "typescript", "whatsapp-api", "chat-dispatcher"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-27T21:57:01Z"
lastCommitAt: "2026-10-22T08:51:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 58
maintainers: ["marko1olo"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc1755886657b54486bc3291633758fa939047119788ee3707e8707220755007/marko1olo/stomchat"
---

# StomChat

**A Telegram knowledge-workflow prototype for dental community discussions.**

StomChat combines a Telethon listener, local SQLite storage, configurable LLM and search-provider paths, media preparation, and digest delivery into one inspectable Python project. It is an evolving automation workflow, **not** a medical device, diagnostic system, or source of clinical advice.

[**Public project surface**](https://marko1olo.github.io/stomchat/) · [**Workflow**](#workflow) · [**Repository map**](#repository-map) · [**Run locally**](#run-locally) · [**Verification**](#verification)

---

## Why the project exists

Professional dental conversations can include useful operational context, questions, source links, and media references — but the path from a chat stream to a useful digest is more than a single model call. StomChat keeps the major steps visible in the repository: message collection, local persistence, selection and summarization, optional external context lookup, media preparation, and delivery.

> **Scope boundary.** The project can organize and summarize conversation material, but it must not be treated as a diagnosis engine, an authoritative medical reference, or…
