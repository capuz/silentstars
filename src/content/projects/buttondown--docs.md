---
repo: "buttondown/docs"
name: "docs"
description: "Buttondown's public documentation"
readmeQualityOk: true
url: "https://github.com/buttondown/docs"
homepage: "https://docs.buttondown.com"
language: "Roff"
languages: ["Roff", "TypeScript"]
languagePcts: [70, 22]
stars: 33
forks: 26
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 23
recentReleases: 0
createdAt: "2021-07-04T03:16:17Z"
lastCommitAt: "2026-08-23T04:08:39Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 85
undervaluedScore: 64
maintainers: ["buttondown-engineering", "jmduke"]
openGraphImageUrl: "https://opengraph.githubassets.com/12a20d55d283cbd926909311abb793b27ed236891695f0147a3da1f159f217ca/buttondown/docs"
---

# Buttondown Docs

## Getting Started

To run Docs for the first time you'll:

1. Clone the `monorepo` and navigate to `docs` (or, if you don't have access, clone the `docs` repo)
2. Use `mise run //docs:install` to install all packages and dependencies (or, if you're using the standalone `docs` repo, run `bun install`)
3. Run `mise run //docs:dev` (or, if you're trying to build the docs statically for production, run `mise run //docs:build`)

Now you're ready to work! You can now run `bun dev` in your command line.

The docs will now be accessible in your browser.

Terminal will watch for changes, and recompile when they're detected.

> You'll need to refresh your browser to view changes.

### Troubleshooting build issues

**Check your Bun version**

You can check your Bun version by running `bun -v` in your command line.

> Docs uses Bun for package management and running the dev server.

**Clear the server cache**
Run `mise run //docs:clear-cache` to reset Next.js.

## Content

Each Doc is its own individual Markdown file in `/content/pages`.

The pages are organized in `navigation.json`

### Creating a new page

There are 4 steps to add a new page to the docs:

**1. Create the…
