---
repo: "tiqian-cjk/tiqian"
name: "tiqian"
description: "提椠 Tíqiàn is a CJK paragraph composer."
originalDescription: "提椠 Tíqiàn is a CJK paragraph composer."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/tiqian-cjk/tiqian"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [47, 26]
topics: ["cjk", "jetpack-compose", "kotlin", "kotlin-js", "kotlin-multiplatform", "typography"]
stars: 39
forks: 5
openIssues: 7
closedIssues: 3
watchers: 1
contributors: 6
recentReleases: 7
createdAt: "2026-06-17T11:24:25Z"
lastCommitAt: "2026-11-06T11:24:14Z"
lastReleaseAt: "2026-08-21T03:28:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 37
maintainers: ["Losses", "123Duo3"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1272190320/f57db17e-2852-42ef-8978-3c96cee3f28c"
discussionCount: 4
---

Tíqiàn is a CJK paragraph composer.

On top of the font and rendering capabilities of each platform, it uniformly handles font selection, line breaking, line-start and line-end prohibitions (kinsoku), punctuation spacing, justification, inline space distribution, and interlinear annotations in Chinese body text.

## Current status

Tíqiàn is still in early development. No stable release has been published yet, and the public API and module structure may continue to change.

- [x] Simplified Chinese horizontal layout
- [ ] Traditional Chinese horizontal layout
  - [x] Zhuyin (Bopomofo) annotation
- [ ] Simplified / Traditional vertical layout
- [ ] Japanese typesetting (JLREQ)
- [ ] Korean typesetting (KLREQ)

Tíqiàn can currently be used through three front ends: Compose, Android View, and Web.

## Compose

The Compose front end supports Compose Desktop and Android 6.0 (API 23) and above:

```kotlin
implementation("org.tiqian:tiqian-compose:<version>")

// Projects using Material 3 can instead depend on tiqian-compose-material3 to read `LocalTextStyle`, `LocalContentColor`, and so on
implementation("org.tiqian:tiqian-compose-material3:<version>")
```

For plain text, you can…
