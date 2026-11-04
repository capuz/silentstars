---
repo: "himyjan/yt-vsinger-singer-disover"
name: "yt-vsinger-singer-disover"
description: "yt song disover"
readmeQualityOk: true
url: "https://github.com/himyjan/yt-vsinger-singer-disover"
homepage: "https://yt-song-disover.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-01T12:27:29Z"
lastCommitAt: "2026-11-04T11:28:42Z"
status: "thriving"
tags: []
healthScore: 73
undervaluedScore: 49
maintainers: ["himyjan", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea889376106d77d5af9e36bcaed1d5e6caf5e44903bf416805c06b70f6903cb8/himyjan/yt-vsinger-singer-disover"
---

# VSinger & Singer Tracker

A discovery and tracking platform for **virtual singers (VTuber / VSinger)** and
**real human singers / music producers**. It collects public performer profiles
and cross-platform identities from global rosters, then refreshes available
channel and media details from supported platform APIs.

- Collects VTuber singing streams, music videos, covers and original songs.
- Keeps the dataset **in the repository** as versioned JSON, so it is
  diffable, auditable and served directly from a static host — GitHub Pages,
  and a separate deployment on Vercel with real cache headers.
- Searches it instantly with an inverted index built at pipeline time.
- Separates the **virtual** and **real** datasets, and splits everything by
  **region**. The app can filter channels and media by region and platform.
- Lets you link supported platform accounts to see the VTubers and singers you
  already follow.

---

## Quick start

```bash
npm install
cp .env.example .env        # optional platform API credentials
npm run dev:web             # the web app on :5173
```

The web app reads the committed dataset in `data/`. To refresh it:

```bash
npm run data:sync           #…
