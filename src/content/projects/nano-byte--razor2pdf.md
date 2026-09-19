---
repo: "nano-byte/Razor2Pdf"
name: "Razor2Pdf"
description: "Renders APS.NET Core Razor Pages as PDFs using WeasyPrint "
readmeQualityOk: true
url: "https://github.com/nano-byte/Razor2Pdf"
homepage: "https://razor2pdf.nano-byte.net"
language: "HTML"
languages: ["HTML", "CSS", "C#"]
languagePcts: [35, 29, 22]
topics: ["asp-net-core", "razor-pages", "pdf", "pdf-generation"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-07-11T15:17:48Z"
lastCommitAt: "2026-09-18T23:16:20Z"
lastReleaseAt: "2026-04-17T22:27:48Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 91
undervaluedScore: 59
maintainers: ["renovate[bot]", "bastianeicher"]
openGraphImageUrl: "https://opengraph.githubassets.com/14cb6faa832da30d77e77dc0a858824f4e2b9914a107f3ca0a9c863225aea831/nano-byte/Razor2Pdf"
---

# Razor2Pdf

Razor2Pdf renders [ASP.NET Core Razor Pages](https://learn.microsoft.com/en-us/aspnet/core/razor-pages/) as PDFs using [WeasyPrint](https://weasyprint.org/).

## Usage

1. Ensure that the `weasyprint` command is in your `PATH`. You can:
   - follow the [WeasyPrint installation instructions](https://doc.courtbouillon.org/weasyprint/stable/first_steps.html) or
   - use our [ASP.NET Core Runtime and WeasyPrint Docker image](https://github.com/nano-byte/Razor2Pdf/blob/HEAD/docker/).
2. Add a reference to the [`NanoByte.Razor2Pdf`](https://www.nuget.org/packages/NanoByte.Razor2Pdf/) NuGet package to your project.
3. Add a call to `services.AddRazor2Pdf()` in your `ConfigureServices()` method in `Startup.cs`.

You can now use dependency injection to get an instance of `IPdfRenderer` and use it like this:

```csharp
FileStreamResult result = await pdfRenderer.RenderAsync("path/to/my/view", new MyViewModel(...));
```

See the [sample project](https://github.com/nano-byte/Razor2Pdf/tree/master/src/Sample/) for more details.

## Building

The source code is in [`src/`](https://github.com/nano-byte/Razor2Pdf/blob/HEAD/src/), config for building the API documentation is in…
