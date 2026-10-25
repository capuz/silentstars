---
repo: "sister-software/mailwoman"
name: "mailwoman"
description: "Postal address intelligence for parsing, geocoding, and matching."
readmeQualityOk: true
url: "https://github.com/sister-software/mailwoman"
homepage: "https://mailwoman.ai/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["address", "address-validation", "postal", "geocoder", "geocoding", "onnx", "spatial-analysis"]
stars: 5
forks: 1
openIssues: 101
closedIssues: 834
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2024-10-26T22:26:18Z"
lastCommitAt: "2026-10-25T02:46:59Z"
lastReleaseAt: "2026-06-11T05:45:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 87
maintainers: ["GirlBossRush"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/879072703/c271d1bc-4251-4c3b-bd9c-914550d40fe0"
---

Mailwoman turns free-text postal addresses into structured components (house number,
street, locality, region, postcode, country) and resolves them to coordinates against an
open gazetteer. It is a small transformer encoder (~30M params) that performs BIO token
classification over a 33-label schema. It is **not** an LLM, and no part of it is
generative. It performs conventional entity recognition. That method suits short, structured strings.

It runs in Node.js and the browser, without Elasticsearch or a multi-gigabyte libpostal
install. The model is about 30 MB. It resolves coordinates from a SQLite gazetteer at the finest
tier available: admin, postcode, street, or rooftop (US and French national registers).

```bash
npx mailwoman parse "1600 Amphitheatre Parkway, Mountain View, CA 94043"
```

## Installation

```bash
npm install mailwoman @mailwoman/neural @mailwoman/neural-weights-en-us
```

That installs the CLI, the neural runtime, and the US-English model weights. For French
addresses, add `@mailwoman/neural-weights-fr-fr`. For coordinate resolution, add
`@mailwoman/resolver-wof-sqlite`.

> [!IMPORTANT]
> Requires Node.js ≥ 24.18.0.

## CLI

```bash
# Parse an address into…
