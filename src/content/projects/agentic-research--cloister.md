---
repo: "agentic-research/cloister"
name: "cloister"
description: "Workerd-based hypervisor with a declarative Cap'n Proto manifest. Substrate-level identity, audit, and per-bundle credential scoping. Today's primary application: hosting MCP servers behind one HTTP face."
readmeQualityOk: true
url: "https://github.com/agentic-research/cloister"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [46, 44]
topics: ["capnproto", "cloudflare-workers", "durable-objects", "gateway", "hypervisor", "mcp", "model-context-protocol", "rust", "typescript", "workerd"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-28T05:11:16Z"
lastCommitAt: "2026-11-19T04:58:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 51
maintainers: ["jamestexas", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee1e477f08151aef8e63ea4ce88889aa8497918deb27ce22fcf8493d04638380/agentic-research/cloister"
---

# cloister

Cloister checks that a set of services may only reach what you said they may,
and runs them that way.

You write the intent in one file, `cluster.toml`: what services there are,
which ports they open, and which of them may connect to which. Cloister holds
your existing deployment to that file, and it can run the same services
locally with everything else blocked.

It does the same for an AI coding tool: the tool gets the folders and services
you name, and nothing else.

## Contents

- [What you can do with it](#what-you-can-do-with-it)
- [Start from what you already have](#start-from-what-you-already-have)
- [Install](#install)
- [Run a coding tool inside it](#run-a-coding-tool-inside-it)
- [Serve your tools to an editor](#serve-your-tools-to-an-editor)
- [Describe a cluster](#describe-a-cluster)
- [What a run leaves behind](#what-a-run-leaves-behind)
- [Things that will bite you](#things-that-will-bite-you)
- [How it fits together](#how-it-fits-together)
- [What it is not](#what-it-is-not)
- [The rest of the family](#the-rest-of-the-family)
- [Where to go next](#where-to-go-next)
- [Development](#development)
