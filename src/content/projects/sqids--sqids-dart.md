---
repo: "sqids/sqids-dart"
name: "sqids-dart"
description: "Official Dart port of Sqids. Generate short unique IDs from numbers."
readmeQualityOk: true
url: "https://github.com/sqids/sqids-dart"
homepage: "https://sqids.org/dart"
language: "Dart"
languages: ["Dart"]
languagePcts: [100]
topics: ["dart", "dartlang", "id-generator", "sqids", "hashids", "id", "short-id", "short-url", "uid", "unique-id"]
stars: 17
forks: 3
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2023-06-24T15:36:52Z"
lastCommitAt: "2026-08-29T17:28:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 34
maintainers: ["JoDeveloper"]
openGraphImageUrl: "https://opengraph.githubassets.com/17983b264119eba98cf4be1787b6036ac66594fb7be7ae86dae4b6f2d06a0ff2/sqids/sqids-dart"
discussionCount: 0
---

# [Sqids Dart](https://sqids.org/dart)

Features:

- **Encode multiple numbers** - generate short IDs from one or several non-negative numbers
- **Quick decoding** - easily decode IDs back into numbers
- **Unique IDs** - generate unique IDs by shuffling the alphabet once
- **ID padding** - provide minimum length to make IDs more uniform
- **URL safe** - auto-generated IDs do not contain common profanity
- **Randomized output** - Sequential input provides nonconsecutive IDs
- **Many implementations** - Support for [40+ programming languages](https://sqids.org/)

## 🧰 Use-cases

Good for:

- Generating IDs for public URLs (eg: link shortening)
- Generating IDs for internal systems (eg: event tracking)
- Decoding for quicker database lookups (eg: by primary keys)

Not good for:

- Sensitive data (this is not an encryption library)
- User IDs (can be decoded revealing user count)

## 🚀 Getting started

In your library add the following import:

```dart
import 'package:sqids/sqids.dart';
```

## 👩‍💻 Examples

Simple encode & decode:

```dart
final sqids = Sqids()
const id = sqids.encode([1, 2, 3]) // "86Rf07"
const numbers = sqids.decode(id) // [1, 2, 3]
```

> **Note**
> 🚧…
