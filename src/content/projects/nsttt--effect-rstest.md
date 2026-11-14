---
repo: "Nsttt/effect-rstest"
name: "effect-rstest"
description: "Effect test helpers for Rstest"
readmeQualityOk: true
url: "https://github.com/Nsttt/effect-rstest"
homepage: "https://www.npmjs.com/package/effect-rstest"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["effect", "rstest", "typescript"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-09-08T13:00:02Z"
lastCommitAt: "2026-11-14T10:47:54Z"
lastReleaseAt: "2026-11-14T10:48:09Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 82
undervaluedScore: 49
maintainers: ["Nsttt", "github-actions[bot]", "BleedingDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/f436461fd6fbf3c187d5ea3c0200060ec17abdbfa29e10a008c89b99333e9cab/Nsttt/effect-rstest"
---

# effect-rstest

Effect test helpers for [Rstest](https://rstest.rs). This package re-exports `@rstest/core` and adds Effect-aware tests, shared layers, test services, and property testing.

## Installation

```sh
pnpm add -D effect-rstest @rstest/core
```

The package targets stable Effect 4.0.7 or later and Rstest 0.12.

## Usage

Use `it.effect` for tests with `TestClock` and `TestConsole`, or `it.live` for the live Effect environment. Both variants create and close a fresh `Scope` for each test.

```ts
import { Effect, Fiber } from "effect"
import { assert, it } from "effect-rstest"
import { TestClock } from "effect/testing"

it.effect("advances virtual time", () =>
  Effect.gen(function*() {
    const fiber = yield* Effect.forkChild(Effect.sleep(60_000))
    yield* TestClock.adjust(60_000)
    yield* Fiber.join(fiber)
    assert.isTrue(true)
  }))
```

The test fiber receives Rstest's abort signal. If a test times out, the runner still reports the timeout, but an `onTestFinished` barrier waits for fiber settlement and scoped finalizers before later sequential tests and suite-layer release. The barrier does not impose a second cleanup timeout: a finalizer that never completes…
