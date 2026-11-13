---
repo: "OtaK/seabored"
name: "seabored"
description: "CBOR (RFC 8949) implementation, with a Serde adapter"
readmeQualityOk: true
url: "https://github.com/OtaK/seabored"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-30T18:07:45Z"
lastCommitAt: "2026-11-13T18:35:02Z"
lastReleaseAt: "2026-06-17T21:17:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 40
maintainers: ["OtaK", "ManevilleF"]
openGraphImageUrl: "https://opengraph.githubassets.com/a13cf48c827817d222b728d3541450c35efcb4a8316f03d325a4aac4e5c02fab/OtaK/seabored"
---

# Seabored

## Description

Implementation of the CBOR data format. Serde bridge and native derive (optional).

Compatible with WASM.

Complies to the following RFCs:

- [RFC8949](https://www.rfc-editor.org/rfc/rfc8949.html) - The canonical CBOR RFC
- [RFC8742](https://www.rfc-editor.org/rfc/rfc8742.html) - CBOR Sequences
- [draft-ietf-cbor-serialization-09](https://datatracker.ietf.org/doc/draft-ietf-cbor-serialization/) (28 September 2026) - Defines preferred-plus and deterministic serialization.

## Documentation

Here: [https://docs.rs/seabored](https://docs.rs/seabored)

Not great as of now, will get better in subsequent releases.
If you want examples, please head to the `benches` folder.

### Native derive

With the `derive` feature, the native traits can be derived without going through
Serde. Attributes are under `#[cbor(...)]`.

```rust,ignore
use seabored::de::from_bytes;
use seabored::ser::CborSerialize;

#[derive(Debug, PartialEq, seabored::CborSerialize, seabored::CborDeserialize)]
struct Record {
    id: u32,
    #[cbor(key = "payload", tag = 24)]
    payload: Vec<u8>,
    #[cbor(skip, default)]
    cache: u64,
}

let bytes = Record { id: 1, payload: vec![1, 2],…
