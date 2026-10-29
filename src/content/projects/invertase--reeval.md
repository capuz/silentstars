---
repo: "invertase/reeval"
name: "reeval"
description: "Evaluation runner for SDKs, CLIs, MCP servers, and docs."
readmeQualityOk: true
url: "https://github.com/invertase/reeval"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["evals", "harness-ai"]
stars: 13
forks: 0
openIssues: 12
closedIssues: 103
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-09-25T11:34:57Z"
lastCommitAt: "2026-10-29T10:36:03Z"
lastReleaseAt: "2026-10-13T09:18:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 54
maintainers: ["Ehesp", "BenInvertase"]
openGraphImageUrl: "https://opengraph.githubassets.com/3697e4c93478e6d3d5b6de705f859bb6a5bee00568cca08149d2b6ede18b27b1/invertase/reeval"
---

```
                                    ██
 ▄▄ ▄▄▄  ▄▄▄▄   ▄▄▄▄  ▄▄  ▄▄  ▄▄▄▄  ██
 ███▀▀▀ ██▄▄██ ██▄▄██ ██  ██  ▄▄▄██ ██
 ██     ██   ▄ ██   ▄  ████  ██  ██ ██
 ██      ▀▀▀▀   ▀▀▀▀    ▀▀    ▀▀▀▀▀ ▀▀

 Evaluation runner for SDKs, CLIs, MCP servers, and docs.

 # Get started using the `/setup` skill:
 npx skills add invertase/reeval --skill setup

 # Or install manually:
 npm i -D reeval && npx reeval init
```

> [!IMPORTANT]
> **Work in Progress**: reeval is under active development. Expect breaking changes between minor version releases.

# reeval

reeval is an open-source evaluation runner for developer tools. It gives a real coding agent a task in a fresh sandbox, then checks the result with assertions on files, commands, and the transcript, and with an LLM judge where an assertion can't decide. Run the same task with and without a skill, doc, or MCP server, and reeval reports whether the change helped.

Evals are TypeScript files in `evals/`, next to the tool they test. Each run writes a JSON record, and recorded runs commit to Git, so `reeval compare` can diff a pull request's run against the last recorded one and fail the job when an eval regresses.

## Features

Cursor ⋅…
