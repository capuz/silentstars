---
repo: "nullean/assembly-differ"
name: "assembly-differ"
description: "Compare and Diff assemblies from different sources. Useful for determining what changes are introduced across versions, and if any are breaking."
readmeQualityOk: true
url: "https://github.com/nullean/assembly-differ"
language: "C#"
languages: ["C#"]
languagePcts: [98]
topics: ["api-diff", "assembly", "breaking-changes", "csharp", "dotnet", "dotnet-tool", "nuget"]
stars: 72
forks: 13
openIssues: 7
closedIssues: 11
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2018-11-26T20:46:59Z"
lastCommitAt: "2026-11-15T08:28:53Z"
lastReleaseAt: "2020-05-27T18:38:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 84
undervaluedScore: 43
maintainers: ["Mpdreamz"]
openGraphImageUrl: "https://opengraph.githubassets.com/f53b2a54416f82a5c783fa57fda2c64188b25e5117e2387e380e0db81b4d0b67/nullean/assembly-differ"
---

Proc 0.14.0 added a `CancellationToken` to its `Start*` methods. Diffing it against 0.13.0 straight from nuget.org shows
each old overload deleted and its replacement added, which makes the release a major change:

```console
$ assembly-differ nuget Proc 0.13.0 0.14.0 -t proc -f xml
[diff] Difference found: NuGetAssemblyProvider:proc.dll and NuGetAssemblyProvider:proc.dll
<Assembly Name="proc, Version=0.0.0.0, Culture=neutral, PublicKeyToken=96c599bbe3e70f5d" DiffType="Modified">
  <Module Name="proc.dll" DiffType="Modified">
    <Type Name="ProcNet.LongRunningApplicationSubscription" DiffType="Modified">
      <Property Name="WaitHandle" DiffType="Modified">
        <Method Name="get" DiffType="Modified">
          <DeclarationDiffs>
            <DiffItem DiffType="Modified">Member is more visible.</DiffItem>
          </DeclarationDiffs>
        </Method>
      </Property>
    </Type>
    <Type Name="ProcNet.ObservableProcessBase&lt;TConsoleOut&gt;" DiffType="Modified">
      <Method Name="WaitForCompletion(Nullable&lt;TimeSpan&gt;, CancellationToken)" DiffType="New" />
      <Method Name="WaitForCompletion(Nullable&lt;TimeSpan&gt;)" DiffType="Deleted" />
    </Type>
    <Type…
