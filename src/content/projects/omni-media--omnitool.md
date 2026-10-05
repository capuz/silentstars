---
repo: "omni-media/omnitool"
name: "omnitool"
description: "video processing tools"
readmeQualityOk: true
url: "https://github.com/omni-media/omnitool"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 44
forks: 7
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2024-05-25T22:57:22Z"
lastCommitAt: "2026-10-05T10:47:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 47
maintainers: ["zenkyuv"]
openGraphImageUrl: "https://opengraph.githubassets.com/e52c5449a24c41c27974a4ca919ecf1623a56572688bdee08bfdc63bb434bc3d/omni-media/omnitool"
---

# 🚧 Work In Progress

> **Note:** Omnitool is under development. Expect breaking changes, evolving APIs, and experimental features.

---

## ✅ What this library is

- API for building and rendering timelines in the browser
- Uses WebCodecs, Web Workers, and the File System Access API for export
- usage is currently JavaScript/TypeScript only, cli soon

## 🚀 Install

```bash
npm i @omnimedia/omnitool
```

## AI skill

Teach your AI agent to create and edit Omnitool timeline JSON:

```sh
npx skills add omni-media/omnitool
```

## 📦 Quick Start

#### Loading media

```ts
import {Driver, Omni, Datafile} from "@omnimedia/omnitool"

const driver = await Driver.setup()
const omni = new Omni(driver)

const {clip} = await omni.load({
	clip: Datafile.make(file) // file is a File or Blob
})
```

#### Declaring the timeline

```ts
const timeline = omni.timeline(o => {
	const caption = o.text("Hello world", {
		duration: 1500,
		styles: {fill: "white", fontSize: 48}
	})
	const xfade = o.transition.fade(500)
	const primary = o.filter.blur(
		o.clip(clip, {start: 0, duration: 3000}),
		{strength: 8, quality: 4}
	)

	const storyline = o.sequence(
		primary,
		xfade,
		o.clip(clip, {start:…
