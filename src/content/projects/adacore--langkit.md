---
repo: "AdaCore/langkit"
name: "langkit"
description: "Language creation framework."
readmeQualityOk: true
url: "https://github.com/AdaCore/langkit"
homepage: "https://www.adacore.com"
language: "Ada"
languages: ["Ada"]
languagePcts: [72]
stars: 94
forks: 34
openIssues: 5
closedIssues: 36
watchers: 27
contributors: 37
recentReleases: 0
createdAt: "2015-12-08T14:27:51Z"
lastCommitAt: "2026-10-09T10:50:59Z"
lastReleaseAt: "2024-10-24T16:28:15Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 96
undervaluedScore: 49
maintainers: ["pmderodat", "HugoGGuerrier", "Roldak"]
openGraphImageUrl: "https://opengraph.githubassets.com/80e460667611ba8769056a7571aeeef100b2fe9f2d95210502d3216638dcaaa6/AdaCore/langkit"
---

Langkit
=======

Langkit (nickname for language kit) is a tool whose purpose is to make it easy
to create syntactic and semantic analysis engines. Write a language
specification in the Lkt language and Langkit will generate for you an Ada
library with bindings for the C and Python programming languages.

The generated library is meant to provide a basis to write tooling, including
tools working on potentially changing and incorrect code, such as IDEs.

The currently main Langkit user is
[Libadalang](https://github.com/AdaCore/libadalang), a high performance
semantic engine for the Ada programming language.

Dependencies
------------

To use Langkit, you will need:

* A Python 3.11 interpreter (or more recent). Python2 is no longer supported.
* Some Python libraries, including the Mako template system for Python (see
  `requirements-pypi.txt` and `requirements-github.txt` for the full list).
* A recent version of the GNAT Ada compiler, either from your OS's packages, or
  use [Alire](https://alire.ada.dev/docs/#toolchain-management) to get one.
* The [gnatcoll-core](https://github.com/AdaCore/gnatcoll-core) library.
* Ada bindings for GMP and Libiconv, from…
