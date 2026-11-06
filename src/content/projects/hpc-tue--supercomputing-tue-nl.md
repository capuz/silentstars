---
repo: "HPC-TUE/supercomputing.tue.nl"
name: "supercomputing.tue.nl"
description: "Public website of the TU/e Supercomputing Center."
readmeQualityOk: true
url: "https://github.com/HPC-TUE/supercomputing.tue.nl"
homepage: "https://supercomputing.tue.nl"
language: "HTML"
languages: ["HTML", "CSS", "Python"]
languagePcts: [43, 34, 22]
topics: ["mkdocs", "ai", "hpc", "documentation"]
stars: 5
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2024-11-21T11:37:30Z"
lastCommitAt: "2026-11-06T11:23:39Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 85
undervaluedScore: 91
maintainers: ["alainvanhoof", "siddharthganjoo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ce85abea5b350c424e7135ba0a5db6bd1235268138b3aee1759126aa1518b3d/HPC-TUE/supercomputing.tue.nl"
discussionCount: 1
---

# TU/e Supercomputing Center

The official website of the TU/e Supercomputing Center (SCC).

## Deployment

```shell
docker run -p 8000:8000 ghcr.io/hpc-tue/supercomputing.tue.nl:latest
```

## Development

Normal development installation

```shell
pip install --user --upgrade -e .
```

## Customizations

### Meta

- Backdrop images should, ideally, have an aspect ratio of 21:9 (ultrawide)

#### `hero` property

| Property | Value                  | Description                 |
|----------|------------------------|-----------------------------|
| backdrop | path (or URL) to image | The image shown as backdrop |
| messages | See messages           | The messages to show        |
| button   | Button to show         | The button to show          |

#### Events

We're using a customized plugin for our events, based on the
official [mkdocs-material blog plugin](https://squidfunk.github.io/mkdocs-material/plugins/blog/). All settings listed
here a compatible, with addition of the
following [Metadata](https://squidfunk.github.io/mkdocs-material/plugins/blog/#metadata) options:

| Property        | Value                          | Description              |…
