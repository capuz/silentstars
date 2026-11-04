---
repo: "b13/container"
name: "container"
description: "A TYPO3 Extension for creating custom nested content elements"
readmeQualityOk: true
url: "https://github.com/b13/container"
language: "PHP"
languages: ["PHP"]
languagePcts: [93]
stars: 185
forks: 88
openIssues: 24
closedIssues: 362
watchers: 25
contributors: 50
recentReleases: 0
createdAt: "2020-06-10T07:56:21Z"
lastCommitAt: "2026-11-04T11:28:22Z"
lastReleaseAt: "2022-04-19T08:59:40Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 91
undervaluedScore: 41
maintainers: ["achimfritz", "xerc", "Scopestyle"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/271214994/1cbc2200-c5b7-11ea-843f-a07f894cba57"
---

# EXT:container - A TYPO3 Extension for creating nested content elements

## Features
- Simple amazing containers (grids) as custom TYPO3 Content Elements
- No default containers; everything will be built the way it is needed for a project
- Supports multilanguage (connected or free mode (mixed mode not supported))
- Supports workspaces
- Supports colPos-restrictions if EXT:content_defender is installed
- Frontend Rendering via DataProcessor and Fluid templates

## Why did we create another "Grid" extension?

At b13, we've long supported gridelements, for which we are thankful, and have used this extension with great pleasure in the past.

However, we had our pain points in the past with all the solutions we've evaluated and worked with. These are our reasons:

- We wanted an extension that works with multiple versions of TYPO3 Core with the same extension to support our company's [TYPO3 upgrade strategy](https://b13.com/solutions/typo3-upgrades).
- We wanted to overcome issues when dealing with the `colPos` field and dislike any fixed value that isn't fully compatible with TYPO3 Core.
- We wanted a thoroughly tested extension with multilingual and workspaces functionality.
- We…
