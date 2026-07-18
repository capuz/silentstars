---
repo: "WinstonFassett/stars"
name: "stars"
description: "Daily export of my GitHub starred repos"
readmeQualityOk: true
url: "https://github.com/WinstonFassett/stars"
homepage: "https://winstonfassett.github.io/stars/"
language: "CSS"
languages: ["CSS", "Svelte"]
languagePcts: [48, 37]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-09-03T01:11:58Z"
lastCommitAt: "2026-07-18T05:46:50Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 67
maintainers: ["WinstonFassett"]
openGraphImageUrl: "https://opengraph.githubassets.com/21971fb5e06a50094c6706111ed8137c8148b4f96dcc64b6f4d958333d51db71/WinstonFassett/stars"
---

# stars

Daily export of my GitHub starred repos in [stars.csv](https://github.com/WinstonFassett/stars/blob/HEAD/stars.csv)

**Browse them:** [winstonfassett.github.io/stars](https://winstonfassett.github.io/stars/) — a faceted browse/search UI over the dataset (Astro + Svelte 5, source in [`site/`](https://github.com/WinstonFassett/stars/blob/HEAD/site/)).

Or use GitHub's [Flat Viewer](https://github.com/githubocto/flat-viewer) at [`flatgithub.com/WinstonFassett/stars`](https://flatgithub.com/WinstonFassett/stars?filename=stars.csv&sort=%20starred_at%2Cdesc)

## ETL

GitHub Action [get-stars.yml](https://github.com/WinstonFassett/stars/blob/HEAD/.github/workflows/get-stars.yml) runs:

 - [get-stars.sh](https://github.com/WinstonFassett/stars/blob/HEAD/etl/get-stars.sh) uses `curl` to extract starred repositories 
 - [stars-to-csv.sh](https://github.com/WinstonFassett/stars/blob/HEAD/etl/stars-to-csv.sh) converts output to CSV using `jq`

## Site

The browse UI lives in [`site/`](https://github.com/WinstonFassett/stars/blob/HEAD/site/) — an Astro app with a Svelte 5 island. It reads
the repo-root `stars.csv` (copied to `public/data/` by the `syncdata` script on dev/build).…
