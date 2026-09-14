---
repo: "mganss/Glob.cs"
name: "Glob.cs"
description: "Path globbing for .NET"
readmeQualityOk: true
url: "https://github.com/mganss/Glob.cs"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["glob", "globbing", "globbing-library", "path-globbing", "wildcard"]
stars: 64
forks: 12
openIssues: 0
closedIssues: 5
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2013-12-20T17:09:24Z"
lastCommitAt: "2026-09-14T09:11:53Z"
lastReleaseAt: "2025-01-23T20:15:31Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 43
maintainers: ["mganss", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/84b4a293be936667a1c5d40eaf716fa52c2cf392db372ef27266b55a91c91ec1/mganss/Glob.cs"
---

Glob.cs
=======

Single-source-file path [globbing](http://en.wikipedia.org/wiki/Glob_(programming)) for .NET (netstandard2.0 and net461).

Features
--------

* Choose case sensitivity
* Optionally match only directories
* Injectable file system implementation for easy testing (uses [`System.IO.Abstractions`](https://www.nuget.org/packages/System.IO.Abstractions/))
* Can cancel long running match
* Throw or continue on file system errors
* Optionally log errors to supplied log implementation
* Lazy tree traversal
* Option to limit depth of `**` expansion

Syntax
------

* `?` matches a single character
* `*` matches zero or more characters
* `**` matches zero or more recursive directories, e.g. `a\**\x` matches `a\x`, `a\b\x`, `a\b\c\x`, etc.
* `[...]` matches a set of characters, syntax is the same as [character groups](http://msdn.microsoft.com/en-us/library/20bw873z.aspx#PositiveGroup) in Regex.
* `{group1,group2,...}` matches any of the pattern groups. Groups can contain groups and patterns, e.g. `{a\b,{c,d}*}`.

Usage
---

Install the NuGet package [`Glob.cs`](https://www.nuget.org/packages/Glob.cs). Then:

```C#
var dlls = Glob.Expand(@"c:\windows\system32\**\*.dll");
```
