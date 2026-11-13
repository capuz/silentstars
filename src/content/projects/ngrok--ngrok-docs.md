---
repo: "ngrok/ngrok-docs"
name: "ngrok-docs"
description: "ngrok's official documentation"
readmeQualityOk: true
url: "https://github.com/ngrok/ngrok-docs"
homepage: "https://ngrok.com/docs"
language: "MDX"
languages: ["MDX"]
languagePcts: [97]
stars: 169
forks: 4198
openIssues: 0
closedIssues: 262
watchers: 19
contributors: 137
recentReleases: 0
createdAt: "2022-05-17T22:13:55Z"
lastCommitAt: "2026-11-13T17:34:16Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 100
undervaluedScore: 52
maintainers: ["sg-writer", "joelhans", "ngrok-docs-bot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/493428998/a599d76a-e1f9-435a-9579-32f5b0928715"
---

# [ngrok docs](https://ngrok.com/docs)

Source code for [ngrok docs](https://ngrok.com/docs); feel free to suggest changes and improvements to our documentation!

## Contributing

See our [Contribution Guidelines](https://github.com/ngrok/ngrok-docs/blob/HEAD/CONTRIBUTING.md) for detailed instructions on how to help improve ngrok documentation.

- Our site is built with [mintlify](https://mintlify.com/docs/).
- Our docs content is written with [markdown](https://www.markdownguide.org/getting-started/#what-is-markdown) and [MDX](https://mdxjs.com/docs/what-is-mdx/).

## Prerequisites

- [Node 24 or higher](https://nodejs.org/en/download)
- [pnpm 10](https://pnpm.io/installation#using-npm)
- [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
- `corepack` is included with node by default, no need to install

## Setup

1. Ensure that `node 24` is installed. With `nvm`, run `nvm install`.
1. Enable `pnpm` with `corepack`: `corepack enable pnpm`
1. Install `pnpm` with `corepack`: `corepack install`
1. Install project dependencies with `pnpm`: `pnpm install`
1. Install vale, our linter: `brew install vale` ([or use their install…
