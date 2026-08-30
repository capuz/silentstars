---
repo: "dudaanton/abele-obsidian-plugin"
name: "abele-obsidian-plugin"
description: "An Obsidian plugin that adds a lot of functionality I personally find missing."
readmeQualityOk: true
url: "https://github.com/dudaanton/abele-obsidian-plugin"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [66, 31]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-01-04T17:26:34Z"
lastCommitAt: "2026-08-30T09:23:12Z"
lastReleaseAt: "2026-08-25T20:27:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 62
maintainers: ["dudaanton"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c99466161c3fcb4bde547c11fe47bf89cf58f49e3e969a86408b8384ce84e41/dudaanton/abele-obsidian-plugin"
---

# Ābele Obsidian plugin

An Obsidian plugin that adds a lot of functionality I personally find missing:

- Logs
- Tasks
- Journals and Calendar
- Financial Tracker
- Time Tracker
- Image Galleries
- Charts
- Templates
- AI Agents
- Scripts
- Various helper tools, etc.

I've been working on this plugin for several years. It started as a collection of helpers that were hard to adapt to workflows other than my own, and it depended heavily on the Dataview API. I rewrote it from scratch to make it more universal and as independent of other plugins as possible. My goal is to consolidate all the functionality I need into a single plugin.

Everything in it is a note. A task is a note, a transaction is a note, a time entry is a note, and notes belong to each other through the `groups` frontmatter property. `groups` is a graph rather than a folder tree: a note can belong to several groups, and a group can belong to another group. Every list and every timeline in the plugin follows those links, and so does everything an agent is allowed to see.

Most of my recent work has gone into the last two items on that list. A script is plain JavaScript that runs inside Obsidian with the whole vault in…
