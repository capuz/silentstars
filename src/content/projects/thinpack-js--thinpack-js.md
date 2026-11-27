---
repo: "thinpack-js/thinpack.js"
name: "thinpack.js"
description: "Node.js apps as one executable. Hello World on Linux x64: 4.1 MiB (Thinpack/QuickJS), 104.1 MiB (Bun), 143.7 MiB (Node SEA). Also supports V8."
readmeQualityOk: true
url: "https://github.com/thinpack-js/thinpack.js"
language: "JavaScript"
languages: ["JavaScript", "Rust"]
languagePcts: [72, 28]
topics: ["bundler", "executable", "nodejs", "quickjs", "rust", "single-file", "v8"]
stars: 6
forks: 1
openIssues: 10
closedIssues: 97
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2026-11-17T07:28:20Z"
lastCommitAt: "2026-11-27T16:03:30Z"
lastReleaseAt: "2026-11-26T13:44:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 62
maintainers: ["0x5457", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/001343ec02f26368fb13397fb95f3efd8541ab72b1ff3c7b2bf88638ca7377ba/thinpack-js/thinpack.js"
discussionCount: 0
promoted: true
---

## Quick start

On macOS or Linux, run this in a new directory:

```sh
curl -fsSL https://raw.githubusercontent.com/thinpack-js/thinpack.js/main/scripts/install.sh | sh
printf '%s\n' 'console.log("Hello from Thinpack!")' > hello.js
"$HOME/.local/bin/thinpack" pack hello.js -o hello
./hello
```

On Windows x64, extract the [matching release archive](https://github.com/thinpack-js/thinpack.js/releases/latest), then run this in the extracted directory:

```powershell
'console.log("Hello from Thinpack!")' | Set-Content -Encoding Ascii hello.js
.\thinpack.exe pack hello.js -o hello.exe
.\hello.exe
```

Both print `Hello from Thinpack!`. Replace `hello.js` with your app's entry point. Pack for the target OS and architecture. Keep `thinpack` and its runtime template together on the build machine; ship just the output executable.

## Size and compatibility

A single-line `console.log("hello")` packs to **4.03 MiB** (4,230,361 bytes) on [Linux x64 CI](https://github.com/thinpack-js/thinpack.js/actions/runs/45758437086) with QuickJS and `--rebuild`. This is the standalone executable, including the runtime.
