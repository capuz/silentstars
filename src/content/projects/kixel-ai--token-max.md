---
repo: "kixel-ai/token-max"
name: "token-max"
description: "Replays your Claude Code and Codex transcripts against API prices and recommends cheaper agent settings"
readmeQualityOk: true
url: "https://github.com/kixel-ai/token-max"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-11-05T22:26:31Z"
lastCommitAt: "2026-11-18T11:52:52Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["kixelated", "moq-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/19fded05d99bff2c0567d536e4d2f54ccfd2428480d6574d318cc83e7f825a03/kixel-ai/token-max"
---

**The default settings are costing you money.** token-max replays your Claude
Code and Codex transcripts under other settings, at API prices, and shows
which ones to change. Run this:

```sh
curl -LsSf https://max.kixel.ai/run.sh | sh
```

On Windows, `irm https://max.kixel.ai/run.ps1 | iex`. It changes nothing
without a yes. These work from the first release on; until then, see
[Install](#install).

## What it found

On the maintainer's last 30 days across four machines, replayed 2026-11-17:

| API cost | Sessions | Potential savings |
| --- | --- | --- |
| ~$70,009 | 12,076 | ~$1,689/mo |

That is 1,181,845 Claude Code, Codex and T3 Code requests at public API
prices. The savings are what `token-max doctor --defaults` finds for a user
with no settings files on the same history: every change it would make, 2%
of the spend. A third of it is a 1h main-agent cache on the usage credits
profiles; the rest is auto memory and unused skills and tools.
