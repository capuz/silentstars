---
repo: "LionSR/TeXRA"
name: "TeXRA"
description: "TeXRA — an AI theorist (math, physics, computer science). VS Code extension and terminal CLI."
readmeQualityOk: true
url: "https://github.com/LionSR/TeXRA"
homepage: "https://texra.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 37
forks: 2
openIssues: 24
closedIssues: 3784
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2024-05-11T14:29:48Z"
lastCommitAt: "2026-11-14T10:45:18Z"
lastReleaseAt: "2024-08-21T08:15:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 60
maintainers: ["LionSR", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ab826dc221dfab28f100f4851815f0041939df39b1e707d5f1f2c4779235b5a/LionSR/TeXRA"
fundingLinks: ["GITHUB:https://github.com/texra-ai", "CUSTOM:https://buymeacoffee.com/texra.ai"]
---

# TeXRA

An open-source AI theorist for VS Code and the terminal. It attempts real
theory work: deriving results, checking derivations, formalizing proofs in
Lean 4. It takes on open problems in long autonomous runs, with a team of
specialist agents. Apache 2.0, and you bring your own model keys or
subscriptions.

Development on `main` targets **TeXRA 1.0** (work in progress, not the
currently published release), which reorganizes the interface around
**projects**, stores application state in SQLite, and runs asynchronous
execution on Effect (see the [1.0 development direction](https://github.com/LionSR/TeXRA/blob/HEAD/AGENTS.md#texra-10-direction)).
Version 1.0 starts with fresh application state and does not migrate previous
JSON settings, session histories, or execution checkpoints; research files in
your project are untouched.

## Install

```sh
# VS Code (or Cursor, Windsurf, Antigravity)
code --install-extension texra-ai.texra

# Terminal: requires Node.js 22.22.2 or later in 22.x, or Node.js 24.15 or later
npm install -g @texra-ai/cli

# Or via Homebrew (macOS / Linux)
brew install texra-ai/tap/texra
```

Set `<PROVIDER>_API_KEY` to use your own credentials, sign in with a…
