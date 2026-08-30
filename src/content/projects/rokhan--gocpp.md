---
repo: "Rokhan/gocpp"
name: "gocpp"
description: "Experimental project to parse Go code and generate equivalent C++ code."
readmeQualityOk: true
url: "https://github.com/Rokhan/gocpp"
language: "Go"
languages: ["Go"]
languagePcts: [81]
topics: ["compiler", "cpp", "golang"]
stars: 12
forks: 3
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2018-05-20T19:31:16Z"
lastCommitAt: "2026-08-30T00:44:24Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 68
undervaluedScore: 57
maintainers: ["Rokhan"]
openGraphImageUrl: "https://opengraph.githubassets.com/39b32e907ca863a867542c9651accdb60765b72591003c80cbee3cde270eaf60/Rokhan/gocpp"
---

# gocpp
Experimental project to parse Go code and generate equivalent C++ code.

The goal is to try to generate code that is as simple and readable as possible while preserving the original semantics and structure.

Not much is really useful in practice at the moment, as a lot of things are still mocked and/or not implemented:
- Type casting and interfaces only work in some specific cases.
- Imported libraries are generated but not linked to examples.
- The garbage collector is not implemented at all.
- Lots of other things.

The compiler code is in [cmd/main.go](https://github.com/Rokhan/gocpp/blob/HEAD/cmd/main.go).  
The compiler is tested with Go files in the [tests/](https://github.com/Rokhan/gocpp/blob/HEAD/tests/) directory, and the output is in the [generated/](https://github.com/Rokhan/gocpp/blob/HEAD/generated/) directory.

The file [results.md](https://github.com/Rokhan/gocpp/blob/HEAD/results.md) shows the status of each test and links to the generated code.

Use the command `make clean && make -j8 -k; make doc` to build [results.md](https://github.com/Rokhan/gocpp/blob/HEAD/results.md).
The generation can be quite slow the first time, or if the compiler is…
