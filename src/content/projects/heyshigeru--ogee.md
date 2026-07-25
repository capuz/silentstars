---
repo: "heyshigeru/ogee"
name: "ogee"
description: "Preview how pages look when shared, on every major platform."
readmeQualityOk: true
url: "https://github.com/heyshigeru/ogee"
homepage: "https://chromewebstore.google.com/detail/glncpeolnemlkojegffjlaccbcdpmnfe"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [77, 22]
topics: ["browser-extension", "chrome-extension", "link-preview", "manifest-v3", "og-image", "open-graph", "privacy", "social-preview", "svelte", "typescript"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-15T14:28:24Z"
lastCommitAt: "2026-07-25T06:00:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 22
maintainers: ["heyshigeru"]
openGraphImageUrl: "https://opengraph.githubassets.com/323f44bda72a9efe6914d442f80e2719e4262aa717371d7663eb22dd2f122dc9/heyshigeru/ogee"
---

<h1>OGee</h1>
  <p><em>Preview how pages look, everywhere.</em></p>
</div>

https://github.com/user-attachments/assets/9f2418f6-fef6-40d3-b731-1d2735c4c5b7

OGee is a Chromium extension that shows how the current page’s Open Graph link
card will look when it is shared. Open the popup on any page to see the real
thumbnail, title, description, and domain each platform would display, side by
side, in both light and dark themes.

## Features

- Previews eight platforms: Twitter (X), Facebook, LinkedIn, Slack, Discord,
  Google, WhatsApp, and Telegram.
- Reproduces each platform’s real image crop, title truncation, domain
  formatting, and fallbacks.
- Renders every card in both light and dark themes.
- Show or hide platforms and drag to reorder them.
- Downloads the OG image or copies its URL in one click.
- Runs entirely locally, with no network calls, no data collected, and a
  minimal permission set.

## Privacy

OGee reads only the page you explicitly open it on, and everything runs locally
in your browser:

- **No data collected.** Nothing is sent anywhere; there is no backend.
- **No `host_permissions`, no persistent content script.** Extraction is
  injected on demand via…
