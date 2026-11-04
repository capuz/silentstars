---
repo: "copilotzhq/copilotz"
name: "copilotz"
description: "Copilotz Client"
readmeQualityOk: true
url: "https://github.com/copilotzhq/copilotz"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2025-07-31T19:09:19Z"
lastCommitAt: "2026-11-04T13:05:24Z"
lastReleaseAt: "2026-10-31T03:58:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 71
maintainers: ["vfssantos"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd3f0ff3acb9cee389fc0cd5dc602a392735ed9b7387a27df2542607c43fc0d2/copilotzhq/copilotz"
---

# Copilotz

One runtime for agents and the apps around them, on Node, Deno, Bun, Cloudflare Workers and the
browser.

An app is plugins: agents that answer with tools and talk to each other and to people, conversations
in shared spaces, memory, skills and routines, a usage ledger, people's computers, sign-in and
connected accounts, a developer API, WhatsApp. Each is a plain object built from the same few
primitives (collections, Actions, Processors, Views, resources and adapters), and the runtime knows
nothing else. Everything durable is an event, a document, an edge, a vector or a blob, written by
one owner to one store (memory, SQLite or PostgreSQL), so every change is on the record and every
screen follows it live: in a terminal, in a browser, or in an agent's prompt.

## Install

```sh
npm install copilotz                 # Node 24+ (npm, pnpm, yarn)
bun add copilotz                     # Bun
deno add jsr:@copilotz/copilotz      # Deno (or `deno add npm:copilotz`)
```

On Deno, name it `copilotz` in `deno.json` (`"copilotz": "jsr:@copilotz/copilotz@^1.0.0-rc.20"`),
and the imports below are the same everywhere. Some pieces need a package of their own, installed
beside it:…
