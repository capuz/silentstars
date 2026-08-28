---
repo: "LionSR/TeXRA"
name: "TeXRA"
description: "TeXRA — an AI theorist (math, physics, computer science). VS Code extension and terminal CLI."
readmeQualityOk: true
url: "https://github.com/LionSR/TeXRA"
homepage: "https://texra.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 16
forks: 1
openIssues: 49
closedIssues: 3189
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2024-05-11T14:29:48Z"
lastCommitAt: "2026-08-28T14:33:13Z"
lastReleaseAt: "2024-08-21T08:15:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 71
maintainers: ["LionSR", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7f2a7b9f5d27826633ee86397d32e4186041710a10d2c7de34f9c27ca521304/LionSR/TeXRA"
fundingLinks: ["GITHUB:https://github.com/texra-ai", "CUSTOM:https://buymeacoffee.com/texra.ai"]
---

# TeXRA

An open-source AI theorist for VS Code and the terminal. It attempts real
theory work: deriving results, checking derivations, formalizing proofs in
Lean 4. It takes on open problems in long autonomous runs, with a team of
specialist agents. Apache 2.0, and you bring your own model keys or
subscriptions.

## Install

```sh
# VS Code (or Cursor, Windsurf, Antigravity)
code --install-extension texra-ai.texra

# Terminal — requires Node.js >=22.9.0
npm install -g @texra-ai/cli

# Or via Homebrew (macOS / Linux)
brew install texra-ai/tap/texra
```

Set `<PROVIDER>_API_KEY` to use your own credentials, sign in with a
ChatGPT or Grok subscription, or add the API key for a Kimi Code or
GLM Coding Plan subscription.

### Hosted agent catalog

Academic researchers can sign in with GitHub or Google for
complimentary access to the hosted agent catalog — the Orchestrator
and the full roster of hosted specialists. Sign in through the
Profile view in VS Code, or `texra login` in the terminal. The agents
are free; their model calls run on your configured model credential,
the same as your built-in agents.

Access is sustained by the community. If TeXRA helps your
research, consider…
