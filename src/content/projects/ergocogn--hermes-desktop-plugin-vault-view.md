---
repo: "ergocogn/hermes-desktop-plugin-vault-view"
name: "hermes-desktop-plugin-vault-view"
description: "Display and edit Obsidian-compatible vault notes in Hermes Desktop while the Hermes agent keeps using its configured Obsidian CLI for note operations."
readmeQualityOk: true
url: "https://github.com/ergocogn/hermes-desktop-plugin-vault-view"
homepage: "https://github.com/ergocogn/hermes-desktop-plugin-vault-view"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["desktop-plugin", "hermes", "hermes-desktop", "hermes-plugin", "knowledge-base", "local-first", "markdown", "note-taking", "obsidian", "open-source"]
stars: 6
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-09-10T05:25:10Z"
lastCommitAt: "2026-11-15T11:19:47Z"
lastReleaseAt: "2026-11-15T11:22:18Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 53
undervaluedScore: 34
maintainers: ["rchcorp"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e0404130cc061c32fc669485b6654d0325d7012ebed8effe480c88740a6d107/ergocogn/hermes-desktop-plugin-vault-view"
discussionCount: 0
---

# Vault View

**Your Obsidian-compatible vault, directly inside Hermes Desktop.**

[English](https://github.com/ergocogn/hermes-desktop-plugin-vault-view/blob/HEAD/README.md) · [Français](https://github.com/ergocogn/hermes-desktop-plugin-vault-view/blob/HEAD/README.fr.md)

**Version v0.5.2.**

Vault View brings your Markdown knowledge base into the conversation. Find a note, ask Hermes to create or update it, follow its links, and keep several notes open in a workspace designed for a vault—not a generic file preview.

## What is new in 0.5.2

- Put the explorer control on the left and the context-panel control on the right.
- Restore Vault View beside the conversation when its tabs return, without anchoring to a suspended pane.
- Use one deep-link note action: **Open in Vault View** while the note is closed or masked, **Hide note** while it is open. Opening again reuses the note tab and preserves drafts.

## Previous changes in 0.5.1

- Add the public SDK `::vault-note{vault="MyVault" path="Notes/Review été.md"}` action to new assistant messages. The Markdown file card offers **Download** and a note action that switches between **Open in Vault View** and **Hide note**. Opening…
