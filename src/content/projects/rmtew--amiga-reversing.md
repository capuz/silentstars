---
repo: "rmtew/amiga-reversing"
name: "amiga-reversing"
description: "Data-driven LLM developed Amiga reversing tools"
readmeQualityOk: true
url: "https://github.com/rmtew/amiga-reversing"
language: "C"
languages: ["C", "Assembly"]
languagePcts: [41, 26]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-03-17T04:00:30Z"
lastCommitAt: "2026-10-25T09:00:54Z"
lastReleaseAt: "2026-10-25T04:18:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 52
maintainers: ["rmtew"]
openGraphImageUrl: "https://opengraph.githubassets.com/037d97e66b6760da0912f74825928ada4e5d193c2bd38f2fa69d1e04843063d1/rmtew/amiga-reversing"
---

# M68k Reversing Toolkit

This is an LLM written toolkit. While the direction and implementation choices
of the LLM have been overseen and guided, it was automatically programmed and
no code has been written by hand. As such this is an experiment in prototyping
things what would not otherwise get written if it were not being done
automatically. By definition this is vibe coded.

The core of the development has been to try and build a programmatically
generated knowledge base. This is extracted from system documents from PDFs,
NDKs and include files (`.fd`, `.h`, `.c`). Then it is used to generate `.c`
and `.h` files for the underlying C-based framework to build on.

## Structure

```
src/            C disassembler, assembler, analysis, disk/file CLIs, generated metadata
amiga_reversing/ Python web/API/project orchestration, DTO adapters, and runtime CLI tools
tests/          Python web/orchestration pytest suite
knowledge/      Generated JSON knowledge bases (M68K ISA, Amiga HW, OS)
ext/vasm/       Vendored vasm assembler source
targets/        Per-target projects, generated source, review state, and reports
bin/            User-supplied target binaries
resources/      External…
