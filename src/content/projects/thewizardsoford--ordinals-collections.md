---
repo: "TheWizardsOfOrd/ordinals-collections"
name: "ordinals-collections"
description: "Curated on-chain data of Ordinals collections"
readmeQualityOk: true
url: "https://github.com/TheWizardsOfOrd/ordinals-collections"
language: "Shell"
languages: ["Shell", "JavaScript"]
languagePcts: [61, 39]
stars: 11
forks: 38
openIssues: 0
closedIssues: 762
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2026-02-11T20:07:38Z"
lastCommitAt: "2026-08-15T04:03:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 65
maintainers: ["lifofifoX"]
openGraphImageUrl: "https://opengraph.githubassets.com/ccebaed755f300229233c6b5e91420278bfcb5cf02f1fad2b0ed0e086d69ec1c/TheWizardsOfOrd/ordinals-collections"
---

### Ordinals Collections

Curated on-chain data of Ordinals collections.

### Submitting a Collection

[**Open an issue**](https://github.com/TheWizardsOfOrd/ordinals-collections/blob/HEAD/../../issues/new?template=submit-collection.yml) with your collection details. Fill out the form and CI will automatically validate your submission. A maintainer will review and merge it.

### Data Format

Each entry includes:

- **name**: collection name
- **type**: `gallery`, `parent`, or `multi_gallery`
- **id** or **ids**: gallery uses a single `id`; parent and multi_gallery (a union of multiple galleries) use an `ids` array
- **slug**: URL-friendly identifier for the collection
- **x** (optional): X (Twitter) handle(s) associated with the collection, a single handle or an array, without the `@`

**Example**

```json
[
  {
    "name": "Quantum Cats",
    "type": "parent",
    "ids": ["0e383b8af3e7f8767bc9ec0a48fbf837d82b0d537f4dbc7a8853e6828112ea41i0"],
    "slug": "quantum_cats"
  },
  {
    "name": "The Wizards of Ord",
    "type": "gallery",
    "id": "b8a6c9e946f0beaa9cbb4d6cc9f9388ae71d0f93c0215b8a85595db69949e64ci0",
    "slug": "wizards",
    "x": ["TheWizardsOfOrd", "lifofifo"]
  }
]…
