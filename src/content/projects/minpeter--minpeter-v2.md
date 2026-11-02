---
repo: "minpeter/minpeter.v2"
name: "minpeter.v2"
description: " personal website, blog, proj showcase"
readmeQualityOk: true
url: "https://github.com/minpeter/minpeter.v2"
homepage: "https://minpeter.com"
language: "MDX"
languages: ["MDX", "TypeScript"]
languagePcts: [48, 30]
topics: ["blog", "typing", "personal-website"]
stars: 17
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2023-11-20T06:02:03Z"
lastCommitAt: "2026-11-02T11:36:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 60
maintainers: ["minpeter", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a52b059eb62a1f86059e1ace68c748dedabc17b33ba043fe4f027582a4c7d45c/minpeter/minpeter.v2"
---

# minpeter.com

A personal website, blog, and side projects built with Next.js.

## Local preview

Run `pnpm preview` for a production-mode preview on port 8321, or
`PORT=8322 pnpm preview` to use another port. It builds and serves a standalone
snapshot, so later builds cannot delete assets used by an open preview.
Stop the preview before replacing it on the same port; its snapshot is removed
when the server exits. Don't leave `next start` serving this checkout's `.next`
while rebuilding it: old pages will request deleted JS/CSS chunks.

Preview snapshots live in the git-ignored `.amp/in/previews/` directory.
After a hard kill or machine crash, remove orphaned snapshots manually once
their preview processes have stopped. For hot reload, use `pnpm dev` instead.

## Inspired by ~

- [Gaudion](https://gaudion.dev/)
- [Shadcn](https://shadcn.com/)
- [Bepyan](https://bepyan.me/)
- [Paco](https://paco.me/)
