---
repo: "alpacahq/alpaca-trade-api-csharp"
name: "alpaca-trade-api-csharp"
description: "C# SDK for Alpaca Trade API https://docs.alpaca.markets/"
readmeQualityOk: true
url: "https://github.com/alpacahq/alpaca-trade-api-csharp"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["csharp"]
stars: 305
forks: 97
openIssues: 26
closedIssues: 469
watchers: 42
contributors: 31
recentReleases: 0
createdAt: "2018-06-18T13:29:56Z"
lastCommitAt: "2026-10-23T09:32:39Z"
lastReleaseAt: "2018-11-01T09:32:17Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 97
undervaluedScore: 39
maintainers: ["carlostasada", "dependabot[bot]", "Romazes"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3a23130a71fbfb2906410a7e30e40606be27f3a8097d3003a3928c2f51cdadc/alpacahq/alpaca-trade-api-csharp"
---

# .NET SDK for Alpaca Markets API

| Package | Stable | Pre-release |
| ------- | ------ | ----------- |
| [Alpaca.Markets](https://alpacahq.github.io/alpaca-trade-api-csharp/api/Alpaca.Markets.html) | [](https://www.nuget.org/packages/Alpaca.Markets) | [](https://www.nuget.org/packages/Alpaca.Markets/absoluteLatest) |
| [Alpaca.Markets.Extensions](https://alpacahq.github.io/alpaca-trade-api-csharp/api/Alpaca.Markets.Extensions.html) | [](https://www.nuget.org/packages/Alpaca.Markets.Extensions) | [](https://www.nuget.org/packages/Alpaca.Markets.Extensions/absoluteLatest) |

## .NET Core Usage Example

1.  Create a new console application in a new, empty folder by running `dotnet new console`.
2.  Add a reference for Alpaca .NET SDK with `dotnet add package Alpaca.Markets`.
3.  Replace the content of the auto-generated `Program.cs` file with this code snippet:
```cs
using System;
using Alpaca.Markets;
using System.Threading.Tasks;

namespace AlpacaExample
{
    internal static class Program
    {
        private const String KEY_ID = "";

        private const String SECRET_KEY = "";

        public static async Task Main()
        {
            var client = Environments.Paper…
