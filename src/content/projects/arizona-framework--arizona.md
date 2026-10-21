---
repo: "arizona-framework/arizona"
name: "arizona"
description: "A web framework for Erlang/OTP"
readmeQualityOk: true
url: "https://github.com/arizona-framework/arizona"
homepage: "https://arizona-framework.org"
language: "Erlang"
languages: ["Erlang", "JavaScript"]
languagePcts: [75, 21]
topics: ["arizona", "beam", "erlang", "otp", "webdevelopment", "webframework", "arizona-framework", "pubsub", "real-time", "html"]
stars: 75
forks: 5
openIssues: 3
closedIssues: 95
watchers: 5
contributors: 3
recentReleases: 1
createdAt: "2024-06-25T20:26:25Z"
lastCommitAt: "2026-10-21T17:31:55Z"
lastReleaseAt: "2026-10-14T19:48:49Z"
status: "thriving"
tags: ["funded"]
healthScore: 98
undervaluedScore: 53
maintainers: ["williamthome", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1143cc29dcbef7abb7f84c26e98b267024596864f605e22ace243c79609f649f/arizona-framework/arizona"
fundingLinks: ["GITHUB:https://github.com/williamthome", "CUSTOM:https://www.buymeacoffee.com/williamthome"]
---

# Arizona

Arizona is a real-time web framework for Erlang/OTP. It renders HTML on the server, diffs changes at
the template level, and pushes minimal updates to the browser over WebSocket.

Templates are plain Erlang terms compiled via parse transform. The server owns the state; the client
is thin -- a DOM patcher in the browser, and the same diff stream drives a JSON widget tree on native
app clients (see the native target below).

Arizona is powered by [Roadrunner](https://github.com/arizona-framework/roadrunner), a pure-Erlang
HTTP and WebSocket server. Beep beep.

## 🚧 Status

Arizona is in `0.x`. The core is functional and covered by tests, but the API may change between
minor versions. Pin an exact version in your deps (e.g. `{arizona, "0.1.0"}`) if you need stability
across upgrades.

## Features

- **SSR + live updates** -- HTML on first load, WebSocket diffs after
- **Erlang-native templates** -- `{Tag, Attrs, Children}` tuples compiled by parse transform
- **Compile-time static/dynamic split** -- statics sent once, only dynamics cross the wire
- **Two handler kinds** -- `arizona_stateful` (live: route pages and components),
  `arizona_stateless` (pure templates)
-…
