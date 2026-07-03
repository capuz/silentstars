---
repo: "openwallet-foundation-labs/sd-jwt-rust"
name: "sd-jwt-rust"
description: "SD-JWT Rust Reference Implementation"
url: "https://github.com/openwallet-foundation-labs/sd-jwt-rust"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 21
forks: 16
openIssues: 4
closedIssues: 9
watchers: 5
contributors: 11
recentReleases: 0
createdAt: "2023-11-27T15:47:55Z"
lastCommitAt: "2026-07-03T12:21:26Z"
lastReleaseAt: "2024-10-10T08:52:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 44
maintainers: ["kukgini"]
openGraphImageUrl: "https://opengraph.githubassets.com/5267ad748f03a641171aab0453b3905c965206e5edaa0254b4bf67065a3018d3/openwallet-foundation-labs/sd-jwt-rust"
---

# SD-JWT Rust Reference Implementation

This is the reference implementation of the [IETF SD-JWT specification](https://datatracker.ietf.org/doc/draft-ietf-oauth-selective-disclosure-jwt/) written in Rust.
Supported version: 7.

Note: while the project is started as a reference implementation, it is intended to be evolved to a production-ready, high-performance implementations in the long-run.

## API
Note: the current version of the crate is 0.0.x, so the API should be considered as experimental.
Proposals about API improvements are highly appreciated.

```rust
fn demo() {
    let mut issuer = SDJWTIssuer::new(issuer_key, None);
    let sd_jwt = issuer.issue_sd_jwt(claims, ClaimsForSelectiveDisclosureStrategy::AllLevels, holder_key, add_decoy, SDJWTSerializationFormat::Compact).unwrap();

    let mut holder = SDJWTHolder::new(sd_jwt, SDJWTSerializationFormat::Compact).unwrap();
    let presentation = holder.create_presentation(claims_to_disclosure, None, None, None, None).unwrap();

    let verified_claims = SDJWTVerifier::new(presentation, cb_to_resolve_issuer_key, None, None, SDJWTSerializationFormat::Compact).unwrap()
                            .verified_claims;
}
```

See…
