---
repo: "evotai/evot"
name: "evot"
description: "The lightest harness for agentic work."
readmeQualityOk: true
url: "https://github.com/evotai/evot"
homepage: "https://evot.ai"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [55, 40]
stars: 301
forks: 26
openIssues: 0
closedIssues: 29
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-03-09T02:44:24Z"
lastCommitAt: "2026-09-04T08:04:18Z"
lastReleaseAt: "2026-03-21T16:22:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 29
maintainers: ["bohutang"]
openGraphImageUrl: "https://opengraph.githubassets.com/9530e444d1390bde835e4b7070f231c0b12141179cb904d5570c9f9c0e85abbb/evotai/evot"
---

<strong>Evot</strong>
</p>

</p>

## 📢 News

- **2026-09-02** `ctrl+b` backgrounds a long-running command so you can keep talking.
- **2026-09-01** `GPT-5.6 Luna` is free through Sep 3 🎉.
- **2026-08-31** [herdr](https://herdr.dev) works with evot 🐑 — point `EVOT_SESSION_HOOK` at an adapter and your panes show `working` / `blocked` / `idle` live.
- **2026-08-27** `GPT-5.6 Luna` is free through Aug 31 🎉 — just `evot login`.
- **2026-08-24** Free model of the week: [`stealth/ox-alpha`](https://openrouter.ai/stealth/ox-alpha) — free on OpenRouter for a week.

## Performance

Same task, same eval environment, three agents × three models — cost and tool calls, lower is better.

</p>

> Task: fix a real bug in serde_json ([issue #979](https://github.com/serde-rs/json/issues/979)) end to end.

All nine runs produce correct, passing code — but evot costs **72–78% less** than Claude Code with **fewer tool calls** on every model.

## Installation

```bash
curl -fsSL https://evot.ai/install | sh
```

<details>
<summary>Build from source</summary>

```bash
git clone https://github.com/evotai/evot.git
cd evot
make setup && make install
```

</details>

## Login

```bash
evot login     #…
