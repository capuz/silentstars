---
repo: "apchrme/phoxiv"
name: "phoxiv"
description: "A comprehensive archive of high school physics olympiads."
readmeQualityOk: true
url: "https://github.com/apchrme/phoxiv"
homepage: "https://phoxiv.org/"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [63, 35]
stars: 10
forks: 6
openIssues: 9
closedIssues: 37
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-01-28T12:06:07Z"
lastCommitAt: "2026-10-14T02:24:33Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 89
undervaluedScore: 69
maintainers: ["apchrme"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e14818ebf7a2caf2464b62ba55739f6ec950d8d995cdf9639959efcd566b06f/apchrme/phoxiv"
---

# phoXiv

phoXiv aims to be a comprehensive archive of high-school physics olympiad
problems. The main goal is the most complete and up-to-date set of files for the
canonical olympiads. A secondary goal is to showcase the lesser-known ones.

Live at **[phoxiv.org](https://phoxiv.org)**.

## What the site does

- **Browse.** `/olympiads` lists every olympiad: international, regional,
  national and open. Each olympiad's page lists its years, and each year lists
  its problems with the papers, solutions and links attached. Files are served
  from `cdn.phoxiv.org`.
- **Search, from ⌘K.** There are two modes:
  - The default mode fuzzy-matches problems by olympiad, year, number and title. It runs entirely in the browser, and can filter by topic and by whether you've done a problem.
  - _Deep search_ matches the text inside every uploaded document. Its results are files, not problems, because one PDF often holds a whole year's problems.
- **Track progress.** Signed-in visitors can mark problems done, optionally with
  a score, and see per-year totals. Progress is private and never cached.
- **Contribute.** Contributors edit the olympiads assigned to them:
  - add years
  - upload and…
