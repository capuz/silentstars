---
repo: "GeorgDangl/Dangl.Calculator"
name: "Dangl.Calculator"
description: "C# library to evaluate formulas"
readmeQualityOk: true
url: "https://github.com/GeorgDangl/Dangl.Calculator"
language: "C#"
languages: ["C#"]
languagePcts: [88]
stars: 43
forks: 11
openIssues: 1
closedIssues: 7
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2016-09-25T13:54:18Z"
lastCommitAt: "2026-08-31T10:00:47Z"
lastReleaseAt: "2019-08-05T17:36:18Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 84
undervaluedScore: 39
maintainers: ["GeorgDangl"]
openGraphImageUrl: "https://opengraph.githubassets.com/4108fc796f24ffbe4bd10e9574c156a9eff20604311cb9a4fd7eb771581bd3ae/GeorgDangl/Dangl.Calculator"
---

# Dangl.Calculator

[Online Documentation](https://docs.dangl-it.com/Projects/Dangl.Calculator)  
[Changelog](https://github.com/GeorgDangl/Dangl.Calculator/blob/HEAD/CHANGELOG.md)  

This calculator is using the [ANTLR4 C# target](https://github.com/tunnelvisionlabs/antlr4cs)
to calculate results from formulas that are passed in as string.

Whenever a calculation is performed, a `CalculationResult` is returned with the following properties:

| Property      | Type    |                                                                                             |
|---------------|---------|---------------------------------------------------------------------------------------------|
| IsValid       | bool    | `true` if the formula could be parsed and calculated, else `false`                          |
| ErrorPosition | int     | Position of the offending symbol in the line, 0 based index, for invalid results, else null |
| ErrorMessage  | string  | ANTLR error message for invalid formulas, else null                                         |
| Result        | double  | `NaN` for invalid formulas, else the actual result                                          |

You can find the…
