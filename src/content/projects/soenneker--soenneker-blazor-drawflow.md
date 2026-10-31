---
repo: "soenneker/soenneker.blazor.drawflow"
name: "soenneker.blazor.drawflow"
description: "A Blazor interop library for drawflow.js"
readmeQualityOk: true
url: "https://github.com/soenneker/soenneker.blazor.drawflow"
homepage: "https://soenneker.com"
language: "CSS"
languages: ["CSS"]
languagePcts: [64]
topics: ["blazor", "blazorlibrary", "canvas", "csharp", "diagram", "dotnet", "drawflow", "drawflowinterop"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-06-30T22:51:22Z"
lastCommitAt: "2026-10-31T09:54:34Z"
lastReleaseAt: "2025-07-09T16:31:48Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 81
maintainers: ["soenneker", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/531ce725f0554e877dc36bec5b5f9039021f895a1753aa603104291d337cc7ab/soenneker/soenneker.blazor.drawflow"
fundingLinks: ["GITHUB:https://github.com/soenneker"]
discussionCount: 0
---

# Soenneker.Blazor.Drawflow

A Blazor component and interop API for building editable, node-based diagrams with [Drawflow](https://github.com/jerosoler/Drawflow).

## Installation

```bash
dotnet add package Soenneker.Blazor.Drawflow
```

## Setup

Register the interop service in `Program.cs`:

```csharp
using Soenneker.Blazor.Drawflow.Registrars;

builder.Services.AddDrawflowInteropAsScoped();
```

Add the component namespace to `_Imports.razor`:

```razor
@using Soenneker.Blazor.Drawflow
@using Soenneker.Blazor.Drawflow.Options
```

## Create an editor

Give the component an explicit height; Drawflow needs a sized container to render a usable canvas.

```razor
<Drawflow @ref="_flow"
          Options="_options"
          OnNodeSelected="HandleSelection"
          style="height: 32rem; width: 100%;" />

@code {
    private Drawflow? _flow;

    private readonly DrawflowOptions _options = new()
    {
        Reroute = true,
        ZoomMin = 0.4,
        ZoomMax = 1.8,
        UseUuid = true
    };

    private Task HandleSelection(List<string> nodeIds)
    {
        // nodeIds contains the current selection reported by Drawflow.
        return Task.CompletedTask;
    }
}
```

The…
