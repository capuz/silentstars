---
repo: "roman-gardens/gre"
name: "gre"
description: "Gardens of the Roman Empire"
url: "https://github.com/roman-gardens/gre"
homepage: "http://roman-gardens.github.io/"
language: "HTML"
languages: ["HTML", "CSS"]
languagePcts: [51, 32]
stars: 5
forks: 21
openIssues: 15
closedIssues: 13
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-05-10T09:50:58Z"
lastCommitAt: "2026-06-25T01:32:58Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 88
undervaluedScore: 91
maintainers: ["kgjenkins"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f188e530cacf2fbd33fa2d74c3bf992dfc1a89991057dd762929bd26be9fcad/roman-gardens/gre"
---

# Gardens of the Roman Empire Project

This repo contains the source files of the *Gardens of the Roman Empire* project.

## Hugo

We are using [Hugo](https://gohugo.io) with a heavily modified [Mainroad](https://themes.gohugo.io/mainroad/) theme.  The rendered website can be viewed locally by running `hugo server` from the main directory.  (Run `hugo server -D` to include drafts.)  This will update the website files in the `/docs` directory.  Note that the any changes to the `/docs` will be ignored when committing changes -- this helps to keep the repo size down.

The public website is built by running a GitHub Action that uses Hugo to publish the site to a separate repo named `roman-gardens.github.io`.  There are also actions to publish updates to various test websites -- this can be used to test changes more thoroughly before updating the public website.

## Basic Development

Create a new garden page using the `hugo new` command, for example:

```hugo new place/achaea/athens/my_garden.md```

In this example, we have specified the full path to the province and sublocation (`achaea/athens`).  Some gardens may have more levels of hierarchical sublocations…
