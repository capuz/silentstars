---
repo: "JWebMP/Core"
name: "Core"
description: "JWebMP is a Java Web UI Framework for the rapid development of data bound web applications. It allows single language, bi-directional databinding and many more features"
url: "https://github.com/JWebMP/Core"
homepage: "http://www.jwebmp.com"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["atmosphere", "graphing", "jquery", "jquery-ui", "angular", "bootstrap", "web-application", "java", "ajax", "single-language"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2016-11-16T14:57:56Z"
lastCommitAt: "2026-06-26T23:34:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 82
undervaluedScore: 66
maintainers: ["GedMarc"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e286eae09aea6b44f57fbbfeda0e6e9cccd36e2e3f5535bf8b9276b8b5a1a90/JWebMP/Core"
fundingLinks: ["GITHUB:https://github.com/GedMarc"]
discussionCount: 1
---

# JWebMP Core

![Java 25+](https://img.shields.io/badge/Java-25%2B-green)
![Guice 7](https://img.shields.io/badge/Guice-7%2B-green)
![Vert.X 5](https://img.shields.io/badge/Vert.x-5%2B-green)
![Maven 4](https://img.shields.io/badge/Maven-4%2B-green)

**Strongly-typed HTML/CSS/JS component model** for Java — the heart of [JWebMP](https://jwebmp.com).

The core defines the **HTML language in Java** — every HTML element, CSS property, event, and feature is a first-class Java object using CRTP generics. It generates the HTML, JavaScript, and CSS required for any page, and provides the SPI contracts that allow a mass ecosystem of plugins to be created that adhere to the component model.

Every component serves **dual purposes**:
- **`toString(true)`** renders the component as **HTML** (with all queued CSS/JS) — use this for server-side rendering, template generation, or serving pages on the Vert.x router
- **`toString()`** renders the component as **JSON** — use this for AJAX responses, API payloads, or any scenario where the component tree needs to be serialized

Pages can optionally be annotated with `@PageConfiguration` and served directly via the Vert.x HTTP server, or components…
