---
repo: "NazmusSayad/Git-Stats"
name: "Git-Stats"
description: "Automates generation of GitHub activity stats and visual summaries."
readmeQualityOk: true
url: "https://github.com/NazmusSayad/Git-Stats"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["activity-stats", "automation", "data-visualization", "github", "github-stats", "python"]
stars: 37
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2022-09-08T01:19:06Z"
lastCommitAt: "2026-08-17T04:18:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 57
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e9f576044f8065637a270530c517bb9031c1d30d624bf9317ca3ef8b89ca677/NazmusSayad/Git-Stats"
---

# 📄 Documentation

Setup a GitHub Action which runs periodically and pushes generated images to a repository.

<br />

## 0️. Use this repo

*You can do this by clicking here.*\

<br /><br />
## 1️. Create a GitHub personal token

No scopes are required, but additional one may be required depending on which features will be used. Each plugin documentation enumerates which scopes are required to make it work.

A a general rule, the following scopes may be required:
- `public_repo` for some plugins
- `read:org` for all organizations related metrics
- `repo` for all private repositories related metrics
  - `read:user` for some private repositories related metrics
- `read:packages` for some packages related metrics
- `gist` for publishing renders to gists instead of a repository

<br /><br />
## 2️. Put your GitHub personal token in repository secrets

Go to the `Settings` of your repository and to create a new secret named `ACCESS_TOKEN` and paste your freshly generated GitHub token there.
