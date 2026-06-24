---
repo: "okwilkins/personal-website"
name: "personal-website"
description: "This repo contains the code for my personal website, www.okwilkins.dev."
url: "https://github.com/okwilkins/personal-website"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [55, 27]
topics: ["hugo", "obsidian-md", "python", "website"]
stars: 6
forks: 1
openIssues: 4
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-08-07T13:46:36Z"
lastCommitAt: "2026-06-24T00:21:31Z"
lastReleaseAt: "2023-03-07T23:19:52Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 70
undervaluedScore: 62
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/ac2291e00c8adf9f3fc9782262587849eb945d771eebb476a37704fa96156eca/okwilkins/personal-website"
---

# Personal Website

Welcome to my personal website repo that houses the [content](./content/), [processing](./personal_website/) and [workflows](./.github/workflows/) for [okwilkins.dev](https://www.okwilkins.dev/). All content is written in [Markdown](http://commonmark.org) and using [Hugo](https://gohugo.io/), the Markdown is converted into static HTML. The static HTML for my website can be [found here](https://github.com/okwilkins/okwilkins.github.io).

On a daily schedule, the Markdown files found in my [Zettelcasten](https://zettelkasten.de/posts/overview/) based notes system are processed via [Obsidan Export](https://github.com/zoni/obsidian-export) and brought into this repo. Please take a look at this [repository for more information](https://github.com/okwilkins/knowledge-system).

Python is also used to process the headers of my notes, so that they will work with Hugo. I went a bit overboard with the over engineering, see [here](./personal_website/tests/) and [here](./personal_website/file_section_factories.py)!

## Running the Website

1. [Install Hugo](https://gohugo.io/overview/installing/)
2. Clone this repository

```bash
git clone…
