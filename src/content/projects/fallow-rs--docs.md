---
repo: "fallow-rs/docs"
name: "docs"
description: "Documentation for fallow, codebase intelligence for TypeScript and JavaScript. Published at docs.fallow.tools."
readmeQualityOk: true
url: "https://github.com/fallow-rs/docs"
homepage: "https://docs.fallow.tools"
language: "MDX"
languages: ["MDX"]
languagePcts: [98]
topics: ["dead-code", "documentation", "javascript", "mintlify", "typescript", "fallow", "codebase-intelligence", "runtime-intelligence"]
stars: 10
forks: 5
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-20T08:21:32Z"
lastCommitAt: "2026-10-22T08:52:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 65
maintainers: ["BartWaardenburg", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a599347637889fe19171872a5bf53d7633d3c936e7de611480d9ad4bfc04a331/fallow-rs/docs"
---

This repository is the canonical source for the public fallow user
documentation at [fallow.tools/docs](https://fallow.tools/docs/).
[PUBLICATION.md](https://github.com/fallow-rs/docs/blob/HEAD/PUBLICATION.md) defines what content can be public, where
artifacts come from, and how synchronization works.

## Structure

The pages are grouped by user task. The complete placement map is in
[CONTRIBUTING.md](https://github.com/fallow-rs/docs/blob/HEAD/CONTRIBUTING.md#content-placement). `docs.json` is the source
of truth for navigation order.

## Contributing

Edit any `.mdx` file and open a pull request against `main`. The fallow.tools
site renders the pages from a pinned commit of this repository, so a merged
change goes live when the site updates its pin. The old host,
`docs.fallow.tools`, now only redirects to [fallow.tools/docs](https://fallow.tools/docs/).
[CONTRIBUTING.md](https://github.com/fallow-rs/docs/blob/HEAD/CONTRIBUTING.md) explains the checks to run before you push.
