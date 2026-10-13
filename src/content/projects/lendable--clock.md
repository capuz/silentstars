---
repo: "Lendable/clock"
name: "clock"
description: "Lendable Clock Abstraction"
readmeQualityOk: true
url: "https://github.com/Lendable/clock"
language: "PHP"
languages: ["PHP"]
languagePcts: [96]
topics: ["clock", "mock", "php", "psr-20"]
stars: 15
forks: 3
openIssues: 1
closedIssues: 3
watchers: 28
contributors: 15
recentReleases: 0
createdAt: "2018-11-12T12:53:53Z"
lastCommitAt: "2026-10-13T10:57:12Z"
lastReleaseAt: "2022-12-22T13:26:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch"]
healthScore: 92
undervaluedScore: 50
maintainers: ["renovate[bot]", "marmichalski", "velkovb"]
openGraphImageUrl: "https://opengraph.githubassets.com/2bf577a370eff5fc2bb47661e726d1b9d0a9b8316effe78ab70dc93fd0e70b41/Lendable/clock"
---

# Lendable Clock

The Lendable Clock library provides an object-oriented interface for accessing the system time in PHP. While PHP offers direct instantiation of `\DateTime`, and `\DateTimeImmutable` to obtain the current system time, this library introduces the concept of a Clock to offer greater control and flexibility over time-related operations.

## Why Use a Clock?

You might wonder why you need a clock when you can simply instantiate `\DateTime` objects whenever you need them. Here's why a Clock abstraction is beneficial:

- **Control Over Time**: By depending on a Clock rather than instantiating time objects directly, you gain the ability to reason about and control time within your application.

- **Testing Flexibility**: Using a Clock allows you to swap underlying implementations, making it easier to test time-dependent code. You can stub time with fixed values, simulate time passing, and observe interactions with the Clock for more robust testing.

- **Dependency Management**: Clear dependencies on the Clock class help in managing components that rely on accessing the current system time.

- **PSR-20 Compatibility**: The library aligns with…
