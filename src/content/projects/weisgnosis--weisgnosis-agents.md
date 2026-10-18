---
repo: "weisgnosis/weisgnosis-agents"
name: "weisgnosis-agents"
description: "Build tool-using AI agents and collaborating teams in Scala 3 and ZIO 2. Typed tools, scoped execution, explicit application control."
readmeQualityOk: true
url: "https://github.com/weisgnosis/weisgnosis-agents"
homepage: "https://www.weisgnosis.com/"
language: "Scala"
languages: ["Scala"]
languagePcts: [100]
topics: ["agent-framework", "ai-agents", "functional-programming", "human-in-the-loop", "llm", "mcp", "multi-agent", "scala", "scala3", "structured-concurrency"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-10-15T08:52:07Z"
lastCommitAt: "2026-10-18T08:17:17Z"
lastReleaseAt: "2026-10-15T13:19:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 53
maintainers: ["Exoldy"]
openGraphImageUrl: "https://opengraph.githubassets.com/7145bf3c4ebab5f484a256e1fc3baee3cf4a5c6340c23e3853a5bde6da604a7f/weisgnosis/weisgnosis-agents"
---

# WeisGnosis Agents

WeisGnosis Agents is a Scala 3 / ZIO 2 library for agents that call your service's functions and work together. Your application supplies the models and tools, controls permissions, and manages how work starts, stops and resumes.

[**First agent**](#first-agent) · [Runtime verification](#verify-runtime-guarantees-no-credentials) · [Three-agent example](#example-release-review-with-three-agents) · [Modules](#choose-your-modules) · [API guides](https://github.com/weisgnosis/weisgnosis-agents/blob/HEAD/docs/README.md)

## First agent

Tested with **JDK 21 and sbt 1.12.11**; the build uses Scala 3.9.0, with no Scala 3.3 LTS build.

Add the signed development snapshot to your `build.sbt`:

```scala
scalaVersion := "3.9.0"
resolvers += "Sonatype snapshots" at "https://central.sonatype.com/repository/maven-snapshots/"
libraryDependencies += "com.weisgnosis" %% "weisgnosis-agents-core" % "0.1.1-SNAPSHOT"
```

Set `sbt.version=1.12.11` in `project/build.properties`. No repository credentials are needed. `0.1.1-SNAPSHOT` includes compile-time tool schemas; snapshot builds can change. See [release and snapshot…
