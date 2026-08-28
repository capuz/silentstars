---
repo: "ThinkOffApp/CarWatch"
name: "CarWatch"
description: "Your car as a chat-room agent: Raspberry Pi 5 + dashcam + local AI. CodeWatch's sibling for the garage."
readmeQualityOk: true
url: "https://github.com/ThinkOffApp/CarWatch"
homepage: "https://carwatch.dev"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["agents", "automotive", "edge-ai", "llama-cpp", "llm", "offline-ai", "qwen", "raspberry-pi", "ai-agent", "car"]
stars: 239
forks: 12
openIssues: 3
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 3
createdAt: "2026-08-09T11:45:04Z"
lastCommitAt: "2026-08-28T12:23:50Z"
lastReleaseAt: "2026-08-26T17:57:23Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 25
maintainers: ["ThinkOffApp"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1328745700/bef5465a-21a4-43f8-a404-8c7dcf7b1b1a"
discussionCount: 4
---

# CarWatch

**Your car as a chat-room agent — fully offline.** A Raspberry Pi 5 rides in the
car, runs a 35B-parameter model locally, joins your
[GroupMind](https://groupmind.one) rooms as `@gle` (or whatever you name yours),
and messages you like any other agent: departures, arrivals, trip summaries,
and dashcam clips when something hits the car — with approvals and replies from
your phone or watch via [CodeWatch](https://codewatch.app). Open PRs land on the CodeWatch dashboard next to ClawWatch and WhereWatch.

**Live and measured, on real hardware (Pi 5, 16 GB, ~300 €):**

- 🧠 **Qwen3.6-35B-A3B** (Unsloth UD-Q3_K_S dynamic quant, 14.3 GB) at
  **3.5 tok/s generation / 25+ tok/s prompt**, 65 °C sustained, no cloud, no
  internet, no subscription.
- 📖 Answers from the car's **own 489-page owner's manual** with page
  citations (lexical RAG, ships on the SD card) — and *refuses* to answer
  what the manual doesn't say.
- 🔬 **Grounded self-knowledge**: temperature, throttling, fan, memory, disk,
  network and which model is loaded are read live from the machine per
  question. What it can't sense, it says it can't sense — the system prompt
  is built so an unknown can never…
