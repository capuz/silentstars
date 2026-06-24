---
repo: "eaftan/safere"
name: "safere"
description: "A safe linear-time regular expression matching library for Java, based on RE2"
url: "https://github.com/eaftan/safere"
language: "Java"
languages: ["Java"]
languagePcts: [96]
stars: 8
forks: 3
openIssues: 13
closedIssues: 213
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-03-18T03:15:16Z"
lastCommitAt: "2026-06-24T00:24:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 55
maintainers: ["eaftan", "cushon", "eamonnmcmanus"]
openGraphImageUrl: "https://opengraph.githubassets.com/995a08362c782f914c6034bd64d156121fe1389031a2b87417eff45c93b0aa27/eaftan/safere"
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
