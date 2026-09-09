---
repo: "AngleSharp/AngleSharp.Css"
name: "AngleSharp.Css"
description: ":angel: Library to enable support for cascading stylesheets in AngleSharp."
readmeQualityOk: true
url: "https://github.com/AngleSharp/AngleSharp.Css"
homepage: "https://anglesharp.github.io"
language: "C#"
languages: ["C#"]
languagePcts: [97]
topics: ["anglesharp", "cssom", "css", "c-sharp", "library", "parser"]
stars: 97
forks: 48
openIssues: 2
closedIssues: 161
watchers: 7
contributors: 21
recentReleases: 0
createdAt: "2016-11-15T20:25:09Z"
lastCommitAt: "2026-09-09T08:19:40Z"
lastReleaseAt: "2021-08-10T22:44:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 53
maintainers: ["FlorianRappl", "meziantou", "lahma"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fb88d74817913822a3b25425c149d25ed093268f6763493a420d195aa0b49bd/AngleSharp/AngleSharp.Css"
fundingLinks: ["GITHUB:https://github.com/FlorianRappl", "CUSTOM:https://www.paypal.me/FlorianRappl", "CUSTOM:https://buymeacoffee.com/florianrappl"]
---

# AngleSharp.Css

AngleSharp.Css extends the core AngleSharp library with some more powerful CSS capabilities. This repository is the home of the source for the AngleSharp.Css NuGet package.

## Basic Configuration

If you just want a configuration *that works* (as close as possible to real browsers) you should use the following code:

```cs
var config = Configuration.Default
    .WithCss(); // from AngleSharp.Css
```

This will register a parser for CSS related content. The CSS parsing options and more could be set with parameters of the `WithCss` method. Alternatively, all the (desired) parts may be registered individually as well. That mostly boils down to three elementary parts:

- A CSS parser (implementing the `ICssParser` interface, e.g., `CssParser`)
- A factory for creating CSS declarations (`IDeclarationFactory`)
- The styling service that can handle CSS documents, see `CssStylingService`

For an interactive DOM (i.e., to handle `style` attribute changes in the HTML document) an observer needs to be registered as well.

Furthermore, for some CSSOM features (e.g., media queries) a render device is required.

```cs
var config = Configuration.Default
    .WithCss()…
