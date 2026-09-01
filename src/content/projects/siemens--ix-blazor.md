---
repo: "siemens/ix-blazor"
name: "ix-blazor"
description: "Siemens IX library for Blazor"
readmeQualityOk: true
url: "https://github.com/siemens/ix-blazor"
homepage: "https://ix.siemens.io/docs/home/installation/blazor"
language: "C#"
languages: ["C#"]
languagePcts: [81]
topics: ["blazor", "dotnet8", "siemens-ix"]
stars: 34
forks: 24
openIssues: 0
closedIssues: 64
watchers: 6
contributors: 22
recentReleases: 0
createdAt: "2023-02-15T05:33:49Z"
lastCommitAt: "2026-09-01T08:49:20Z"
lastReleaseAt: "2023-05-29T14:36:37Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 67
maintainers: ["emncnozge", "TeodoraMG", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/be4a735b77c3455fe88ac53ca3d8a915097adc2b593e3802f257adbcfaf3a041/siemens/ix-blazor"
---

## Siemens IX for Blazor

## Installation

Install the `Siemens.IX.Blazor` package from [NuGet](https://www.nuget.org/packages/Siemens.IX.Blazor).

## .NET CLI

```cmd
dotnet add package Siemens.IX.Blazor
```

## Package Manager

```cmd
NuGet\Install-Package Siemens.IX.Blazor
```

Add the required stylesheet and JavaScript bundle to `index.html`.

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blazor App</title>

    <link
      rel="stylesheet"
      href="_content/Siemens.IX.Blazor/css/siemens-ix/siemens-ix.css"
    />
  </head>
  <body>
    ...
    <script src="_content/Siemens.IX.Blazor/js/siemens-ix/index.bundle.js"></script>
  </body>
</html>
```

> [!CAUTION]
> When using this library with a Blazor Web App, set the render mode to `InteractiveServer`.
> Learn more about [ASP.NET Core Blazor render modes](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-modes?view=aspnetcore-10.0).

### Theme Switching

**Since v0.3.9**

Add the `Theme` component to any page where the theme can be changed.

```razor
<Theme @ref="themeProvider"></Theme>

<Button…
