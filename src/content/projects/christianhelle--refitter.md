---
repo: "christianhelle/refitter"
name: "refitter"
description: "Generate Refit interfaces and contracts from OpenAPI (Swagger) specifications"
readmeQualityOk: true
url: "https://github.com/christianhelle/refitter"
homepage: "https://refitter.github.io"
language: "C#"
languages: ["C#"]
languagePcts: [98]
topics: ["openapi", "refit", "rest", "swagger", "openapi3", "csharp-sourcegenerator"]
stars: 416
forks: 65
openIssues: 4
closedIssues: 208
watchers: 2
contributors: 35
recentReleases: 0
createdAt: "2023-02-07T23:18:12Z"
lastCommitAt: "2026-09-11T08:16:24Z"
lastReleaseAt: "2023-05-02T20:42:14Z"
status: "thriving"
tags: ["funded"]
healthScore: 98
undervaluedScore: 39
maintainers: ["christianhelle", "renovate[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/4f905df2f7a32419d131216e3befca4742493c5e50eca53f295b262326b2f2dc/christianhelle/refitter"
fundingLinks: ["GITHUB:https://github.com/christianhelle", "KO_FI:https://ko-fi.com/christianhelle", "LIBERAPAY:https://liberapay.com/christianhelle", "CUSTOM:https://paypal.me/christianhelle", "CUSTOM:https://buymeacoffee.com/christianhelle"]
discussionCount: 15
---

# Refitter

Refitter is a tool for generating a C# REST API Client using the [Refit](https://github.com/reactiveui/refit) library. Refitter can generate the Refit interface and contracts from OpenAPI specifications. Refitter could format the generated Refit interface to be managed by [Apizr](https://www.apizr.net) (v6+) and generate some registration helpers too.

> **Upgrading to v2.0.0?** Review the [Breaking Changes (v2.0.0)](https://github.com/christianhelle/refitter/blob/HEAD/docs/docfx_project/articles/breaking-changes-v2-0-0.md) guide. Source-generator projects may now need an explicit `Refit` reference, and the OpenAPI parser upgrade should be treated as a regenerate-review-test migration step rather than a fully proven behavioral no-op.

Refitter comes in 3 forms:

- A [.NET CLI Tool](#cli-tool) distributed via [nuget.org](http://www.nuget.org/packages/refitter) that outputs a single C# file on disk
- An [MSBuild Task](#msbuild) via the [Refitter.MSBuild](http://www.nuget.org/packages/refitter.msbuild) package that integrates seamlessly into your build pipeline and automatically generates code at build time based on [.refitter](#.refitter-file-format) files within the…
