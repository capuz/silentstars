---
repo: "aware-aeco/aware"
name: "aware"
description: "Open-source agentic substrate for AECO. Apps are text. AI is the runtime."
readmeQualityOk: true
url: "https://github.com/aware-aeco/aware"
language: "Rust"
languages: ["Rust", "C#"]
languagePcts: [47, 44]
topics: ["aeco", "agentic", "agents", "ai", "automation", "bim", "claude-code", "open-source", "tekla", "workflow"]
stars: 5
forks: 0
openIssues: 4
closedIssues: 63
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-05-15T17:20:11Z"
lastCommitAt: "2026-07-17T05:57:45Z"
lastReleaseAt: "2026-05-17T17:07:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 61
maintainers: ["pawellisowski"]
openGraphImageUrl: "https://opengraph.githubassets.com/361f9fc02de30abb98bb9e414ce62c9fbda472aa775a604d34c7dc20b4d5faf7/aware-aeco/aware"
discussionCount: 0
---

# AWARE

> **AWARE is what comes after software-as-product. Apps are text — files you can read in Notepad. AI is the runtime that executes them. Open source is what the format does automatically: there's nothing else to a "proprietary" app once it's plain English. No vendor, no installer, no walled garden. AECO is the wedge; the substrate is universal.**

— [the statement](https://github.com/aware-aeco/aware/blob/HEAD/00-vision/manifesto.md). The nine structural truths it rests on are in [the decalog](https://github.com/aware-aeco/aware/blob/HEAD/00-vision/decalog.md).

---

## 60-second demo

AWARE is the open framework that turns any software into an **agent** — skills + commands your existing AI can compose into plain-text apps. There's no new app to learn: your terminal AI is the runtime.

```bash
$ npm install -g @aware-aeco/cli                       # any OS — recommended
  # alternatives that work today:
  #   curl ... install.sh | bash             # Linux / Mac, no Node
  #   iex (irm ... install.ps1)              # Windows PowerShell, no Node

$ aware agent install tekla              # any software → an agent (skills + commands)
$ aware agent install trimble-connect
  ✓…
