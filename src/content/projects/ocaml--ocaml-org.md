---
repo: "ocaml/ocaml.org"
name: "ocaml.org"
description: "The official OCaml website."
readmeQualityOk: true
url: "https://github.com/ocaml/ocaml.org"
homepage: "https://ocaml.org"
language: "Markdown"
languages: ["Markdown"]
languagePcts: [91]
stars: 192
forks: 391
openIssues: 165
closedIssues: 677
watchers: 9
contributors: 337
recentReleases: 1
createdAt: "2021-07-09T12:26:08Z"
lastCommitAt: "2026-09-30T09:56:34Z"
lastReleaseAt: "2026-09-30T08:20:21Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "community_hub", "fork_magnet"]
healthScore: 95
undervaluedScore: 51
maintainers: ["cuihtlauac", "github-actions[bot]", "Sudha247"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a92e40368a0cfa1101a154f510aba95a7c00903b0013266bea7f0861e7d513e/ocaml/ocaml.org"
discussionCount: 28
---

# OCaml.org

This repository contains the sources of the OCaml website. It is served at <https://ocaml.org/>.

## Features

- **Integrated documentation and package management:** The site combines the
  package management (currently opam.ocaml.org) with a new central
  documentation source (codenamed 'docs.ocaml.org') for all 14000+ opam packages
  directly within the OCaml.org site.

- **Responsive and accessible:** The site design also takes into account modern
  web-design principles, restructuring the old content in accordance with methods
  that will present it more compellingly. It is a total redesign that modernises
  the look and feel of the webpage, as well as make it easier to navigate and more
  accessible (particularly on mobile devices).

- **Separation of data editing from HTML/CSS generation:** The data used in the
  website is stored in Yaml or Markdown, so users can easily edit it and
  contribute to the website. Ocurrent is used to generate OCaml code from this
  data. The data turned in OCaml is the site served content. All the data used
  in the site can be found in [`./data`](https://github.com/ocaml/ocaml.org/blob/HEAD/data).

## Getting Started

Before you…
