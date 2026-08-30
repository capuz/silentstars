---
repo: "patterkit/patter"
name: "patter"
description: "Editor, compiler, and runtimes for writing and running dialogue flows for videogames."
readmeQualityOk: true
url: "https://github.com/patterkit/patter"
homepage: "https://patterkit.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["branching-narrative", "dialogue-system", "game-development", "godot", "ink", "interactive-fiction", "localization", "narrative-design", "unity", "unreal-engine"]
stars: 18
forks: 0
openIssues: 0
closedIssues: 16
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-07-03T19:27:15Z"
lastCommitAt: "2026-08-30T09:25:57Z"
lastReleaseAt: "2026-07-04T21:23:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 54
maintainers: ["wildwinter", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1288614296/97bbdf98-5e93-4f3a-a801-78394436d4c4"
discussionCount: 0
---

# Patter

**Patter** is an open toolkit for authoring and running spoken dialogue in games -
performance-first and localisation-first. Writers work in **Patterpad**, a calm
desktop editor; a compiler turns the plain files on disk into a small runtime
bundle that **Patterplay** runtimes play back inside your game - the same story
on JavaScript, Unity, Unreal, and Godot. Think "Ink, but spoken-line-first":
every line carries a stable id so VO takes, recording status, and translations
all hang off it.

Everything here is MIT-licensed. **Documentation lives at
[patterkit.dev](https://patterkit.dev)** - a guided tour, per-role guides for
writers / producers / game programmers, and the format reference.

## What's in this repository

| Area | What it is |
|------|------------|
| [`packages/`](https://github.com/patterkit/patter/blob/HEAD/packages) | The `@patterkit/*` npm workspaces (see below) - model, compiler, runtime, ops, CLI, the Patterpad app. |
| [`ports/`](https://github.com/patterkit/patter/blob/HEAD/ports) | The native Patterplay runtimes: Unity (C#), Unreal (C++), Godot (GDScript), each with a bundled demo and held to the shared test suite. |
|…
