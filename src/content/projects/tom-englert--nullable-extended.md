---
repo: "tom-englert/Nullable.Extended"
name: "Nullable.Extended"
description: "A Roslyn analyzer to improve the experience when working with nullable reference types."
readmeQualityOk: true
url: "https://github.com/tom-englert/Nullable.Extended"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["agent-skills", "mcp-server", "model-context-protocol"]
stars: 60
forks: 3
openIssues: 0
closedIssues: 14
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2020-12-27T13:29:38Z"
lastCommitAt: "2026-10-26T09:17:22Z"
lastReleaseAt: "2026-10-18T13:56:10Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 51
maintainers: ["tom-englert"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/324767846/43a0f800-60b2-11eb-8212-bb322defbfb2"
discussionCount: 4
---

# Nullable Extended

## Roslyn tools and analyzers for better coding with nullable reference types

[Nullable reference types](https://docs.microsoft.com/en-us/dotnet/csharp/nullable-references)
are a great feature introduced with C# 8.0 that helps in writing better code.
This project helps to improve the experience when coding with them.

**Three tools are available:**
- The [Roslyn Analyzer](#roslyn-analyzer) (NuGet package) warns about every unjustified usage of the null-forgiving operator, in the IDE and in your builds. Works with any IDE and on CI.
- The [Visual Studio Extension](#visual-studio-extension) lists all usages of the null-forgiving operator in your solution and detects those that are no longer needed.
- The [MCP server](#ai-assistants) supports AI assistants in finding the unjustified usages in large solutions, so they can be fixed.

## Managing null-forgiving operators

Sometimes it is necessary to use the
[null-forgiving operator "!"](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/null-forgiving)
to suppress a false warning.
However, using too many of them will render the value of nullable checks almost useless.

There are two…
