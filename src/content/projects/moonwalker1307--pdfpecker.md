---
repo: "Moonwalker1307/PdfPecker"
name: "PdfPecker"
description: "Fast, dependency-free HTML and Markdown to PDF for .NET"
readmeQualityOk: true
url: "https://github.com/Moonwalker1307/PdfPecker"
homepage: "https://pdfpecker.net"
language: "C#"
languages: ["C#"]
languagePcts: [96]
topics: ["csharp", "dotnet", "e-invoicing", "factur-x", "html-to-pdf", "markdown-to-pdf", "no-dependencies", "nuget", "pdf", "pdf-generation"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-10T22:23:35Z"
lastCommitAt: "2026-10-21T17:31:51Z"
lastReleaseAt: "2026-10-15T20:30:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 57
maintainers: ["Moonwalker1307"]
openGraphImageUrl: "https://opengraph.githubassets.com/28f5c9087cf11e5922764f11735f06b9d9d8f67dfd45c865a440b918db54cd89/Moonwalker1307/PdfPecker"
---

# PdfPecker

Fast HTML and Markdown to PDF conversion, PDF to PNG, JPEG, WebP and TIFF rendering, and PDF to HTML, for .NET, with no
dependencies.

PdfPecker has its own HTML parser, Markdown parser, CSS engine, layout engine and PDF writer, and its own PDF renderer.
It does not start a browser, ship native binaries or pull in third-party packages; the NuGet package depends only on
the .NET base class library.

```csharp
using PdfPecker;

byte[] pdf = HtmlToPdf.Convert("<h1>Hello</h1><p>World</p>");
File.WriteAllBytes("hello.pdf", pdf);
```

**Documentation: [pdfpecker.net/docs](https://pdfpecker.net/docs/)** · [HTML to PDF in C#: a step-by-step guide](https://pdfpecker.net/docs/html-to-pdf-csharp/)

## Install

```
dotnet add package PdfPecker
```

The package targets `net8.0`, `net9.0` and `net10.0`, so it works on .NET 8 and later, on Windows, Linux and macOS.

## Quick start

```csharp
// HTML string to PDF bytes, or file to file (relative images and stylesheets resolve against the HTML file's folder)
byte[] pdf = HtmlToPdf.Convert(html);
HtmlToPdf.ConvertFile("invoice.html", "invoice.pdf");

// ASP.NET Core
app.MapGet("/invoice", () => Results.File(HtmlToPdf.Convert(html),…
