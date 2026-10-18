---
repo: "akspad/newsletter-to-podcast"
name: "newsletter-to-podcast"
description: "Turn newsletters and blogs into podcasts for free. Full article narration needs no API key; optional spoken summaries use Gemini."
readmeQualityOk: true
url: "https://github.com/akspad/newsletter-to-podcast"
homepage: "https://akspad.github.io/newsletter-to-podcast/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["newsletter", "newsletter-automation", "podcast", "python", "rss", "rss-feed", "rss-generator", "substack", "text-to-speech", "tts"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-05T21:17:33Z"
lastCommitAt: "2026-10-18T08:16:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 33
maintainers: ["akspad"]
openGraphImageUrl: "https://opengraph.githubassets.com/3efe8f75e18e1bb02341e96a176e0f478f2dc7d093512922ec23ace8175cfaa3/akspad/newsletter-to-podcast"
---

# Newsletter to Podcast

Turn newsletters and blogs into an RSS podcast **for free**, then listen in your usual podcast app.

Full article narration uses Edge TTS, with **no API key or paid TTS subscription required**. Optional spoken summaries can use [Gemini's free tier](https://ai.google.dev/gemini-api/docs/pricing), subject to eligible models and quotas.

Choose **spoken summaries** or **full article narration**. Set a maximum episode length; long full articles become multiple parts rather than losing the rest of the article.

**[Listen to the demo](https://akspad.github.io/newsletter-to-podcast/)** · [Quick start](#quick-start-hear-a-sample-in-under-a-minute)

- Reads Substack publications, RSS and Atom feeds, and simple article listing pages.
- Generates summaries with Gemini and audio with Edge TTS.
- Produces MP3s with podcast loudness normalization and an RSS feed.
- Runs locally or on a configurable schedule in your own GitHub repository: four times a day by default.
- Keeps your source list, credentials, and processing state out of the shared code.

This is a Python command-line project, not a hosted service. It reads the text a source makes available to you; it does…
