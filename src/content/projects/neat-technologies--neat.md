---
repo: "neat-technologies/neat"
name: "neat"
description: "Network Environment Architecture Tools"
url: "https://github.com/neat-technologies/neat"
homepage: "https://neat.is"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["architecture", "graph-theory", "software-engineering", "platform-engineering"]
stars: 8
forks: 0
openIssues: 72
closedIssues: 196
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-04-29T23:41:01Z"
lastCommitAt: "2026-07-01T07:05:01Z"
lastReleaseAt: "2026-05-09T01:31:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 58
maintainers: ["dcdeniz", "sguckiran"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ca2fc0ec0d27bc3f45bb27c7699266aa3adf6cc9e47cac68aa8293fa02e6184/neat-technologies/neat"
---

# NEAT

NEAT solves the AI coding context problem. It constructs a live deterministic model of your codebase — static code and live runtime behavior fused into one graph — and hands your AI agents the grounded, full-stack context they need to query, code, debug, and write rules against it. This achieves the following:
- Coding LLMs hallucinate less & are more accurate.
- Rather than endlessly grepping files and guessing problems, NEAT provides time-travelling error logs along the model's nodes and edges so the LLM can infer exactly what's wrong.
- Rules & Policies allow agents to write new features while adhering to rules set by previous features, other LLMs, or engineers. For example, only use postgres for services x and y, and mongoDB for services p and q (the possibilities are endless).

TL;DR The deterministic grounded truth of code for your agents. 

NEAT is in active development. Capability ships as patch releases on the `npx neat.is` surface; see [open issues](https://github.com/NEAT-Technologies/Neat/issues) for what's on deck. 

## One command

```bash
npx neat.is
```

Run it from inside your project (or `npx neat.is <path>`). It discovers your services, extracts the…
