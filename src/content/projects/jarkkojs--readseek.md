---
repo: "jarkkojs/readseek"
name: "readseek"
description: "`readseek` is a structural read command"
readmeQualityOk: true
url: "https://github.com/jarkkojs/readseek"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [48, 46]
stars: 8
forks: 3
openIssues: 2
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-11T15:33:57Z"
lastCommitAt: "2026-07-24T06:10:55Z"
lastReleaseAt: "2026-06-13T22:45:01Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 62
maintainers: ["jarkkojs", "happytomatoe"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fd2554617eda6be86f0e6c9cc54d4ad1610976ab78a514b8c29e3b4cafb1a2a/jarkkojs/readseek"
---

# readseek

`readseek` reads source files and PDFs for scripts, editors, and coding agents.
It returns compact JSON with stable line/hash anchors, symbol maps, parse
diagnostics, AST matches, references, and rename plans.

The screencast above was recorded with a very modest AMD Ryzen 5 PRO 4650 laptop
CPU, and demonstrates the tailored inference engine for Qwen3-VL-2B.

## Installation

Install the npm wrapper with a prebuilt binary:

```sh
npm install -g @jarkkojs/readseek
```

Or install the native program from crates.io:

```sh
cargo install readseek
```

Prebuilt binaries are available for macOS ARM64; Linux ARM64 and x64; and Windows
x64. The Linux binaries are statically linked with musl.

To build and install from source:

```sh
make install
```

## Plugins

### Pi extension

The bundled [pi-readseek extension](https://github.com/jarkkojs/readseek/blob/HEAD/packages/pi-readseek/README.md) adds ReadSeek's
anchored file and structural-code tools to Pi:

```sh
pi install npm:pi-readseek
```

### OpenCode plugin

The [opencode-readseek plugin](https://github.com/jarkkojs/readseek/blob/HEAD/packages/opencode-readseek/README.md) adds the same
tools to OpenCode. Add it to…
