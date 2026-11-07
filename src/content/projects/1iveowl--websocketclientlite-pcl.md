---
repo: "1iveowl/WebsocketClientLite.PCL"
name: "WebsocketClientLite.PCL"
description: "Websocket client lite"
readmeQualityOk: true
url: "https://github.com/1iveowl/WebsocketClientLite.PCL"
language: "C#"
languages: ["C#"]
languagePcts: [87]
topics: ["websocket", "netstandard", "rx", "reactiveextensions", "reactivex", "slack", "slack-api", "netstandard20", "socket-io", "netstandard21"]
stars: 40
forks: 12
openIssues: 0
closedIssues: 25
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2016-06-23T21:14:36Z"
lastCommitAt: "2026-11-07T13:54:30Z"
lastReleaseAt: "2026-07-25T10:24:02Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 91
undervaluedScore: 51
maintainers: ["1iveowl", "Jasper-Etara", "Zitterz"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8981e936c0f70838c10c5b5960b537b74889f2a130a2cea1cf6da8b1befbd1c/1iveowl/WebsocketClientLite.PCL"
fundingLinks: ["CUSTOM:https://www.buymeacoffee.com/fEXda8L"]
---

# WebSocket Client Lite (Rx)

*Please star this project if you find it useful. Thank you.*

## TL;DR

See the project `NETCore.Console.Test` in the `./src/test` directory for an example of how to use.

## A Lightweight Cross Platform WebSocket Client

This library is a ground-up implementation of the WebSocket specification [(RFC 6455)](https://tools.ietf.org/html/rfc6455) - it does not rely on any built-in .NET WebSocket libraries.

The library provides developers with additional flexibility, including the ability to establish secure WSS websocket connections to servers with self-signing certificates, expired certificates, etc. This capability should be used with care for obvious reasons, but is valuable for testing environments, closed local networks, local IoT set-ups, and more.

The library utilizes [ReactiveX](http://reactivex.io/) (aka Rx or Reactive Extensions). While this dependency introduces a small learning curve, it's worthwhile for the context.

## New in Version 10.1.0

Version 10.1.0 extends the Dafny core with receive admission that includes fragmentation state, outgoing message transitions, closing transitions, exact segment concatenation, and a length-header…
