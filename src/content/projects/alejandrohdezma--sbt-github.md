---
repo: "alejandrohdezma/sbt-github"
name: "sbt-github"
description: "SBT plugin to read several settings from Github"
readmeQualityOk: true
url: "https://github.com/alejandrohdezma/sbt-github"
homepage: "https://alejandrohdezma.github.io/sbt-github"
language: "Scala"
languages: ["Scala"]
languagePcts: [96]
topics: ["sbt-plugin", "github", "sbt-header", "mdoc", "scala"]
stars: 9
forks: 3
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2019-10-17T13:54:29Z"
lastCommitAt: "2026-11-23T12:23:50Z"
lastReleaseAt: "2020-12-14T18:19:10Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 93
undervaluedScore: 79
maintainers: ["alejandrohdezma", "alejandrohdezma-steward[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a47e54c77babb9354aa70e54e219e8c329e3426e129be8527ef09dbda8be5794/alejandrohdezma/sbt-github"
fundingLinks: ["KO_FI:https://ko-fi.com/alejandrohdezma"]
discussionCount: 0
---

# SBT plugin to read several settings from Github

This plugin enables several settings automatically by downloading them from Github:

- `homepage`: Retrieved from the Github repository's information.
- `developers`: A list containing the repository collaborators.
- `description`: Retrieved from the Github repository.
- `licenses`: Retrieved from the Github repository.
- `contributors`: The list of repository contributors. This list will not include contributors set in `excludedContributors`.
- `collaborators`: The list of repository collaborators who are also `contributors`. This list will always include collaborators set in `extraCollaborators`.
- `releases`: The list of repository releases.
- `startYear`: Extracted from the repository creation date.
- `yearRange`: A year range that goes from `startYear` to the current year.
- `organizationName`: The repository organization name or the owner's name if `populateOrganizationWithOwner` is set to `true`.
- `organizationEmail`: The repository organization email or the owner's email if `populateOrganizationWithOwner` is set to `true`.
