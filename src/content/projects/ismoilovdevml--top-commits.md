---
repo: "ismoilovdevml/top-commits"
name: "top-commits"
description: "Leaderboard of the most active GitHub committers in Uzbekistan, refreshed daily"
readmeQualityOk: true
url: "https://github.com/ismoilovdevml/top-commits"
homepage: "https://top-commits.vercel.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["github", "github-top-commits", "top-commits", "github-api", "leaderboard", "nextjs", "typescript", "uzbekistan"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-06-03T16:58:27Z"
lastCommitAt: "2026-09-04T08:09:04Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 74
maintainers: ["github-actions[bot]", "ismoilovdevml"]
openGraphImageUrl: "https://opengraph.githubassets.com/d30868164b5cf446fc6bf566bb70a9e5f68e59cb89e6e5ee5effb98f26371577/ismoilovdevml/top-commits"
---

# Top GitHub Committers

Leaderboards of the most active GitHub users, ranked by contribution count, for
**151 countries**. Built with Next.js, deployed on Vercel, and refreshed
automatically — a ranking is never more than a day behind its upstream source.

</p>

---

## Features

- **A choropleth of where GitHub users are.** 149 countries reachable, shaded by
  user count, with zoom, drag-to-pan and click-through to each leaderboard.
  Hovering a table row locates that country on the map, and vice versa.
- **149 countries.** Central Asia is prerendered and snapshot-backed; every other
  country committers.top publishes renders on first request and is then cached.
- **Two rankings.** `public` counts public contributions only; `private` also counts
  contributions to private repositories. Each is a separate upstream ranking, not a
  client-side re-sort.
- **Filters that live in the URL.** Search, ranking type, sort order and company are
  all query parameters, so a filtered view is shareable and the back button works.
- **Enriched cards.** Rank, contribution count, avatar, login, company and
  organizations — the last two pulled from the GitHub GraphQL API.
- **Per-country link…
