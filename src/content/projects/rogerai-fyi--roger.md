---
repo: "rogerai-fyi/roger"
name: "roger"
description: "RogerAI - a two-way radio for GPUs: a marketplace for self-hosted LLMs (CLI + broker + site)."
readmeQualityOk: true
url: "https://github.com/rogerai-fyi/roger"
homepage: "https://rogerai.fyi"
language: "Go"
languages: ["Go"]
languagePcts: [77]
stars: 193
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-23T18:46:46Z"
lastCommitAt: "2026-07-11T05:57:00Z"
lastReleaseAt: "2026-06-24T09:25:56Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 89
undervaluedScore: 30
maintainers: ["bownux"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b9156200ce021c25ef5cdf3eda7072447cd2c521a0dc9f7da4b83d16d54abec/rogerai-fyi/roger"
---

# RogerAI

```
             ·   ˙   ·
           ˙ ((  •  )) ˙                   ┌──────────────┐
              \(   )/                      │ ((•)) ON AIR │
               │ R │         ▟█▙           └──────────────┘
   ┌───────────┴───┴──────────█───────────────────────────┐
   │  ◉ ch 01 · on band gpt-oss-20b · 42 tok/s   ▂ ▄ ▆ █  │
   ╰┬────────────────────────────────────────────────────┬╯
    ▔                                                    ▔

        █▀▀█ █▀▀█ █▀▀▀ █▀▀▀ █▀▀█     █▀▀█ ▀█▀  ▄
        █▀▀▄ █  █ █ ▀█ █▀▀  █▀▀▄  ▄  █▀▀█  █   █
        ▀  ▀ ▀▀▀▀ ▀▀▀▀ ▀▀▀▀ ▀  ▀     ▀  ▀ ▀▀▀  ▀
             borrow a GPU, pay by the token · roger that.
```

**A two-way radio for GPUs.** RogerAI is a marketplace for crowd-sourced, self-hosted LLMs:
people run open models on their own GPUs and go "on air"; you tune in and pay per token. Every
token carries a **model-lineage record** - a receipt signed by the provider and counter-signed
by the broker, tracing the response back to the model that produced it. Owners monetize idle
hardware; users get cheap, diverse access.

```
curl -fsSL https://rogerai.fyi/install.sh | sh
```

Then just run `roger` for the interactive radio (browse…
