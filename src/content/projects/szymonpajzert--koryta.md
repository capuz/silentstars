---
repo: "SzymonPajzert/koryta"
name: "koryta"
description: "Największy, ogólnopolski i niezależny agregator politycznych powiązań między politykami a ich stanowiskami."
readmeQualityOk: true
url: "https://github.com/SzymonPajzert/koryta"
homepage: "https://koryta.pl"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [48, 35]
topics: ["data-analysis", "open-data", "politics"]
stars: 14
forks: 1
openIssues: 70
closedIssues: 32
watchers: 1
contributors: 21
recentReleases: 0
createdAt: "2025-06-14T15:32:07Z"
lastCommitAt: "2026-10-09T18:56:59Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 86
undervaluedScore: 63
maintainers: ["SzymonPajzert"]
openGraphImageUrl: "https://opengraph.githubassets.com/2069f7819ce91bb9f966d9861d6c3e70908acd744431a13b862f51b46683a767/SzymonPajzert/koryta"
---

# Koryta.pl

This documentation outlines the project's structure and the technologies used. Refer to the README files in each directory for more thorough overview of each part.

## Technologies

This project uses the following technologies:

- [jj (jiujitsu)](https://github.com/jj-vcs/jj) for version control, because git is bad. You can probably still use git, but that's why there are a lot of `push-*` branches and forced updates in the pull requests.
- NUXT framework for UI (Vue, Vite and other magic), along the libraries:
  - Vuetify components
  - apex chart for the chart in the home page
  - v-network-graph for the /graf page
- Firebase to serve the website, with locally emulated:
  - Firestore (no SQL, JSON, reactive and obserable)
  - Firebase hosting
  - Firebase cloud functions

## Project structure

### `data` - Python infrastructure to mine the data

- `data/pipelines`- **has README** - Poetry project containing the infrastructure

### UI related (multiple dirs)

- `frontend` - **has README** - NUXT framework definition of the UI
- `cypress` - Cypress snapshot testing (mainly to have screenshots for comparing changes)
- `database` - Some copy of the prod data listed…
