---
repo: "alanrsoares/re-reduced"
name: "re-reduced"
description: "Signal-backed, typed state-machine + effect container for component logic in React & Preact — fine-grained reactivity, effects-as-data, zero-any."
readmeQualityOk: true
url: "https://github.com/alanrsoares/re-reduced"
homepage: "https://alanrsoares.github.io/re-reduced/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
topics: ["type-safe", "typescript", "fine-grained-reactivity", "preact", "react", "reactivity", "signals", "state-machine", "state-management", "effects-as-data"]
stars: 16
forks: 3
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 2
recentReleases: 10
createdAt: "2018-08-30T06:08:42Z"
lastCommitAt: "2026-07-18T05:45:53Z"
lastReleaseAt: "2026-07-18T05:46:35Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine"]
healthScore: 97
undervaluedScore: 78
maintainers: ["alanrsoares", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4cfc795540c997acfbd56cbb884575e81664eff089cce6e9243757d74a9fe492/alanrsoares/re-reduced"
---

A typed, functional, **signal-backed** state-machine + effect container for
component-scoped logic in React and Preact. It owns your state transitions and
effect _intent_ — and delegates server state to your data layer (TanStack Query,
etc.) through adapters.

> **v2 is a ground-up rewrite** under the `@re-reduced/*` scope. The original
> Redux/redux-saga helper (v1) is frozen and still published as `re-reduced@2`.

## Why

- **Signal-backed, fine-grained.** State lives in per-field signals; a component
  re-renders only when the slice it reads changes — no selector discipline.
- **Typed to the bone.** Action payloads, derivations, and effect interpreters
  are fully inferred, with zero `any` in your app code.
- **Effects as data.** Side-effects are declared as intents and interpreted by
  the renderer adapter, so the core stays pure and unit-testable.
- **Multi-renderer.** The same container definition runs under React and Preact.

## Install

```bash
# React
bun add @re-reduced/react @preact/signals-core
# Preact
bun add @re-reduced/preact @preact/signals-core @preact/signals
```

## Quick look

```tsx
import { defineContainer, useContainer, useSelect } from "@re-reduced/react";…
