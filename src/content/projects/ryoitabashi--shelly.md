---
repo: "RYOITABASHI/Shelly"
name: "Shelly"
description: "AI terminal and agent runtime for Android — Codex and Claude Code on the phone, with an approval gate."
readmeQualityOk: true
url: "https://github.com/RYOITABASHI/Shelly"
homepage: "https://ryoitabashi.github.io/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [68]
topics: ["ai", "android", "claude", "expo", "ide", "llm", "mobile-development", "react-native", "terminal", "typescript"]
stars: 74
forks: 12
openIssues: 1
closedIssues: 11
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-03-04T22:41:59Z"
lastCommitAt: "2026-11-18T12:05:11Z"
lastReleaseAt: "2026-05-30T10:12:18Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 43
maintainers: ["RYOITABASHI", "github-actions[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/03612cc2d3b794f89336fa87d8ff685b51ac562d575b8b9a0864076fea7992b7/RYOITABASHI/Shelly"
fundingLinks: ["GITHUB:https://github.com/RYOITABASHI", "BUY_ME_A_COFFEE:https://buymeacoffee.com/ryo1221"]
---

Let ChatGPT use your Android phone — and approve every move yourself.<br>

  &#9312; Install the APK from <a href="https://github.com/RYOITABASHI/Shelly/releases">Releases</a> &nbsp;
  &#9313; In Shelly, run <code>shelly codex pair</code> and pair it in the ChatGPT app (Codex) &nbsp;
  &#9314; Ask ChatGPT to do something on your phone <sub>(app tasks like the clip use the <a href="https://github.com/RYOITABASHI/closepaw/releases">ClosePaw Shelly build</a>)</sub><br>

  What's new: <a href="https://github.com/RYOITABASHI/Shelly/releases/tag/v8.2.0">v8.2.0 release notes</a> — agent roles, parallel Codex + Claude Code steps, MONITOR.</sub>

---

## See it run

**Codex vs Claude Code on one phone — an on-device judge picks the winner**

https://github.com/user-attachments/assets/f6509457-d845-424e-9d72-436eae06d122

One line in chat — *"have both implementers build a neon snake game and compare"* — and Codex and Claude Code build it at the same time, each in its own folder. A judge running on the local LLM reads both codebases as "Candidate A/B" (no engine names) and answers `WINNER:`. MONITOR shows both steps recording live.
