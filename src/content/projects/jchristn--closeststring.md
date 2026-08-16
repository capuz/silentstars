---
repo: "jchristn/ClosestString"
name: "ClosestString"
description: "Simple static library to identify the closest string from a list, and its edit distance, based on a supplied input string."
readmeQualityOk: true
url: "https://github.com/jchristn/ClosestString"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-02-24T23:25:46Z"
lastCommitAt: "2026-08-16T04:08:06Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 36
maintainers: ["jchristn"]
openGraphImageUrl: "https://opengraph.githubassets.com/27228206bdf0624b2a8f41d02492ef979b3b67450ef81b3c1430a7e274ed2370/jchristn/ClosestString"
---

# ClosestString

ClosestString is a simple static library that will find the closest matching string, and its edit distance, based on a supplied string and list of valid strings.

## Help, Feedback, Contribute

If you have any issues or feedback, please file an issue here in Github. We'd love to have you help by contributing code for new features, optimization to the existing codebase, ideas for future releases, or fixes!

## New in v1.0.x

- Initial release using Levenshtein (Wagner Fischer)
- Added ```ClosestMatches``` static class to retrieve multiple matches ordered by edit distance

## Example Project

Refer to the ```Test``` project for exercising the library.

```csharp
using FindClosestString;

List<string> validValues = new List<string> { "foo", "bar", "baz", "joel", "maria", "lucas", "sienna", "khaleesi" };
(string, int) closest = ClosestString.UsingLevenshtein("fox", validValues);
// closest.Item1 -> "foo"
// closest.Item2 -> 1 

List<(string, int)> matches = ClosestStrings.UsingLevenshtein("fox", validValues, 10); // max 10 results
```

## Version History

Refer to CHANGELOG.md for version history.
