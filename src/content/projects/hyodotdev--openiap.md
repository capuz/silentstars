---
repo: "hyodotdev/openiap"
name: "openiap"
description: "Standardized protocol for in-app purchases across all platforms — backed by Meta & Amazon"
readmeQualityOk: true
url: "https://github.com/hyodotdev/openiap"
homepage: "https://openiap.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [44]
topics: ["cross-platform", "iap", "in-app-purchase", "in-app-purchases", "android", "apple", "google", "ios", "amazon", "fireos"]
stars: 155
forks: 31
openIssues: 4
closedIssues: 96
watchers: 2
contributors: 19
recentReleases: 0
createdAt: "2025-08-12T10:53:56Z"
lastCommitAt: "2026-10-09T10:50:15Z"
lastReleaseAt: "2025-10-20T13:19:04Z"
status: "thriving"
tags: ["funded"]
healthScore: 98
undervaluedScore: 46
maintainers: ["hyochan", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e1b3365e83e943e84cf4c7a60fbe56b926ecca5b87bb067d0f856de5fe0e731/hyodotdev/openiap"
fundingLinks: ["GITHUB:https://github.com/hyodotdev", "OPEN_COLLECTIVE:https://opencollective.com/openiap", "CUSTOM:https://www.paypal.me/dooboolab"]
discussionCount: 17
---

# OpenIAP

---

OpenIAP is two protocols for in-app purchases across platforms, frameworks, and emerging technologies: the Client Protocol for what an app calls, and the Commerce Protocol for what servers exchange.

## Apps built with OpenIAP

[**+ 3,300+ public GitHub dependents**](https://github.com/hyodotdev/openiap/network/dependents?package_id=UGFja2FnZS0zNjkzNzc2NQ%3D%3D "GitHub's publicly visible estimates, summed by package. Shared repositories may count more than once. Updated 2026-10-09.")

## Overview

The two protocols standardize IAP implementations to reduce fragmentation and enable consistent behavior across every platform. The Client Protocol gives an app one purchase API whatever the store; the Commerce Protocol gives backends one contract for verification, entitlements, and subscription lifecycle events. This is especially critical in the AI coding era where standardized APIs enable better code generation.

## Protocols

The contracts every package and library implements live under `specs/`. They are publishable, implementation-independent, and never deployed as services:

- **[Client Protocol](https://github.com/hyodotdev/openiap/blob/HEAD/specs/client)** —…
