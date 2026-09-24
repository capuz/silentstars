---
repo: "monzeromer-lab/WebFluent"
name: "WebFluent"
description: "WebFluent is a readable syntax, makes coding accessible and enjoyable. (AI written, Human Directed)"
readmeQualityOk: true
url: "https://github.com/monzeromer-lab/WebFluent"
homepage: "https://monzeromer-lab.github.io/WebFluent/"
language: "C"
languages: ["C", "Rust"]
languagePcts: [67, 29]
topics: ["programming-language", "rust", "web-development"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 4
createdAt: "2023-04-06T06:42:31Z"
lastCommitAt: "2026-09-24T08:35:33Z"
lastReleaseAt: "2026-09-21T23:02:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 78
maintainers: ["monzeromer-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2e78f4c863f4d6c53d1f8dbe94831b833c78d74a55e20a352ad0bb3462243dd/monzeromer-lab/WebFluent"
---

# WebFluent

A web-first programming language that compiles to HTML, CSS, JavaScript, and PDF. Build single-page applications, static sites, and documents with built-in components, a design system, reactivity, routing, i18n, and animations — no frameworks, no dependencies, just clean output.

**[Documentation](https://monzeromer-lab.github.io/WebFluent)** · **[Getting Started](https://monzeromer-lab.github.io/WebFluent/getting-started)**

```wf
page Home(path: "/") {
    Container {
        Heading("Hello, WebFluent!").h1.fadeIn
        Text("Build for the web. Nothing else.")

        Button("Get Started").primary.lg {
            on click {
                navigate("/docs")
            }
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
- Control flow: `if`/`else`, `if let`, keyed `for … by`, `show`/hide, `match`
- Data fetching as a `resource`, matched on `loading`, `error(e)` and `ready(v)`
- Typed props, records and enums, checked at compile time; `Any` where you write none
-…
