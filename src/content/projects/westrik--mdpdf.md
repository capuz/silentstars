---
repo: "westrik/mdpdf"
name: "mdpdf"
description: "Convert Markdown to PDF using a self-contained Rust binary (CLI or Node.js)"
readmeQualityOk: true
url: "https://github.com/westrik/mdpdf"
homepage: "https://www.npmjs.com/package/@mdpdf/mdpdf"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
topics: ["markdown", "nodejs", "pdf", "rust"]
stars: 18
forks: 8
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-07-24T08:31:46Z"
lastCommitAt: "2026-07-29T06:12:54Z"
lastReleaseAt: "2026-04-29T00:42:50Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 52
maintainers: ["sabraman", "westrik", "varunsharma27"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8de68c8c253ae1c734ff82935c95154aaf99a00e9adbd7e2af2142aeacb4424/westrik/mdpdf"
---

# mdpdf

Convert Markdown to PDF with a self-contained Rust binary via CLI or Node.js.

## Features

- Convert Markdown to PDF using [Typst](https://github.com/typst/typst)
- Self-contained (no large external dependencies)
- Cross-platform support (x86_64 and aarch64)
- Node.js bindings via napi-rs
- Syntax highlighting for code blocks

### Example Output

- [Example PDF](https://github.com/westrik/mdpdf/blob/main/tests/demo.pdf) ([Source](https://raw.githubusercontent.com/westrik/mdpdf/refs/heads/main/tests/demo.md))

## Usage

### Basic Usage

#### CLI

```sh
mdpdf README.md -o README.pdf
```

#### Node.js

```
npm install @mdpdf/mdpdf
# or
yarn add @mdpdf/mdpdf
# or
pnpm add @mdpdf/mdpdf
```

```javascript
import { markdownToPdf } from "@mdpdf/mdpdf";
const pdfBytes = await markdownToPdf("# this is markdown");
```

## Development

### CLI

```sh
cargo build --release --features cli
cargo test
```

### Node.js

```sh
npm run build
npm run test
```
