---
repo: "Miragon/bpmn-to-code"
name: "bpmn-to-code"
description: "Gradle and Maven plugin that bridges gaps between BPMN and code - fostering the creation of clean process-automation solutions 🪴"
readmeQualityOk: true
url: "https://github.com/Miragon/bpmn-to-code"
homepage: "https://miragon.github.io/bpmn-to-code/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [85]
topics: ["bpmn", "bpmn-engine", "camunda", "code-generation", "codegen", "gradle-plugin", "java", "kotlin", "maven-plugin", "process-automation"]
stars: 16
forks: 0
openIssues: 10
closedIssues: 28
watchers: 0
contributors: 9
recentReleases: 6
createdAt: "2026-06-16T06:37:37Z"
lastCommitAt: "2026-09-29T08:10:55Z"
lastReleaseAt: "2026-08-03T15:06:28Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 53
maintainers: ["emaarco", "miragon-release-please[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/830c3556086331d6492a20f3ac6023a0c918fd2e884f69f9617d54cd98672076/Miragon/bpmn-to-code"
---

> **bpmn-to-code is early-stage and actively developing.**
> The four pillars — Generate, Validate, Surface, Ship — are taking shape, but expect rough edges.
> Feedback and contributions are very welcome.

# bpmn-to-code

Type-safe constants from your BPMN model — for your compiler, your tests, and your AI agents.

**Generate · Validate · Surface · Ship** — a type-safe BPMN toolkit for JVM projects.

## What It Does

### Generate — Type-Safe APIs

bpmn-to-code reads your BPMN files and generates typed constants from them. Every element ID, message name, and service task type becomes a compiled constant. Rename a task in the modeler → compiler error. No more silent runtime failures from hardcoded strings.

```kotlin
// Before
@JobWorker(type = "miravelo.sendContract")  // copied from modeler, no safety net
fun send() { ... }

// After — generated from the BPMN model
@JobWorker(type = ServiceTasks.MIRAVELO_SEND_CONTRACT)
fun send() { ... }
```

### Validate — Architecture Rules for BPMN _(beta)_

Like ArchUnit for Java, `bpmn-to-code-testing` lets you write architecture tests for your BPMN models. The standalone `validateBpmnModels` Gradle task and `validate-bpmn` Maven goal run the…
