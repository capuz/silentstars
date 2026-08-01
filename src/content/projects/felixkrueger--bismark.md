---
repo: "FelixKrueger/Bismark"
name: "Bismark"
description: "A tool to map bisulfite converted sequence reads and determine cytosine methylation states"
readmeQualityOk: true
url: "https://github.com/FelixKrueger/Bismark"
homepage: "http://felixkrueger.github.io/Bismark/"
language: "Rust"
languages: ["Rust", "Perl"]
languagePcts: [73, 20]
topics: ["bioinformatics", "dna", "methylation"]
stars: 455
forks: 111
openIssues: 3
closedIssues: 790
watchers: 12
contributors: 16
recentReleases: 0
createdAt: "2015-11-07T18:14:13Z"
lastCommitAt: "2026-08-01T06:15:12Z"
lastReleaseAt: "2017-06-28T08:45:47Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 39
maintainers: ["FelixKrueger", "BenjaminDEMAILLE", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8f4c374c2b3ac6bf8d942e3c49dca405f520bd8a91d12fba02620eee6ea0536/FelixKrueger/Bismark"
---

# Bismark

> [!IMPORTANT]
> **Bismark is now the Rust suite, generally available.** The bisulfite aligner and
> methylation tools have been rewritten from Perl to Rust: **byte-identical** to Perl `v0.25.1` on the
> faithful default path, faster, and lower-memory — and this is the **supported default**. Get it via
> [Installation](#installation) (`mamba install -c bioconda bismark`, cargo, container, or prebuilt binaries) and see the
> **[Rust suite overview](https://felixkrueger.github.io/Bismark/rust/overview/)**.
> The original **Perl `v0.25.x`** (the scripts at this repo root) is now **legacy / maintenance-freeze**
> (critical fixes only; tagged [`v0.25.1`](https://github.com/FelixKrueger/Bismark/releases/tag/v0.25.1)).
> **New contributions should target the Rust suite** — see [CONTRIBUTING.md](https://github.com/FelixKrueger/Bismark/blob/HEAD/CONTRIBUTING.md).

> **See the documentation**: <https://felixkrueger.github.io/Bismark>

Bismark is a program to map bisulfite treated sequencing reads to a genome of interest and perform methylation calls in a single step. The output can be easily imported into a genome viewer, such as…
