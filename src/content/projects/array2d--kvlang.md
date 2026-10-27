---
repo: "array2d/kvlang"
name: "kvlang"
description: "Plaintext interpreted language: small core, extension-driven, using kvspace as addressing/memory space. Frontend of the deepx training/inference framework. Code and data share one KV tree; the PC is a crash-recoverable KV path; source is IR, all KV plaintext. Core runs only the execution loop and control flow; the rest are rwir extensions."
readmeQualityOk: true
url: "https://github.com/array2d/kvlang"
homepage: "http://kvlang.com/"
language: "C"
languages: ["C", "Rust", "kvlang"]
languagePcts: [24, 22, 21]
stars: 5
forks: 2
openIssues: 78
closedIssues: 118
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2026-07-03T11:07:31Z"
lastCommitAt: "2026-10-27T09:17:38Z"
lastReleaseAt: "2026-09-05T07:29:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 68
maintainers: ["miaobyte", "carsontung666"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1288193792/72ac8d73-2cb4-4c82-bfa6-7b7065f00de2"
---

# kvlang

**A plaintext, interpreted language whose addressing space and memory space are both kvspace — a small core with extensions on top (the front-end language of deepx, formerly dxlang).** Code and data live in one KV tree; the PC is a KV path (crash-resumable), the source is the IR, and every KV value is plaintext. The core runtime does only the execute loop and control flow; every other capability is supplied by other runtimes and registered at `/lib/<opcode>`.

> 中文文档: [README_CN.md](https://github.com/array2d/kvlang/blob/HEAD/README_CN.md)
>
> **The specification is the single source of truth.** Language facts live in [`stdlib/kvlang/spec/`](https://github.com/array2d/kvlang/blob/HEAD/stdlib/kvlang/spec/) — 84 chapters of normative text plus the authoritative grammar, written in kvlang itself and laid out into `/lib/kvlang/spec/…`. Any change to language behavior is spec-driven: edit the spec clause and its anchored example first, then the implementation, until the anchored tutorials pass on every backend. When spec and implementation disagree, the spec wins and the implementation is the defect. This README is a teaching derivative.

---

## Use Cases

- **Model…
