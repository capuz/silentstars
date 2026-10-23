---
repo: "himyjan/yt-vsinger-singer-disover"
name: "yt-vsinger-singer-disover"
description: "yt song disover"
readmeQualityOk: true
url: "https://github.com/himyjan/yt-vsinger-singer-disover"
homepage: "https://yt-song-disover.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-01T12:27:29Z"
lastCommitAt: "2026-10-23T09:32:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 60
undervaluedScore: 38
maintainers: ["himyjan", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ead98e9258d44977731311ef7db86c46cb795d65426013d817bb091d74ad96e/himyjan/yt-vsinger-singer-disover"
---

# VSinger & Singer Tracker

A discovery and tracking platform for **virtual singers (VTuber / VSinger)** and
**real human singers / music producers**. It collects public performer profiles
and cross-platform identities from global rosters, then refreshes available
channel and media details from supported platform APIs.

- Collects VTuber singing streams, music videos, covers and original songs.
- Keeps the dataset **in the repository** as versioned JSON, so it is
  diffable, auditable and served directly from GitHub Pages.
- Searches it instantly with an inverted index built at pipeline time.
- Separates the **virtual** and **real** datasets, and splits everything by
  **region**. The app can filter channels and media by region and platform.
- Lets you link supported platform accounts to see the VTubers and singers you
  already follow.

---

## Quick start

```bash
npm install
cp .env.example .env        # add YOUTUBE_API_KEY
npm run dev:web             # the web app on :5173
```

The web app reads the committed dataset in `data/`. To refresh it:

```bash
npm run data:sync           # YouTube Data API v3 + youtubei.js + platform adapters
npm run data:index          # rebuild the…
