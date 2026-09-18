---
repo: "GSA/resources.data.gov"
name: "resources.data.gov"
description: "Resources for open data and enterprise data inventory management"
readmeQualityOk: true
url: "https://github.com/GSA/resources.data.gov"
homepage: "https://resources.data.gov/"
language: "HTML"
languages: ["HTML", "SCSS"]
languagePcts: [58, 25]
stars: 82
forks: 133
openIssues: 30
closedIssues: 87
watchers: 26
contributors: 34
recentReleases: 0
createdAt: "2019-06-13T01:14:46Z"
lastCommitAt: "2026-09-18T14:03:11Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 55
maintainers: ["SueValente", "FuhuXia", "jpyuda"]
openGraphImageUrl: "https://opengraph.githubassets.com/430a30c378b74c48d936687ccfb799876bd25b0dcc7326c955e79c4778400d05/GSA/resources.data.gov"
---

# resources.data.gov

Resources for open data and enterprise data inventory management.

## Usage

### Editing content

This site uses Netlify to manage its editorial workflow. Content is added and
edited in collections via the Netlify interface, which can be accessed by
approved contributors at
[resources.data.gov/admin](https://resources.data.gov/admin). Collections are
managed via the config.yml file in pages/admin.

## Branches and environments

Environment | Branch | Description
----------- | ------ | -----------
resources.data.gov | `main` | The production instance of r.d.g.
resources-staging.data.gov | `develop` | A preview site used for ad-hoc development or significant changes requiring partner review.
\* | feature branches | Feature branches to preview a single change.

Federalist builds all branches and creates previews for them. Two branches are
special, `main` which is automatically deployed by Federalist to
[resources.data.gov](https://resources.data.gov/) and `develop` which is used as
a staging branch for significant changes.

Deploying to staging is not required. It might be useful for previewing
significant changes to the site that require partner review.

##…
