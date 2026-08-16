---
repo: "fuquery/rsl"
name: "rsl"
description: "A support library for reflective metaprograms"
readmeQualityOk: true
url: "https://github.com/fuquery/rsl"
language: "C++"
languages: ["C++"]
languagePcts: [91]
stars: 13
forks: 3
openIssues: 4
closedIssues: 5
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2025-04-07T01:37:08Z"
lastCommitAt: "2026-08-16T04:07:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 36
maintainers: ["Tsche", "marralesfios", "Yaraslaut"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f12cc9d72b6bc82662dabac1a6c771051740461a8ed2dcc0c6eabc57acebf87/fuquery/rsl"
---

# Reflection Support Library

This project contains reimplementations of various standard library facilities and other utilities to assist with reflective code.

## Overview

### <rsl/span>
`rsl::span` is a reimplementation of `std::span`. Notably `rsl::span` is a structural type, so it can be used as constant template parameter and be reflected.

Additionally `rsl::span` provides an implicit conversion operator to `std::meta::info`. This allows usage in splicers to splice in an array of all elements in the span.

### <rsl/string_view>
`rsl::string_view` is a reimplementation of `std::string_view`. Notably `rsl::string_view` is a structural type, so it can be used as constant template parameter and be reflected.

Additionally `rsl::string_view` provides an implicit conversion operator to `std::meta::info`. This allows splicing a `rsl::string_view` as array of characters.
### <rsl/variant> and <rsl/tagged_variant>
`rsl::variant` is a reflective reimplementation of `std::variant`. The underlying union is generated via `std::meta::define_aggregate`. Since this implies not having to recursively generate the underlying union, `rsl::variant` performs significantly better than all…
