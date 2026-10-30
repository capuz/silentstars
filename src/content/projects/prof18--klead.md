---
repo: "prof18/klead"
name: "klead"
description: "A Kotlin Multiplatform library for extracting clean article content from web pages"
readmeQualityOk: true
url: "https://github.com/prof18/klead"
language: "HTML"
languages: ["HTML"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-24T20:04:56Z"
lastCommitAt: "2026-10-30T10:22:34Z"
lastReleaseAt: "2026-10-11T14:16:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 59
undervaluedScore: 47
maintainers: ["prof18"]
openGraphImageUrl: "https://opengraph.githubassets.com/20e7e740ba220f4eea25f62f251a838ecc6db1b29b3f57443852bf73d89bf987/prof18/klead"
---

# Klead

Klead is a Kotlin Multiplatform library for extracting the main content from web
pages. Give it a page's HTML and source URL, and it removes navigation, ads,
related-content blocks, and other clutter before returning clean Markdown, cleaned
HTML, or both—depending on the outputs you request.

Supported targets: JVM, Android, iOS, and native macOS on Apple
silicon and Intel. Kotlin deprecates the `macosX64` target as of 2.3.20, so Intel
native support is transitional.

## Alpha status

Klead is currently in alpha. Its API and output may change as it is tested against
more sites.

It is already being used as an experimental article-extraction engine in
[FeedFlow](https://www.feedflow.dev/), the open-source RSS reader available for
Android, iOS, macOS, Windows, and Linux. The results have been very promising so
far. Klead will evolve toward a stable release based on real-world FeedFlow usage
and the reports received through the [FeedFlow issue
tracker](https://github.com/prof18/feed-flow/issues). You can also browse the
[FeedFlow source code](https://github.com/prof18/feed-flow).

## Features

- Extracts the main article content and metadata from static HTML.
- Removes…
