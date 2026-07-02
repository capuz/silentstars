---
repo: "cherfia/chromiumly"
name: "chromiumly"
description: "A lightweight Typescript library that interacts with Gotenberg's different modules to convert a variety of document formats to PDF files."
url: "https://github.com/cherfia/chromiumly"
homepage: "https://docs.chromiumly.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["gotenberg", "chromium", "libreoffice", "html", "markdown", "pdf", "docx", "pptx", "screenshots", "xlsx"]
stars: 169
forks: 14
openIssues: 1
closedIssues: 23
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2022-03-22T11:04:55Z"
lastCommitAt: "2026-07-02T06:33:48Z"
lastReleaseAt: "2023-04-30T14:35:17Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 45
maintainers: ["renovate[bot]", "cherfia"]
openGraphImageUrl: "https://opengraph.githubassets.com/de57140acdf10234b6d4b3620bfff8e5a6384d4afa249ade3494f515555c662c/cherfia/chromiumly"
---

</p>

A lightweight TypeScript client for [Gotenberg](https://gotenberg.dev/)’s HTTP API. Use it against your own Gotenberg container or against the **Chromiumly hosted API**—same client, different backend.

|                           | Self‑hosted [Gotenberg](https://github.com/gotenberg/gotenberg)     | [Chromiumly hosted API](https://chromiumly.dev)                                                    |
| :------------------------ | :------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------- |
| **What it is**            | Official open‑source PDF stack (Docker image)                       | Managed service at [https://api.chromiumly.dev](https://api.chromiumly.dev)                        |
| **What Chromiumly calls** | Documented Gotenberg routes (Chromium, LibreOffice, PDF engines, …) | Those same routes, **plus** [Templates](#templates-hosted-api-only) (not in open‑source Gotenberg) |
| **Configuration**         | `GOTENBERG_ENDPOINT`                                                | `CHROMIUMLY_API_KEY` (no endpoint)…
