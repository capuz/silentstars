---
repo: "DataZooDE/erpl"
name: "erpl"
description: "ERPL is a DuckDB extension to integrate Enterprise Data in your Data Science and ML pipelines within minutes! ERPL connects DuckDB to SAP ecosystem via standard interfaces."
readmeQualityOk: true
url: "https://github.com/DataZooDE/erpl"
homepage: "https://erpl.io"
language: "C++"
languages: ["C++", "ABAP"]
languagePcts: [52, 32]
topics: ["analytics", "business-intelligence", "duckdb", "integration", "sap", "duckdb-extension", "sap-bw", "sap-rfc"]
stars: 59
forks: 5
openIssues: 1
closedIssues: 49
watchers: 6
contributors: 5
recentReleases: 4
createdAt: "2023-10-27T14:51:33Z"
lastCommitAt: "2026-08-30T09:24:40Z"
lastReleaseAt: "2026-06-17T15:33:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 54
maintainers: ["jrosskopf"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2c9778160df2b0b0bf08542a48dab51dea236b7fa1f6214aa8dc551d02ca9fa/DataZooDE/erpl"
discussionCount: 1
---

# Let your DuckDB quack SAP!

**Disclaimer**: This extension is currently in an experimental state. Feel free to try it out, but be aware that minimal testing and benchmarking were done.

With ERPL, use Enterprise Data in your Data Science and ML pipelines within minutes!

## Quick Install

Install with two lines of code in DuckDB (unsigned option must be set):

```
INSTALL 'erpl' FROM 'http://get.erpl.io';
LOAD 'erpl';
```

## Quicklinks

- [★ What is the Erpl Extension?](#-what-is-the-erpl-extension) 
- [⚙ Example Usage](#-example-usage) 
- [➜ Obtaining the ERPL Extension](#-obtaining-the-erpl-extension)
- [💻 Installing the ERPL Binaries](#-installing-the-erpl-binaries)
- [Tracking](#tracking)
- [Licence](#license)

---

## ★ What is the ERPL Extension?
The primary objective of this [DuckDB](https://duckdb.org) extension is to facilitate seamless integration with the SAP data ecosystem. Our approach prioritizes:
- **Minimal dependencies**: Ensuring a lightweight experience.
- **User-centric design**: Intuitive and straightforward usage for DuckDB users.

We focus predominantly on two main use cases:
- **Data Science & Analytics**: Directly accessing data from SAP ERP (via RFC)…
