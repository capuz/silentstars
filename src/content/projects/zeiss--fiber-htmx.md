---
repo: "ZEISS/fiber-htmx"
name: "fiber-htmx"
description: "Writing HTML/HTMX in pure go"
readmeQualityOk: true
url: "https://github.com/ZEISS/fiber-htmx"
language: "CSS"
languages: ["CSS"]
languagePcts: [98]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2025-04-09T18:45:14Z"
lastCommitAt: "2026-08-18T04:09:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 74
maintainers: ["github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0489eb6f6daeb8f687671b6604f402fdb92123774acd900b4924f6ca9ab79297/ZEISS/fiber-htmx"
---

# 🔨 HTMX

A Go package to write HTML5 and HTMX components in Go. The package is designed to work with [fiber](http://gofiber.io) and [htmx](https://htmx.org/).

## Features

- Write declartive HTML5 components in Go without using templates and with the full-power of a type-safe language, auto-completion, and refactoring.
- Full support for HTMX components.
- No dependencies on JavaScript frameworks.
- Fast rendering of HTML5 and HTMX components.
- Easy to use and learn.
- Easy to extend and customize.

## Installation

```bash
go get github.com/zeiss/fiber-htmx
```

The available web components are published in the `fiber-htmx` package.

```go
htmx.HTML5(
    htmx.HTML5Props{
        Head: []htmx.Node{
            htmx.Script(
                htmx.Src("https://unpkg.com/fiber-htmx@1.3.32"),
            ),
            htmx.Link(
                htmx.Rel("stylesheet"),
                htmx.Href("https://unpkg.com/fiber-htmx@1.3.32/dist/out.css"),
            ),
        },
    },
    htmx.Body(
        htmx.ClassNames{},
        htmx.Toasts(),
    ),
)
```

### Example

Creating a button leveraging htmx is as easy as this.

```go
htmx.Button(
    htmx.Attribute("type", "submit")…
