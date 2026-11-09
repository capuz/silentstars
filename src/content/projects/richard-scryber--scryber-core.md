---
repo: "richard-scryber/scryber.core"
name: "scryber.core"
description: "Scryber.Core is an advanced dotnet 10 html to pdf engine written entirely in C# for creating beautiful flowing documents from html templates including css styles, object data binding and svg drawing."
readmeQualityOk: true
url: "https://github.com/richard-scryber/scryber.core"
language: "C#"
languages: ["C#"]
languagePcts: [93]
topics: ["pdf-generation", "pdf-document", "dotnet-core", "pdf", "html-template", "csharp"]
stars: 271
forks: 42
openIssues: 29
closedIssues: 73
watchers: 11
contributors: 12
recentReleases: 0
createdAt: "2020-05-23T09:55:38Z"
lastCommitAt: "2026-11-09T11:54:29Z"
lastReleaseAt: "2020-07-28T11:04:12Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "community_hub"]
healthScore: 91
undervaluedScore: 37
maintainers: ["richard-scryber", "Matt-17", "twofatmonkeys"]
openGraphImageUrl: "https://opengraph.githubassets.com/b69976b142f20d0746b888c6fb442056a9407e9245c7b447f6dcb213398399bd/richard-scryber/scryber.core"
discussionCount: 27
---

# Scryber.Core

**The open-source rendering engine for Paperwork.Core.**

Scryber.Core is the open-source engine that turns HTML, CSS and SVG templates, bound to your data, into PDF documents, on .NET and in the browser with Blazor WASM. It is the rendering engine behind the open-source [Paperwork.Core](https://github.com/paperwork-collective/Paperwork.Core) library, which we recommend for generating documents. Paperwork.Core adds a fluent builder, dependency injection, code configuration and extensibility on top of this same engine, and your templates carry straight across (see [Switching to Paperwork.Core](#switching-to-paperworkcore)).

You are free to keep using Scryber.Core directly, as you always have, and it will continue to be maintained.

- Define templates with pages, content, shapes and images using HTML, CSS and SVG.
- Bring your data in from an API, an object model or JSON.
- Bind with handlebars syntax and full expression support.
- Lay out with styles, including calculated and relative values bound to your data.
- Output the document to a stream or file with a couple of lines of code.

In Blazor WASM, use the async save (`SaveAsPDFAsync`), as remote images, fonts…
