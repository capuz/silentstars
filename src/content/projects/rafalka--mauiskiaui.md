---
repo: "rafalka/MauiSkiaUi"
name: "MauiSkiaUi"
description: ".NET MAUI library of base controls and layouts drawn entirely with SkiaSharp"
readmeQualityOk: true
url: "https://github.com/rafalka/MauiSkiaUi"
homepage: "https://www.nuget.org/packages/SkiaUi.Maui"
language: "C#"
languages: ["C#"]
languagePcts: [98]
topics: ["cross-platform", "csharp", "dotnet", "dotnet-maui", "maui", "skia", "skiasharp", "ui-controls"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-09-04T11:28:25Z"
lastCommitAt: "2026-10-27T12:39:26Z"
lastReleaseAt: "2026-10-19T17:17:48Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 71
maintainers: ["rafal-tt", "rafalka", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/813d5e6ef5dcf8ad3d6362ddb1c3a83ca3322ab611a4dace2e972f0834bc9210/rafalka/MauiSkiaUi"
discussionCount: 0
---

# SkiaUi

.NET MAUI library of **SkiaSharp-drawn UI**. Controls are drawn on one GPU surface instead of each owning a platform view, in two layers you can mix in one tree: **`SkUi*` controls** that replace MAUI's by changing the XAML prefix, and a lightweight **Core** layer for building controls of your own. WebView, maps, media and other native views stay native, as overlays in **`SkUiMauiContentView`**.

> **1.0.0 is the first stable release.** Its public API is kept by every `1.x` release; prereleases of the next version (`1.1.0-PrereleaseNN`) are published from the `devel` branch. What's next: [roadmap](https://github.com/rafalka/MauiSkiaUi/blob/HEAD/docs/design/Roadmap.md).

## Who it's for

**Apps whose MAUI screens are slow.** Long forms, dashboards, lists of rich rows: on a screen with hundreds of controls, MAUI spends seconds creating handlers and platform views before the first frame. `SkUi*` controls are drop-in replacements that keep MAUI's API (the same properties, XAML, bindings, styles, VisualStateManager and layout rules), so a slow page moves to drawn controls by changing `<Label>` to `<sk:SkUiLabel>` and `<Grid>` to `<sk:SkUiGrid>`, one page or one hot spot at a…
