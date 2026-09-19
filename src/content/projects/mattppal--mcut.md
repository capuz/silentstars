---
repo: "mattppal/mcut"
name: "mcut"
description: "Open source video editing SDK for TypeScript apps"
readmeQualityOk: true
url: "https://github.com/mattppal/mcut"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 6
forks: 0
openIssues: 6
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-14T19:58:52Z"
lastCommitAt: "2026-09-19T01:22:45Z"
lastReleaseAt: "2026-06-16T14:39:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 62
undervaluedScore: 16
maintainers: ["mattppal", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/74f05a531c07bf17ba65a9028064d0a5086196bbb00a16fda255cd3ab38bc020/mattppal/mcut"
---

# mcut

Open source video editing SDK for TypeScript apps.

mcut provides a headless timeline engine, command system, renderer, media/export
helpers, transcription adapters, React bindings, CLI tools, and MCP tools.
Studio lives in `apps/studio` and is Apache-2.0 like the packages.

The first public packages are alpha releases. Expect API movement while the SDK
is still hardening.

## Packages

- `@mcut/timeline` - project model, serializable commands, undo/redo, selectors
- `@mcut/editor` - user-level operators and pure edit/gesture planning
- `@mcut/compositor` - Canvas2D/WebGPU frame rendering and hit testing
- `@mcut/media` - probing, thumbnails, preview media, browser WebCodecs export
- `@mcut/react` - React provider, hooks, and player canvas bindings
- `@mcut/transcription` - provider interface, normalized transcripts, captions,
  SRT, and VTT
- `@mcut/transcription-ai-sdk`, `@mcut/transcription-assemblyai`,
  `@mcut/transcription-local` - transcription providers
- `@mcut/cli` - headless CLI
- `@mcut/mcp-server` - MCP and local browser bridge tooling

## Install

```sh
bun add @mcut/timeline @mcut/editor
bunx @mcut/cli --help
```

## Docs

- Website docs:…
