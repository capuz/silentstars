---
repo: "nspcc-dev/neofs-spec"
name: "neofs-spec"
description: "NeoFS Technical Specification"
url: "https://github.com/nspcc-dev/neofs-spec"
language: "TeX"
languages: ["TeX", "Makefile", "Go Template"]
languagePcts: [36, 27, 26]
stars: 6
forks: 9
openIssues: 13
closedIssues: 28
watchers: 6
contributors: 16
recentReleases: 0
createdAt: "2020-07-02T17:19:14Z"
lastCommitAt: "2026-06-24T06:39:54Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 76
undervaluedScore: 53
maintainers: ["roman-khimov", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a30ffd0dc7a7bae5dec612bfcd6e2670ab05ea0ae856c9b5485bc126b56b9eb/nspcc-dev/neofs-spec"
---

</p>
</p>

---

## Document format
This document uses a mix of Markdown and LaTeX in [pandoc](https://pandoc.org/) flavors. Target output formats are PDF and HTML.

For non-generated plain text we follow single line paragraph style.

## Build instructions (manual build)
Install pandoc and LaTeX base. Please see Dockerfile for the detailed list of what you might need.

After pandoc and LaTeX base are available, you can simply run `make`, which will generate the specification paper in pdf and html.

## Build using docker
The easiest way to build a specification document is to use [Docker](https://www.docker.com). Just add `docker/` to any Makefile target to run it inside a container having all required tools already available.

* Compile the specification paper pdf using `make docker/pdf`
* Output will be generated as `output/neofs-spec-<revision>.pdf`

You can build docker image locally with `make image` command.

## How to contribute
If you know NeoFS technology and want to contribute, feel free to directly submit a Pull Request with the desired changes.

Initially, the idea is to create a broad and complete initial version of the document, which will be polished in the future.…
