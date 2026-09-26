---
repo: "mewz-project/wasker"
name: "wasker"
description: "WebAssembly AoT compiler for your favorite Operating System"
readmeQualityOk: true
url: "https://github.com/mewz-project/wasker"
language: "WebAssembly"
languages: ["WebAssembly"]
languagePcts: [90]
topics: ["compiler", "llvm", "wasm", "rust", "webassembly"]
stars: 302
forks: 22
openIssues: 12
closedIssues: 8
watchers: 3
contributors: 8
recentReleases: 2
createdAt: "2023-12-28T05:38:49Z"
lastCommitAt: "2026-09-26T08:48:01Z"
lastReleaseAt: "2026-09-26T03:12:32Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 84
undervaluedScore: 28
maintainers: ["dependabot[bot]", "saza-ku", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4335197f922ea3df82cf81f2985088c55903dfb7fc90c199637a55a68fef4d5/mewz-project/wasker"
---

# Wasker

Wasker is a WebAssembly compiler.
Wasker compiles Wasm binary into ELF format binary.　
Currently, Wasker supports WASI preview 1.

## What's new with Wasker

There are already software tools that compile Wasm to native binaries.

What's new with Wasker is, Wasker generates an **OS-independent** ELF file where WASI calls from Wasm applications remain **unresolved**.

This unresolved feature allows Wasker's output ELF file to be **linked with WASI implementations provided by various operating systems**, enabling each OS to execute Wasm applications.

Wasker empowers your favorite OS to serve as a Wasm runtime!

# Quick Start

## Step1: Install Wasker

Download and install the latest release binary for your architecture:

```
curl -sSfL "https://github.com/mewz-project/wasker/releases/latest/download/wasker-linux-$(uname -m)-musl" \
  -o /usr/bin/wasker
chmod +x /usr/bin/wasker
```

Release binaries are fully static (musl + LLVM built from source). No runtime dependencies are required.

## Step2: Create Wasm binary
Create any Wasm binary.
### example1
Please refer [examples](https://github.com/mewz-project/wasker/blob/HEAD/examples) for building Wasm from Rust and Go. 

```…
