---
repo: "jenesis/jenesis"
name: "jenesis"
description: "A modern Java build tool: Java-native config, plugin-free, with module-info.java treated as a feature, not an afterthought."
readmeQualityOk: true
url: "https://github.com/jenesis/jenesis"
homepage: "https://jenesis.build"
language: "Java"
languages: ["Java"]
languagePcts: [98]
topics: ["build", "build-tool", "java"]
stars: 54
forks: 2
openIssues: 0
closedIssues: 2
watchers: 4
contributors: 6
recentReleases: 5
createdAt: "2024-10-31T11:01:10Z"
lastCommitAt: "2026-08-28T13:47:37Z"
lastReleaseAt: "2026-06-12T14:19:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 60
maintainers: ["raphw"]
openGraphImageUrl: "https://opengraph.githubassets.com/5269c85b5fccb2c33cb52ebb5840f481ca0b5e4b10bd91b4c249c3a075653d32/jenesis/jenesis"
---

Jenesis
=======

> ### [Jenesis](https://jenesis.build) - a modern Java build tool
> _Java-native config, plugin-free, with `module-info.java` treated as a feature, not an afterthought._

**A build tool for Java, written in Java.** The engine ships *with* your project as plain source under
`build/jenesis/` and is launched by the JDK directly, so there is no wrapper binary, no fetched plugin tree and
no daemon. Modules declared with `module-info.java` drive the build, every step is content-hashed so unchanged
work is reused, and every dependency can be pinned by version *and* by the checksum of the artifact. It needs a
JDK 25 or newer, and nothing else. This repository also holds **jpx**, which runs an already-published module
with one command - `npx` for the module path.

📖 **The user documentation lives at [jenesis.build](https://jenesis.build).** Everything about using the
tool - layouts, dependencies, pinning, packaging, publishing, and the jpx command - is there. What follows is
for people working *on* this repository.

Getting Jenesis
---------------

Pick whichever fits how you want to manage versions; all three land at the same on-disk state.

```bash
sdk install jenesis…
