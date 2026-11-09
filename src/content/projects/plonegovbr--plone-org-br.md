---
repo: "plonegovbr/plone.org.br"
name: "plone.org.br"
description: "Site da comunidade brasileira de Plone"
readmeQualityOk: true
url: "https://github.com/plonegovbr/plone.org.br"
homepage: "https://plone.org.br"
language: "Python"
languages: ["Python"]
languagePcts: [50]
topics: ["plone", "plone6", "volto", "portal"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 16
watchers: 15
contributors: 8
recentReleases: 0
createdAt: "2022-05-23T20:15:17Z"
lastCommitAt: "2026-11-09T00:53:39Z"
status: "watched"
tags: ["solo_builder", "community_watch"]
healthScore: 98
undervaluedScore: 74
maintainers: ["ericof", "Humanaice"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8707832ba677e110d1a3b4ada2365104d408fa1a3cc493345ea8a8264e5636b/plonegovbr/plone.org.br"
---

# Plone Brasil 🚀

Site da comunidade brasileira de Plone

## Quick Start 🏁

### Prerequisites ✅

-   An [operating system](https://6.docs.plone.org/install/create-project-cookieplone.html#prerequisites-for-installation) that runs all the requirements mentioned.
-   [uv](https://6.docs.plone.org/install/create-project-cookieplone.html#uv)
-   [nvm](https://6.docs.plone.org/install/create-project-cookieplone.html#nvm)
-   [Node.js and pnpm](https://6.docs.plone.org/install/create-project.html#node-js) 24
-   [Make](https://6.docs.plone.org/install/create-project-cookieplone.html#make)
-   [Git](https://6.docs.plone.org/install/create-project-cookieplone.html#git)
-   [Docker](https://docs.docker.com/get-started/get-docker/) (optional)

### Installation 🔧

1.  Clone this repository, then change your working directory.

    ```shell
    git clone git@github.com:plonegovbr/plone.org.br.git
    cd plone.org.br
    ```

2.  Install this code base.

    ```shell
    make install
    ```

### Fire Up the Servers 🔥

1.  Create a new Plone site on your first run.

    ```shell
    make backend-create-site
    ```

2.  Start the backend at http://localhost:8080/.

    ```shell
    make…
