---
repo: "eclipse-edc/eclipse-edc.github.io"
name: "eclipse-edc.github.io"
description: "EDC documentation website"
readmeQualityOk: true
url: "https://github.com/eclipse-edc/eclipse-edc.github.io"
homepage: "https://eclipse-edc.github.io"
language: "HTML"
languages: ["HTML"]
languagePcts: [67]
stars: 5
forks: 17
openIssues: 8
closedIssues: 64
watchers: 5
contributors: 16
recentReleases: 0
createdAt: "2024-09-09T15:11:50Z"
lastCommitAt: "2026-11-06T11:23:38Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 91
maintainers: ["wolf4ood", "ndr-brt", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/52a229a420ee407bd44f391530e7af59c837605d490c12bf6ddf3d6d9a43e4c7/eclipse-edc/eclipse-edc.github.io"
---

# eclipse-edc.github.io website

This repository contains project-wide documentation.

## Running the website locally

Building and running the site locally requires a recent `extended` version of [Hugo](https://gohugo.io).
You can find out more about how to install Hugo for your environment in our
[Getting started](https://www.docsy.dev/docs/getting-started/#prerequisites-and-installation) guide.

```bash
hugo server
```

## Running a container locally

You can run the website inside a [Docker](https://docs.docker.com/)
container, the container runs with a volume bound to the root folder.

1. Build the docker image

   ```bash
   docker compose up --build
   ```

2. Verify that the service is working.

   Open your web browser and type `http://localhost:1313` in your navigation bar,
   This opens a local instance of the homepage. You can now make
   changes to the docs and those changes will immediately show up in your browser after you save.

### Cleanup

To stop Docker Compose, on your terminal window, press **Ctrl + C**.

To remove the produced images run:

```bash
docker compose rm
```
For more information see the [Docker Compose documentation][].

## Broken Link Checking…
