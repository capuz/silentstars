---
repo: "polybjorn/obsidian-readest-highlights"
name: "obsidian-readest-highlights"
description: "Obsidian plugin to import highlights and annotations from Readest"
readmeQualityOk: true
url: "https://github.com/polybjorn/obsidian-readest-highlights"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["annotations", "ebooks", "highlights", "obsidian", "obsidian-plugin", "readest"]
stars: 11
forks: 2
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-21T18:09:37Z"
lastCommitAt: "2026-11-01T22:54:40Z"
lastReleaseAt: "2026-07-17T08:49:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 52
maintainers: ["polybjorn", "dependabot[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/564120fa22ca43d7c53b3da7ea22a53fc9cea7cfeb6befcc5aa48b3b8ebf7e60/polybjorn/obsidian-readest-highlights"
---

# Obsidian Readest Highlights

[Readest](https://readest.com) stores its library, progress, and annotations locally as JSON. This plugin reads those files and renders your highlights into your Obsidian vault, one note per book, where they can be searched and linked with the rest of your notes.

## Docs

- [Install](https://github.com/polybjorn/obsidian-readest-highlights/blob/main/docs/install.md)
- [Settings reference](https://github.com/polybjorn/obsidian-readest-highlights/blob/main/docs/settings.md)

## Commands

| Command | Action |
|---|---|
| Sync all books to folder | Creates or updates a note per book in the configured folder. |
| Sync one book to folder... | Pick a single book from a fuzzy picker. |
| Append one book to current note... | Pick a book, appends its highlights to the active note. |

## Requirements

Desktop Obsidian with access to a Readest Books folder. Readest's built-in sync is the easiest way to collect annotations from other devices into one folder, but any setup that exposes the folder to Obsidian works.

## What the plugin accesses

- **Readest folder, read-only.** The plugin reads `library.json`, each book's `config.json` and, if Cover folder is set,…
