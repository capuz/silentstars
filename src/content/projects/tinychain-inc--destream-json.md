---
repo: "TinyChain-Inc/destream_json"
name: "destream_json"
description: "Rust library for encoding and decoding a JSON stream"
readmeQualityOk: true
url: "https://github.com/TinyChain-Inc/destream_json"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 7
forks: 3
openIssues: 4
closedIssues: 3
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2021-01-11T16:23:49Z"
lastCommitAt: "2026-07-14T05:53:27Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "funded"]
healthScore: 60
undervaluedScore: 38
maintainers: ["haydnv", "code-tc"]
openGraphImageUrl: "https://opengraph.githubassets.com/83e8e9033541d540a8506bb777a8f2fd9f1066b80d30c7aa7dd62ddcf71193b1/TinyChain-Inc/destream_json"
fundingLinks: ["GITHUB:https://github.com/haydnv"]
---

# destream_json
Rust library for encoding and decoding JSON streams

Example:
```rust
let expected = ("one".to_string(), 2.0, vec![3, 4]);
let stream = destream_json::encode(&expected).unwrap();
let actual = destream_json::try_decode((), stream).await;
assert_eq!(expected, actual);
```
