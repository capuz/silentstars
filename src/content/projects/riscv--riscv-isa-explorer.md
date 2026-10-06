---
repo: "riscv/riscv-isa-explorer"
name: "riscv-isa-explorer"
description: "A simple and intuitive approach to visualize RISC-V Extensions and Profiles."
readmeQualityOk: true
url: "https://github.com/riscv/riscv-isa-explorer"
homepage: "https://riscv.github.io/riscv-isa-explorer/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
stars: 33
forks: 54
openIssues: 9
closedIssues: 94
watchers: 0
contributors: 62
recentReleases: 7
createdAt: "2025-11-27T13:07:10Z"
lastCommitAt: "2026-10-06T10:42:23Z"
lastReleaseAt: "2026-09-06T01:31:27Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 97
undervaluedScore: 71
maintainers: ["rpsene", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c32f33d2c3f69457da81db5d573460f29e95a6bcbb9fe063f912ddd6fd4aea6/riscv/riscv-isa-explorer"
---

# RISC-V ISA Explorer

An interactive reference for RISC-V extensions, profiles, and per-instruction
encodings. Pick a base ISA or start from a ratified profile, add extensions, and
get a dependency-resolved configuration with a valid `-march` string.

**[Open the live site](https://riscv.github.io/riscv-isa-explorer/)**

## What it does

- **Browse** every catalogued extension, grouped and searchable by name,
  mnemonic, or hex encoding.
- **Build a configuration.** Select extensions and dependencies resolve
  automatically, with conflicts blocked and a reason shown for every implied
  extension.
- **Start from a profile.** RVA23, RVB23 and the other ratified profiles load as
  a starting point rather than being rebuilt by hand.
- **Export** a `-march` string, a YAML configuration, or a `riscv-config`
  compatible file.
- **Compare entries.** Pin extensions, instructions or profiles and read them
  side by side; a comparison has its own URL and can be shared.
- **Check an encoding.** The Encoder Validator tests a proposed instruction
  pattern against every existing one and reports overlaps.
- **See the encoding space.** The Encoding Map draws the 32 base opcode slots,
  shaded…
