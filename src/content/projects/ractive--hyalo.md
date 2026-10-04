---
repo: "ractive/hyalo"
name: "hyalo"
description: "CLI tool to manage md files"
readmeQualityOk: true
url: "https://github.com/ractive/hyalo"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["agent-skill", "agentic-workflows", "cli", "knowledge-base", "knowledge-management", "markdown", "obsidian", "rust", "zettelkasten"]
stars: 27
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-20T14:20:21Z"
lastCommitAt: "2026-10-04T10:02:29Z"
lastReleaseAt: "2026-04-17T11:24:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 37
maintainers: ["ractive"]
openGraphImageUrl: "https://opengraph.githubassets.com/57c93b31b63ee3ed5ab1a8103cbbf439067b9853fdd96a9513779656f395e8e2/ractive/hyalo"
---

# hyalo

**A structured CLI for markdown knowledgebases — built for humans and AI agents.**

If you maintain an [Obsidian](https://obsidian.md/) vault, a Zettelkasten, documentation site, or any folder of `.md` files with YAML frontmatter, you've probably hit the limits of `grep` and manual editing. Hyalo gives you a fast, structured way to search, filter, and bulk-edit your markdown files from the command line.

Hyalo does not define how you organize your notes. It works with the structure you already have — frontmatter properties, tags, `[[wikilinks]]`, markdown links, task checkboxes — and gives you powerful tools to query and maintain it at scale.

### The LLM Wiki pattern

Andrej Karpathy popularized the idea of an [LLM-maintained wiki](https://x.com/karpathy/status/1908527375407042770): instead of asking an LLM the same questions repeatedly, you have it build and maintain a persistent, structured knowledgebase that compounds over time. Every source ingested, every question answered adds to the wiki rather than vanishing with the conversation.

Hyalo is the tooling layer that makes this practical. An LLM agent can use `hyalo find` to search across thousands of notes by…
