---
repo: "murolang/muro"
name: "muro"
description: "An explicit affine dependent type theory"
readmeQualityOk: true
url: "https://github.com/murolang/muro"
homepage: "https://muro-lang.dev"
language: "Elixir"
languages: ["Elixir", "Agda"]
languagePcts: [62, 37]
stars: 5
forks: 2
openIssues: 1
closedIssues: 76
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-09-18T18:19:06Z"
lastCommitAt: "2026-11-26T23:32:06Z"
lastReleaseAt: "2026-11-10T17:36:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 75
maintainers: ["doctorcorral"]
openGraphImageUrl: "https://opengraph.githubassets.com/914ba14b00846187f6b126b11606150f9afd6cebf04fea4188a1fcc0cc428214/murolang/muro"
---

An explicit affine dependent type theory. Elixir parses, checks, and emits `.muro`. Only run terms become running code. Users do not need Agda.

Muro is built for agents to write. The agent carries the load of formal verification: every type, motive and proof step is written out and nothing is inferred, so `mix muro.check` either accepts what it wrote or names each definition that fails. Proofs are checked, then erased. Only `run` terms are emitted: as Elixir for the BEAM, as C with `mix muro.emit --backend c`, as Rust with `mix muro.emit --backend rust`, as Zig with `mix muro.emit --backend zig`, as JavaScript with `mix muro.emit --backend js`, as an .mbi image for muro-beam with `mix muro.emit --backend mbi`, or as Cortex-M assembly with `mix muro.emit --backend asm`, from the same source. The checker's soundness is proved in Agda for a fragment of the calculus (see [Limits](https://github.com/murolang/muro/blob/HEAD/manual/limits.md)); it is not a proof about every program.
