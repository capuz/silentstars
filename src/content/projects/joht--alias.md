---
repo: "JohT/alias"
name: "alias"
description: "alias names for java types"
readmeQualityOk: true
url: "https://github.com/JohT/alias"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["json", "eventsourcing", "serializer", "annotation-processor", "discoverability", "upcasting", "aliases", "alias"]
stars: 16
forks: 3
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2019-04-04T19:58:45Z"
lastCommitAt: "2026-08-08T04:34:05Z"
lastReleaseAt: "2022-08-31T19:13:27Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 92
undervaluedScore: 64
maintainers: ["JohT", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4ffd520a0c1a66eccb9c7187d426fe8f4065898b42bd9509cdc57ecdaeb087f/JohT/alias"
---

# alias

Java identifies types by their class name. 
The class name heavily depends on implementation details (e.g. where the class is located).
Finding the right name and right place may change during development.
As soon as the class name is used to identify e.g. an deserialized object before reconstructing it,
a changed class name leads to a runtime exception. 

**type-alias** enables naming those types distinctly besides their class name. 
This is done at compile time (no runtime dependencies) by using the annotation `@TypeAlias`.
The result is a generated file (e.g. ResourceBundle or Properties),
that contains a register of all aliases and their current type name.

**type-alias** only depends on Java itself and is not needed during runtime.
The annotations are not present in byte code (not accessible via reflection),
The generated alias name register is a standard Java file (ResourceBundle or Property-File).

### Quickstart
Include the following compile-time-only dependency.
It provides the annotations `@TypeAlias`, `@TypeAliases` to attach alias names,
`@TypeAliasGeneratedFile` for customization and the java annotation processing based file generator,
that generates (by…
