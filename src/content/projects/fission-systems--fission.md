---
repo: "fission-systems/Fission"
name: "Fission"
description: "Rust-first reverse-engineering and decompilation workspace featuring Ghidra SLEIGH lifting, NIR/HIR structuring, and AI-assisted terminal/desktop UIs."
readmeQualityOk: true
url: "https://github.com/fission-systems/Fission"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["ai", "binary-analysis", "compiler", "decompilation", "decompiler", "dioxus", "disassembler", "ghidra", "intermediate-representation", "reverse-engineering"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-07-23T14:06:58Z"
lastCommitAt: "2026-09-16T08:47:52Z"
lastReleaseAt: "2026-08-02T07:24:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 50
maintainers: ["sjkim1127"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1310010227/90d67cd3-3483-4ac2-b086-ff32b03d8712"
discussionCount: 0
---

</div>

---

# Fission

**Fission is working toward taking a compiled binary back to a project you can
build and run again.** Not a listing to read — a tree that compiles, links, and
behaves the way the original did.

That is the target, and it is not reached. Decompiling one binary's 68
functions and compiling them as a single unit currently stops on 20 errors,
every one of them a missing or duplicated *declaration* rather than a wrong
statement. Where the work stands against each axis is below.

Fission is a Rust-native reverse-engineering workspace. It loads binaries,
lifts instruction semantics through Ghidra-style Sleigh specifications, and
owns everything after that — its own IR, structuring, type recovery,
rendering, and quality gates — in Rust.

Restoration sets the standards, and they are stricter than readability's.
Output that reads well but drops a write to a global is fine to skim and
useless to rebuild from, so correctness is checked by execution rather than by
eye: `fission-dir` evaluates the decompiled body, runs the same machine code
under `fission-emulator`, and compares. What it cannot prove it reports as an
assumption instead of hiding.

## Where it stands…
