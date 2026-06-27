---
repo: "SamuelMarks/cdd-c"
name: "cdd-c"
description: "OpenAPI ↔ C. Frontend for C, concentrating on: generation from code; single-file analysis; modification; and emission (prettyprinting)."
url: "https://github.com/SamuelMarks/cdd-c"
homepage: "https://rewriteInC.io"
language: "C"
languages: ["C"]
languagePcts: [97]
topics: ["c", "code-generation", "compiler", "openapi", "serialization"]
stars: 10
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2022-03-29T21:49:12Z"
lastCommitAt: "2026-06-27T06:20:57Z"
lastReleaseAt: "2026-06-12T07:27:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 71
maintainers: ["SamuelMarks"]
openGraphImageUrl: "https://opengraph.githubassets.com/2726036010ce2fbc4598574f3e0a45aa65fbf1de90b20fc96ac4574658909480/SamuelMarks/cdd-c"
---

cdd-c
=====

----

OpenAPI ↔ C. This is one compiler in a suite, all focussed on the same task: Compiler Driven Development (CDD).

Each compiler is written in its target language, is whitespace and comment sensitive, and has both an SDK and CLI.

The core philosophy of Compiler Driven Development (CDD) is synchronization without compromise. Where traditional generators silo your API boundaries into read-only files, this compiler natively merges changes into your codebase via a robust, [whitespace and comment aware] Abstract Syntax Tree (AST) driven parser & emitter. It bridges the gap between design and implementation, allowing you to seamlessly generate SDKs from a spec or extract a spec from existing code. By keeping your APIs, SDKs, and tests in continuous, automated alignment, it drastically improves both delivery speed and software reliability.

The CLI—at a minimum—has:

- `cdd-c --help`
- `cdd-c --version`
- `cdd-c from_openapi to_sdk_cli -i spec.json`
- `cdd-c from_openapi to_sdk -i spec.json`
- `cdd-c from_openapi to_server -i spec.json`
- `cdd-c to_openapi -f path/to/code`
- `cdd-c to_docs_json --no-imports --no-wrapping -i spec.json`
- `cdd-c serve_json_rpc --port 8080…
