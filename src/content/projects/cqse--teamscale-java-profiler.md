---
repo: "cqse/teamscale-java-profiler"
name: "teamscale-java-profiler"
description: "Teamscale Java Profiler"
readmeQualityOk: true
url: "https://github.com/cqse/teamscale-java-profiler"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [91]
stars: 24
forks: 18
openIssues: 0
closedIssues: 57
watchers: 10
contributors: 34
recentReleases: 0
createdAt: "2018-08-29T21:13:35Z"
lastCommitAt: "2026-09-08T08:16:13Z"
lastReleaseAt: "2019-07-02T07:06:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 67
maintainers: ["DreierF", "renovate[bot]", "karottenreibe"]
openGraphImageUrl: "https://opengraph.githubassets.com/76dab73f041bdfaa36c781eef590b188e9ae4057f697c934878afdf6a6818702/cqse/teamscale-java-profiler"
---

# Teamscale Java Profiler [](https://github.com/cqse/teamscale-jacoco-agent/actions)

## Download

* [Binary Distribution](https://github.com/cqse/teamscale-jacoco-agent/releases)
* [Docker Container](https://hub.docker.com/r/cqse/teamscale-jacoco-agent/tags/)

## Documentation

* [Teamscale Java Profiler](https://docs.teamscale.com/reference/coverage-profilers/teamscale-java-profiler/)
* [Teamscale Gradle Plugin](https://docs.teamscale.com/reference/integrations/gradle-plugin/)
* [Teamscale Maven Plugin](https://docs.teamscale.com/reference/integrations/maven-plugin/)

## Architecture

The profiler is a JVM agent that uses [JaCoCo](https://www.jacoco.org/) under the hood for bytecode instrumentation and coverage recording. 
The diagram below shows the data flow from JVM startup to coverage upload.

```
┌──────────────────────────────────────────────────────────────────────────┐
│  JVM                                                                     │
│                                                                          │
│  -javaagent:teamscale-jacoco-agent.jar=...                               │
│       │                                                                  │…
