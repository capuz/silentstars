---
repo: "JasperFx/bobcat"
name: "bobcat"
description: "Ready for the hardest integration testing jobs in .NET!"
readmeQualityOk: true
url: "https://github.com/JasperFx/bobcat"
homepage: "https://bobcat.jasperfx.net"
language: "C#"
languages: ["C#"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 14
closedIssues: 186
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2022-06-23T13:22:54Z"
lastCommitAt: "2026-10-08T10:53:31Z"
lastReleaseAt: "2026-09-06T23:54:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 85
maintainers: ["jeremydmiller"]
openGraphImageUrl: "https://opengraph.githubassets.com/60b74ee074b9caa23c88457eff27a740e0c68960cfedea8749509703f6359cb5/JasperFx/bobcat"
---

# Bobcat

## Author, Supervise, and Run Integration Tests in .NET

Bobcat is a spec-driven integration testing framework for .NET and the successor to
[Storyteller](https://storyteller.github.io). It is built for the hardest integration testing jobs:
systems with databases, message brokers, background processing, and many moving parts.

- **Author** specifications in Gherkin, bound to your own test code. A Roslyn source generator
  compiles each `.feature` file into direct method calls, so there is no runtime reflection and a
  step that matches nothing is a compile error, not a runtime surprise. Or keep writing tests in
  xUnit.net or TUnit, and let Bobcat render them as readable specifications.
- **Supervise** a large suite so its results can be trusted. It can split the suite across worker
  processes, isolate resources per lane, retry within budgets, and report flakiness honestly
  instead of burying it. A suite can also stay *resident*, running the specifications a run console
  asks for — in either authoring lane.
- **Specify** end to end. Executable specifications still read as requirements, and they can be
  scaffolded slice by slice from an Event Model. Bobcat has…
