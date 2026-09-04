---
repo: "openclaw/ffmpeg-wasm"
name: "ffmpeg-wasm"
description: "Lightweight FFmpeg and FFprobe for Node, built as modern WebAssembly for local media automation."
readmeQualityOk: true
url: "https://github.com/openclaw/ffmpeg-wasm"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 53
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2026-06-06T22:08:07Z"
lastCommitAt: "2026-09-04T08:10:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 83
undervaluedScore: 31
maintainers: ["steipete", "vincentkoc", "SebTardif"]
openGraphImageUrl: "https://opengraph.githubassets.com/c36d8198be6cdc6e2601dc173521e1954b6717a2397da157d6e1ae835407ebca/openclaw/ffmpeg-wasm"
fundingLinks: ["GITHUB:https://github.com/openclaw"]
---

# ffmpeg-wasm local

Lightweight FFmpeg and FFprobe for Node, built as modern WebAssembly for local media automation.

This repository is intentionally small in scope: one reproducible Emscripten build, one TypeScript wrapper, and enough codecs/protocols for media inspection, audio extraction, thumbnails, pipe I/O, and segmentation.

## Why

Many media workflows need predictable FFmpeg and FFprobe behavior without carrying a full native FFmpeg bundle. This package builds a narrow LGPL FFmpeg wasm core and exposes it through:

- `ffmpeg-wasm`, a CLI-compatible FFmpeg entrypoint.
- `ffprobe-wasm`, a CLI-compatible FFprobe entrypoint.
- TypeScript APIs for binary-safe buffered or streaming execution.

## License

The wrapper, scripts, and documentation in this repository are MIT licensed.

Generated FFmpeg assets in `dist/` are copied from FFmpeg and are LGPL-2.1-or-later. Linked libvpx code is BSD-licensed. The build does not pass `--enable-gpl` or `--enable-nonfree`. FFmpeg and libvpx license files are copied into `dist/` during `pnpm build`.

Keep wrapper code and generated FFmpeg binaries conceptually separate when this moves under OpenClaw packaging. A downstream package can…
