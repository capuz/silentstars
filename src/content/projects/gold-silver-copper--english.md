---
repo: "gold-silver-copper/english"
name: "english"
description: "World's most accurate and fast procedural English conjugation library"
readmeQualityOk: true
url: "https://github.com/gold-silver-copper/english"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["conjugator", "english", "inflector", "linguistics", "nlp", "decliner", "gamedev", "pluralization", "pluralize", "procedural"]
stars: 53
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-12-06T08:02:14Z"
lastCommitAt: "2026-07-05T06:31:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 42
maintainers: ["gold-silver-copper"]
openGraphImageUrl: "https://opengraph.githubassets.com/eba8a5324e1aa1b56105015b2a613cd05a4106a67e41858ba160f1807ed96ada/gold-silver-copper/english"
---

# english

**english** is a blazing fast and light weight English inflection library written in Rust. Total bundled data is about 1 MB. It provides extremely accurate verb conjugation and noun/adjective/adverb declension based on highly processed Wiktionary data, making it ideal for real-time procedural text generation.

## ⚡ Speed and Accuracy

Evaluation of the English inflector (`cargo xtask accuracy`, using the 2026-07-02 Wiktionary dump) and performance benchmarking (`examples/speedmark.rs`) shows:

| Part of Speech | Correct / Total | Accuracy  | Variant Gap | Throughput (calls/sec) | Time per Call |
|----------------|----------------|-----------|-------------|-----------------------|---------------|
| **Nouns**      | 225900 / 225900 | 100.00%  | 0           | 7,499,749             | 133 ns        |
| **Verbs**      | 151540 / 151540 | 100.00%  | 0           | 12,423,891            | 80 ns         |
| **Adjectives** | 121548 / 121550 | 99.998%  | 8           | 15,607,807            | 64 ns         |
| **Adverbs**    | 25123 / 25125   | 99.99%   | 2           | —                     | —             |

The accuracy percentages measure *recall through any published key*: the…
