---
repo: "knowledgepicker/word-cloud"
name: "word-cloud"
description: "Fast word cloud library for .NET. Uses Quadtrees for blazing-fast performance. Maintained by the KnowledgePicker team."
readmeQualityOk: true
url: "https://github.com/knowledgepicker/word-cloud"
homepage: "https://www.nuget.org/packages/KnowledgePicker.WordCloud/"
language: "C#"
languages: ["C#"]
languagePcts: [96]
topics: ["word-cloud", "tag-cloud", "wordle", "wordcloud", "tagcloud", "netstandard20"]
stars: 36
forks: 9
openIssues: 2
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-02-26T10:11:45Z"
lastCommitAt: "2026-11-08T10:41:19Z"
lastReleaseAt: "2024-12-03T21:18:57Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 90
undervaluedScore: 54
maintainers: ["jjonescz", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/342537016/c2698c00-783c-11eb-833d-ed69bdbcb4ad"
fundingLinks: ["GITHUB:https://github.com/jjonescz", "CUSTOM:https://www.paypal.me/jjonescz"]
---

# WordCloud for .NET

`KnowledgePicker.WordCloud` is a modern (.NET Standard 2.0) and fast library for arranging and drawing [word clouds](https://knowledgepicker.com/t/427/tag-word-cloud) (a.k.a. tag clouds or wordle). It uses Quadtrees for blazing-fast performance. It is maintained by the [KnowledgePicker](https://knowledgepicker.com) team.

## How to use

1. Install [NuGet package `KnowledgePicker.WordCloud`](https://www.nuget.org/packages/KnowledgePicker.WordCloud/).

   > **Note** There's currently only one drawing engine based on [SkiaSharp](https://github.com/mono/SkiaSharp). On some platforms, additional dependencies need to be installed to make SkiaSharp work correctly. For example, on Linux, add [SkiaSharp.NativeAssets.Linux](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux); for Blazor WebAssembly, add [SkiaSharp.Views.Blazor](https://www.nuget.org/packages/SkiaSharp.Views.Blazor).

2. Get collection of `WordCloudEntry`s. For example, suppose we have dictionary of word frequencies:

   ```cs
   var frequencies = new Dictionary<string, int>();
   // ...collect word frequencies somehow...
   IEnumerable<WordCloudEntry> wordEntries = frequencies.Select(p => new…
