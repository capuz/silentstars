---
repo: "fxedel/vaterstetten-in-zahlen"
name: "vaterstetten-in-zahlen"
description: "https://vaterstetten-in-zahlen.de is an open source project whose goal is to collect and visualize publically available data about the municipality of Vaterstetten."
readmeQualityOk: true
url: "https://github.com/fxedel/vaterstetten-in-zahlen"
homepage: "https://vaterstetten-in-zahlen.de"
language: "R"
languages: ["R", "Python"]
languagePcts: [73, 26]
topics: ["vaterstetten", "r", "rshiny", "rshinydashboard", "datavisualization", "hacktoberfest", "python"]
stars: 8
forks: 1
openIssues: 10
closedIssues: 13
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2021-01-25T15:26:16Z"
lastCommitAt: "2026-07-05T20:17:46Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 91
undervaluedScore: 72
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1ae0f58b0675de3032844a870460d240d649a616bbc1236803fc836543a4a31/fxedel/vaterstetten-in-zahlen"
discussionCount: 0
---

# Vaterstetten in Zahlen

vaterstetten-in-zahlen.de is an open source project whose goal is to visualize (and gather, if needed) publically available data about the municipality of Vaterstetten.

## Development

### Initial setup

Install the newest version of R via the CRAN package, see https://www.digitalocean.com/community/tags/r?type=tutorial&subtype=tutorial

Make sure the following packages are installed:

```sh
apt install libcurl4-openssl-dev libgdal-dev libssl-dev libudunits2-dev libxml2-dev gfortran libkrb5-dev
```

Then, start an R session and install the needed R packages:

```R
install.packages("renv")
renv::restore()
```

### Start web server

```sh
Rscript server.R
```

### Tools

If you also want to be able to use the python tools, make sure to have Python 3.12 installed. Then, install pipenv and install the local dependencies:

```sh
pipx install pipenv
pipenv install
```

To run the data poller:

```sh
pipenv run python tools/poll.py [OPTIONS | -h]
```

## License

This project is published under the MIT license, see [LICENSE.md](https://github.com/fxedel/vaterstetten-in-zahlen/blob/HEAD/LICENSE.md). However, there are some exceptions:

* The file…
