---
repo: "soenneker/soenneker.utils.string.cosinesimilarity"
name: "soenneker.utils.string.cosinesimilarity"
description: "A utility library for comparing strings via Cosine Similarity"
readmeQualityOk: true
url: "https://github.com/soenneker/soenneker.utils.string.cosinesimilarity"
homepage: "https://soenneker.com"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["comparison", "cosine", "cosinesimilarity", "csharp", "dotnet", "fuzzy", "matching", "similarity", "string", "tf-idf"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-12-31T18:17:11Z"
lastCommitAt: "2026-07-16T06:00:24Z"
lastReleaseAt: "2025-05-25T02:22:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 75
maintainers: ["renovate[bot]", "soenneker"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8c6759d36d7f9c684b9bfd8cf82187e59f325343d38fe80a23aa6130dcc851d/soenneker/soenneker.utils.string.cosinesimilarity"
fundingLinks: ["GITHUB:https://github.com/soenneker", "THANKS_DEV:https://thanks.dev/soenneker"]
discussionCount: 0
---

#  Soenneker.Utils.String.CosineSimilarity
### A utility library for comparing strings via Cosine Similarity

## Installation

```
dotnet add package Soenneker.Utils.String.CosineSimularity
```

## Why?

Imagine you have two sentences or documents. Cosine similarity helps you figure out how similar they are by looking at the **-words-** they share. Here's why it's handy:

### Easy to Understand:
Cosine similarity is easy to understand. It's a number between 0 and 1 that represents how similar two documents are. The closer to 1, the more similar they are.

### Not Bothered by Length: 
Whether a text is long or short doesn't throw off cosine similarity. It cares more about the words and their relationships than the total number of words.

### Meaning, Not Just Frequency:
It focuses on the meaning of words, not just how often they show up. So, even if one document has a lot more words than another, they might still be considered similar if they share important terms.

### Efficient for Big Tasks:
When you're dealing with lots of documents or a ton of text, cosine similarity is efficient. It doesn't get bogged down by complicated calculations, making it a practical choice for large…
