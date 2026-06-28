---
repo: "deepgrace/monster"
name: "monster"
description: "The Art of Template MetaProgramming (TMP) in Modern C++♦️"
url: "https://github.com/deepgrace/monster"
homepage: "https://deepgrace.github.io/monster"
language: "C++"
languages: ["C++"]
languagePcts: [100]
topics: ["template", "metaprogramming", "concept", "type-traits", "monster", "algorithm", "c-plus-plus", "tuple", "sequence", "sort"]
stars: 167
forks: 15
openIssues: 0
closedIssues: 2
watchers: 9
contributors: 1
recentReleases: 0
createdAt: "2017-08-15T03:06:51Z"
lastCommitAt: "2026-06-28T01:35:17Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 25
maintainers: ["deepgrace"]
openGraphImageUrl: "https://opengraph.githubassets.com/13dc54391fed2b81a268ace729af124d166cdacafc5ae0ab520fda4e4f9fd7ef/deepgrace/monster"
---

# Monster [](https://github.com/deepgrace/monster/blob/master/LICENSE_1_0.txt) [](https://github.com/deepgrace/monster/blob/master/Guidelines.md) [](https://en.cppreference.com/w/cpp/compiler_support) [](https://github.com/deepgrace/monster) [](https://gitter.im/taotmp/monster)

> **Advanced C++ Template MetaProgramming Framework**

## Overview
```cpp
#include <cstdint>
#include <monster.hpp>

using namespace monster;

int main(int argc, char* argv[])
{
    // arrange the same elements adjacent in a sequence, keep the relative order
    using a1 = adjacent_t<std::tuple<char, double, char, int, double>>;
    using a2 = adjacent_t<std::index_sequence<4, 3, 0, 3, 2, 4, 5, 3>>;

    static_assert(std::is_same_v<a1, std::tuple<char, char, double, double, int>>);
    static_assert(std::is_same_v<a2, std::index_sequence<4, 4, 3, 3, 3, 0, 2, 5>>);

    // Boyer-Moore-Horspool (BMH) algorithm searches for occurrences of a sequence within another sequence
    using b1 = bmh_t<std::tuple<int, char, int>, std::tuple<int, int, char, int, char, int, char, int>>;
    using b2 = bmh_t<std::integer_sequence<int, 7, 5>, std::integer_sequence<int, 7, 5, 4, 0, 7, 5, 9>>;…
