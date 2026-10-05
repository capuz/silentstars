---
repo: "eeditiones/jinks"
name: "jinks"
description: "A new application generator for TEI Publisher"
readmeQualityOk: true
url: "https://github.com/eeditiones/jinks"
language: "XQuery"
languages: ["XQuery", "JavaScript"]
languagePcts: [39, 28]
stars: 13
forks: 9
openIssues: 37
closedIssues: 109
watchers: 8
contributors: 16
recentReleases: 1
createdAt: "2024-03-30T09:05:56Z"
lastCommitAt: "2026-10-05T10:46:17Z"
lastReleaseAt: "2026-09-15T08:50:51Z"
status: "thriving"
tags: ["hidden_gem", "funded", "fork_magnet"]
healthScore: 91
undervaluedScore: 72
maintainers: ["tuurma", "wolfgangmm", "liladude"]
openGraphImageUrl: "https://opengraph.githubassets.com/8dbdfbf5f2ea505902dc37c0db57ccaf383c0ebb7416639dd7df4744a7d6fe49/eeditiones/jinks"
fundingLinks: ["GITHUB:https://github.com/eeditiones", "LIBERAPAY:https://liberapay.com/e-editiones", "CUSTOM:https://www.e-editiones.org/donate/"]
---

# jinks - Application Manager for TEI Publisher

Jinks' purpose is to aid in creation, maintenance and updating of custom TEI Publisher applications.

This tool:

* can **create** new custom applications, 
* **adjust** the configuration at **any time** later
* automate the **upgrade** of the custom app to the newest Jinks/TEI Publisher version, tracking and respecting custom changes in the app

**NB** Jinks replaces and extends the app generator in TEI Publisher 9 and earlier.

## Jinks templates

Jinks uses a modern [templating engine](https://github.com/eeditiones/jinks-templates), providing a unified, syntax for all templating tasks in the TEI Publisher ecosystem. It can process XML as well as other file types (plain-text, XQuery CSS, etc.) supporting block-based template inheritance and XPath, among other features.

## Profiles: Blueprints, themes and features

The core concept of jinks is the *profile*. Jinks provides a set of *profiles* targeted at specific use cases, which can be assembled as necessary.

A profile can build upon, i.e. extend and import other profiles. It can also be very minimalistic, contributing only a singular feature.

Conceptually we distinguish…
