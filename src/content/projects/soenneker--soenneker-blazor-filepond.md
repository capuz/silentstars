---
repo: "soenneker/soenneker.blazor.filepond"
name: "soenneker.blazor.filepond"
description: "A Blazor interop library for the file upload library FilePond"
readmeQualityOk: true
url: "https://github.com/soenneker/soenneker.blazor.filepond"
homepage: "https://soenneker.com"
language: "CSS"
languages: ["CSS", "C#", "HTML"]
languagePcts: [44, 31, 20]
topics: ["blazor", "csharp", "dotnet", "file", "filepond", "filepondinterop", "interop", "upload"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-01-07T02:57:12Z"
lastCommitAt: "2026-07-21T06:13:19Z"
lastReleaseAt: "2025-05-08T10:19:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 76
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/74eebaaf467b108fa26b82ff98a27170df3ae2b50512b588a07bc57953ce433b/soenneker/soenneker.blazor.filepond"
fundingLinks: ["GITHUB:https://github.com/soenneker", "THANKS_DEV:https://thanks.dev/soenneker"]
discussionCount: 2
---

#  Soenneker.Blazor.FilePond
### A Blazor interop library for the file upload library [FilePond](https://pqina.nl/filepond/)

This library simplifies the integration of FilePond into Blazor applications, providing access to options, methods, plugins, and events. A demo project showcasing common usages is included.

Diligence was taken to align the Blazor API with JS. Refer to the [FilePond documentation](https://pqina.nl/filepond/docs/) for details.

## Installation

```
dotnet add package Soenneker.Blazor.FilePond
```

### Add the following to your `Startup.cs` file

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddFilePond();
}
```

? Do not include styles or scripts on the page as they get lazily injected automatically, including most plugins.

## Usage

```razor
@using Soenneker.Blazor.FilePond

<FilePond @ref="FilePond" Options="_options" OnAddFile="OnAddFile"></FilePond>

@code{
    private FilePond? FilePond { get; set; }

    private readonly FilePondOptions _options = new()
    {
        MaxFiles = 20,
        AllowMultiple = true,
        EnabledPlugins = [FilePondPluginType.ImagePreview]
    };

    protected override async Task…
