---
repo: "weaviate/weaviate-io"
name: "weaviate-io"
description: "Website for the Weaviate vector database"
readmeQualityOk: true
url: "https://github.com/weaviate/weaviate-io"
homepage: "https://weaviate.io"
language: "MDX"
languages: ["MDX", "JavaScript", "SCSS"]
languagePcts: [39, 34, 23]
topics: ["vector-database", "vector-search", "vector-search-engine", "weaviate", "website", "generative-search", "hybrid-search"]
stars: 89
forks: 143
openIssues: 11
closedIssues: 140
watchers: 20
contributors: 140
recentReleases: 0
createdAt: "2022-02-14T21:31:54Z"
lastCommitAt: "2026-08-27T14:25:30Z"
status: "thriving"
tags: ["needs_contributors", "community_hub", "fork_magnet"]
healthScore: 97
undervaluedScore: 57
maintainers: ["Shan-Weaviate", "g-despot", "CShorten"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/459332235/46de6f0a-7dfe-48e2-bbe3-b6cf06e81550"
discussionCount: 195
---

> [!IMPORTANT]
> The documentation for this project has been moved to a new repository: [weaviate/docs](https://github.com/weaviate/docs/).
  You can now find it live at [https://docs.weaviate.io](https://docs.weaviate.io).

# How to Build this Website

Weaviate uses [Docusaurus 2](https://docusaurus.io/) to build our
documentation. Docusaurus is a  static website generator that runs under
[Node.js](https://nodejs.org/). We use a Node.js project management tool called
[yarn](https://yarnpkg.com/) to install Docusaurus and to manage project
dependencies.

If you do not have Node.js and `yarn` installed on your system, install them
first.

### Node.js Installation

Use the [nvm](https://github.com/nvm-sh/nvm) package manager to install Node.js.
The `nvm` project page provides an [installation script](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating).

After you install `nvm`, use `nvm` to install Node.js.

```
nvm install
```

By default, `nvm` installs the most recent version of Node.js. Also install the version of Node.js that is specified in `.github/workflows/pull_requests.yaml`. At the time of writing it is version 20.

```
nvm install 20
nvm use 20
```…
