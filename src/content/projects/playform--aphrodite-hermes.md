---
repo: "PlayForm/Aphrodite-Hermes"
name: "Aphrodite-Hermes"
description: "CCR compression plugin for Hermes Agent - 13 tools, opt-in context engine, dual-proxy (cache/token), Rust dylib + thin Python loader."
readmeQualityOk: true
url: "https://github.com/PlayForm/Aphrodite-Hermes"
homepage: "https://Aphrodite.PlayForm.Cloud"
language: "Python"
languages: ["Python"]
languagePcts: [84]
topics: ["aphrodite", "hermes", "hermes-agent", "hermes-plugin"]
stars: 17
forks: 3
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-17T19:10:02Z"
lastCommitAt: "2026-11-14T10:45:34Z"
lastReleaseAt: "2026-09-29T22:34:22Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 58
maintainers: ["NikolaRHristov", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/05188544edd1617248aed2cd3120c604dccbcaff53583d75a14bc6f55deb2a49/PlayForm/Aphrodite-Hermes"
fundingLinks: ["CUSTOM:https://buy.stripe.com/3csdQZfzn2LDaBOcMN", "OPEN_COLLECTIVE:https://opencollective.com/playform-cloud-collective"]
discussionCount: 0
---

# Aphrodite 💋 Hermes Plugin

> [!NOTE]
>
> **CCR compression plugin for Hermes Agent - thin Python loader + Rust dylib.**
> Sub-ms tool output compression, multi-type classifier, 13 tools, 6 hooks,
> default-on context engine, TOML-driven templates, auto-expand, live
> containers, prompt knobs, recursion/body caps, optional Rhai scripting.
> Skills ship dev-side, not with the plugin.

Aphrodite intercepts tool output before it reaches the LLM and replaces it with
compact, structured previews. The agent sees 15 tokens of metadata instead of
500 tokens of raw text - and retrieves the full content only when it actually
needs it. **All compression logic runs in the Rust dylib.**

**Priced retrieval:** every `<<<CCR:hash|type|size>>>` marker's `size` is its
**retrieval cost** - resolving it re-adds that many bytes to context. Previews
answer the structural questions (succeeded? which files? how many? what
shape?) for free; deferral is safe - markers persist and stay retrievable;
batch the retrievals you actually need into one turn. Never re-read a file
you hold a marker for.

## Features ⚡

- **CCR compression** - tool output becomes a compact
  `<<<CCR:hash|type|size>>>` marker; the…
