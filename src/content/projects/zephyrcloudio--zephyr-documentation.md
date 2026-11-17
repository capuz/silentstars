---
repo: "ZephyrCloudIO/zephyr-documentation"
name: "zephyr-documentation"
description: "Documentation for Zephyr Cloud"
readmeQualityOk: true
url: "https://github.com/ZephyrCloudIO/zephyr-documentation"
homepage: "https://docs.zephyr-cloud.io/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["deployment", "microfrontend", "observability", "orchestration", "zephyrcloud"]
stars: 11
forks: 19
openIssues: 3
closedIssues: 14
watchers: 2
contributors: 32
recentReleases: 0
createdAt: "2024-03-22T20:23:10Z"
lastCommitAt: "2026-11-17T14:47:39Z"
lastReleaseAt: "2025-03-17T19:19:52Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 92
undervaluedScore: 86
maintainers: ["renovate[bot]", "Nsttt", "ryok90"]
openGraphImageUrl: "https://opengraph.githubassets.com/081a81df84e53a1ea5a7b063093d373735e84db529b7e704280b69060532a21c/ZephyrCloudIO/zephyr-documentation"
---

# Zephyr Cloud Docs

Welcome to the Zephyr Cloud documentation repository.

## Building docs

Built using [Rspress](https://rspress.dev/).
Run:

```bash
pnpm install
ZE_DISABLED=true pnpm build
```

`ZE_DISABLED=true` builds the docs without uploading them to Zephyr. Omit it only when you intend to publish a build.

## Analytics

Client analytics now use PostHog (`posthog-js`) instead of Google Analytics.

- `PUBLIC_POSTHOG_KEY` (required to enable tracking)
- `PUBLIC_POSTHOG_HOST` (optional)
- `ui_host` is hardcoded in app init to `https://us.posthog.com`

## Sitemap Note

Because sitemap is not visible to the bundler (for now). We need to manually update
the site map file in the root of the repo when adding pages.

## Contributors
