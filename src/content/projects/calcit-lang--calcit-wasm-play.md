---
repo: "calcit-lang/calcit-wasm-play"
name: "calcit-wasm-play"
description: "Calcit Rust compiled to WASM"
readmeQualityOk: true
url: "https://github.com/calcit-lang/calcit-wasm-play"
homepage: "http://repo.calcit-lang.org/calcit-wasm-play/"
language: "Rust"
languages: ["Rust"]
languagePcts: [68]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 2
createdAt: "2021-10-04T08:31:03Z"
lastCommitAt: "2026-09-05T07:47:39Z"
lastReleaseAt: "2026-08-30T08:34:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 58
maintainers: ["tiye"]
openGraphImageUrl: "https://opengraph.githubassets.com/383a921c46839ba9e284a6b4cc8a7478e2ced10f62ffc532eb765511136cbfbb/calcit-lang/calcit-wasm-play"
---

## Calcit WASM playground

Demo http://repo.calcit-lang.org/calcit-wasm-play/

This project embeds the Calcit runtime in WebAssembly and provides an in-browser
playground for evaluating small Calcit programs. The application UI is built
with Respo, while the evaluator itself runs locally in the browser without a
server round trip.

The Rust `calcit` crate, `deps.cirru` toolchain, and `@calcit/procs` package are
kept on the same Calcit release. Calcit modules in `deps.cirru` use released
tags so that CI and local builds resolve a reproducible dependency graph.

### Development

Install the Calcit modules and verify the lockstep toolchain:

```bash
caps --ci --strict
caps verify --toolchain
```

Build the embedded runtime:

```bash
wasm-pack build -t web
```

Serve page:

```bash
yarn
yarn vite
```

Validate the Calcit application before publishing:

```bash
calcit calcit.cirru --check-only
calcit calcit.cirru analyze deprecated --summary-only --format json
calcit calcit.cirru js
yarn vite build --base=./
```

### 中文说明

本项目将 Calcit runtime 编译进 WebAssembly，在浏览器内直接执行小段
Calcit 程序；界面使用 Respo 构建。Rust crate、`deps.cirru` 与
`@calcit/procs` 保持同一 Calcit 版本，模块依赖固定到已发布 tag，确保
本地与 CI 的解析结果可复现。…
