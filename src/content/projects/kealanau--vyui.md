---
repo: "KealanAU/vyui"
name: "vyui"
description: "Lynx-native UI primitives for Vue, ported from reka-ui"
url: "https://github.com/KealanAU/vyui"
homepage: "https://vyui.dev"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [52, 45]
topics: ["components", "javascript", "lynx", "lynxjs", "ui", "vue", "mobile", "native"]
stars: 7
forks: 0
openIssues: 6
closedIssues: 16
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-05-28T08:45:19Z"
lastCommitAt: "2026-07-04T06:10:55Z"
lastReleaseAt: "2026-07-03T19:27:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 61
maintainers: ["KealanAU", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ac0d92a23531c45293c7258d2ea7d8b3023b149c4668fb1a1531bf4b783c058/KealanAU/vyui"
discussionCount: 2
---

# Vy UI

> Headless, accessible component primitives for [Vue-Lynx](https://lynxjs.org) — ByteDance's cross-platform native framework. Inspired by Reka UI, Radix UI, and the shadcn/ui distribution model.

**Vy UI** brings a Radix-style primitives layer to the Vue-Lynx ecosystem. Build native mobile apps for iOS, Android, and Web from a single Vue codebase, with components you own and can modify.

> ⚠️ **Status: pre-alpha.** Vue-Lynx itself is pre-alpha. APIs will change. Not production-ready.

***

## Why Vy UI

Vue-Lynx is the Vue binding for [Lynx](https://lynxjs.org), ByteDance's open-source native cross-platform framework (the same one powering parts of TikTok). It's a serious alternative to React Native for the 2M+ Vue developer community.

But the Lynx ecosystem currently has no extensive UI component library. There's no Radix, no shadcn/ui, no Vant equivalent for Vue-Lynx. Vy UI fills that gap:

* **Headless primitives** for behavior, accessibility, and composition

* **Native-first** — designed for Lynx's `<view>` and `<text>` rendering model, not retrofitted from web

* **Styled components on top** via `@vyui/kit`, with `@vyui/core` providing the underlying primitive…
