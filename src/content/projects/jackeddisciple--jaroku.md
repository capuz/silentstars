---
repo: "jackeddisciple/Jaroku"
name: "Jaroku"
description: "workbench for building AI agents you can actually trust."
readmeQualityOk: true
url: "https://github.com/jackeddisciple/Jaroku"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-07-16T22:26:36Z"
lastCommitAt: "2026-08-27T14:31:30Z"
lastReleaseAt: "2026-07-24T21:02:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 56
maintainers: ["jackeddisciple"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1303306927/b4798dc3-1fec-4eb8-af9f-e8ad6abeaca6"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/adarshchoudhary"]
---

# Jaroku

**A local-first workbench for building, running, tracing, editing and evaluating AI agents.**

You describe an agent in plain English. Jaroku plans it, writes it as a real LangGraph
project on your disk, runs it, and shows you every LLM call, tool call, routing decision and
state mutation it made — with real token counts and real dollar costs. Then you can pause a
run mid-graph, fork it from any step with an edited state, ask for a code change and review
the diff before it lands, and fan the whole thing out across providers to compare quality,
latency and cost side by side.

The generated projects import nothing from Jaroku. They are plain LangGraph you can copy out
of the repo and run yourself.

```
  you ──▶ plan ──▶ generate ──▶ run ──▶ trace ──▶ edit ──▶ eval ──▶ deploy
           │          │          │        │        │        │        │
        review     validated   traced   stepped  diffed  compared  to YOUR
        before     before      live     through  before  across    Railway
        writing    landing              & forked applying providers account
```

Once there is more than one agent and more than one session, four full-screen destinations answer
four…
