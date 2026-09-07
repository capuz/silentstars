---
repo: "hchia93/uasset-workbench"
name: "uasset-workbench"
description: "Exports Unreal Engine 5 assets into a structure an LLM can read, extracting just the context it needs."
readmeQualityOk: true
url: "https://github.com/hchia93/uasset-workbench"
language: "C++"
languages: ["C++"]
languagePcts: [95]
topics: ["exporter", "ue5-plugin", "ai-workflow", "cpp", "json", "unreal-engine", "unreal-engine-5", "ai-tooling", "asset-pipeline", "binary-to-text"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-08T17:12:53Z"
lastCommitAt: "2026-09-07T08:33:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 36
maintainers: ["hchia93"]
openGraphImageUrl: "https://opengraph.githubassets.com/14de04c88046650ce9100264928752fe988a97918eadfc8082123fec7eb6094e/hchia93/uasset-workbench"
---

# uasset-workbench

**English** | [中文](https://github.com/hchia93/uasset-workbench/blob/HEAD/README_CN.md)

An editor plugin that lets scripts and AI agents operate on Unreal Engine 5 uassets non-interactively.

## What problem it solves

| Problem | How it shows up |
| --- | --- |
| Can't read | Logic and configuration are locked inside binary `.uasset` files, and an AI handed the file has nowhere to start. An EventGraph with hundreds of nodes has no readable text form, and abandoned variables, broken connections, wrong defaults are impossible to fully audit by eye in the editor. Montage notify timing, UMG hierarchy and keyframes, Niagara and material parameters, DataTable values, level actor placement and streaming config all exist only in the editor UI |
| Can't write | Changing a UMG layout means dragging by hand in the editor, there is no version-controllable, replayable write path |
| Can't change what exists | Adding a component to a Blueprint, wiring it into the graph and setting its default are three separate hand edits, and doing that across many Blueprints means doing it many times. An animation state machine is the same story one level up, states, conduits, transitions…
