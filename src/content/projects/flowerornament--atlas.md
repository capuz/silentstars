---
repo: "flowerornament/atlas"
name: "atlas"
description: "Read-only Rust source analysis, review tools and standalone diagrams"
readmeQualityOk: true
url: "https://github.com/flowerornament/atlas"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 34
forks: 3
openIssues: 3
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-30T06:31:33Z"
lastCommitAt: "2026-11-20T12:00:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 72
undervaluedScore: 34
maintainers: ["flowerornament"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae472aabd8d5ac5bb50bea41028067049919e00f2f4215f29e97b4ecca437c6b/flowerornament/atlas"
---

# Atlas

Atlas answers questions about how your Rust codebase is put together, and it
can stop a change that breaks the structure you agreed on.

You point it at a Cargo project and ask, from your terminal, a script or CI:

- Where is this type defined, and how much of the code depends on it?
- I just refactored a lot of files. What actually changed?
- Which files call into which?
- Does this change break our architecture rules?

Atlas only reads your code. It never edits, compiles or runs it, and every
answer points to the file and line it came from, so you can check it yourself.

## What it looks like

### Draw how your types move through the code

Choose some types, and Atlas draws every function that takes, returns or builds
them, grouped by the file each function lives in. Here is Atlas drawing its own
three central types:

```console
$ cargo atlas types --query examples/queries/atlas.json --panel contracts --backend pele --bare
```

Every arrow is a function signature or a place where the type is built. Click
the image for full size.

### Find a type, and see how much depends on it

Here is Atlas looking at its own source:
