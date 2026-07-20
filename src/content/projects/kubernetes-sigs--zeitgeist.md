---
repo: "kubernetes-sigs/zeitgeist"
name: "zeitgeist"
description: "Zeitgeist: the language-agnostic dependency checker"
readmeQualityOk: true
url: "https://github.com/kubernetes-sigs/zeitgeist"
homepage: "https://godoc.org/sigs.k8s.io/zeitgeist"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["k8s-sig-release"]
stars: 205
forks: 28
openIssues: 0
closedIssues: 25
watchers: 8
contributors: 405
recentReleases: 0
createdAt: "2019-08-19T13:20:18Z"
lastCommitAt: "2026-07-20T06:34:12Z"
lastReleaseAt: "2019-11-12T18:06:55Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 44
maintainers: ["dependabot[bot]", "kubernetes-prow[bot]", "k8s-ci-robot"]
openGraphImageUrl: "https://opengraph.githubassets.com/63a64415f1d2395f9b6115fc8debc7f75f082d1eb617e53a62434103256e7585/kubernetes-sigs/zeitgeist"
---

# Zeitgeist

([/ˈzaɪtɡaɪst/](https://en.wikipedia.org/wiki/Help:IPA/English)) is a language-agnostic dependency checker that keeps track of external dependencies across your project and ensure they're up-to-date.

- [Rationale](#rationale)
- [What is Zeitgeist](#what-is-zeitgeist)
- [Installation](#installation)
- [Supported upstreams](#supported-upstreams)
- [Supported version schemes](#supported-version-schemes)
- [When is Zeitgeist _not_ suggested](#when-is-zeitgeist-not-suggested)
- [Naming](#naming)
- [Releasing](#releasing)
- [Credit](#credit)
- [To do](#to-do)
- [Community, discussion, contribution, and support](#community-discussion-contribution-and-support)
  - [Code of conduct](#code-of-conduct)

## Rationale

More and more projects nowadays have external dependencies, and the best way to ensure stability and reproducibility is to pin these dependencies to a specific version.

However, this leads to a new problem: the world changes around us, and new versions of these dependencies are released _all the time_.

For a simple project with a couple of dependencies, a team can usually keep up to speed by following mailing lists or Slack channels, but for larger projects this…
