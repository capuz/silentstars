---
repo: "lookbusy1344/RecordValueAnalyser"
name: "RecordValueAnalyser"
description: "C# Roslyn code analyser to check records for correct value semantics"
readmeQualityOk: true
url: "https://github.com/lookbusy1344/RecordValueAnalyser"
language: "C#"
languages: ["C#"]
languagePcts: [80]
topics: ["roslyn", "roslyn-analyzer", "value-semantics"]
stars: 7
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-10-03T12:50:21Z"
lastCommitAt: "2026-08-03T06:43:37Z"
lastReleaseAt: "2026-02-19T13:09:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 76
undervaluedScore: 62
maintainers: ["lookbusy1344", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ddc405d81b9f8c546167d30d4c1f0b67ae325f5e94f94d5436301897ddccae4f/lookbusy1344/RecordValueAnalyser"
---

# Value-Semantics Analyser for C# Records

## TL;DR

Equality checks on .NET records don’t always work properly. This analyser reports when. For example:

```
record TestRecord(int A, string B, IReadOnlyList<int> C);
                                   ~~~~~~~~~~~~~~~~~~~~  JSV01: member lacks value semantics
```

## Contents

This project contains:
- the Roslyn code analyser itself
- a wrapper to make a nuget package https://www.nuget.org/packages/lookbusy1344.RecordValueAnalyser
- a VSIX plugin for Visual Studio 2022/6
- a test project

## Why?

This project is a C# Roslyn code analyser to check records for correct value semantics.

Records are a feature in modern C#. They are intended to be used for immutable data with value semantics. This means that two instances of the same record type should be considered equal if all their members are equal. This is the same as the behaviour of `struct` and tuple types.

Internally records are regular classes (or structs), but they have a synthesized `Equals` method that compares all their members. Without this Equals method, different instances would never be equal:

```
class TestClass
{
    public int A { get; set; }
    public string B…
