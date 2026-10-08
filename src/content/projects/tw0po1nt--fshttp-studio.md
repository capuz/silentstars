---
repo: "tw0po1nt/FsHttp.Studio"
name: "FsHttp.Studio"
description: "A VSCode extension that runs FsHttp requests from your F# scripts and renders the response richly - images, JSON, HTML, and more"
readmeQualityOk: true
url: "https://github.com/tw0po1nt/FsHttp.Studio"
language: "F#"
languages: ["F#"]
languagePcts: [85]
topics: ["dotnet", "fable", "fsharp", "http-client", "rest-client", "vscode-extension", "fshttp"]
stars: 15
forks: 0
openIssues: 31
closedIssues: 144
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-07-15T19:45:40Z"
lastCommitAt: "2026-10-08T10:51:36Z"
lastReleaseAt: "2026-08-12T19:07:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 49
maintainers: ["tw0po1nt", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b9d1ed8c0c2c797b7b2d533db138c2e0c086bd969662fef1e5a20ad5f65a9e6/tw0po1nt/FsHttp.Studio"
---

# FsHttp.Studio

A VSCode extension that runs a single [FsHttp](https://github.com/fsprojects/FsHttp) request from your F# script and **renders** the response (images, JSON, HTML) instead of flattening it to text.

## Why

[FsHttp](https://github.com/fsprojects/FsHttp) is a code-first replacement for Postman and `.http` files, and it uses FSI as the driver. But FSI can only **print**. It flattens every response into a string:

- an image becomes a byte dump,
- a JSON payload becomes one dense line you cannot browse,
- an HTML page becomes escaped source.

*Seeing* the response is the part that makes a request tool worth using, and it is the exact part FSI cannot do. FSI's printer also destroys the response body, because that body is read-once by default. Reading the bytes yourself is therefore a trap.

FsHttp.Studio closes that gap. The request stays pure F#, and the editor renders the response richly.

## What it does

Open a `.fsx` script that contains FsHttp requests. A **`▶ Run request` CodeLens** appears above each `http { }` block. Click the CodeLens, and:

- Only *that* block runs. FsHttp.Studio blanks every other block, and then evaluates your script from the top down to…
