---
repo: "quboliu/flintmark"
name: "flintmark"
description: "Obsidian-style Markdown Live Preview for VS Code — in-place WYSIWYG, no source/preview split, plain Markdown on disk."
readmeQualityOk: true
url: "https://github.com/quboliu/flintmark"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [54, 40]
stars: 29
forks: 7
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-06-19T17:13:06Z"
lastCommitAt: "2026-11-03T11:14:28Z"
lastReleaseAt: "2026-06-21T14:43:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 44
maintainers: ["quboliu", "codex", "JacobStephens2"]
openGraphImageUrl: "https://opengraph.githubassets.com/9eecab91d6e406b5a6a2d745df81abc0a0877e5092ff62885807b3023700e3f2/quboliu/flintmark"
---

Flintmark is a custom Markdown editor for VS Code. It renders formatting in the
document and reveals the source around the caret, so editing and previewing
happen in the same tab. A freshly opened note renders in full until you click
or type — the initial cursor position never opens the file showing raw source.
The file on disk is still an ordinary `.md` file.

It also adds the pieces that are usually missing when an Obsidian vault is
opened in VS Code: wikilink and tag completion, Properties, image embeds,
Outline, Todo, and Backlinks.

## Screenshots

These screenshots were taken with the extension itself, loaded from this
repository in a VSCodium development host.

### Dark and light themes

Flintmark follows the current VS Code color mode. Changing themes updates the
open editor in place, without moving the caret or resetting the scroll position.

Use **Flintmark: Select Theme** or set `"ofm.theme": "catppuccin"` to use
Catppuccin, adapted from [Catppuccin for Obsidian](https://github.com/catppuccin/obsidian).
It uses Latte in light mode and Mocha in dark mode. Things remains the default.

### Editing in place

Click a rendered line to edit its Markdown. Move the caret…
