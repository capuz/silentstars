---
repo: "Shuunen/snippets"
name: "snippets"
description: "My personal configs, snippets and manuals"
readmeQualityOk: true
url: "https://github.com/Shuunen/snippets"
homepage: "https://github.com/Shuunen/snippets"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["configuration-files", "configuration-management", "personal-assistant"]
stars: 7
forks: 4
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2015-11-18T12:56:38Z"
lastCommitAt: "2026-11-01T10:44:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 85
maintainers: ["Shuunen", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/97b22f5df6043793faf5bb69911e23c3895806a2936af2e8bdac1d3202d53089/Shuunen/snippets"
---

# Snippets

> My personal snippets, tests, and things that are too small to have their own repo :)

## Tools

### Repo Banner

In a terminal, cd to the root of your repo and run:

```bash
node path/to/snippets/src/repo-banner.cli.js
```

Here is the output of the cli running on this repository :

It will generate a `<project-name>-banner.svg` file that you can use in your README.md file, here is the output for this repository :

### Catalog Media

Scan your movie and tv show folders and build a single `catalog-media.html` page, with posters, ratings and the best resolution found for each title.

```bash
# create src/catalog-media.env, see the example in the header of src/catalog-media.cli.ts
bun path/to/snippets/src/catalog-media.cli.ts
```

When a title is in several folders, the copy with the best quality wins. Posters and video resolutions are cached in `src/.cache/catalog-media`, add `--no-cache` to ignore it. Needs `ffprobe` to read resolutions that are not in the file name.

### Bench Drive

Benchmark a drive or a USB key : sequential and random read/write speeds, sustained write speed (size of the fast write cache) and small files rate. Existing data is never touched, a…
