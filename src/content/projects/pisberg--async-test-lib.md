---
repo: "PIsberg/async-test-lib"
name: "async-test-lib"
description: "@AsyncTest (async-test-lib) is an enterprise-grade test framework that makes concurrency bugs reproducible and detectable. Rather than hoping random thread scheduling will expose bugs, async-test forces them to happen using synchronized barriers and then diagnoses exactly what went wrong using specialized detectors."
readmeQualityOk: true
url: "https://github.com/PIsberg/async-test-lib"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["asynchronous-programming", "java", "unit-testing", "ai-testing", "ai-tool", "ai-tooling", "ai-tools"]
stars: 8
forks: 1
openIssues: 1
closedIssues: 95
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-03-24T18:33:31Z"
lastCommitAt: "2026-09-06T08:04:09Z"
lastReleaseAt: "2026-07-29T13:05:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 62
maintainers: ["PIsberg", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/71b0b0735bf211c49fc0bbfc451cd6dc87acabcfabf1283baab7dc956b6cd549/PIsberg/async-test-lib"
---

# @AsyncTest - Asynchronous Testing Library for Java

**JUnit 5 & 6 concurrency stress testing — one annotation, 146 detectors**

</div>

---

## Why async-test?

- **One annotation** — `@AsyncTest` runs your test body on N threads × M rounds, collided on a `CyclicBarrier` so every round starts at the same instant. No executor boilerplate, no `CountDownLatch`, no `Thread.join` loops.
- **146 detectors** — deadlocks, race conditions, virtual-thread pinning, lifecycle bugs, misused JDK types and more, all on by default. See [Detectors](#detectors) for what feeds them.
- **JUnit native, 5 and 6** — a plain `@TestTemplate`: no JVM flags, no required configuration, and it works from Kotlin, Groovy, Scala and Clojure. Jupiter 5.9.3 through 6.1.2, verified per release ([compatibility table](https://github.com/PIsberg/async-test-lib/blob/HEAD/docs/BUILDING.md#junit-compatibility), [language notes](https://github.com/PIsberg/async-test-lib/blob/HEAD/docs/JVM_LANGUAGES.md)).
- **Every finding says how far to trust it** — each detector carries a trust tier, so `failOn` can gate a merge on the measured end of the scale while everything else is still reported ([the…
