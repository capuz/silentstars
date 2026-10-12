---
repo: "colingsnyder2-ux/RoConstruct"
name: "RoConstruct"
description: "Standalone local console for 2008 Roblox client reconstruction."
readmeQualityOk: true
url: "https://github.com/colingsnyder2-ux/RoConstruct"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-10-05T00:36:45Z"
lastCommitAt: "2026-10-12T11:15:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 45
maintainers: ["colingsnyder2-ux", "ivan-grebe"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bcc0b19396ef1c2dcdabd70016531422287ffa2f095507571dafc46e0bf2f58/colingsnyder2-ux/RoConstruct"
---

---

## What is this?

The old Roblox clients only survive as compiled `.exe` files. Compiling throws away names, types and structure, so normal decompilers only give approximate code that can't be rebuilt into the same program.

RoConstruct uses **matching decompilation**, the method behind the Super Mario 64 and Ocarina of Time projects:

| Step | What happens |
|---|---|
| 1. Split | The exe is cut into functions (20k–40k per client). Compiler-generated stubs are skipped. |
| 2. Guess | Someone writes C++ for one function: a person, an AI worker, or the pattern matcher. |
| 3. Compile | The guess is built with the **exact** compiler Roblox used (detected from the exe). |
| 4. Compare | The result is checked byte for byte. Identical means **matched**: the source provably equals what shipped. Otherwise the diff shows what to fix. |

When every function matches, the result is a source tree that rebuilds the original client. That opens the door to:

- **Security fixes** for known exploits
- **Ports:** a browser version via WebAssembly, plus Linux and macOS
- **Bug fixes, modding and preservation**

## Get started

**Using your ChatGPT subscription?** This fork supports official…
