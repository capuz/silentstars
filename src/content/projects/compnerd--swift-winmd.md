---
repo: "compnerd/swift-winmd"
name: "swift-winmd"
description: "Windows Metadata Parser in Swift"
readmeQualityOk: true
url: "https://github.com/compnerd/swift-winmd"
language: "Swift"
languages: ["Swift"]
languagePcts: [100]
topics: ["windows", "swift", "winmd"]
stars: 29
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2020-08-31T01:26:18Z"
lastCommitAt: "2026-08-11T04:50:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 54
maintainers: ["compnerd"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e099661a5ee1459e6b37bfa0b750654ce902fcb411ac241b5d7543e519bb8c8/compnerd/swift-winmd"
discussionCount: 0
---

# Swift/WinMD

An ECMA-335 metadata reader in Swift

  </a>
  </a>
</p>

[Windows Metadata](https://docs.microsoft.com/en-us/uwp/winrt-cref/winmd-files) provides the necessary metadata for Windows APIs to enable generating bindings for different languages.  In order to generate the bindings, one must be able to process the metadata.  [Swift/WinMD](https://github.com/compnerd/swift-winmd) provides an implementation of such a reader in Swift.

Beyond parsing, the library projects the metadata as a read-only relational
database. Its tables stream and heaps are read as a fixed set of relations with
rows, foreign keys, and out-of-line heaps, all as zero-copy `~Escapable`
borrowed views over the caller's bytes. That database can be **queried** in two
ways: a typed Swift combinator surface (`where`/`select` over a borrowed row,
with `resolve`/`list`/`referencing` foreign-key navigation), and textual SQL run
through a small, self-contained relational engine.

## Code generation as a database

The library goes one step further and treats **code generation as a database
problem**: the generated source is a *view* over the metadata, and the rules
that decide what a COM interface *is* are…
