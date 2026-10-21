---
repo: "SebHenn/dotnet-tia"
name: "dotnet-tia"
description: "Test impact analysis for .NET - run only the tests your diff can actually affect."
readmeQualityOk: true
url: "https://github.com/SebHenn/dotnet-tia"
homepage: "https://www.nuget.org/packages/dotnet-tia"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["continuous-integration", "csharp", "developer-tools", "dotnet", "dotnet-tool", "msbuild", "mstest", "nunit", "roslyn", "test-impact-analysis"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-07-29T14:12:37Z"
lastCommitAt: "2026-10-21T17:31:00Z"
lastReleaseAt: "2026-08-21T18:47:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 69
maintainers: ["SebHenn", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/60f2aa5b7ba4dd7c3353404f17f0103168d357166820f4adf02e29777e766222/SebHenn/dotnet-tia"
discussionCount: 0
---

# dotnet tia

Test impact analysis for .NET. A `dotnet` global tool that takes a git diff and runs **only the tests that diff can actually affect**.

```
$ dotnet tia run --base origin/main

  Base                  origin/main (7dd3bef24)
  Diff                  1 file (1 C#), 1 symbol changed
  Graph                 125 types / 1,035 members / 3,593 edges  (7 projects built)
  Impacted tests        37 of 165  (22.4 %)

  Widenings
    ! Reflection       Tia.Core: AnalysisReport.cs uses JsonSerializer.Serialize (line 165); the reflecting member(s) are treated as always impacted

  Projects
    Tia.Core.Tests                        9 / 115     filtered (XUnitV3/MicrosoftTestingPlatform)
    Tia.Integration.Tests                28 / 50      filtered (XUnitV3/MicrosoftTestingPlatform)

  Elapsed               8.8s

  > dotnet test tests/Tia.Core.Tests/Tia.Core.Tests.csproj -- --filter-method Tia.Core.Tests.GitDiffParserTests.Hunks_reads_both_sides ...
```

That output is real: it is `tia` selecting against a one-line change to its own
`GitDiffParser.ParseHunks`, captured at `7dd3bef2`. Nine of the 115 engine tests that existed at
that commit exercise that method — the suite has grown…
