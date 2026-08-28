---
repo: "typeonce-dev/effect-machine"
name: "effect-machine"
description: "Schema-first state machines and statecharts for Effect"
readmeQualityOk: true
url: "https://github.com/typeonce-dev/effect-machine"
homepage: "https://effect-machine.typeonce.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["effect", "effect-ts", "state-charts", "state-machine", "state-management"]
stars: 156
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-07-28T13:02:32Z"
lastCommitAt: "2026-08-28T10:44:12Z"
lastReleaseAt: "2026-08-15T08:11:13Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 100
undervaluedScore: 36
maintainers: ["SandroMaglione", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8e64c60edd769601e897599a8763605c8b23431e78a774536b1301178017882/typeonce-dev/effect-machine"
---

# @typeonce/effect-machine

Effect-native, schema-first, completely type-safe state machines and statecharts, inspired by [XState](https://github.com/statelyai/xstate).

> The goal of `effect-machine` is to become a core [effect](https://github.com/Effect-TS/effect) module.
>
> It originates from [the following PR](https://github.com/Effect-TS/effect/pull/6429#issuecomment-5109812313).

## Quick look

```ts
import { Machine } from "@typeonce/effect-machine"
import { Effect, Schema } from "effect"

const States = Machine.states({
  Locked: {},
  Unlocked: {}
})

const Events = Machine.events(
  Schema.TaggedUnion({
    Coin: {},
    Push: {}
  })
)

const Turnstile = Machine.make({
  id: "Turnstile",
  states: States.states,
  events: Events,
  initial: (to) => to.Locked()
}).handle({
  Locked: {
    on: { Coin: (to) => to.full.Unlocked() }
  },
  Unlocked: {
    on: { Push: (to) => to.full.Locked() }
  }
})

const program = Effect.gen(function*() {
  const ref = yield* Machine.start(Turnstile)
  yield* ref.send(Events.Coin())
})
```

State and event schemas define the protocol. The handler tree defines the
statechart, and the result runs as an Effect-managed machine.

## Packages…
