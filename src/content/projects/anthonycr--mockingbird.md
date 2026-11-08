---
repo: "anthonycr/Mockingbird"
name: "Mockingbird"
description: "A minimalist faking framework exclusively for verifying interactions"
readmeQualityOk: true
url: "https://github.com/anthonycr/Mockingbird"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [97]
topics: ["kotlin", "testing", "mock", "verification", "kotlin-compiler-plugin"]
stars: 26
forks: 3
openIssues: 3
closedIssues: 20
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-03-15T01:15:35Z"
lastCommitAt: "2026-11-08T14:13:53Z"
lastReleaseAt: "2024-12-18T03:39:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 60
maintainers: ["anthonycr", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0cd0a3ab5f2cf96c8ed23090d37a46d22c3d71f8e035192e0467cd74fe5321c/anthonycr/Mockingbird"
---

# Mockingbird

A minimalist faking framework exclusively for verifying interactions. It generates fake
implementations of interfaces and abstract classes that can be verified during a test using the
Kotlin compiler plugin API. It does not allow mocking behavior or return values, and does not
support mocking concrete classes.

## Why?

Other testing frameworks exist, like MockK, that support full mocking of all types, a wide range of
features, and have significantly more utility than this minimalist framework. However, mocking
objects is frequently viewed as an anti-pattern, as mocking an object can cover up poor class design
by making untestable code testable. Tests that heavily utilize mocks can lose their utility and even
obscure bugs, or can become difficult to understand and refactor. Additionally, mocks are usually
slow to construct, which in turn slows down test execution.

Fakes are less forgiving then mocks and require better class design in order to support testing.
Because they are less flexible, they have less potential to be abused. However, it can be annoying
to verify interactions on fakes because they are usually handwritten. Mockingbird auto-generates
fake…
