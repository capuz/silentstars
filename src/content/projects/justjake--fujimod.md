---
repo: "justjake/fujimod"
name: "fujimod"
description: "Fujifilm camera modification tools. DO NOT FLASH CUSTOM FIRMWARE TO YOUR CAMERA WITHOUT DUAL BOOTING FIRST"
readmeQualityOk: true
url: "https://github.com/justjake/fujimod"
homepage: "https://fujimod.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
topics: ["emulator", "fujifilm", "usb", "ai-slop"]
stars: 181
forks: 30
openIssues: 43
closedIssues: 24
watchers: 4
contributors: 16
recentReleases: 2
createdAt: "2026-10-15T16:34:15Z"
lastCommitAt: "2026-11-07T09:30:43Z"
lastReleaseAt: "2026-10-27T18:58:45Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 29
maintainers: ["justjake", "MariMul", "BlancRyuuzaki"]
openGraphImageUrl: "https://opengraph.githubassets.com/f521e4ae4f2c64240c29b084c4b878f0bf8e4ec3a12987fc655236f7eee0af19/justjake/fujimod"
---

# FujiMod

This repo contains open source tooling that can help developers access camera
internals and work on mods. We’re gathering on the
[FujiHack.org Discord](https://discord.gg/UZXDktvAZP) to collaborate.

The FujiMod firmware modification itself is not yet open source, but we’re
working on it!

If you want to help by testing FujiMod firmware on your camera,
[head to fujimod.com](https://fujimod.com/). Due to copyright, we can’t distribute
ready-made builds of FujiMod since it’s based on the official firmware. Use the
search box on the site to find the download link from Fujifilm for your camera.
Then upload it to fujimod.com so we can build the mod for your camera.

Camera tools, emulation and firmware mods. The browser application lives in
[apps/web](https://github.com/justjake/fujimod/blob/HEAD/apps/web/README.md), including its body definitions, patch
interpreter, runtime adapter and browser checks. The shared
[emulator UI](https://github.com/justjake/fujimod/blob/HEAD/packages/emulator-ui/README.md) lives in `packages/emulator-ui/`.

Use `mise install`, then work in `apps/web`:

```sh
pnpm install --frozen-lockfile
cd apps/web
pnpm test
pnpm run dev
```

The root…
