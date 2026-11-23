---
repo: "kettanaito/rettime"
name: "rettime"
description: "Primitives for building ridiculously type-safe event-based systems."
readmeQualityOk: true
url: "https://github.com/kettanaito/rettime"
homepage: "https://npmx.dev/package/rettime"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["emitter", "event", "type-safe"]
stars: 203
forks: 4
openIssues: 2
closedIssues: 7
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-08-04T16:04:58Z"
lastCommitAt: "2026-11-23T10:31:18Z"
lastReleaseAt: "2025-04-26T07:14:12Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 74
undervaluedScore: 24
maintainers: ["kettanaito"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f61ec0006a359b622ec8b9cda0beb616e1c53cd43946c033db831d476f02a14/kettanaito/rettime"
fundingLinks: ["GITHUB:https://github.com/kettanaito"]
---

# Rettime

A type-safe marriage of `EventTarget` and `EventEmitter`.

## Features

- 🎯 **Event-based**. Control event flow: prevent defaults, stop propagation, cancel events. Something your common `Emitter` can't do.
- 🗼 **Emitter-inspired**. Emit event types and data, don't bother with creating `Event` instances. A bit less verbosity than a common `EventTarget`.
- ⛑️ **Type-safe**. Describe the exact event types and payloads accepted by the emitter. Never emit or listen to unknown events.
- 🧰 **Convenience methods** like `.emitAsPromise()` and `.emitAsGenerator()` to build more complex event-driven systems.
- 🐙 **Tiny and dependency-free**.

> **Warning**
>
> This library **does not** have performance as the end goal. In fact, since it operates on events and supports event cancellation, it will likely be _slower_ than the emitters that don't do that.

## Motivation

### Why not just `EventTarget`?

The `EventTarget` API is fantastic. It works in the browser and in Node.js, dispatches actual events, supports cancellation, etc. At the same time, it has a number of flaws that prevent me from using it for anything serious:
