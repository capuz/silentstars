---
repo: "stacksjs/dtsx"
name: "dtsx"
description: "⚡ Extremely fast, smart & configurable DTS emitter."
readmeQualityOk: true
url: "https://github.com/stacksjs/dtsx"
homepage: "https://dtsx.netlify.app"
language: "TypeScript"
languages: ["TypeScript", "Zig"]
languagePcts: [79, 21]
topics: ["dts", "generator", "types", "typescript", "isolated-declarations", "dts-emitter"]
stars: 178
forks: 3
openIssues: 13
closedIssues: 47
watchers: 1
contributors: 11
recentReleases: 0
createdAt: "2024-10-13T21:41:38Z"
lastCommitAt: "2026-11-07T22:50:39Z"
lastReleaseAt: "2024-11-08T19:15:52Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 88
undervaluedScore: 42
maintainers: ["chrisbbreuer"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/872136801/c8fdd4e4-7f8a-4ea0-92ad-9a39181afe62"
fundingLinks: ["GITHUB:https://github.com/chrisbbreuer", "OPEN_COLLECTIVE:https://opencollective.com/stacksjs"]
---

# dtsx

> Extremely fast, smart `.d.ts` generation with sound type inference & `@defaultValue` preservation.

## Features

- 🎯 Sound type inference with `@defaultValue` preservation
- ⚡ Extremely fast `.d.ts` generation
- 🤖 Cross-platform binary _(Zig native + Bun)_
- 🔄 Parallel processing support
- 📥 Stdin/stdout support for piping
- 👀 Watch mode for development
- ⚙️ Highly configurable
- ✅ Built-in validation
- 🔌 tsdown integration with ESM, CommonJS and watch support
- 📦 Bundled API and CLI with no required npm dependencies

> [!NOTE]
> dtsx works out of the box without `isolatedDeclarations` — it infers narrow types directly from your source values. That said, enabling `isolatedDeclarations` is still a good idea as it enforces explicit type annotations at module boundaries, encouraging better type hygiene across your codebase. When enabled, dtsx treats annotations as authoritative, skips initializers for concrete types, and only reads broad containers to preserve `@defaultValue` documentation.

## Install

```bash
bun install -d @stacksjs/dtsx
```

> _@npmjs.com, please allow us to use the `dtsx` package name 🙏_

## Usage

There are two ways to use dtsx: _as a library…
