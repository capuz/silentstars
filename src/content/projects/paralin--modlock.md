---
repo: "paralin/modlock"
name: "modlock"
description: "Custom games for Valve's Deadlock"
readmeQualityOk: true
url: "https://github.com/paralin/modlock"
language: "C++"
languages: ["C++", "Luau", "Go"]
languagePcts: [39, 22, 20]
stars: 13
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-09-27T06:21:02Z"
lastCommitAt: "2026-10-25T02:46:05Z"
lastReleaseAt: "2026-10-23T17:21:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 52
maintainers: ["paralin", "cravvnn", "ddkesports"]
openGraphImageUrl: "https://opengraph.githubassets.com/e30b8825363eb9b2ffde13b37d87a3152689f859fcb95cea2b11bd71f7f30546/paralin/modlock"
---

**Modlock** is the best tool for hand-writing the logic of [Deadlock] custom
game modes. You write a mod in TypeScript, Luau or Python; Modlock builds it
for WebAssembly, and the game server runs it in a secure sandbox. Every mod
speaks to the game through one common protobuf schema, so each language sees
the same events and calls. Mods deploy to [hyperline.gg], the default backend and platform for custom games.

[Deadlock]: https://store.steampowered.com/app/1422450/Deadlock/
[hyperline.gg]: https://hyperline.gg

```ts
import { command } from 'modlock'

command('hello', (player) => {
  player.chat('Hello from TypeScript!')
})
```

> **Early development.** APIs may change without notice between any two
> releases. [TypeScript, JavaScript](#the-typescript-library),
> [Luau](#writing-a-mod-in-luau), [Python](#writing-a-mod-in-python) and
> [Go](#writing-a-mod-in-go) mods, the `modlock` command line and
> `modlock publish` all work today.

## Why WebAssembly

- **Safe to share.** A mod runs in a [Wasmtime] sandbox inside the server. It
  has no files, network or environment, only the calls the schema offers. A
  crash, an endless loop or a runaway allocation stops that mod with a log…
