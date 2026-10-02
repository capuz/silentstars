---
repo: "LuxDL/DocumenterVitepress.jl"
name: "DocumenterVitepress.jl"
description: "Documentation with Documenter.jl and VitePress"
readmeQualityOk: true
url: "https://github.com/LuxDL/DocumenterVitepress.jl"
homepage: "https://luxdl.github.io/DocumenterVitepress.jl/"
language: "Julia"
languages: ["Julia"]
languagePcts: [77]
topics: ["documentation", "julia", "vitepress"]
stars: 128
forks: 21
openIssues: 68
closedIssues: 112
watchers: 3
contributors: 21
recentReleases: 0
createdAt: "2023-09-18T20:22:01Z"
lastCommitAt: "2026-10-02T09:59:49Z"
lastReleaseAt: "2024-03-25T18:32:12Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 81
undervaluedScore: 30
maintainers: ["asinghvi17", "lazarusA", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ada8e7a75145cf4c2fbb0ef6836db573df45b3900d76ae03608ec6582b3cc912/LuxDL/DocumenterVitepress.jl"
discussionCount: 1
---

# DocumenterVitepress.jl

This package provides a Markdown backend to [Documenter.jl](https://documenter.juliadocs.org/stable/).
The generated Markdown is rendered to HTML using the static site generator [vitepress](https://vitepress.dev/).

## Installation

The package can be added using the Julia package manager. From the Julia REPL, type `]` to enter the Pkg REPL mode and run

```shell
pkg> add DocumenterVitepress
```

## Usage

### Rendering

To enable the backend:
1. Add `DocumenterVitepress` to your `docs` environment using Pkg
2. Add `using DocumenterVitepress` in `docs/make.jl`,
3. Pass `format = DocumenterVitepress.MarkdownVitepress(...)` to `makedocs` like so, replacing e.g. `format = HTML(...)`.

(Make sure you also see the "Deploying" section below.)

```julia
using Documenter
using DocumenterVitepress

makedocs(;
    format = DocumenterVitepress.MarkdownVitepress(
        repo = "github.com/YourName/YourPackage.jl",
        devbranch = "main", # or master, trunk, ...
        devurl = "dev",
        # if you use something else than yourname.github.io/YourPackage.jl
        deploy_url = "yourdomain.org/docs/YourPackage",
    ),
)
```

Locally, the docs should now be…
