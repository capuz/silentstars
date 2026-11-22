---
repo: "techtalkjp/techtalk.jp"
name: "techtalk.jp"
description: "website"
originalDescription: "website"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/techtalkjp/techtalk.jp"
homepage: "https://www.techtalk.jp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 19
forks: 2
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2021-08-30T02:30:54Z"
lastCommitAt: "2026-11-22T11:48:26Z"
lastReleaseAt: "2022-09-25T06:48:14Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 70
maintainers: ["coji"]
openGraphImageUrl: "https://opengraph.githubassets.com/3eb4465758d032cce4e130a18876ee4ec3846addfb427f211b63524e7d1982ef/techtalkjp/techtalk.jp"
---

# techtalk.jp

Corporate website of TechTalk Inc. (https://www.techtalk.jp).

## Structure

- [Remix 3](https://remix.run) (server rendering via `remix/component`, islands, Frame)
- Cloudflare Workers / D1
- Pages: top (`/`, `/en`), biography (`/biography`, `/en/biography`), privacy policy (`/privacy`)
- Inquiries are sent to the representative's Facebook via Messenger. The contact form was closed because it had become filled almost entirely with sales solicitations.
- Site premises (who to tell what, and which results may be published) are in `PRODUCT.md`. Visual rules are in `DESIGN.md`.

## Development

```sh
pnpm install
pnpm migrations:apply   # local D1
pnpm dev                # https://techtalk.localhost
pnpm validate           # fonts:ensure, then format, lint, typecheck, test, fonts:check
```

[Portless](https://github.com/vercel-labs/portless) starts a proxy and runs Wrangler on an open port. On first run, it asks you to register trust for the HTTPS certificate and to authenticate as administrator so it can use port 443. In Git worktrees, the worktree name is added to the URL, so use the URL shown at startup.
