---
repo: "iammrduncan/fxbot"
name: "fxbot"
description: "fxbot is your bot, built and configured how you want it."
readmeQualityOk: true
url: "https://github.com/iammrduncan/fxbot"
homepage: "https://fxbot.sh"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [53, 41]
stars: 8
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-10-29T03:57:42Z"
lastCommitAt: "2026-11-04T02:50:34Z"
lastReleaseAt: "2026-11-02T23:36:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 58
maintainers: ["shadowcodex"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec91500cb4a641b61721d757eae28084d5256d3439945f2e9f884f71bdd097be/iammrduncan/fxbot"
---

# fxbot

Join the Hackers in the Loop community on [Discord](https://discord.gg/3Qs2uejUf9) to talk about fxbot, share what you build with it, and get help.

fxbot is your bot, built and configured how you want it. It starts simple, with a lean, fast core: bots, their chats, and their files. Make each bot yours, from its look and instructions to its model and tools. Grow fxbot with only the plugins you want: skills, MCP servers, and plugins that change the app itself.

fxbot is local first. One Node server and Postgres run on your own machine, and the browser is the UI on desktop and mobile. [libfx](https://fx.sh/docs/lib) sends each chat to the provider its bot uses: a local model server such as Ollama or LM Studio, an API key, or a ChatGPT, Grok, or Vercel account signed in with a device code.

Simplicity is the rule: a small core, few dependencies, and no abstraction until a second real use. The core is what every bot needs, and everything else is a plugin. See [Core or plugin](https://github.com/iammrduncan/fxbot/blob/HEAD/CONVENTIONS.md#core-or-plugin).

## Stack

A TypeScript monorepo with four npm workspaces under `packages/`, laid out after [eve](https://eve.dev): a core…
