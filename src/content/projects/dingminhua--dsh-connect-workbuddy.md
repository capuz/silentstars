---
repo: "dingminhua/dsh-connect-workbuddy"
name: "dsh-connect-workbuddy"
description: "Connect locally signed-in WorkBuddy models to DeepSeek Harness with a read-only credits overview and model management."
originalDescription: "Connect locally signed-in WorkBuddy models to DeepSeek Harness with a read-only credits overview and model management."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/dingminhua/dsh-connect-workbuddy"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["dsh-plugin", "dsh-plugin-market", "dsh-plugins"]
stars: 335
forks: 39
openIssues: 8
closedIssues: 79
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-08-28T13:37:00Z"
lastCommitAt: "2026-10-21T17:30:40Z"
lastReleaseAt: "2026-09-23T17:34:50Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 98
undervaluedScore: 30
maintainers: ["eghrhegpe", "dingminhua"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4c3f8255130d2e3fa87e580ca2f5c115a9a68fccf812eaaf494dd40b0369868/dingminhua/dsh-connect-workbuddy"
---

An independent [DeepSeek Harness (DSH)](https://github.com/deepseek-ai/deepseek-harness) bundle plugin. It connects the WorkBuddy accounts signed in on this machine (**both the China and international editions of WorkBuddy AI are supported**) to DSH's model selector. It also provides an account pool, checkable model management, and a set of read-only credit features: **on each refresh, the credit multiplier for each model is read automatically from the upstream catalog** (values like `x0.79`; the multipliers come entirely from upstream, and the plugin neither hardcodes nor guesses them), per-model toggles for image input, multi-account switching with automatic account rotation in the pool, daily check-in, and capsule-style read-only credit readouts on cards and in the input box. **The China and international editions are two parallel providers (`workbuddy` / `workbuddy-global`) and can be used at the same time.** The plugin settings card uses tabs to tell the two apart for unified management. You only need the local WorkBuddy login session, **or to log in once in a browser**.

## Risk Notice

> **WorkBuddy has started restricting requests from unofficial clients. This project does…
