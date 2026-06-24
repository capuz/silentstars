---
repo: "ether/ep_rss"
name: "ep_rss"
description: "RSS feeds for Etherpad pads"
url: "https://github.com/ether/ep_rss"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [63, 26]
stars: 6
forks: 4
openIssues: 0
closedIssues: 6
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2013-03-27T01:20:25Z"
lastCommitAt: "2026-06-24T00:21:08Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 85
maintainers: ["JohnMcLear", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/de2220f830e066bfa0ea49350b9886fa1d16f1202436a14d30deab4dfb2814f0/ether/ep_rss"
---

# RSS feeds for Etherpad pads

Adds an RSS 2.0 feed for every pad so readers can subscribe to changes
in any feed reader.

## Install

From your Etherpad root, install the plugin via the Etherpad plugin
manager:

```sh
pnpm run plugins i ep_rss
```

Or install from the admin UI: **Admin → Manage Plugins**, search for
`ep_rss`, click *Install*. Restart Etherpad after installing.

> ⚠️ Don't run `npm i` / `pnpm add` against this plugin from inside
> the Etherpad source tree — Etherpad tracks installed plugins
> through its own plugin manager, and hand-editing `package.json`
> can leave the server unable to start.

## Endpoints

Once installed, each pad exposes:

| Path | Behavior |
|---|---|
| `/p/<pad>/feed` | 200 with `Content-Type: application/rss+xml` and the current pad text as a single `<item>` |
| `/p/<pad>/rss` | 302 → `/p/<pad>/feed` |
| `/p/<pad>/feed.rss` | 302 → `/p/<pad>/feed` |
| `/p/<pad>/atom.xml` | 302 → `/p/<pad>/feed` |

The pad page itself also advertises the feed in `<head>` so feed
readers auto-discover it:

```html
<link rel="alternate" type="application/rss+xml" title="Pad RSS Feed" href="feed" />
```

## Settings

Optional. Add to `settings.json` to control…
