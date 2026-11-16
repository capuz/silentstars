---
repo: "itsreverence/ha-codex-assist"
name: "ha-codex-assist"
description: "Unofficial Home Assistant Assist agent using ChatGPT/Codex subscription access"
readmeQualityOk: true
url: "https://github.com/itsreverence/ha-codex-assist"
homepage: "https://github.com/itsreverence/ha-codex-assist/wiki"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["assist", "chatgpt", "codex", "custom-integration", "hacs", "home-assistant", "voice-assistant"]
stars: 26
forks: 7
openIssues: 1
closedIssues: 9
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-06-03T17:06:25Z"
lastCommitAt: "2026-11-16T04:26:10Z"
lastReleaseAt: "2026-06-04T04:21:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 47
maintainers: ["itsreverence", "dependabot[bot]", "mattrossman"]
openGraphImageUrl: "https://opengraph.githubassets.com/390eb8724c8a2ebe44e7816e73e33f4d4e74aba080e50911b876603c96cc8900/itsreverence/ha-codex-assist"
---

# Codex Assist for Home Assistant

Use OpenAI Codex / ChatGPT as a Home Assistant Assist conversation agent and AI Task provider.

Codex Assist signs in with Codex-style ChatGPT device-code auth. By default it keeps device control inside Home Assistant's normal exposed-entity safety model, and it does not require an OpenAI API key.

> Experimental: this project is not affiliated with OpenAI or Home Assistant. Codex backend compatibility may change with upstream Codex updates.

## Quick start

You need Home Assistant `2026.6.0` or newer and a ChatGPT account or plan with Codex access. Home Assistant `2026.11` and newer install it from the built-in [Marketplace](https://www.home-assistant.io/integrations/marketplace/). Older versions need [HACS](https://www.hacs.xyz/docs/use/download/download/).

### 1. Install

Codex Assist is in the default catalog, so you do not add a custom repository.

On Home Assistant `2026.11` or newer:

1. Go to **Settings → Marketplace**, or use the Marketplace button above.
2. Search for **Codex Assist**, open it, and select **Install**. Confirm the version, then select **Install** again.

On Home Assistant `2026.10` or older:

1. In the Home Assistant…
