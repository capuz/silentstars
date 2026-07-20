---
repo: "dreampuf/mermaid.go"
name: "mermaid.go"
description: "A bridge of mermaid.js in golang"
readmeQualityOk: true
url: "https://github.com/dreampuf/mermaid.go"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 19
forks: 4
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-02-15T06:03:44Z"
lastCommitAt: "2026-07-20T06:32:41Z"
lastReleaseAt: "2025-01-09T16:13:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 43
maintainers: ["mrueg", "dreampuf", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbb63fcea59a2b908ff03ca5813844e480c0ac332f1b5b220ccc26d7eb0858be/dreampuf/mermaid.go"
---

# mermaid.go

[mermaid.go][] is a lightweight Go library that bridges [mermaid.js](https://github.com/mermaid-js/mermaid) and Go, allowing you to generate high-quality diagrams (SVG and PNG) directly from your Go applications.

It works by leveraging [chromedp](https://github.com/chromedp/chromedp) to run a headless Chrome/Chromium instance, providing a robust and accurate rendering environment for all Mermaid diagram types.

## Prerequisites

Since this library uses `chromedp`, you must have **Google Chrome** or **Chromium** installed on your system.

## Installation

```shell
go get -u github.com/dreampuf/mermaid.go
```

## Architecture

```mermaid
sequenceDiagram
    Actor A as User
    participant B as mermaid.go
    participant C as chromedp

    A ->>+ B: NewRenderEngine(ctx, ...)
    B ->>+ C: Launch headless browser and load mermaid.js
    C -->> B: 
    B -->> A: RenderEngine instance
    
    loop Render Process
        A ->> B: Render(content, options...)
        B ->> C: mermaid.render()
        C -->> B: { svg, exceptions }
        B -->> A: SVG string
    end

    loop PNG Export
        A ->> B: RenderAsPng(content)
        B ->> C: Render to DOM and Capture…
