---
repo: "nteract/nteract"
name: "nteract"
description: "We're back! Now firing notebooks out of a t-shirt gun."
readmeQualityOk: true
url: "https://github.com/nteract/nteract"
language: "Rust"
languages: ["Rust", "JavaScript", "TypeScript"]
languagePcts: [33, 31, 30]
stars: 193
forks: 27
openIssues: 66
closedIssues: 541
watchers: 3
contributors: 29
recentReleases: 0
createdAt: "2026-02-11T18:18:05Z"
lastCommitAt: "2026-11-13T05:11:37Z"
lastReleaseAt: "2026-02-20T09:04:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 34
maintainers: ["rgbkrk", "intentionally-left-nil", "philippjfr"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbcbba369ae105e2ceb8fadb656fb2f07dcd34969d4d536e2603b687a9862ce0/nteract/nteract"
---

# nteract

nteract builds tools for thinking with code, data, and documents. This monorepo
is home to **nteract notebooks**, **Pages**, and the libraries and runtime that
support them. People and AI agents collaborate on live Automerge documents in
both products.

## Products

### nteract notebooks

A local-first notebook environment for writing and running code, exploring data,
and working with rich outputs. The native desktop app and hosted browser app
share notebook UI and document protocols. The `runtimed` daemon manages kernels,
environments, execution, and outputs; desktop, CLI, MCP, and programmatic clients
work with the same live notebook.

*Navigate a computational story through its headings and outputs. Screenshot
from the [nteract 2.6 release notes](https://nteract.io/changelog/2.6), which also
include video demos.*

Start with the [desktop installation](#install), [development guide](#development),
or [hosted notebook guide](https://github.com/nteract/nteract/blob/HEAD/apps/notebook-cloud/README.md).

### Pages

Pages is a notebook-like space for writing, thinking, and exploring together.
Mix rich text, images, diagrams, editable tables, task lists, and interactive…
