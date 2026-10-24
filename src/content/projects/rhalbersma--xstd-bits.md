---
repo: "rhalbersma/xstd-bits"
name: "xstd-bits"
description: "Bitwise extensions to the C++ Standard Library"
readmeQualityOk: true
url: "https://github.com/rhalbersma/xstd-bits"
homepage: "https://rhalbersma.github.io/xstd-bits/"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["cpp", "cpp23", "header-only", "standard-library", "cpp26", "cpp29", "bitwise", "extensions"]
stars: 48
forks: 5
openIssues: 61
closedIssues: 121
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2018-05-21T13:08:41Z"
lastCommitAt: "2026-10-24T08:07:42Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "under_pressure"]
healthScore: 93
undervaluedScore: 54
maintainers: ["rhalbersma", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/de9878d4ce05720fb18f337bf41488c0f797370e7b6655f7f3cbb3286272b2da/rhalbersma/xstd-bits"
---

# Bitwise extensions to the C++ Standard Library

> "The reasonable man adapts himself to the world: the unreasonable one persists
> in trying to adapt the world to himself. Therefore all progress depends on the
> unreasonable man."
>
> — George Bernard Shaw, *Man and Superman* (1903), "Maxims for Revolutionists"

xstd-bits is a header-only C++ library for bit twiddling, suited to both a sequence of bools and an ordered set of
integers. It takes over the roles of the well-established `std::bitset`, `std::vector<bool>` and
`boost::dynamic_bitset`, split along the lines of the standard containers each of them resembles:
`std::array<bool, N>`, `std::inplace_vector<bool, N>`, `std::vector<bool>`, `std::valarray<bool>` and
`std::set<std::size_t>`. By leveraging C++23 techniques and idioms, xstd-bits answers those containers' interfaces line
for line, while its algorithms work a whole block at a time: code that reads like the standard library runs a word at a
time, as hand-written flag words do. xstd-bits is easy to extend with your own key and block types, can view bits
stored anywhere, and interoperates out of the box with the standard library's ranges and hashing, Boost.Hash2,…
