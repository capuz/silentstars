---
repo: "alexsergivan/kwant"
name: "kwant"
description: "Your own team of AI bots in one self-hosted binary: spaces, every account you have, handoffs, approvals and routines. Open-source, self-hosted alternative to Grok Bot, Claude Duet and OpenAI dots. Rust + React."
readmeQualityOk: true
url: "https://github.com/alexsergivan/kwant"
homepage: "https://kwant.si"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [59, 22]
topics: ["ai-agents", "ai-assistant", "automation", "chatbot", "grok", "llm", "multi-agent", "rust", "self-hosted", "claude-duet"]
stars: 499
forks: 41
openIssues: 0
closedIssues: 0
watchers: 17
contributors: 3
recentReleases: 10
createdAt: "2026-10-22T18:41:24Z"
lastCommitAt: "2026-11-13T18:32:03Z"
lastReleaseAt: "2026-10-31T20:36:00Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 26
maintainers: ["alexsergivan", "skullsdev"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1430140009/d781009d-baf4-4ede-8995-90b2c91e29f3"
fundingLinks: ["KO_FI:https://ko-fi.com/kwant"]
discussionCount: 1
---

kwant gives you a team of bots that share chats, hand work to each other with an @mention and get it done on their own, on a schedule or while you're away. Each message goes to the bot that fits, and the reply says why. Work shows up as cards on a Mission board, and a task turns **Verified** only when kwant runs the check itself, never on a bot's word. Keep separate spaces for work and home, each with its own bots and accounts. Run it as an app on your Mac, Linux or Windows (beta) PC, or on a server, with the Claude, Codex or Grok CLI you already use, or your own API keys.

It's written in Rust (Tokio, Axum, SQLite) with a React web app embedded in the binary.

---

## New in 0.9

- **Review a bot's work in the Inbox** (0.9.0). Inbox › New has a **To review** group, highest risk first. Each item shows a verdict (Pass, Fail, Needs you or Not checked yet), what done looks like, the evidence, and a **Couldn't check** list with the reason for each. Press **Approve**, **Send back** with a note, or **Roll back**. Low-risk items that passed every check can be approved together with **Approve all**.
- **A second check before you approve** (0.9.0). When a Mission board task moves to…
