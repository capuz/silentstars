---
repo: "gpedic/ex_shortuuid"
name: "ex_shortuuid"
description: "ShortUUID is a simple UUID shortener for Elixir."
readmeQualityOk: true
url: "https://github.com/gpedic/ex_shortuuid"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [97]
topics: ["shortuuid", "elixir", "encoding"]
stars: 53
forks: 3
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2017-08-18T07:52:33Z"
lastCommitAt: "2026-11-09T04:35:00Z"
lastReleaseAt: "2026-11-09T02:06:59Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 35
maintainers: ["gpedic"]
openGraphImageUrl: "https://opengraph.githubassets.com/03784b90d851c669870546e745326622c2b16c016c550de16ad3cf5f5812760b/gpedic/ex_shortuuid"
---

# ShortUUID

ShortUUID is a lightweight Elixir library that turns standard UUIDs into shorter strings, for example for use in URLs.
You can choose from a set of predefined alphabets or define your own.
The default alphabet includes lowercase letters, uppercase letters, and digits, omitting characters like 'l', '1', 'I', 'O', and '0' to keep them readable. It is URL-safe.

Not every alphabet is URL-safe: `:base64` and custom alphabets may contain characters that need escaping in URLs (see [Custom Alphabets](#custom-alphabets)).

**Note:** Different ShortUUID implementations are compatible as long as they use the same alphabet in the same order. There is no official standard, so if you plan to use ShortUUID with other libraries, test for compatibility. See [Compatibility with other implementations](#compatibility-with-other-implementations).

Unlike some other solutions, ShortUUID does not produce UUIDs on its own as there are already plenty of libraries to do so. To generate UUIDs, use libraries such as
[Uniq](https://hex.pm/packages/uniq) (including version 7 UUIDs), [Erlang UUID](https://github.com/okeuday/uuid) or [Ecto](https://hexdocs.pm/ecto/Ecto.UUID.html), which can…
