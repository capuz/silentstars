---
repo: "linouxis9/oxirush-nas"
name: "oxirush-nas"
description: "5G (5GS) and 4G LTE (EPS) NAS messages in Rust (3GPP TS 24.501 and TS 24.301, Release 19): decode, build, validate and encode every message, edit it as JSON, and protect it with NAS security. no_std."
readmeQualityOk: true
url: "https://github.com/linouxis9/oxirush-nas"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["5g", "5gc", "nas", "rust", "rust-library", "4g", "eps", "lte", "3gpp", "codec"]
stars: 20
forks: 4
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2025-02-27T23:33:07Z"
lastCommitAt: "2026-11-07T09:27:51Z"
lastReleaseAt: "2026-10-24T17:57:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 71
maintainers: ["linouxis9"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c8662ba93f9c209ad80297ca812dcd47fe277c7ea99dcbd88ae0a64731b2ce5/linouxis9/oxirush-nas"
---

# oxirush-nas

The NAS messages of 5GS and EPS in Rust, per 3GPP TS 24.501 and TS 24.301
(Release 19): decode, build, check and encode them, edit them as JSON, and
protect them.

```rust
use oxirush_nas::nas_5gs::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Decode a REGISTRATION REQUEST
    let bytes = hex::decode("7e004179000d0102f8390000000000000010022e08a020000000000000")?;
    let msg = Nas5gsMessage::decode(&bytes)?;
    println!("{msg}");

    // Read its IEs through typed accessors
    if let Nas5gsMessage::Gmm(_, Nas5gmmMessage::RegistrationRequest(reg)) = &msg {
        let kind = reg.fgs_registration_type.registration_type().ok_or("a reserved type")?;
        let plmn = reg.fgs_mobile_identity.plmn().ok_or("no PLMN")?;
        println!("{kind:?} in MCC {}, MNC {}", plmn.mcc(), plmn.mnc());
    }

    // `validate()` finds nothing wrong, and it encodes back to the same octets
    println!("{} findings, same octets: {}", msg.validate().len(), msg.encode()? == bytes);

    // The answer, a REGISTRATION REJECT with cause #22 and T3346 of ten minutes:
    // `new()` takes the mandatory IEs, and `with_*()` adds the others
    let cause =…
