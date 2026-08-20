---
repo: "darrenldl/docfd"
name: "docfd"
description: "TUI multiline fuzzy document finder"
readmeQualityOk: true
url: "https://github.com/darrenldl/docfd"
homepage: "https://docfd.sh"
language: "OCaml"
languages: ["OCaml"]
languagePcts: [82]
topics: ["fuzzy-search", "tui", "document-management", "grep-like", "search", "indexed-search"]
stars: 288
forks: 5
openIssues: 4
closedIssues: 14
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2022-03-02T01:31:47Z"
lastCommitAt: "2026-08-20T04:07:33Z"
lastReleaseAt: "2023-03-03T03:17:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 38
maintainers: ["darrenldl"]
openGraphImageUrl: "https://opengraph.githubassets.com/3bf6c63160df453e9ad646a979930ea60173abae6e6f26dae94228cd887343b3/darrenldl/docfd"
discussionCount: 1
---

# Docfd

[Online Demo](https://demo.docfd.sh)

TUI multiline fuzzy document finder

Think interactive grep for text files, PDFs, DOCXs, etc,
but word/token based instead of regex and line based,
so you can search across lines easily.

Docfd aims to provide good UX via integration with common text editors
and PDF viewers,
so you can jump directly to a search result with a single key press.

---

Interactive use

Non-interactive use

## Features

- Multithreaded indexing and searching

- Multiline fuzzy search of multiple files

- Content view pane that shows the snippet surrounding the search result selected

- Text editor and PDF viewer integration

- Editable command history - rewrite/plan your actions in text editor

- Search scope narrowing - limit scope of next search based on current search results

- Clipboard integration

## Why Docfd might be for you

<details>
<summary>
You want a standalone, offline TUI search tool that
allows you to immediately start searching without any complicated setup.
</summary>

Docfd only starts processing the current directory or
specified directories/files upon start.
Hashing is used to pick out files that have not been indexed yet.

There is…
