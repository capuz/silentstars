---
repo: "kenn-io/docbank"
name: "docbank"
description: "Local-first system of record for documents (PDFs, images, text files, etc.) for you and your agents"
readmeQualityOk: true
url: "https://github.com/kenn-io/docbank"
homepage: "https://docbank.ai"
language: "Go"
languages: ["Go"]
languagePcts: [83]
stars: 112
forks: 19
openIssues: 18
closedIssues: 61
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-07-07T14:57:26Z"
lastCommitAt: "2026-11-06T11:40:34Z"
lastReleaseAt: "2026-07-20T03:31:17Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 33
maintainers: ["rodboev", "wesm", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cdfb88b7bc65c8a44838d7a7329d39f52ec05979c64a159b6247e7910561bd8d/kenn-io/docbank"
---

# docbank

> **Alpha software.** Keep your own copies of anything irreplaceable, and
> verify a backup before you rely on it.

**Agent-native document system of record**

Docbank is an open-source document vault for people, applications, and agents.
It runs on your own machine. It imports files, email, photos, and recordings,
makes their text searchable, and keeps every version you save. When you need to
hand records to someone else, it exports the versions you checked.

Use it from the command line, a local web app, a terminal browser, or an
authenticated HTTP API, or connect an agent with `docbank mcp`. They all talk
to the daemon, a local background process that owns the vault. A Go application
can instead [embed a vault of its own](https://github.com/kenn-io/docbank/blob/HEAD/docs/embedding.md).

## What can I use it for?

| Task | Guide |
| --- | --- |
| Import and organize records | [Importing](https://github.com/kenn-io/docbank/blob/HEAD/docs/usage/importing.md) and [tagging](https://github.com/kenn-io/docbank/blob/HEAD/docs/usage/organizing.md) |
| Find a document | [Searching](https://github.com/kenn-io/docbank/blob/HEAD/docs/usage/searching.md) and [search by…
