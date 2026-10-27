---
repo: "vividn/datum"
name: "datum"
description: "Record timestamped data on your life"
readmeQualityOk: true
url: "https://github.com/vividn/datum"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [64, 22]
stars: 5
forks: 2
openIssues: 0
closedIssues: 16
watchers: 3
contributors: 4
recentReleases: 1
createdAt: "2020-06-13T11:27:23Z"
lastCommitAt: "2026-10-27T08:16:05Z"
lastReleaseAt: "2026-10-21T21:45:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 85
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/6fdfb1b36ee4d885ac14b291be3ac8b9951b6c784180774f06af3708406663c2/vividn/datum"
---

# datum

**Record your life, cultivate awareness, and confront the truth.**

datum is a tool for mindfully recording a life. You log moments (`occur coffee`), stretches of time (`start reading`
… `stop reading`) and states that hold until they change (`switch environment home`), each in a word or two, and read them
back as timelines, the state of things now, and statistics. Logging asks for a moment of attention; looking back
shows you what actually happened, not what you remember. datum has been recording its author's life since 2016,
and this is its third version.

Try it at **[datum.day](https://datum.day)**: the same datum in your browser, nothing to install.

**datum is local-first.** Your record is a SQLite database on each of your devices, never on a server. Copies sync
peer to peer over [iroh](https://www.iroh.computer), encrypted end to end ([how](https://github.com/vividn/datum/blob/HEAD/docs/sync.md)), so losing one device
loses nothing the others have.

datum is CLI-first: everything it does is a command, and datum.day runs the same CLI compiled for the browser, so
what you tap there is a datum command.

## Examples

```bash
datum occur coffee                 # a…
