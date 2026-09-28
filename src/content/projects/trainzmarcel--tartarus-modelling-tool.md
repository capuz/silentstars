---
repo: "TrainzMarcel/Tartarus-Modelling-Tool"
name: "Tartarus-Modelling-Tool"
description: "currently unfinished, simplified 3d modelling tool because blender is difficult and slow for things like level editing or building creation"
readmeQualityOk: true
url: "https://github.com/TrainzMarcel/Tartarus-Modelling-Tool"
language: "GDScript"
languages: ["GDScript"]
languagePcts: [98]
topics: ["3d", "computer-graphics", "godot", "modeling", "open-source"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-10-03T08:23:09Z"
lastCommitAt: "2026-09-28T10:06:25Z"
lastReleaseAt: "2025-12-15T12:50:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 38
maintainers: ["TrainzMarcel"]
openGraphImageUrl: "https://opengraph.githubassets.com/40750b6a6221ed773ff9f069c6b4739c10700f10e81aa06a319735e8953f9af8/TrainzMarcel/Tartarus-Modelling-Tool"
---

# Tartarus-Modelling-Tool

nearly useable currently

each building block is treated like it has its own coordinate system

```
REQUIREMENTS
v0.1
	VISUAL (visual feedback for editing)
	x RV1 implement 3d selection box
	x RV2 use the selection box to denote every selected part
	x RV3 use the selection box with a flashing highlighter material for any hovered part
	x RV4 paint tool, using the selection box and setting color of the selection box to the selected color in the paint tool, not meant for dragging
	x RV5 material tool also uses the selection box and colors it orange
	x RV6 delete tool also uses the selection box and colors it red

	TOOLS (functionality for editing)
	x RT1 implement dragging of parts with limited distance, with selection wireframe
	x RT2 this dragging behavior as well as scaling and rotating behavior will have adjustable snap size and will snap both the rotation and position to any parts that are hovered over while dragging another part(s)
	x RT3 implement selecting of parts; not holding shift will only select single parts, holding shift will allow for selection of several parts
	x RT3 tools 1-4 (dragging, linearly translating, rotating and scaling) have the…
