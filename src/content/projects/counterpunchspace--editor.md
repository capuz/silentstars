---
repo: "counterpunchspace/editor"
name: "editor"
description: "Counterpunch Font Editor"
readmeQualityOk: true
url: "https://github.com/counterpunchspace/editor"
homepage: "https://counterpunch.space"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [57, 35]
stars: 69
forks: 4
openIssues: 34
closedIssues: 79
watchers: 7
contributors: 5
recentReleases: 0
createdAt: "2025-10-13T19:25:38Z"
lastCommitAt: "2026-09-22T08:45:51Z"
lastReleaseAt: "2026-01-15T11:46:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 45
maintainers: ["yanone"]
openGraphImageUrl: "https://opengraph.githubassets.com/f080ec764ae2437ea52a23565a796ccd8b0ebda117a0d386e239f4ad7028a160/counterpunchspace/editor"
discussionCount: 0
---

## Develpoment Stage

Development is in **Alpha** stage (features not complete).
See [Feature Overview](#feature-overview) for details.

## Live App

Try the editor live:

- Latest official release: https://editor.counterpunch.space (rarely updated, see [releases](https://github.com/counterpunchspace/editor/releases))
- Latest preview: https://preview.editor.counterpunch.space (cut with `./previewrelease.sh`; matching website/room at https://preview.counterpunch.space and https://preview.rooms.counterpunch.space)

Shipping Cloudflare is a three-repo composed cutover (matching git tag + `trio.json`), not an editor Pages deploy alone. See [Composed releases](https://github.com/counterpunchspace/editor/blob/HEAD/developer-docs/COMPOSED_RELEASE.md).

## Source File I/O

Counterpunch converts opened source files into the Babelfont model for editing.
Direct source saving is deliberately limited to formats with a browser-safe
serializer; unsupported source formats fail instead of receiving Babelfont JSON
under their original extension.
Saving to UFO/DS and .glyphspackage is in development.

**Cloud** is a filesystem plugin, not a file format. Open/Save talk to per-shard
rooms…
