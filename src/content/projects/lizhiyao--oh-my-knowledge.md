---
repo: "lizhiyao/oh-my-knowledge"
name: "oh-my-knowledge"
description: "Evaluation framework for LLM knowledge inputs — prompts, RAG corpora, skills, agent workflows. Fix the model, vary the artifact. Built-in statistical rigor: bootstrap CI, Krippendorff α, length-debias, saturation curves."
readmeQualityOk: true
url: "https://github.com/lizhiyao/oh-my-knowledge"
homepage: "https://www.npmjs.com/package/oh-my-knowledge"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ai", "benchmark", "claude", "knowledge-engineering", "llm", "prompt-engineering", "skill-evaluation", "claude-code", "evaluation-framework", "bootstrap-ci"]
stars: 13
forks: 2
openIssues: 1
closedIssues: 26
watchers: 0
contributors: 6
recentReleases: 8
createdAt: "2026-03-24T13:26:41Z"
lastCommitAt: "2026-07-25T06:01:19Z"
lastReleaseAt: "2026-05-04T09:18:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 60
maintainers: ["lizhiyao", "dependabot[bot]", "chenfengjw163"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1190633989/07bed2c8-ecf0-447c-836a-f92420cf2799"
discussionCount: 1
---

# oh-my-knowledge

**English** | [简体中文](https://github.com/lizhiyao/oh-my-knowledge/blob/HEAD/README.zh.md)

**Stop editing LLM knowledge inputs by gut feel.**
`oh-my-knowledge` (omk) is a measurement workflow for prompts, RAG context, skills, agents, and workflows. It fixes the executor model and the evaluation samples, changes only the knowledge artifact, then answers the release question that matters: **can v2 ship, and where is it better?**

📖 **Full documentation: [oh-my-knowledge.pages.dev](https://oh-my-knowledge.pages.dev)** (searchable, English / 简体中文)

## What omk makes measurable

| Decision | Command | Evidence you get |
|---|---|---|
| Is this artifact coherent enough to evaluate? | `omk doctor` | structure, dependencies, safety, and measurability checks |
| Is v2 actually better than v1? | `omk eval` | one-line verdict, confidence interval, failed samples, cost |
| Why did it pass or fail? | `omk studio` | report view with scores, diagnostics, and examples |
| Should this version become the accepted one? | `omk promote` / `omk evolve` | evidence-gated accept or generate a better candidate |
| What did real usage expose? | `omk observe` / `omk sample --from-traces` |…
