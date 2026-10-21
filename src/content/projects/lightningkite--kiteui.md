---
repo: "lightningkite/kiteui"
name: "kiteui"
description: "A Kotlin Multiplatform UI Framework based on Solid JS"
readmeQualityOk: true
url: "https://github.com/lightningkite/kiteui"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [92]
stars: 47
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 12
recentReleases: 0
createdAt: "2024-03-27T16:14:04Z"
lastCommitAt: "2026-10-21T20:00:25Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 49
maintainers: ["UnknownJoe796", "WesleyEdwards", "iHoonter"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e7f749f33b0b7b7d9ae4b7dfc482d65352e9b891a90967218a943c84e19dee3/lightningkite/kiteui"
---

# KiteUI

)](https://lightningkite-maven.s3.us-west-2.amazonaws.com/com/lightningkite/kiteui/library/maven-metadata.xml)

A Kotlin Multiplatform UI Framework inspired by Solid.js that uses the native view components of each platform.

## Why make this library instead of using Compose Multiplatform?

1. **Web targets:** Compose is built on its own rendering stack, and thus it must render its entire UI on web in a canvas.  This makes accessibility and good performance extremely difficult and server-side rendering impossible.
2. **Smaller Binary Sizes:** Compose generates fairly large binaries, since it must recreate the entire UI set of the target platform - i.e. text fields, checkboxes, and more.
3. **URL-based navigation:** Deep linking is difficult in Compose, so creating links to pages requires extra effort.

For these reasons, we think Compose isn't sufficient nor can be made sufficient for any multiplatform development that includes a web target.  That's why we created this library.

Here is a comparison of the same UI built with KiteUI and Compose Web:

|                                           | Compose Web…
