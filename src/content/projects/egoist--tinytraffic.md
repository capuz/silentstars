---
repo: "egoist/tinytraffic"
name: "tinytraffic"
description: "self-host web analytics in a single binary"
readmeQualityOk: true
url: "https://github.com/egoist/tinytraffic"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [59, 39]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-10T09:39:00Z"
lastCommitAt: "2026-11-10T11:38:00Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 80
undervaluedScore: 19
maintainers: ["egoist"]
openGraphImageUrl: "https://opengraph.githubassets.com/215175c4e14a37779173dee63aba66fefb21955c5ba4008efb7d38252fd7873e/egoist/tinytraffic"
fundingLinks: ["GITHUB:https://github.com/egoist"]
---

# tinytraffic

Simple, privacy-friendly web analytics for personal use. One binary, one
DuckDB file, no cookies.

- **Tracker**: ~1 KB gzipped. Pageviews (including SPA navigation), outbound
  link clicks and custom events. Accepts Plausible's event format, so existing
  Plausible integrations work.
- **Privacy**: no cookies or storage. Visitors are identified by
  `hash(daily salt, site, IP, user agent)`. The salt rotates every day, and the
  IP is never stored. Referrers keep their domain and path; query strings are
  dropped.
- **Dashboard**: visitors, visits, pageviews, bounce rate and visit duration
  over time, plus sources, referrers, pages, locations, devices and goals.
  Click any row to filter. Light and dark themes, works on phones.
- **API**: API keys for scripts and other apps. Read stats, manage sites, and
  send events from your server. See [docs/api.md](https://github.com/egoist/tinytraffic/blob/HEAD/docs/api.md).
- **Stack**: Go + DuckDB backend. The dashboard is TanStack Start (SPA mode)
  with Solid and shadcn-style components, embedded in the binary.

## Quick start

With Docker:

```sh
docker run -d --name tinytraffic -p 8080:8080 -v tinytraffic:/data \
  -e…
