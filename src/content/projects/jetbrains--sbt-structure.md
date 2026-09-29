---
repo: "JetBrains/sbt-structure"
name: "sbt-structure"
description: "SBT plugin to collect information about project structure"
readmeQualityOk: true
url: "https://github.com/JetBrains/sbt-structure"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
stars: 76
forks: 32
openIssues: 0
closedIssues: 0
watchers: 10
contributors: 27
recentReleases: 0
createdAt: "2013-11-13T11:45:14Z"
lastCommitAt: "2026-09-29T10:05:05Z"
lastReleaseAt: "2022-10-31T22:46:01Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 47
maintainers: ["vasilmkd", "unkarjedy", "azdrojowa123"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c2b134bd557517e7b3f8eea0af38ca3ba158bc1b05ba3fefabdccc6fee1e366/JetBrains/sbt-structure"
---

# sbt-structure

This plugin extracts the structure of an sbt build in XML format. It is used in
Intellij Scala plugin in order to import arbitrary sbt projects into IDEA.

## Problems?

Please report any issues related to sbt-structure in IntelliJ on the [IntelliJ Scala YouTrack project]( https://youtrack.jetbrains.com/issues/SCL).

## Project structure

- `extractor` is an sbt plugin that actually extracts information from the sbt build.
- `core` is a shared library that is used by both `extractor` and the Intellij Scala plugin.

**_Note:_** `extractor` is packaged as a fat jar, by compiling the sources of `core` and including the output `.class`
files in the resulting jar. This packaging structure is implicitly expected by the Intellij Scala  plugin, due to how
the jar is injected in sbt for extracting the information of a sbt build. The shared sources are contained in the
`shared` directory and linked in the `extractor` and `core` modules, in order to create a source dependency that can be
recognized by IDEA.

## Usage

### Core

Add to your `build.sbt`

```scala
libraryDependencies += "org.jetbrains.scala" %% "sbt-structure-core" % "<version>"
```

Then run extractor or get…
