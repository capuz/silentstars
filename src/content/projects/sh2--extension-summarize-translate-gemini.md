---
repo: "sh2/extension-summarize-translate-gemini"
name: "extension-summarize-translate-gemini"
description: "Chrome extension to summarize and translate web pages. Uses Gemini or an OpenAI-compatible API as the backend."
url: "https://github.com/sh2/extension-summarize-translate-gemini"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [85]
stars: 97
forks: 23
openIssues: 0
closedIssues: 35
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2024-02-18T12:40:11Z"
lastCommitAt: "2026-06-28T09:07:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 49
maintainers: ["sh2"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1a174e46697e6a30c2329d01c9702e37a96854c084241fc14c912d05a97a6a1/sh2/extension-summarize-translate-gemini"
fundingLinks: ["GITHUB:https://github.com/sh2"]
---

# extension-summarize-translate-gemini

Chrome extension to summarize and translate web pages. Uses Gemini or an OpenAI-compatible API as the backend.

## FAQ

### Pop-up windows are not appearing from the context menus in Firefox

To open a popup from the context menu in Firefox, set `extensions.openPopupWithoutUserGesture.enabled` to true in `about:config`.

This issue was tracked as Firefox [Bug 1799344](https://bugzilla.mozilla.org/show_bug.cgi?id=1799344) and was fixed in Firefox 149.

### What is Auto-fallback?

The Gemini API Free Tier has strict [rate limits](https://ai.google.dev/gemini-api/docs/rate-limits). The Auto-fallback feature automatically tries alternative models when the current model hits its rate limit (HTTP 429 error).

When you select **"Gemini Flash with Gemma Fallback"** in the options, the extension will try models in this priority order:

1. Gemini 3.5 Flash (Thinking Minimal)
2. Gemini 3.1 Flash-Lite (Thinking Minimal)
3. Gemma 4 31B (Thinking Minimal)

Gemma models have more relaxed rate limits, so they serve as the final fallback option to ensure the extension remains functional even under heavy usage.

### How do I set up an OpenAI-compatible Base…
