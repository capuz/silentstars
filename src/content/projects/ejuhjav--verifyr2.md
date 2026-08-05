---
repo: "ejuhjav/verifyr2"
name: "verifyr2"
description: "Compare and verify file output changes"
readmeQualityOk: true
url: "https://github.com/ejuhjav/verifyr2"
language: "Rich Text Format"
languages: ["Rich Text Format"]
languagePcts: [89]
stars: 11
forks: 5
openIssues: 9
closedIssues: 23
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-01-23T17:37:22Z"
lastCommitAt: "2026-08-05T06:08:14Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 85
undervaluedScore: 56
maintainers: ["ejuhjav", "smccawille88"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/747317822/07cf6b50-c8c7-42d3-b523-da89779157d2?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260805%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260805T060928Z&X-Amz-Expires=300&X-Amz-Signature=e93f56dc719cd90e5d6bd10027935196c2289ccc9b73ee946e47e7246c110fda&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTkxMDQ2OCwibmJmIjoxNzg1OTEwMTY4LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.ibLmOTdZH2ZDjvjYun_hVmrQ6Ha_8yxMno73h6B1XRY"
---

# verifyr2<img src="./man/figures/verifyr2.png" align="right" height="223" />

`verifyr2` is an R package for extendable file comparison classes and methods including an
example `shiny` app for combining the functions into a convenient application.

## Package installation

The project is available in cran and can be installed with the following command:

``` bash
> install.packages("verifyr2")
```

### Development version

The latest development version can be installed from github using different install packages
that work with github projects. One such option would be to use the `devtools` package:

``` bash
> install.packages("devtools")
> library("devtools")
> install_github("ejuhjav/verifyr2")
```

### Extended functionality

Following additional libraries can be installed to extend the provided comparison functionality:

``` bash
> # image comparison functionality
> install.packages("magick")
>
> # pdf comparison functionality
> install.packages("pdftools")
```

## Shiny app usage

Launching the `shiny` app requires that you have the following additional libraries installed as
documented in the suggestion list; `shinyjs`, `shinyFiles`, and `DT`. After all the necessary…
