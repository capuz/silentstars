---
repo: "OSGeo/grass-website"
name: "grass-website"
description: "Web site of GRASS project (deployed from this repo twice a day)"
readmeQualityOk: true
url: "https://github.com/OSGeo/grass-website"
homepage: "https://grass.osgeo.org"
language: "HTML"
languages: ["HTML"]
languagePcts: [72]
topics: ["osgeo", "grass-gis", "geospatial", "hugo", "grass-website", "hacktoberfest", "grass"]
stars: 19
forks: 72
openIssues: 18
closedIssues: 184
watchers: 22
contributors: 92
recentReleases: 10
createdAt: "2019-05-17T16:27:57Z"
lastCommitAt: "2026-08-15T04:03:42Z"
lastReleaseAt: "2026-08-11T16:04:24Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "funded", "release_machine", "fork_magnet"]
healthScore: 93
undervaluedScore: 75
maintainers: ["renovate[bot]", "cwhite911", "wenzeslaus"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/187248918/a5b1a75e-93ea-46d8-b528-8ee5b5190db1"
fundingLinks: ["CUSTOM:https://numfocus.org/donate-to-grass"]
---

# Hugo theme for GRASS website

This repository contains the code of the GRASS project website:
[https://grass.osgeo.org/](https://grass.osgeo.org/)

There are two ways to contribute; pick the path that matches your change:

- **Content contributors** edit or add pages (news, events, text). For simple
  Markdown changes you do **not** need a local build environment. Jump to
  [For content contributors](#for-content-contributors).
- **Website developers** change templates, styling, or the build itself and need
  to preview or build the site. Jump to
  [For website developers](#for-website-developers).

---

## For content contributors

Content lives in `content/` as Markdown (`.md`) files. HTML can be mixed into
Markdown for more advanced presentation. You can edit a file and open a pull
request without installing anything; a maintainer or CI will build the preview.

Useful references:

- [Hugo docs](https://gohugo.io/documentation/)
- [Markdown guide](https://www.markdownguide.org/basic-syntax/)
- [GRASS website style guide](https://grass.osgeo.org/about/theme/)

### Add a news item

1. Go to `content/news/`.
2. Create a new `.md` file (date-prefixed names are the convention, e.g.…
