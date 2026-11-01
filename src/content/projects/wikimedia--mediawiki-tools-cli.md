---
repo: "wikimedia/mediawiki-tools-cli"
name: "mediawiki-tools-cli"
description: "Github mirror of \"mediawiki/tools/cli\" - our actual code is hosted with Gitlab (https://gitlab.wikimedia.org/ - please see https://www.mediawiki.org/wiki/Developer_access for contributing)"
readmeQualityOk: true
url: "https://github.com/wikimedia/mediawiki-tools-cli"
language: "Go"
languages: ["Go"]
languagePcts: [88]
stars: 11
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 43
recentReleases: 0
createdAt: "2020-03-17T20:52:32Z"
lastCommitAt: "2026-11-01T22:56:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 70
undervaluedScore: 66
maintainers: ["addshore"]
openGraphImageUrl: "https://opengraph.githubassets.com/38af411f168310627994a07cb3e2e0da97d418c6e59422bcbb5f3f1f734d6c28/wikimedia/mediawiki-tools-cli"
---

# a Wikimedia CLI

Explore Wikimedia data, work with services, and develop MediaWiki from your terminal. The default command is `mw`.

## Key Features

- **Wikimedia data:** Query analytics APIs, graph results, and follow event streams.
- **Wikis:** Read and edit pages on MediaWiki wikis.
- **Cloud VPS:** Find instances, connect over SSH, and manage compute and storage.
- **Code and collaboration:** Work with GitLab and Gerrit, and search Wikimedia code.
- **Development environments:** Run MediaWiki and supporting services with `mw dev` and Docker Compose, on your machine or a remote host.
- **Updates:** Update the CLI from releases or CI builds.

## Getting Started

### Usage

Read the [guides in this repository](https://github.com/wikimedia/mediawiki-tools-cli/blob/HEAD/docs/index.md), or visit the [published documentation](https://a-wikimedia-cli.toolforge.org/).

### Analytics and REST APIs

`mw analytics` queries the [Wikimedia Analytics API](https://doc.wikimedia.org/generated-data-platform/aqs/analytics-api/) for pageviews, edits, editors, new pages, unique devices, and media requests. Omit the article from `pageviews` or `edits` for project totals. Rankings support `--date…
