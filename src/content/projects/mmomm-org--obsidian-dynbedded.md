---
repo: "MMoMM-org/obsidian-dynbedded"
name: "obsidian-dynbedded"
description: "Embed snippets, templates and any linkable by delegating the current scope to the embedded file either by using a direct reference or as reference with date naming format relative from today. Also supports Quoth Codeblocks."
readmeQualityOk: true
url: "https://github.com/MMoMM-org/obsidian-dynbedded"
language: "TypeScript"
languages: ["TypeScript", "Shell"]
languagePcts: [47, 43]
stars: 34
forks: 0
openIssues: 1
closedIssues: 18
watchers: 3
contributors: 4
recentReleases: 2
createdAt: "2022-10-30T21:17:59Z"
lastCommitAt: "2026-07-28T14:56:28Z"
lastReleaseAt: "2026-05-05T14:38:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 94
undervaluedScore: 60
maintainers: ["MMoMM-org", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/378ec964342c81b73c9c172ba338c088ecc46faa99c6491ede8326ff80f28f81/MMoMM-org/obsidian-dynbedded"
fundingLinks: ["GITHUB:https://github.com/MMoMM-org", "KO_FI:https://ko-fi.com/mmomm", "CUSTOM:https://www.buymeacoffee.com/mmomm"]
---

# Obsidian Dynbedded
Embed snippets, templates and any linkable by delegating the current scope to the embedded file either by using a direct reference or as reference with date naming format relative from today.

> 🔄 **Full Quoth replacement.** Dynbedded renders [Quoth](https://github.com/erykwalder/quoth) code blocks directly (Quoth is deprecated — last release 2023). Enable **Render quoth blocks** in the settings and your existing `quoth` notes keep working with no rewrites. See [Quoth compatibility](#quoth-compatibility) below.

# Features

## Embedded other notes

Notes can be embedded and will execute any dynamic content from the context of the active note.
You can also use Headers in the embedded.

e.g.
~~~
```dynbedded
[[Note with Dataview#Pick any header level you like]]
```
~~~

This will then include the content of that note into the current note, and execute any dynamic content from the included note in the context of the current note.

As an example: a Dataview script to show inline links
~~~
```dataview
LIST FROM [[]]
```
~~~
will show the inline links of the current note, not the inline links of the note you are embedding.

## Current Date substitution of note…
