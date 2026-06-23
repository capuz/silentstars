---
repo: "GSA/resources.data.gov"
name: "resources.data.gov"
description: "Resources for open data and enterprise data inventory management"
url: "https://github.com/GSA/resources.data.gov"
homepage: "https://resources.data.gov/"
language: "HTML"
languages: ["HTML", "SCSS"]
languagePcts: [58, 24]
stars: 76
forks: 127
openIssues: 32
closedIssues: 84
watchers: 25
contributors: 39
recentReleases: 0
createdAt: "2019-06-13T01:14:46Z"
lastCommitAt: "2026-06-23T23:27:10Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 56
maintainers: ["SueValente", "jpyuda", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/aef9c9ba6b96bc606dffa4b24107ece8dc3cc0d89a3a10f5e726f5da7443edcd/GSA/resources.data.gov"
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
