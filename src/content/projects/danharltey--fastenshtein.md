---
repo: "DanHarltey/Fastenshtein"
name: "Fastenshtein"
description: "The fastest .Net Levenshtein around"
readmeQualityOk: true
url: "https://github.com/DanHarltey/Fastenshtein"
language: "C#"
languages: ["C#"]
languagePcts: [97]
topics: ["fastenshtein", "sql-server", "levenshtein", "fuzzy-matching", "csharp"]
stars: 291
forks: 27
openIssues: 3
closedIssues: 8
watchers: 8
contributors: 3
recentReleases: 1
createdAt: "2015-11-15T17:00:34Z"
lastCommitAt: "2026-11-12T11:40:32Z"
lastReleaseAt: "2026-11-12T10:51:46Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 65
undervaluedScore: 23
maintainers: ["DanHarltey", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e76058cf1b753c2d8b1d77909b73f4df4548d220dd327c6576886a802244b18/DanHarltey/Fastenshtein"
---

# Fastenshtein

One of the fastest .Net Levenshtein projects around.

Fastenshtein is an optimized and fully unit tested Levenshtein implementation. It is optimized for speed and memory usage.

From the included benchmarking tests comparing random words of 3 to 20 random chars to other Nuget Levenshtein implementations.

| Method                    | Mean       | Ratio | Rank | Gen0      | Allocated  | Alloc Ratio |
|-------------------------- |-----------:|------:|-----:|----------:|-----------:|------------:|
| Fastenshtein              |   896.9 μs |  1.00 |    1 |         - |     6344 B |        1.00 |
| FastenshteinValue         |   886.6 μs |  0.99 |    1 |         - |     4424 B |        0.70 |
| FastenshteinValueAdvanced |   897.7 μs |  1.00 |    1 |         - |          - |        0.00 |
| FastenshteinStatic        | 1,005.3 μs |  1.12 |    2 |   31.2500 |   265440 B |       41.84 |
| FastenshteinStaticSpan    |   996.7 μs |  1.11 |    2 |   31.2500 |   265440 B |       41.84 |
| FuzzySharp                | 1,375.3 μs |  1.53 |    3 |   80.0781 |   677088 B |      106.73 |
| NinjaNye                  | 1,463.3 μs |  1.63 |    4 |  509.7656 |  4274592 B |      673.80 |
|…
