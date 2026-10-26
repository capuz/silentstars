---
repo: "tanem/react-nprogress"
name: "react-nprogress"
description: ":hourglass: A React primitive for building slim progress bars."
readmeQualityOk: true
url: "https://github.com/tanem/react-nprogress"
homepage: "https://npm.im/@tanem/react-nprogress"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [70, 30]
topics: ["animation", "component", "higher-order-component", "hoc", "hook", "hooks", "javascript", "loading", "nprogress", "progress"]
stars: 466
forks: 20
openIssues: 2
closedIssues: 20
watchers: 1
contributors: 6
recentReleases: 9
createdAt: "2018-09-30T17:28:01Z"
lastCommitAt: "2026-10-26T09:17:07Z"
lastReleaseAt: "2026-10-26T09:17:11Z"
status: "thriving"
tags: ["legacy_hero", "release_machine"]
healthScore: 95
undervaluedScore: 41
maintainers: ["renovate[bot]", "tanem", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0392d2884e1ad514cca98b1deb619d532b91842511ac6b34b35b24da33d8a2e/tanem/react-nprogress"
---

# react-nprogress

> A React primitive for building slim progress bars.

[Background](#background) | [When to Use This](#when-to-use-this) | [Usage](#usage) | [API](#api) | [Live Examples](#live-examples) | [Installation](#installation) | [Contributing](#contributing) | [License](#license)

## Background

This is a React port of [rstacruz](https://github.com/rstacruz)'s [`nprogress`](https://github.com/rstacruz/nprogress) module. It exposes an API that encapsulates the logic of `nprogress` and renders nothing, allowing consumers to implement their own rendering.

Two versions of `nprogress` are in circulation and they trickle differently. The 2014 npm release, `0.2.0`, adds a random amount of at most `0.02` every 800ms. The repository's master branch, never published to npm, adds tiered amounts every 200ms. This library mirrors master, so a side by side comparison against the npm package or the official demo page will show a different pace. The [`increment`](#increment) option covers the `0.2.0` pacing if you prefer the older feel.

## When to Use This

This package is a headless primitive. It renders no markup and ships no CSS, supplying only the pacing state: a `progress` value…
