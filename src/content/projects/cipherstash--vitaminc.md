---
repo: "cipherstash/vitaminc"
name: "vitaminc"
description: "Vitamins for your Rust cryptography code"
readmeQualityOk: true
url: "https://github.com/cipherstash/vitaminc"
homepage: "https://cipherstash.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["cryptography", "rust"]
stars: 10
forks: 1
openIssues: 23
closedIssues: 91
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2024-03-10T02:19:34Z"
lastCommitAt: "2026-10-16T08:26:12Z"
lastReleaseAt: "2026-02-19T05:07:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 74
maintainers: ["coderdan", "tobyhede"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0ee1173718c11d03ad2981e44f080e840a5aa8020e71dd45a1913c050bc228e/cipherstash/vitaminc"
---

# Vitamin C

Vitamin C is like vitamins for your Rust code, especially code dealing with cryptography and managing sensitive data.
It is actually a suite of crates that you can use individually or via this top-level crate via features.

Vitamin C is in active development and aims to address the following:

* **Misuse Resistance:** it aims to make it difficult to write code that is insecure.

* **Verified**: be verified using formal methods and testing and selects dependencies that are verified.

* **Vetted**: be vetted by security experts and selects dependencies that are vetted.

* **Minimal**: be minimal and only include what is necessary.

* **Consistent**: have a consistent interface with everything in one place.

* **Compatible**: support embedded (`no_std`) and WASM targets.

* **Fast**: speed and security _can_ be friends!

## Usage

You can install the top-level `vitaminc` crate and enable specific features:

```plaintext
cargo add vitaminc --features protected,random
```

Or, if you only need a specific capability, you can install a crate directly:

```plaintext
cargo add vitaminc-protected
```

## Testing

Prerequisites:

*…
