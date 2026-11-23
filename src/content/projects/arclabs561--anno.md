---
repo: "arclabs561/anno"
name: "anno"
description: "Text annotation and entity extraction"
readmeQualityOk: true
url: "https://github.com/arclabs561/anno"
homepage: "https://docs.rs/anno"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["coreference-resolution", "information-extraction", "nlp", "rust", "ner"]
stars: 15
forks: 4
openIssues: 2
closedIssues: 22
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-11-26T21:39:55Z"
lastCommitAt: "2026-11-23T10:11:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 71
maintainers: ["arclabs561", "codex", "arlyon"]
openGraphImageUrl: "https://opengraph.githubassets.com/48a9a15f782c408ec13cb1ea509e8b992122ce18cb800e8e8a8445a2e2a9246d/arclabs561/anno"
---

# anno

Anno extracts entity spans, links coreferent mentions, and redacts common forms
of personally identifiable information. Pattern and heuristic backends run offline.

## Library

Run the example with offline backends from the repository root.

```sh
cargo run -p anno --no-default-features --example quickstart
```

Run `cargo add anno` to install the current published release. This source tree targets the following dependency.

```toml
[dependencies]
anno = "0.16"
```

```rust,no_run
fn main() -> anno::Result<()> {
    let entities = anno::extract("Sophie Wilson designed the ARM processor.")?;
    for entity in entities {
        println!(
            "{} [{}] {}..{}",
            entity.text,
            entity.entity_type,
            entity.start(),
            entity.end()
        );
    }
    Ok(())
}
```

Offsets count Unicode scalar values in the exact input text. For repeated calls,
[reuse a model](https://github.com/arclabs561/anno/blob/HEAD/docs/QUICKSTART.md#library-usage). Each backend has its own
confidence scale.
