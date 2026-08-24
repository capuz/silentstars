---
repo: "eaftan/safere"
name: "safere"
description: "A safe linear-time regular expression matching library for Java, based on RE2"
readmeQualityOk: true
url: "https://github.com/eaftan/safere"
language: "Java"
languages: ["Java"]
languagePcts: [95]
stars: 18
forks: 4
openIssues: 35
closedIssues: 267
watchers: 4
contributors: 4
recentReleases: 2
createdAt: "2026-03-18T03:15:16Z"
lastCommitAt: "2026-08-24T04:20:49Z"
lastReleaseAt: "2026-07-27T20:15:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 49
maintainers: ["eaftan", "cushon", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1531d5d05aac1bea73a782bc3ba4f6f0cdb993c064801608510d982e964cdaf6/eaftan/safere"
---

# SafeRE

A linear-time regular expression matching library for Java.

SafeRE is a port of [RE2](https://github.com/google/re2) to Java, with
significant performance optimization work to adapt to the JVM's performance
characteristics and approach parity with `java.util.regex`.  Unlike RE2, which
uses POSIX leftmost-longest semantics, SafeRE matches `java.util.regex`
semantics and provides a drop-in replacement for `java.util.regex.Pattern` and
`java.util.regex.Matcher`.

An earlier port of RE2 to Java exists as
[RE2/J](https://github.com/google/re2j).  RE2/J is valuable work, but it is
substantially slower than `java.util.regex` on common workloads and does not
provide a drop-in replacement API.  SafeRE addresses both of these gaps.

SafeRE **guarantees linear-time matching** regardless of the pattern or input.
It achieves this by using finite automata (DFA/NFA) instead of backtracking.
Patterns that require exponential time in `java.util.regex` — such as
`a?{25}a{25}` matched against `a` repeated 25 times — complete in microseconds
with SafeRE.

## Installation

SafeRE is available on [Maven Central](https://central.sonatype.com/artifact/org.safere/safere).

**Maven:**

```xml…
