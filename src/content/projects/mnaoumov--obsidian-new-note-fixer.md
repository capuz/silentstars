---
repo: "mnaoumov/obsidian-new-note-fixer"
name: "obsidian-new-note-fixer"
description: "Obsidian Plugin that unifies the way non-existing notes are created when clicking on their links"
readmeQualityOk: true
url: "https://github.com/mnaoumov/obsidian-new-note-fixer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 14
forks: 1
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-01-08T03:11:23Z"
lastCommitAt: "2026-09-13T08:28:22Z"
lastReleaseAt: "2025-04-07T17:15:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 69
maintainers: ["mnaoumov"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e68be0ca4e39717d4cb4a8120eb2dc5f2690500d1fc0c9b57cd2fc2e0f904d6/mnaoumov/obsidian-new-note-fixer"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/mnaoumov"]
discussionCount: 2
---

# New Note Fixer

Clicking a link to a note that does not exist yet creates it — and where it lands depends on which *shape* the link has, in ways [Obsidian](https://obsidian.md/) never explains:

- `[[non-existing-note]]` respects `Settings → Files and links → Default location for new notes`.
- `[[folder/non-existing-note]]` ignores that setting entirely and creates the note at the **vault root**, under `folder/`.
- `[[../folder/non-existing-note]]` creates a file **outside the vault**, does not open it, and on the second click reports the misleading error `Folder already exists`.

This plugin makes all three obey the setting you configured, so where a new note appears no longer depends on how the link that created it happened to be written.

<details>
<summary>More screenshots</summary>

</div>

</details>

## Demo vault

**The documentation is a demo vault.** Every case has a note that explains what Obsidian does, what the plugin does instead, and a link you can click to watch it happen.

**[Start reading here](<./demo-vault/00 Start.md>)** — it is plain markdown, so it works on GitHub with nothing installed.

A copy of the vault ships with every release. You can access it via…
