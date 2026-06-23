---
repo: "stoqey/ib"
name: "ib"
description: "Interactive Brokers TWS/IB Gateway API client library for Node.js (TS)"
url: "https://github.com/stoqey/ib"
homepage: "https://stoqey.github.io/ib-doc/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["interactive-brokers", "stocks-api", "forex-api", "options-trading", "twsapi", "market-data", "price-ticker", "ib-gateway", "typescript", "tws"]
stars: 322
forks: 60
openIssues: 0
closedIssues: 74
watchers: 13
contributors: 21
recentReleases: 0
createdAt: "2020-05-16T04:52:26Z"
lastCommitAt: "2026-06-23T06:42:48Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 41
maintainers: ["ceddybi", "rylorin", "tredondo"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5c63ea5c3f0ae36994e3dd7482f8e6c8a2d9fa58fb65e11dade8019996b3640/stoqey/ib"
fundingLinks: ["GITHUB:https://github.com/stoqey"]
discussionCount: 14
---

<h1 align="center">Typescript API</h1>
  </p>

  </div>
</div>

`@stoqey/ib` is an [Interactive Brokers](http://interactivebrokers.com/) TWS (or IB Gateway) Typescript API client library for [Node.js](http://nodejs.org/). It is a port of Interactive Brokers' Java Client Version 10.32.01 ("latest" relased on Oct 9, 2024).

Refer to [IBKRCampus](https://ibkrcampus.com/campus/ibkr-api-page/twsapi-doc/) for the official documentation and the C#/Java/VB/C++/Python client.

The module makes a socket connection to TWS (or IB Gateway) using the [net](http://nodejs.org/api/net.html) module and all messages are entirely processed in Typescript. It uses [EventEmitter](http://nodejs.org/api/events.html) to pass the result back to user.

## Simpler Alternative

If you're looking for a more straightforward implementation with ready-to-use examples, check out [@stoqey/ibkr](https://github.com/stoqey/ibkr). This wrapper library provides:

- 🚀 Simplified API interface
- 📝 Full working examples for common operations
- 🔄 Built-in connection management
- 📊 Easy market data handling
- 💼 Streamlined portfolio management
- 🤖 Trading automation helpers

The wrapper is built on top of this library…
