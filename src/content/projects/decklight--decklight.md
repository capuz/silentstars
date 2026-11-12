---
repo: "decklight/decklight"
name: "decklight"
description: "Decklight — a presentation library designed to be authored by AI agents and humans alike: single-file decks, Keynote-style builds, theme-aware SVG diagrams, truthful terminal recordings"
readmeQualityOk: true
url: "https://github.com/decklight/decklight"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [85]
stars: 5
forks: 1
openIssues: 10
closedIssues: 198
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-07-06T23:39:05Z"
lastCommitAt: "2026-11-12T11:35:46Z"
lastReleaseAt: "2026-10-22T17:56:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 66
maintainers: ["gphilipp"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b2dce3e95cffd32a5d48215150d48bb7c3ccfcd8e28657a60922910582ade57/decklight/decklight"
---

# Decklight

A presentation library for people who would rather write their slides than
fight them. A deck is one HTML file. The runtime is one JS file, one CSS file
and a theme, with no dependencies and no build step. It opens straight from
`file://`, it diffs cleanly in git, and an AI agent can read, write and verify
every byte of it.

It is live at [decklight.io](https://decklight.io). The two-minute version is
`demo/intro.html`, the whole journey (an empty folder to a published talk) is
`demo/showcase.html`, and the contract
everything is built against is [`SPEC.md`](https://github.com/decklight/decklight/blob/HEAD/SPEC.md), with the marketplace
and library half in [`PLATFORM.md`](https://github.com/decklight/decklight/blob/HEAD/PLATFORM.md).

## Why

I got tired of decks being binary blobs. You can't grep a Keynote file, you
can't code-review a PowerPoint, and when slide 12 has a contrast problem at
11pm, you're the one clicking around. I wanted a deck that is plain text end to
end, and a codebase where an agent can do most of the work because it can check
its own results: clipped content flags itself, every theme passes a
machine-checked contrast gate, and a headless render…
