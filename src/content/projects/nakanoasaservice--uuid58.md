---
repo: "nakanoasaservice/uuid58"
name: "uuid58"
description: "Shorten UUIDs to 22-character Base58 strings. Stable spec, 200+ shared test vectors, libraries for JS, Go, Python, Rust, Java, Swift, C#, PHP, Ruby, Dart, and PostgreSQL."
readmeQualityOk: true
url: "https://github.com/nakanoasaservice/uuid58"
homepage: "https://nakanoasaservice.github.io/uuid58/"
language: "TypeScript"
languages: ["TypeScript", "Lean"]
languagePcts: [21, 21]
topics: ["base58", "uuid", "encoding", "short-id", "short-uuid", "url-safe", "uuidv7", "csharp", "dart", "go"]
stars: 47
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2025-04-28T16:57:12Z"
lastCommitAt: "2026-11-19T11:59:12Z"
lastReleaseAt: "2026-11-14T22:27:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 57
maintainers: ["nakanoasaservice", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c20e55415771e0b09425b683ad90fc722e313fb20bfa04e830b34d869cf73b6/nakanoasaservice/uuid58"
---

# uuid58

**Shorten UUIDs to 22-character Base58 strings, and back.** uuid58 is a
stable, well-tested encoding with one spec and libraries for JavaScript, Go,
Python, Rust, Java, Kotlin, Swift, C#, PHP, Ruby, Dart, and PostgreSQL.

```text
f4b247fd-1f87-45d4-aa06-1c6fc0a8dfaf  ⇄  XDY9dmBbcMBXqcRvYw8xJ2
```

**[Try the converter in your browser →](https://nakanoasaservice.github.io/uuid58/)**

## Why uuid58

- **Short and fixed-length.** Always 22 characters instead of 36. Validate
  with one length check, and store in a fixed-width column such as `CHAR(22)`.
- **URL-safe, no look-alikes.** Uses the Bitcoin Base58 alphabet: nothing to
  escape in URLs, and no `0`, `O`, `I`, or `l` to misread.
- **Sortable.** Strings sort in the same order as the UUIDs they encode, so
  UUIDv7 IDs stay time-ordered.
- **Still a UUID.** Conversion is lossless both ways. Keep UUID columns in
  your database, and show uuid58 in URLs, APIs, and logs.
- **Same output everywhere.** A string made in Go decodes to the same UUID in
  Python, Rust, or PostgreSQL.
