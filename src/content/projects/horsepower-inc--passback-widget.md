---
repo: "horsepower-inc/passback-widget"
name: "passback-widget"
description: "Passback widget: point at what is wrong on your page. MIT, mirrored from the private monorepo."
readmeQualityOk: true
url: "https://github.com/horsepower-inc/passback-widget"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 0
recentReleases: 0
createdAt: "2026-10-10T22:19:53Z"
lastCommitAt: "2026-10-26T18:06:14Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 9
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/92dbee440d6710549c9f4d1e75c81248ac343ceda90780f6aa9b4f3af5341cdf/horsepower-inc/passback-widget"
---

# Passback widget

Point at what is wrong on your page. Passback turns it into a comment filed in your tracker or sent to your coding agent.

## Local (free)

The Vite quick start:

    npm i -D passback @passback/vite-plugin && npx passback init --apply

Start or restart your dev server. Restart your agent and approve the Passback server. Then use `/passback` in Claude Code or Cursor, or `$passback` in Codex.

## Hosted

    npx passback init --site <key>

Documentation and sign-up: https://passback.dev

## Framework guides

- https://passback.dev/docs/install-vite/
- https://passback.dev/docs/install-vue/
- https://passback.dev/docs/install-svelte-kit/
- https://passback.dev/docs/install-astro/
- https://passback.dev/docs/install-nuxt/
- https://passback.dev/docs/install-react-router/
- https://passback.dev/docs/install-next/

## What is in this repository

- `packages/widget`: the in-page widget that lets a visitor point at an element and leave a comment.
- `packages/schema`: the shared types and the comment payload schema.
- `packages/collectors`: the collectors that gather page context for a comment.
- `packages/cli`: the `passback` command line that sets a project up.
-…
