---
repo: "jokull/lemma-is"
name: "lemma-is"
description: "Icelandic lemmatization for JavaScript"
readmeQualityOk: true
url: "https://github.com/jokull/lemma-is"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [69]
stars: 14
forks: 2
openIssues: 0
closedIssues: 11
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-27T12:23:39Z"
lastCommitAt: "2026-11-11T11:16:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 59
undervaluedScore: 31
maintainers: ["jokull"]
openGraphImageUrl: "https://opengraph.githubassets.com/33069f042c97d68ffd675425d015a1bad163069aad728b4c364a6df224adba0a/jokull/lemma-is"
---

# lemma-is

Fast Icelandic lemmatization for JavaScript. Built for search indexing.

```typescript
import { BinaryLemmatizer, extractIndexableLemmas, buildSearchQuery, highlight } from "lemma-is";

lemmatizer.lemmatize("börnin");   // → ["barn"]
lemmatizer.lemmatize("keypti");   // → ["kaupa"]
lemmatizer.lemmatize("hestinum"); // → ["hestur"]

// Full pipeline for search
extractIndexableLemmas("Börnin keypti hestinn", lemmatizer);
// → ["barn", "kaupa", "hestur"]

// Query normalization (backend-agnostic)
buildSearchQuery("bílaleigur", lemmatizer);
// → { groups: [["bílaleiga"]], query: "bílaleiga" }
```

## The Problem

Icelandic is heavily inflected. A single noun like "hestur" (horse) has 16 forms:

```
hestur, hest, hesti, hests, hestar, hesta, hestum, hestanna...
```

If a user searches "hestur" but your document contains "hestinum", they won't find it—unless you normalize both to the lemma at index time.

## Background

Icelandic is underserved in the search ecosystem:

- **PostgreSQL** has no Icelandic stemmer ([Snowball](https://snowballstem.org/) doesn't support it)
- **Elasticsearch** has no Icelandic analyzer in its [36 built-in…
