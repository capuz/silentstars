---
repo: "mnaoumov/obsidian-advanced-note-composer"
name: "obsidian-advanced-note-composer"
description: "Obsidian plugin that enhances Note composer core plugin."
readmeQualityOk: true
url: "https://github.com/mnaoumov/obsidian-advanced-note-composer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["obsidian", "obsidian-md", "obsidian-plugin"]
stars: 22
forks: 0
openIssues: 7
closedIssues: 205
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-03-19T03:33:25Z"
lastCommitAt: "2026-08-11T04:48:02Z"
lastReleaseAt: "2025-04-24T22:00:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 62
maintainers: ["mnaoumov"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ca7198def4952c6bc7b32dcd9782b888bb4939a14c2d86e5b1874e514b60d71/mnaoumov/obsidian-advanced-note-composer"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/mnaoumov"]
discussionCount: 2
---

# Advanced Note Composer

This [Obsidian](https://obsidian.md/) plugin extends the core [`Note composer`](https://help.obsidian.md/plugins/note-composer) plugin fixing some bugs and adding additional features.

## Relative links

If you use `Merge current file with another file...`, `Extract current selection...`, `Extract this heading...` from the note with relative links, the core plugin moves those links as is, which leads to broken links you have to fix manually.

The current plugin adjusts such links and makes them valid.

## Invalid titles

Sometimes when you extract selection or heading, the chosen title is invalid

```md
# Title with invalid characters *\<>:|?#^[]"
```

The core plugin will show an error when you try to extract such heading.

The current plugin allows to replace/remove such invalid characters.

If those invalid characters were used intentionally, the plugin allows to add the invalid title

- to the note alias (to be able to access it from the `Quick switcher`).
- to the frontmatter title key.

### Your own replacements

One **Replacement string** for every invalid character is a blunt instrument: it turns `Report: Q1` into
`Report_ Q1` whether or not that…
