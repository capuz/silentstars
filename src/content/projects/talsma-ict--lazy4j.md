---
repo: "talsma-ict/lazy4j"
name: "lazy4j"
description: "Lazy value support for java"
url: "https://github.com/talsma-ict/lazy4j"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["lazy", "lazy-evaluation", "lazy-loading", "lazyloading"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2018-05-03T08:36:08Z"
lastCommitAt: "2026-07-03T12:23:00Z"
lastReleaseAt: "2025-08-15T13:28:36Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 59
maintainers: ["dependabot[bot]", "sjoerdtalsma", "talsma-ci"]
openGraphImageUrl: "https://opengraph.githubassets.com/755e0229a13f5a3300bf8fe3d54b02fc6b04f6e0e61c1e9619d130c5c96b15ef/talsma-ict/lazy4j"
---

# Lazy4J

- A `Lazy` class in java.
- A `LazyValueMap`.
- A `LazyList`

## What is it?

### Lazy

Wrapper for a standard java `Supplier` function that only evaluates the wrapped function when it is first needed,
remembering the result so it does not need to get called again.

### LazyValueMap

Map that stores values as `Lazy` values.

### LazyList

List that stores values as `Lazy` values.

## Why?

We feel this ought to be provided out of the box and should have been when lambda's were introduced, back in Java 8.

Fortunately, a `Lazy` class implementation is not very difficult to create, so that's what we did.  
The `LazyValueMap` was added later in version 2.0.2 and `LazyList` in 2.0.3.

## Example

A small example of how the `Lazy` class can be used:

```java
public class Example {
    // Method reference to constructor new Expensive(), called only when needed and keep the result.
    private final Lazy<Expensive> lazyMethod = Lazy.of(Expensive::new);

    // Lambda called only once when needed for the first time.
    private final Lazy<Expensive> lazyLambda = Lazy.of(() -> new Expensive());
}
```

This declares a lazy variable without calling the expensive supplier yet.…
