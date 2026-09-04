---
repo: "lonestone/astrocms"
name: "astrocms"
description: "Simple CMS for Astro static websites with MDX support"
readmeQualityOk: true
url: "https://github.com/lonestone/astrocms"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 8
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-08T14:26:44Z"
lastCommitAt: "2026-09-04T08:09:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 31
maintainers: ["Godefroy", "thtesche"]
openGraphImageUrl: "https://opengraph.githubassets.com/46e287287cd1df4279c825053e72e76f9fc2a29a542eebeb6d6ecbfcf05c9767/lonestone/astrocms"
---

# AstroCMS

A simple, database-free CMS for [Astro](https://astro.build) static websites with first-class MDX support.

AstroCMS edits your Markdown and MDX files directly, manages media assets, commits and pushes to your GitHub repository, and ships with an optional Claude Code integration for AI-assisted authoring.

Editing a blog post: the frontmatter form comes from your Zod schema, the body is real MDX.

| Light | Dark |
| :---: | :---: |
|  |  |

Asking the built-in Claude Code agent for a new post, with every tool call visible as it works.

| Light | Dark |
| :---: | :---: |
|  |  |

## Why AstroCMS

- **No database.** Your content lives in your repo as Markdown/MDX, and AstroCMS just edits the files.
- **Git-native workflow.** Changes are staged, committed, and pushed to GitHub directly from the UI.
- **Schema-aware.** Frontmatter forms are auto-generated from the Zod schemas in your `content.config.ts`.
- **MDX-ready.** Edit rich MDX visually, including your own Astro components with typed props and slots.
- **AI built in.** Optional Claude Code agent for drafting, rewriting, and fixing content.

## Features

- **Visual MDX editor** with a frontmatter form generated from…
