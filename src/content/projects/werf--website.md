---
repo: "werf/website"
name: "website"
description: "werf website"
readmeQualityOk: true
url: "https://github.com/werf/website"
homepage: "https://werf.io"
language: "Liquid"
languages: ["Liquid"]
languagePcts: [69]
topics: ["werf", "documentation"]
stars: 32
forks: 40
openIssues: 6
closedIssues: 42
watchers: 3
contributors: 35
recentReleases: 0
createdAt: "2020-09-07T14:33:56Z"
lastCommitAt: "2026-11-13T18:30:11Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 59
maintainers: ["alexey-igrychev", "NopeCharon", "odiora"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e535a8c178ec6bc85dd7113cb2c962c0ba2e96e99a124f758d3d33d24147b20/werf/website"
---

# werf website

This repository contains files required to build the [werf CI/CD tool website](https://werf.io/)
and run it locally.

It includes all of website pages with the only exception for the official
[werf documentation](https://werf.io/docs/) which can be found
in the [main werf](https://github.com/werf/werf/tree/main/docs) repo since it's
versioned and provided together with werf releases themselves (e.g. we have
the documentation for werf v1.2.51, v1.1.23, and so on).

The website is based on [Jekyll](https://jekyllrb.com/). We have also implemented our
own [jekyll_include_plugin](https://github.com/flant/jekyll_include_plugin).

## werf guides

This repo is also as a source for the content displayed in our [werf guides](https://werf.io/guides/)
which are in-depth free online tutorials to learn how you can use werf to deploy
your apps to Kubernetes.

werf guides will work even for those who have no experience with Kubernetes. Combining
the theory and practice of development (Dev) and operation (Ops), they will guide you
step by step from learning the basics of werf and Kubernetes to fully benefit
from running highly available apps in K8s clusters.

werf guides provide…
