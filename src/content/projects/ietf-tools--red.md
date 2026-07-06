---
repo: "ietf-tools/red"
name: "red"
description: "RFC Editor website"
readmeQualityOk: true
url: "https://github.com/ietf-tools/red"
homepage: "https://www.rfc-editor.org"
language: "HTML"
languages: ["HTML", "TypeScript"]
languagePcts: [69, 27]
stars: 16
forks: 16
openIssues: 36
closedIssues: 103
watchers: 4
contributors: 14
recentReleases: 0
createdAt: "2024-08-28T20:25:55Z"
lastCommitAt: "2026-07-06T07:03:12Z"
lastReleaseAt: "2025-06-10T00:02:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 78
maintainers: ["holloway", "NGPixel"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d29ddcf4cdef6d8b8723b88148d7ad7eba1b82df587595340b8bb4deebccf56/ietf-tools/red"
---

##### Website for the RFC Editor

</div>

# Design

- The [new www.rfc-editor.org design on Figma](https://www.figma.com/design/bCDqtdSnErGOe6Oc87W8pR/RFC-Editor---Design-2). As development continues this is the graphic design that we will be adhering to where possible.

# Contributing

This code repository is under the broader guidance from [IETF CONTRIBUTING.md](https://github.com/ietf-tools/.github/blob/main/CONTRIBUTING.md).

# Development

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install) _(Windows only)_

## Getting Started

### Website

See `/website/`.

It's a Nuxt website ([official Nuxt documentation](https://nuxt.com/docs/getting-started/introduction)).

#### Website content (markdown)

Website content from markdown files can be found in `/website/content/`.

Markdown Frontmatter (metadata) fields supported are listed in [content.config.js](https://github.com/ietf-tools/red/blob/main/website/content.config.ts#L8).

The 'last updated' footer on markdown pages is computed from Git log's commit time.
It is manually synced by a developer by running (from within `website/`)…
