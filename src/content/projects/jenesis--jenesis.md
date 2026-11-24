---
repo: "jenesis/jenesis"
name: "jenesis"
description: "A modern Java build tool: Java-native config, with module-info.java treated as a feature, not an afterthought."
readmeQualityOk: true
url: "https://github.com/jenesis/jenesis"
homepage: "https://jenesis.build"
language: "Java"
languages: ["Java"]
languagePcts: [97]
topics: ["build", "build-tool", "java"]
stars: 103
forks: 5
openIssues: 0
closedIssues: 13
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2024-10-31T11:01:10Z"
lastCommitAt: "2026-11-24T13:48:42Z"
lastReleaseAt: "2026-06-12T14:19:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 49
maintainers: ["raphw"]
openGraphImageUrl: "https://opengraph.githubassets.com/90f62451308ffda0361651328e67967843b081b7a849b551e6d6f457258c8d62/jenesis/jenesis"
---

Jenesis
=======

> ### [Jenesis](https://jenesis.build) - a modern Java build tool
> _Java-native config, everything the JDK provides built in, with `module-info.java` treated as a feature, not an afterthought._

**A build tool for Java, written in Java.** The engine ships *with* your project as plain source under
`build/jenesis/` and is launched by the JDK directly, so there is no wrapper binary, and nothing runs between
builds unless you ask for it. Everything the JDK provides is built in; a tool the build has to download anyway,
such as a linter, a code generator or another language's compiler, is an official plugin that only a project using
it fetches. Modules declared with `module-info.java` drive the build, every step is content-hashed so unchanged work is reused, and every dependency can be pinned by version
*and* by the checksum of the artifact. It needs a JDK 25 or newer, and nothing else. This repository also holds **jpx**, which runs an already-published module
or Maven artifact with one command - `npx` for Java.
