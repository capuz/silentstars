---
repo: "wfoxd/haikit"
name: "haikit"
description: "Building the elicitation software with AI."
readmeQualityOk: true
url: "https://github.com/wfoxd/haikit"
homepage: "https://haikit.app/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [50, 47]
topics: ["elicit", "elicit-ai", "elicit-api", "elicitation", "elicitation-requirements", "ai-software-engineering", "ai-solutions"]
stars: 11
forks: 1
openIssues: 3
closedIssues: 8
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-09-23T05:34:55Z"
lastCommitAt: "2026-10-27T09:16:27Z"
lastReleaseAt: "2026-09-25T22:44:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 56
maintainers: ["wfoxd", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6f34229d8084402a66b74b20b1d527e02288b085976aedc56e62f328222e493/wfoxd/haikit"
discussionCount: 5
---

HaiKIT is a TypeScript framework for LLM tools that answer with **interactive
UI** as well as text. Each tool result goes two ways: the model gets a short
digest, and the browser gets the full data as a component. A click on that
component can be the answer to the model's question.

```
                    ┌─ model channel ──▶ tool_result (digest) ──▶ Claude
tool executes ──────┤
                    └─ UI channel ─────▶ SSE ──▶ registry ──▶ rendered component
                                                      ▲
                                  user interacts ─────┘
                                        │
                                        ▼
                            back into the turn as a tool_result
```

A flight search fetches 47 rows: the model receives a sentence, the browser
receives the rows. The user clicks one, and that click becomes the model's
answer. **97% of the payload never enters context.**

## Try it

- **Live:** [haikit.app](https://haikit.app) is HaiKIT's introduction, built
  with HaiKIT: what an elicitation app is and how HaiKIT builds one, in short
  lessons, with the tutorial built in. Its source is…
