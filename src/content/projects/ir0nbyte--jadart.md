---
repo: "IR0NBYTE/Jadart"
name: "Jadart"
description: "Jadart is a fast Flutter decompiler designed for Agents/Mobile Security Researchers."
readmeQualityOk: true
url: "https://github.com/IR0NBYTE/Jadart"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["dart", "decompiler", "flutter", "mobile-security", "reverse-engineering", "android", "android-security", "apk-analysis", "binary-analysis", "bugbounty"]
stars: 19
forks: 3
openIssues: 3
closedIssues: 40
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-09-06T10:21:20Z"
lastCommitAt: "2026-10-08T10:51:01Z"
lastReleaseAt: "2026-10-02T22:11:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 50
maintainers: ["IR0NBYTE", "Saket7002"]
openGraphImageUrl: "https://opengraph.githubassets.com/7806d1a7bbe277d9264b64e19408516aaf3f9f1c75b1dcf27445de7395b5bbab/IR0NBYTE/Jadart"
discussionCount: 0
---

**A Flutter decompiler.** Point it at an APK and get back a class tree, method bodies as
pseudo-Dart, the string pool, embedded data tables, and the source names of virtual calls.

It is for reverse engineers, security reviewers, and anyone auditing a shipped Flutter app
who has hit the wall where most tools stop at ARM64 assembly.

Flutter compiles Dart ahead of time. There is no bytecode and no reflection metadata, so
teams ship banking, fintech, health and identity logic on the assumption that AOT hides it.
It does not. The public toolchain is simply fragmented, version-fragile, and stops at
assembly.

**The rule that shapes everything here: Jadart never prints a confident guess.** An
instruction it does not model prints as raw arm64. A call argument it cannot reconstruct
prints `(...)`. A field whose name is not in the binary prints `field_0x8`. A Dart release
whose format is not registered raises a typed error instead of parsing with a grammar that
might be wrong. Gaps are visible on purpose, because a plausible wrong answer is worse than
a marked absence.

## Showcase

```dart
class LicenseVault {
  int balance = 1000;

  bool withdraw(int amount) {
    if (amount > balance)…
