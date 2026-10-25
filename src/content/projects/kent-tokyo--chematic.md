---
repo: "kent-tokyo/chematic"
name: "chematic"
description: "A pure-Rust cheminformatics library targeting RDKit feature parity — zero C/C++ by default."
readmeQualityOk: true
url: "https://github.com/kent-tokyo/chematic"
homepage: "https://kent-tokyo.github.io/chematic/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [76, 22]
topics: ["cheminformatics", "chemistry", "drug-discovery", "fingerprints", "molecular-descriptor", "rdkit", "smiles"]
stars: 31
forks: 1
openIssues: 0
closedIssues: 154
watchers: 2
contributors: 4
recentReleases: 4
createdAt: "2026-05-26T12:32:40Z"
lastCommitAt: "2026-10-25T09:01:34Z"
lastReleaseAt: "2026-08-01T12:42:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 49
maintainers: ["kent-tokyo"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc6d6c04e38cbd8031db3c7ffd42b97aaaa9640940aed1edad4fcd286fd3fffc/kent-tokyo/chematic"
discussionCount: 0
---

# chematic

Pure-Rust cheminformatics for Python, Rust, and the browser when molecular data
must stay local and unsupported chemistry must fail explicitly.

[日本語](https://github.com/kent-tokyo/chematic/blob/HEAD/README_ja.md) · [中文](https://github.com/kent-tokyo/chematic/blob/HEAD/README_zh.md) · [Documentation](https://kent-tokyo.github.io/chematic/) · [Playground](https://kent-tokyo.github.io/chematic/playground/)

## Install

```bash
pip install chematic
cargo add chematic --features "smiles,perception,chem,3d,fp"
npm install @kent-tokyo/chematic
```

Python wheels need no C/C++ compiler. All bindings share the Rust core.

### v1.2.1 release boundary

The current release is **v1.2.1**. See the [CHANGELOG](https://github.com/kent-tokyo/chematic/blob/HEAD/CHANGELOG.md) for release
details. Accuracy and performance claims remain tied to the exact artifacts,
corpora, and hosts named in [validation](https://github.com/kent-tokyo/chematic/blob/HEAD/docs/reference/validation.md) and the
[benchmark index](https://github.com/kent-tokyo/chematic/blob/HEAD/benchmarks/README.md).

## Choose chematic when

- chemistry must run locally in a browser or inside a Rust application;
- Python,…
