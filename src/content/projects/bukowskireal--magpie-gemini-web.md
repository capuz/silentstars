---
repo: "BUKOWSKIREAL/magpie-gemini-web"
name: "magpie-gemini-web"
description: "Gemini Web provider for Magpie with a local backend and experimental Argon support"
originalDescription: "Gemini Web provider for Magpie with a local backend and experimental Argon support"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/BUKOWSKIREAL/magpie-gemini-web"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [51, 48]
topics: ["gemini", "gemini-web", "magpie-plugin", "opencode-plugin"]
stars: 37
forks: 6
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-14T02:08:55Z"
lastCommitAt: "2026-10-16T08:27:29Z"
lastReleaseAt: "2026-10-15T13:47:16Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 35
maintainers: ["BUKOWSKIREAL"]
openGraphImageUrl: "https://opengraph.githubassets.com/7fddaccdaa7d57ff3a3b17e5dd609b1e638f4d579340e487b281e03806580a3e/BUKOWSKIREAL/magpie-gemini-web"
---

# magpie-gemini-web

Chinese | [English](https://github.com/BUKOWSKIREAL/magpie-gemini-web/blob/HEAD/README.en.md)

Use Gemini Web through your Google account in [Magpie](https://usemagpie.ai/). The plugin runs the [gemini-web2api-go](https://github.com/zexadev/gemini-web2api-go) backend locally, converting Gemini Web into an OpenAI-compatible API.

> **2026-10-16 update**: Google AI Pro subscribers who pay full price can now use `gemini-4-argon` directly in Antigravity. Similarly, you can use it directly through the Magpie reverse proxy.

## Getting started

1. Install **magpie-gemini-web** from the Magpie plugin marketplace.
2. Sign in to Gemini Web and select **"One-click configure local Gemini Web (recommended)"**. The plugin automatically downloads the optimized backend published by this project, verifies its SHA-256, and starts it in the background. You don't need to install Go or apply patches manually.
3. Copy the cookie as prompted. **Be sure to use an incognito / private window** (Firefox recommended):
   1. Open <https://gemini.google.com/app> in an incognito window and sign in with the Google account you want to use;
   2. Press F12 (⌥⌘I on macOS), switch to…
