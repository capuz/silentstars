---
repo: "INDXDev/jevlint"
name: "jevlint"
description: "A model-based linter that tells you what to refactor first."
readmeQualityOk: true
url: "https://github.com/INDXDev/jevlint"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 91
forks: 2
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-11-04T15:09:23Z"
lastCommitAt: "2026-11-11T19:42:06Z"
lastReleaseAt: "2026-11-09T08:11:02Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 32
maintainers: ["KatsuyaITO", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/84ccc71507e6025bb15a9a31bf82b7a63fb5e9e8eb77f88fcb4ad9981a5bb396/INDXDev/jevlint"
---

# jevlint

**A model-based linter that tells you what to refactor first.**

ESLint tells you a line broke a rule. jevlint reads every file in your repository, scores how
clean it is against principles you choose, and hands you a ranked list: messiest and most-changed
files first. Then it writes the prompt that gets Claude Code or Codex to fix them.

## Try it now

No install, no API key, and your code stays on your machine:

```sh
npx @indxjp/jevlint --ast-only
```

## Install

```sh
npm install -g @indxjp/jevlint     # or: pnpm add -g @indxjp/jevlint
jevlint --version
```

Requires Node.js 24.22.1 or later (or 22.23.4, or 26.12.1, on those lines).

## See it work

A team inherits `shop-api` and has one afternoon for cleanup. jevlint picks the file, explains why,
hands it to Claude Code, and confirms the score went up.

## Why it is different

- **Two kinds of judgement.** AST analysis measures what is measurable, such as complexity and
  nesting. A [decision model](https://github.com/INDXDev/jevlint/blob/HEAD/docs/concepts.md#decision-models) answers what needs judgement, such
  as "do these names carry meaning?"
- **Decision models, not chatbots.** Models like [TypeSafe AI's…
