---
repo: "mudler/nib"
name: "nib"
description: "A tiny, zero-dependency LLM agent harness that lives in your terminal. One static binary. No runtime, no daemon, no cloud. Local-LLM friendly. Summon it anywhere with Ctrl+Space."
readmeQualityOk: true
url: "https://github.com/mudler/nib"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 56
forks: 11
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-12-10T21:39:28Z"
lastCommitAt: "2026-11-26T23:02:12Z"
lastReleaseAt: "2026-06-13T19:45:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 43
maintainers: ["mudler", "mudler-agent"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c49ca9a3e069835c90562841746868f858a1ef01b4ac6ce77bd159caf291660/mudler/nib"
---

One static binary. No runtime, no daemon, no cloud. Local-LLM friendly. Summon it anywhere with <code>Ctrl+Space</code>.

---

## Why nib

Most LLM coding agents are big: a Node/Python runtime, a pile of dependencies, a login, a
background service. **nib is the opposite.** It's a single ~20 MB Go binary you drop on any
machine — laptop, server, container, a box you SSH'd into — and it just runs. Point it at
any OpenAI-compatible endpoint (including a local model) and press `Ctrl+Space`.

Small doesn't mean toy. nib is a real agent harness:
