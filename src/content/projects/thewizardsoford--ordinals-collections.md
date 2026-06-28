---
repo: "TheWizardsOfOrd/ordinals-collections"
name: "ordinals-collections"
description: "Curated on-chain data of Ordinals collections"
url: "https://github.com/TheWizardsOfOrd/ordinals-collections"
language: "Shell"
languages: ["Shell", "JavaScript"]
languagePcts: [63, 37]
stars: 10
forks: 35
openIssues: 1
closedIssues: 517
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2026-02-11T20:07:38Z"
lastCommitAt: "2026-06-28T02:02:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 65
maintainers: ["lifofifoX"]
openGraphImageUrl: "https://opengraph.githubassets.com/51c3cc83d80c52e6d21da9c19bb7bd3bd803b642e58d20de80717a75b66a2913/TheWizardsOfOrd/ordinals-collections"
---

### Ordinals Collections

Curated on-chain data of Ordinals collections.

### Submitting a Collection

[**Open an issue**](../../issues/new?template=submit-collection.yml) with your collection details. Fill out the form and CI will automatically validate your submission. A maintainer will review and merge it.

### Data Format

Each entry includes:

- **name**: collection name
- **type**: `gallery` or `parent`
- **id** or **ids**: gallery uses a single `id`, parent/child uses an `ids` array
- **slug**: URL-friendly identifier for the collection

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
    "slug": "wizards"
  }
]
```

### Inclusion Criteria

- **Parent/child**: All children must share the same parent(s)
- **Galleries**: Inscription IDs must exactly match the collection data on the most popular ordinals marketplace at the time
- **Traits**: If included, should closely resemble marketplace trait…
