---
repo: "microsoft/build-server-for-gradle"
name: "build-server-for-gradle"
description: "An implementation of the Build Server Protocol for Gradle"
readmeQualityOk: true
url: "https://github.com/microsoft/build-server-for-gradle"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 79
forks: 31
openIssues: 30
closedIssues: 27
watchers: 2
contributors: 4260
recentReleases: 0
createdAt: "2023-04-12T07:59:30Z"
lastCommitAt: "2026-10-22T08:52:34Z"
lastReleaseAt: "2026-06-26T02:49:39Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 84
undervaluedScore: 36
maintainers: ["chagong", "dependabot[bot]", "wenytang-ms"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2ca0bdde3cb3508cfd10d632d989f91c92250c89f0ea334e3ad07f4493c9a7f/microsoft/build-server-for-gradle"
discussionCount: 4
---

# Build Server for Gradle

An implementation of the Build Server Protocol for Gradle.

## Requirement

JDK 17 or higher is required to build and launch the Build Server for Gradle.

## Supported Requests

Following BSP requests are supported in the current implementation:

- `build/initialize`
- `build/initialized`
- `build/shutdown`
- `build/exit`
- `buildTarget/sources`
- `buildTarget/resources`
- `buildTarget/outputPaths`
- `buildTarget/dependencyModules`
- `buildTarget/dependencySources`
- `buildTarget/compile`
- `buildTarget/cleanCache`
- `buildTarget/javacOptions`
- `buildTarget/scalacOptions`
- `buildTarget/test`
- `workspace/buildTargets`
- `workspace/reload`

## Architecture

See [ARCHITECTURE.md](https://github.com/microsoft/build-server-for-gradle/blob/HEAD/ARCHITECTURE.md)

## Launch the Build Server for Gradle

### Specify the Plugin Location

The main class of the build server is `com.microsoft.java.bs.core.Launcher`. When you launch the server, you need to specify the location of the Gradle plugin via the system property `plugin.dir`. By default, you will find the plugin jar at `server/build/libs/plugins/plugin-${version}.jar` after building the project.

###…
