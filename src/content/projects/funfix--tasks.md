---
repo: "funfix/tasks"
name: "tasks"
description: "Task datatype, meant for cross-language interop (Java, Kotlin, Scala)"
url: "https://github.com/funfix/tasks"
homepage: "https://tasks.funfix.org"
language: "Java"
languages: ["Java"]
languagePcts: [95]
topics: ["java", "kotlin", "scala"]
stars: 16
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-06-02T07:03:53Z"
lastCommitAt: "2026-06-24T06:40:00Z"
lastReleaseAt: "2026-02-07T12:04:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 50
maintainers: ["alexandru", "opencode-agent[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/22994f16495b65ce7f2cb0fef02d1bf439076258570a2f7ce2be40406c6264d7/funfix/tasks"
---

# Tasks

This is a library meant for library authors that want to build libraries that work across Java, Scala, or Kotlin, without having to worry about interoperability with whatever method of I/O that the library is using under the hood.

## Usage

Read the [Javadoc](https://javadoc.io/doc/org.funfix/tasks-jvm/0.4.1/org/funfix/tasks/jvm/package-summary.html).
Better documentation is coming.

### Migration Note (v0.5.0)

The `AsyncFun` interface has changed to improve cancellation management and simplify the API. This is a source and binary incompatible change.

**Old shape:**
```java
Task.fromAsync((executor, callback) -> {
    // ...
    return () -> { /* cleanup */ };
});
```

**New shape:**
```java
Task.fromAsync(continuation -> {
    var executor = continuation.getExecutor();
    continuation.invokeOnCancellation(() -> { /* cleanup */ });
    // ...
});
```

Key differences:
- The `executor` and `callback` are now encapsulated in the `Continuation`.
- Cancellation cleanup is registered via `continuation.invokeOnCancellation(finalizer)` instead of returning a `Cancellable`.
- `continuation.onCancellation()` signals that the task has completed due to cancellation, whereas…
