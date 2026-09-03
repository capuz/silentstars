---
repo: "AvaProtocol/ava-sdk-js"
name: "ava-sdk-js"
description: "A JavaScript/TypeScript SDK designed to simplify integration with Ava Protocol’s AVS"
readmeQualityOk: true
url: "https://github.com/AvaProtocol/ava-sdk-js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 39
forks: 36
openIssues: 4
closedIssues: 46
watchers: 1
contributors: 5
recentReleases: 1
createdAt: "2024-10-22T00:38:11Z"
lastCommitAt: "2026-09-03T08:13:36Z"
lastReleaseAt: "2026-06-05T09:36:09Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 93
undervaluedScore: 68
maintainers: ["weilicious", "chrisli30", "will-dz"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ab0e01fc288c924b05ad7b8ce18417edf44a921cec2840ee7e58ad0f07fa736/AvaProtocol/ava-sdk-js"
---

# Ava SDK for JavaScript/TypeScript

`ava-sdk-js` is the official TypeScript SDK for Ava Protocol's AVS.

> **3.0.0 is a REST-only rewrite.** The 2.x line spoke gRPC; the 3.x line speaks the aggregator gateway's `/api/v1/...` REST API. The `4.0.0-dev.X` versions on npm are pre-release iterations of this rewrite that we ultimately stabilized as `3.0.0` to keep semver continuity from 2.x — see [packages/sdk-js/CHANGELOG.md](https://github.com/AvaProtocol/ava-sdk-js/blob/HEAD/packages/sdk-js/CHANGELOG.md) for the full rationale. The sections below still describe the 2.x gRPC client; an updated quick-start for the 3.x REST client is tracked in a follow-up doc PR.

> **[2.x — archived]** `ava-sdk-js` was a simple, type-safe wrapper around gRPC designed to simplify integration with Ava Protocol's AVS. It enabled developers to interact with Ava Protocol efficiently, whether on the client-side or server-side, and provided full TypeScript support for a seamless development experience.

---

## Archived 2.x documentation

The sections below describe the 2.x gRPC client and are kept for users still on that line. The 3.x REST client documentation is tracked in a follow-up doc PR; in the…
