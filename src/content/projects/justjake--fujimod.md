---
repo: "justjake/fujimod"
name: "fujimod"
description: "Fujifilm camera modification tools. DO NOT FLASH CUSTOM FIRMWARE TO YOUR CAMERA WITHOUT DUAL BOOTING FIRST"
readmeQualityOk: true
url: "https://github.com/justjake/fujimod"
homepage: "https://fujimod.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [76]
topics: ["emulator", "fujifilm", "usb", "ai-slop"]
stars: 50
forks: 7
openIssues: 13
closedIssues: 1
watchers: 5
contributors: 7
recentReleases: 2
createdAt: "2026-10-15T16:34:15Z"
lastCommitAt: "2026-10-29T10:21:37Z"
lastReleaseAt: "2026-10-27T18:58:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/5ec1fdcaa2918cd9f7cecfb7a68362ebb25ca10100d7ee2b7f6119c43f1c44ea/justjake/fujimod"
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
npm ci
npm --prefix packages/emulator-ui ci
cd apps/web
npm ci
npm test
npm run dev
```…
