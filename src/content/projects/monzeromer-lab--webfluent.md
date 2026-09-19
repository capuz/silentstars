---
repo: "monzeromer-lab/WebFluent"
name: "WebFluent"
description: "WebFluent is a readable syntax, makes coding accessible and enjoyable. (AI written, Human Directed)"
readmeQualityOk: true
url: "https://github.com/monzeromer-lab/WebFluent"
homepage: "https://monzeromer-lab.github.io/WebFluent/"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [53, 41]
topics: ["programming-language", "rust", "web-development"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2023-04-06T06:42:31Z"
lastCommitAt: "2026-09-19T01:39:31Z"
lastReleaseAt: "2026-09-18T22:36:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 73
maintainers: ["monzeromer-dev", "monzeromer-lab"]
openGraphImageUrl: "https://opengraph.githubassets.com/8786d697929fc261eff6667c60ab75a5b9e7ce8d31f8f68bf7b56f25219bd3f4/monzeromer-lab/WebFluent"
---

# WebFluent

A web-first programming language that compiles to HTML, CSS, JavaScript, and PDF. Build single-page applications, static sites, and documents with built-in components, a design system, reactivity, routing, i18n, and animations — no frameworks, no dependencies, just clean output.

**[Documentation](https://monzeromer-lab.github.io/WebFluent)** · **[Getting Started](https://monzeromer-lab.github.io/WebFluent/getting-started)**

```
Page Home (path: "/") {
    Container {
        Heading("Hello, WebFluent!", h1, fadeIn)
        Text("Build for the web. Nothing else.")

        Button("Get Started", primary, large) {
            navigate("/docs")
        }
    }
}
```

## Features

**Language**
- Declarative syntax — no XML, no JSX, no templates
- Signal-based reactivity — fine-grained DOM updates, no virtual DOM
- Client-side routing with SPA navigation
- Stores for shared state across pages
- Control flow: `if`/`else`, `for` loops, `show`/hide
- Data fetching with built-in loading/error/success states
- String interpolation: `"Hello, {name}!"`

**Components**
- 50+ built-in components across 8 categories
- Layout: Container, Row, Column, Grid, Stack, Spacer, Divider
-…
