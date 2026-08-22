---
repo: "mnaoumov/obsidian-smart-rename"
name: "obsidian-smart-rename"
description: "Obsidian Plugin that helps to rename notes keeping previous title in existing links"
readmeQualityOk: true
url: "https://github.com/mnaoumov/obsidian-smart-rename"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["obsidian", "obsidian-md", "obsidian-plugin"]
stars: 46
forks: 2
openIssues: 0
closedIssues: 14
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2023-03-19T23:27:05Z"
lastCommitAt: "2026-08-22T04:05:46Z"
lastReleaseAt: "2024-12-25T23:50:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 85
undervaluedScore: 54
maintainers: ["mnaoumov"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9c3f0311c460902553a61a8856301e44128ab4b38b421c8f79f92a9f402a642/mnaoumov/obsidian-smart-rename"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/mnaoumov"]
discussionCount: 1
---

# Smart Rename

Rename a note in [Obsidian](https://obsidian.md/) and every link to it is rewritten — including the
words your reader sees. A sentence that read "as covered in `[[Project brief]]`" silently becomes "as
covered in `[[2026 Q3 plan]]`", and prose you wrote carefully now says something you did not write.

This plugin renames the note and keeps the old title as the link's **display text**, so `[[Old title]]`
becomes `[[New title|Old title]]` and your sentences still read the way you wrote them. The old title is
also kept as an alias, so anything still looking for it finds it.

<details>
<summary>More screenshots</summary>

</details>

## Demo vault

**The documentation is a demo vault.** Every feature has a note that explains what it does and why you
would want it, with a note ready to rename and backlinks ready to watch.

**[Start reading here](<./demo-vault/00 Start.md>)** — it is plain markdown, so it works on GitHub with
nothing installed.

A copy of the vault ships with every release. You can access it via any of the following:

1. Running the **Smart Rename: Open demo vault** command.
2. Downloading `smart-rename-demo-vault-<version>.zip` (`<version>` is the…
