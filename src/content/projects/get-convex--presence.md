---
repo: "get-convex/presence"
name: "presence"
description: "Convex presence component"
readmeQualityOk: true
url: "https://github.com/get-convex/presence"
homepage: "https://presence.previews.convex.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
stars: 16
forks: 10
openIssues: 3
closedIssues: 4
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2025-05-22T17:50:17Z"
lastCommitAt: "2026-07-09T20:44:04Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 75
undervaluedScore: 60
maintainers: ["ianmacartney", "renovate[bot]", "Nicolapps"]
openGraphImageUrl: "https://opengraph.githubassets.com/39cc4a7b258df1034e335e6eef3f355c36ac2b395ec6edb52ef67019614a44ea/get-convex/presence"
---

# Presence Convex Component

A Convex component for managing presence functionality, i.e., a live-updating
list of users in a "room" including their status for when they were last online.

It can be tricky to implement presence efficiently, without any polling and
without re-running queries every time a user sends a heartbeat message. This
component implements presence via Convex scheduled functions such that clients
only receive updates when a user joins or leaves the room.

The most common use case for this component is via the usePresence hook, which
takes care of sending heartbeart messages to the server and gracefully
disconnecting a user when the tab is closed.

## Installation

```bash
npm install @convex-dev/presence
```

## Examples

See the `example` directory for a simple example of how to use this component.
The `example-with-auth` directory shows how to use the component with
authentication.

There's a hosted version of `example-with-auth` at
https://presence.previews.convex.dev.

## Usage

First, add the component to your Convex app:

`convex/convex.config.ts`

```ts
import { defineApp } from "convex/server";
import presence from…
