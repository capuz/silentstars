---
repo: "trealla-prolog/trealla"
name: "trealla"
description: "A compact, efficient Prolog interpreter written in plain old C."
url: "https://github.com/trealla-prolog/trealla"
language: "C"
languages: ["C", "Prolog"]
languagePcts: [70, 30]
topics: ["prolog", "prolog-interpreter", "c", "iso-prolog-standard", "prolog-implementation", "prolog-programming-language"]
stars: 364
forks: 30
openIssues: 19
closedIssues: 891
watchers: 14
contributors: 8
recentReleases: 0
createdAt: "2022-08-08T06:03:02Z"
lastCommitAt: "2026-06-27T00:47:18Z"
lastReleaseAt: "2023-02-20T21:44:05Z"
status: "thriving"
tags: ["solo_builder", "community_hub"]
healthScore: 99
undervaluedScore: 37
maintainers: ["infradig", "orbisai0security"]
openGraphImageUrl: "https://opengraph.githubassets.com/e24d095a7088661ff2777dbf5ac23c6312bd18ae83ebc239d52c3e5f5077f6e6/trealla-prolog/trealla"
discussionCount: 57
---

Trealla Prolog
==============

A compact, efficient ISO Prolog interpreter. Written in plain old C
and using a plain old Makefile.

	MIT licensed
	Integers & Rationals are unbounded
	Atoms are UTF-8 of unlimited length
	The default double-quoted representation is *chars* list
	Strings & slices are super-efficient (especially with mmap'd files)
	REPL with history
	Runs on Linux, Android, BSD, macOS, and WebAssembly (WASI) & Go
	Windows build is of indeterminate state and is unsupported
	API for calling from C (or by using WASM from Go & JS)
	Foreign function interface (FFI) for calling out to user code
	Access SQLITE databases using builtin module (uses FFI)
	Concurrency via tasks / linda / futures / engines (generators)
	Pre-emptive multi-threading
	Attributed variables: freeze/2 dif/2, when/2
	Constraint libraries: CLP(B), CLP(Z)
	Blackboarding primitives: bb_put, bb_b_put/2, bb_get/2
	Sockets library
	...
	FFIs for GNU Scientific Library (GSL), SQLite, Raylib ##EXPERIMENTAL##
	Delimited continuations ##EXPERIMENTAL##
	Rational trees ##EXPERIMENTAL##

Available from: [https://github.com/trealla-prolog/trealla](https://github.com/trealla-prolog/trealla).

Runs with [Jupyter…
