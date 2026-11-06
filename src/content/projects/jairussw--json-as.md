---
repo: "JairusSW/json-as"
name: "json-as"
description: "Multi-GB/s JSON (de)serialization written in AssemblyScript utilizing elegant SIMD and SWAR algorithms"
readmeQualityOk: true
url: "https://github.com/JairusSW/json-as"
homepage: "https://docs.jairus.dev/json-as"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["assemblyscript", "json", "stringify", "parse", "serialize", "performance", "simd", "swar", "arm", "avx"]
stars: 113
forks: 19
openIssues: 1
closedIssues: 127
watchers: 2
contributors: 11
recentReleases: 0
createdAt: "2021-05-13T16:47:41Z"
lastCommitAt: "2026-11-06T11:23:41Z"
lastReleaseAt: "2026-06-05T07:23:53Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 100
undervaluedScore: 49
maintainers: ["JairusSW"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6102e1a8ccff94a2d334e303c93ca78eef5afc61139d1fe588329b68eba203b/JairusSW/json-as"
fundingLinks: ["GITHUB:https://github.com/JairusSW"]
discussionCount: 1
---

║╚═╗║ ║║║║══╠═╣╚═╗
╚╝╚═╝╚═╝╝╚╝  ╩ ╩╚═╝</pre></h1>

- [Installation](#installation)
- [Docs](#docs)
- [Usage](#usage)
- [Examples](#examples)
  - [Omitting Fields](#omitting-fields)
  - [Using Nullable Primitives](#using-nullable-primitives)
  - [Working with Unknown or Dynamic Data](#working-with-unknown-or-dynamic-data)
  - [Using Raw JSON Strings](#using-raw-json-strings)
  - [Working with Enums](#working-with-enums)
  - [Using Custom Serializers or Deserializers](#using-custom-serializers-or-deserializers)
  - [Overriding built-in Container Types](#overriding-built-in-container-types)
- [Performance](#performance)
  - [Real-World Throughput](#real-world-throughput)
  - [Comparison to JavaScript](#comparison-to-javascript)
  - [Library Comparison](#library-comparison)
  - [Runtime Comparison](#runtime-comparison)
  - [Lazy Fields](#lazy-fields)
  - [Performance Tuning](#performance-tuning)
  - [Running Benchmarks Locally](#running-benchmarks-locally)
- [Debugging](#debugging)
- [Architecture](#architecture)
- [Contributing](#contributing)
- [Who uses it?](#who-uses-it)
- [License](#license)
- [Contact](#contact)

## Installation

```bash
npm install json-as
```

Upgrading from…
