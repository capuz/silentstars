---
repo: "kueda/underfoot"
name: "underfoot"
description: "App for revealing the hydrological and geological world beneath your feet."
readmeQualityOk: true
url: "https://github.com/kueda/underfoot"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [62, 36]
stars: 13
forks: 1
openIssues: 12
closedIssues: 36
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2016-07-18T03:16:42Z"
lastCommitAt: "2026-10-29T05:49:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 66
maintainers: ["kueda", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe5d57a013542647af92783022c26af3a2cb07018071096d48cc0a8318972e01/kueda/underfoot"
---

# underfoot
Underfoot is a mobile app for revealing the hydrological and geological world beneath your
feet. Well, sort of. It's mostly just something I tinker with in my spare time. It'll probably
never be done. If you're interested in a more fully-functional app for geological exploration,
check out [rockd](https://rockd.org).

Still reading? Underfoot runs at [underfoot.rocks](https://underfoot.rocks), and this repo has
both halves of it:

- [`data/`](https://github.com/kueda/underfoot/blob/HEAD/data/): data prep. Python scripts that download geologic and hydrologic sources,
  process them, and publish map packs. See [data/README.md](https://github.com/kueda/underfoot/blob/HEAD/data/README.md).
- [`web/`](https://github.com/kueda/underfoot/blob/HEAD/web/): the Progressive Web App that downloads those packs and displays them. See
  [web/README.md](https://github.com/kueda/underfoot/blob/HEAD/web/README.md).

The two share no code. The web app only depends on the manifest and pack files that `data/`
publishes to `static.underfoot.rocks`, so each half has its own tooling, and its commands run
from inside its directory.

## Git hooks
Run `npm install` at the repo root to install…
