---
repo: "tcltk-pkgs/registry"
name: "registry"
description: "Central registry of third-party packages and extensions for Tcl/Tk"
readmeQualityOk: true
url: "https://github.com/tcltk-pkgs/registry"
language: "Tcl"
languages: ["Tcl"]
languagePcts: [100]
topics: ["packages", "registry", "tcl-tk"]
stars: 13
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-02-14T08:44:35Z"
lastCommitAt: "2026-08-28T15:36:24Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["actions-user", "tcltk-pkgs", "apnadkarni"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec261a08d5ae615c0580325aab3b5f894c50d4acb023647ba85e23c049caf261/tcltk-pkgs/registry"
---

# Tcl/Tk Packages Registry
</div>

Central registry of third-party packages and extensions for `Tcl/Tk`.

## Browse Packages

Visit the **[web](https://tcltk-pkgs.pages.dev)** interface

Search, filter and explore all available packages with an easy-to-use interface.
- Full-text search
- Filter by tags
- Sort by popularity, recent updates, or name
- Direct links to repositories and documentation

## Adding a Package

Submit a PR adding your package to packages.json. The registry is automatically rebuilt daily.

| Field                  | Type            | Description                         |
| -------------------    | --------------- | ----------------------------------- |
| `name`                 | string          | Package name (no spaces)            |
| `sources`              | array           | Array of source objects             |
| `sources[].url`        | string          | Repository URL                      |
| `sources[].method`     | string          | `git` or `fossil` (optional)        |
| `sources[].web`        | string          | Documentation URL (optional)        |
| `sources[].artifacts`  | string          | This specifies the URL where the built releases,…
