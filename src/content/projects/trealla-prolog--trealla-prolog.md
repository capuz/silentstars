---
repo: "trealla-prolog/trealla-prolog"
name: "trealla-prolog"
description: "A compact, efficient Prolog interpreter written in plain old C."
readmeQualityOk: true
url: "https://github.com/trealla-prolog/trealla-prolog"
language: "C"
languages: ["C", "Prolog"]
languagePcts: [58, 39]
topics: ["prolog", "prolog-interpreter", "c", "iso-prolog-standard", "prolog-implementation", "prolog-programming-language"]
stars: 392
forks: 32
openIssues: 6
closedIssues: 1004
watchers: 14
contributors: 9
recentReleases: 0
createdAt: "2022-08-08T06:03:02Z"
lastCommitAt: "2026-10-23T08:46:34Z"
lastReleaseAt: "2023-02-20T21:44:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 37
maintainers: ["infradig"]
openGraphImageUrl: "https://opengraph.githubassets.com/ffd29f277db07addb7fc75c7ebddd73458c11ee6cb50ef60cc41dd0677f0a520/trealla-prolog/trealla-prolog"
---

Trealla Prolog
==============

A compact, efficient ISO Prolog interpreter. Written in plain old C
and using a plain old Makefile.

	MIT licensed
	Runs on Linux, Android, MacOS, *BSD, Windows, FreeRTOS, RISC/OS, Haiku, OpenIndiana, Solaris & Tribblix
	Runs on many bare boards eg. RISC-V, ESP-32 (using FreeRTOS)
	Integers & Rationals are unbounded
	Atoms and strings are UTF-8 of unlimited length
	The default double-quoted representation is *chars* list
	Strings & slices are efficient (especially with mmap'd files)
	Effectively unlimited arity for compounds
	REPL with history
	Builds for Cosmopolitan, WebAssembly (WASI) & Go
	Cosmopolitan builds can also boot with no host OS (bare-metal)
	API for calling from C (or by using WASM from Go & JS)
	Foreign function interface (FFI) for calling out to user code
	Access SQLITE databases using builtin module (uses FFI)
	FFIs for Raylib & Raymath
	Concurrency via threads / tasks / futures / engines (aka. generators) & actors
	Definite Clause Grammar (DCGs)
	Attributed variables with freeze/2, dif/2 & when/2
	Constraints: CLP(B) & CLP(Z)
	Blackboarding primitives
	Delimited continuations
	Tabling
	Socket(s) library
	...
	Rational trees…
