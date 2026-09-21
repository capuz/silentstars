---
repo: "victorantos/AngJobs"
name: "AngJobs"
description: "Job board for hackers"
readmeQualityOk: true
url: "https://github.com/victorantos/AngJobs"
homepage: "https://angjobs.com"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [55, 28]
stars: 78
forks: 32
openIssues: 3
closedIssues: 48
watchers: 7
contributors: 5
recentReleases: 1
createdAt: "2014-12-05T07:07:15Z"
lastCommitAt: "2026-09-21T09:14:44Z"
lastReleaseAt: "2026-09-01T09:23:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 92
undervaluedScore: 54
maintainers: ["victorantos", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9c6bf407bf729e7908c4ba579cf1b8b428b6d7d072866206c196f0c2eb75722/victorantos/AngJobs"
---

</p>

</p>

**Jobs for hackers.** Every listing from Hacker News' monthly *"Ask HN: Who is hiring?"* thread, turned into a fast, searchable job board — one page per job, three months live at a time.

Running since **December 2014** — now in its twelfth year, and on its third engine: Angular, then VuePress, now [plain](https://plain-cms.com).

**[angjobs.com](https://angjobs.com)** · **[Browse jobs](https://angjobs.com/jobs/)** · **[RSS](https://angjobs.com/jobs/rss.xml)** · **[Post a job](https://angjobs.com/post-a-job/)** · **[About](https://angjobs.com/about/)**

## Built on plain CMS

AngJobs runs on **[plain](https://plain-cms.com)**, a Git-native CMS: **this repo is the whole website**. Every job is a Markdown file in `content/jobs/`, every setting is JSON, and `node build.js` turns the lot into a static site. There is no database and no CMS server to patch — one runtime dependency (`marked`), and the published pages work with JavaScript switched off.

It is a static site *with a backend*, though — two small services do the things a folder of files can't:

| Service | What it does |
| ------- | ------------ |
| **`api.victorantos.com`** | Receives job applications. Every job…
