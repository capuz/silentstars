---
repo: "KarpelesLab/univdreams"
name: "univdreams"
description: "Universal decompiler + compiler in Rust: ELF, PE, Mach-O, 6502 round-trip byte-identically through a readable .ud source language."
readmeQualityOk: true
url: "https://github.com/KarpelesLab/univdreams"
homepage: "https://karpeleslab.github.io/univdreams/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["6502", "aarch64", "binary-analysis", "compiler", "decompiler", "disassembler", "elf", "mach-o", "pe", "reverse-engineering"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-09T21:25:35Z"
lastCommitAt: "2026-10-30T10:22:57Z"
lastReleaseAt: "2026-07-05T04:43:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 40
maintainers: ["MagicalTux", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/42ac1181982f83a18c6e1219a5ffe3e2e0ba1b2aa113e811e3910b37987f5fb8/KarpelesLab/univdreams"
---

# univdreams

A universal compiler **and** decompiler suite. The premise:

> Given a compiled binary `B`, produce source `S` such that compiling `S` reproduces `B` **byte for byte**.

**Try it in your browser:** <https://karpeleslab.github.io/univdreams/>

Most decompilers paraphrase. They lose the choices a compiler made — register allocation, instruction encoding, instruction order, padding, jump-table layout — and a recompile of their output is structurally similar but not identical to the input. univdreams treats those choices as first-class information in the source language: they live in attributes/directives that pin the compiler back to the same shape on the way out.

## Status

**The headline property is working and defended on every push, for every format:**

```
lower_to_{elf,pe,macho,raw}(parse(decompile_to_text(bin)))   ==   bin-bytes
```

For every committed fixture, the entire file — headers, segment / section tables, every section's content, every interstitial padding gap, and code-signature blobs — round-trips through the `.ud` source language byte-identically. The corpus covers 15 binaries totalling roughly **490 KB**, plus the 420 KB `wmpcdcs8-mpg4c32.dll`…
