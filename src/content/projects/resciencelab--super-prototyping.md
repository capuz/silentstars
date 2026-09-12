---
repo: "ReScienceLab/super-prototyping"
name: "super-prototyping"
description: "Copy any app's UI, prototype your own — as plain HTML artboards on a local canvas. No design tool, no build step. Every color and metric traced to a measurement."
readmeQualityOk: true
url: "https://github.com/ReScienceLab/super-prototyping"
homepage: "https://prototyping.rescience.com"
language: "HTML"
languages: ["HTML"]
languagePcts: [97]
topics: ["agent-skills", "claude-code", "design-system", "prototyping", "tldraw", "ui-mockups"]
stars: 63
forks: 1
openIssues: 3
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-08-29T08:56:54Z"
lastCommitAt: "2026-09-12T08:05:16Z"
lastReleaseAt: "2026-09-09T19:30:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 38
maintainers: ["Jing-yilin", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5c70d86e58bb577aeb02d4a194b353c4161873c5a537bd001101b83d9ca41ec/ReScienceLab/super-prototyping"
---

# super-prototyping

An agent plugin for rebuilding and designing product UI as **self-contained
HTML artboards on a local tldraw canvas**, with the measuring toolkit and the
agent skills that drive the work. Install it into any project; your boards stay
in your project and the plugin upgrades around them.

The point of it is a replica you can defend. Every colour and every metric on a
cloned board traces back to a measurement of the source capture, and the
capture itself is parked on the canvas directly under the replica, so the two
are one glance apart rather than one memory apart.

How you use it: install the plugin, start the canvas, then hand Claude Code
your screenshots and ask for the `clone-prototype` skill. It grids the capture,
samples it region by region, writes one measured token block, generates every
board from a single `gen.py`, then re-renders those boards and diffs them
against the capture until the numbers hold. `new-ui-mock` does the same for
screens that have no reference to measure. Both write `.html` files into
`mockups/canvases/<board>/`, and the canvas picks them up as shapes with no
registry, no build step and no design tool.

## Five worked examples

Five…
