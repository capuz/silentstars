---
repo: "kent-tokyo/chematic"
name: "chematic"
description: "A pure-Rust cheminformatics library targeting RDKit feature parity — zero C/C++ by default."
readmeQualityOk: true
url: "https://github.com/kent-tokyo/chematic"
homepage: "https://kent-tokyo.github.io/chematic/"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["cheminformatics", "chemistry", "drug-discovery", "fingerprints", "molecular-descriptor", "rdkit", "smiles"]
stars: 28
forks: 0
openIssues: 6
closedIssues: 118
watchers: 3
contributors: 2
recentReleases: 10
createdAt: "2026-05-26T12:32:40Z"
lastCommitAt: "2026-09-20T08:46:20Z"
lastReleaseAt: "2026-08-01T12:42:05Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 49
maintainers: ["kent-tokyo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/78018165990ebbd28cd5f1fd4c6189b67a30ba0b3f00303fd38cc04245488248/kent-tokyo/chematic"
discussionCount: 0
---

# chematic

Cheminformatics for Python, Rust, and the browser. chematic is built in pure
Rust, with bounded input handling, typed errors, and optional native InChI.

[日本語](https://github.com/kent-tokyo/chematic/blob/HEAD/README_ja.md) · [中文](https://github.com/kent-tokyo/chematic/blob/HEAD/README_zh.md) · [Documentation](https://kent-tokyo.github.io/chematic/) · [Live demo](https://kent-tokyo.github.io/chematic/playground/)

## Install

```bash
pip install chematic
cargo add chematic --features "smiles,perception,chem,3d,fp"
npm install @kent-tokyo/chematic
```

Python needs no C/C++ compiler. Rust and WebAssembly builds use the same core.

### v1.0.17 release boundary

This release adds bounded SMILES+ extended ring-closure parsing and writing,
plus typed CXSMILES attachment-label inspection. Legacy error variants remain
stable; MDL attachment collapse and V3000 `ENDPTS`/`ATTACH` semantics remain
explicitly unsupported. Compatibility is operation- and corpus-scoped; see the
[compatibility scope](https://github.com/kent-tokyo/chematic/blob/HEAD/docs/compatibility-scope.md) and [CHANGELOG](https://github.com/kent-tokyo/chematic/blob/HEAD/CHANGELOG.md).

## Python

```python
import…
