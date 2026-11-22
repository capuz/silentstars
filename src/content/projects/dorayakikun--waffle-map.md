---
repo: "dorayakikun/waffle-map"
name: "waffle-map"
description: ":world_map: Fantastic mesh renderer"
readmeQualityOk: true
url: "https://github.com/dorayakikun/waffle-map"
homepage: "https://waffle-map.netlify.app/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["waffle-map", "map", "react", "redux", "mesh", "mesh-networks"]
stars: 9
forks: 1
openIssues: 1
closedIssues: 89
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2017-06-10T09:35:52Z"
lastCommitAt: "2026-11-22T02:02:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 53
maintainers: ["dorayakikun"]
openGraphImageUrl: "https://opengraph.githubassets.com/112eaca2eba8a4d29cc62d7417041e3577e13b39bd4b0946af2db81fb102c422/dorayakikun/waffle-map"
---

# waffle-map

> Fantastic mesh renderer

**Requires Node.js >= 22.12.0 (v22 or v24)**

Mesh code is a very useful system, but it is not always intuitive. Waffle Map generates meshes from Japanese mesh codes and renders them interactively on a map.

# 

## Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Usage](#usage)
- [Demo](#demo)
- [Extending Waffle Map](#extending-waffle-map)
- [Author](#author)

## Features

### URL-based Mesh Code Routing

Share mesh codes directly via URL with bidirectional URL synchronization:

```text
https://waffle-map.netlify.app/5339-35-97,5339-35-98/
https://waffle-map.netlify.app/5339-35-97.5339-35-98/
```

**Supported separators:**
- `,` (comma): `/{meshcode1},{meshcode2}/`
- `.` (dot): `/{meshcode1}.{meshcode2}/`

When you open a URL with mesh codes, Waffle Map automatically parses, renders, and fits the map bounds to them. The URL updates as you edit mesh codes, and you can copy the shareable URL with a single click from the sidebar header.
