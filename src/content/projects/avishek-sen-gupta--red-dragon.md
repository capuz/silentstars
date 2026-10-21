---
repo: "avishek-sen-gupta/red-dragon"
name: "red-dragon"
description: "Multi-language code execution through a simple IR and deterministic VM with LLM repair / patching"
readmeQualityOk: true
url: "https://github.com/avishek-sen-gupta/red-dragon"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 12
forks: 0
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-25T11:25:55Z"
lastCommitAt: "2026-10-21T23:32:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 54
maintainers: ["avishek-sen-gupta"]
openGraphImageUrl: "https://opengraph.githubassets.com/d90ae2ec652c451334c4a4b39051ed778af7cdbff3a2afce57aaf8988ae4d9f2/avishek-sen-gupta/red-dragon"
---

# RedDragon

 [](presentation/technical-presentation.html) [](presentation/overview-presentation.html) [](LICENSE.md)

**RedDragon** lowers source in 15 tree-sitter languages, COBOL and HLASM to one universal IR, and runs that IR on a VM. It is built for code that is often incomplete: legacy source, decompiled binaries, partial extracts, and codebases with missing dependencies.

- **Frontends.** Tree-sitter frontends (15 languages), a ProLeap bridge (COBOL) and a che4z bridge (HLASM, nine opcode units so far) lower well-formed source deterministically. An optional LLM repair loop fixes malformed fragments and re-parses. For languages with no frontend, an LLM lowers the source to IR directly.
- **IR.** One flattened three-address code IR with [38 opcodes](https://github.com/avishek-sen-gupta/red-dragon/blob/HEAD/docs/ir-reference.md) and source locations. Every frontend emits it.
- **VM.** Executes the IR deterministically. When a call or import cannot be resolved, it creates a symbolic placeholder, or optionally asks an LLM for a plausible value, and keeps going.

With complete source and all dependencies present, parse → lower → execute makes **0 LLM calls**. LLMs are used only…
