---
repo: "primait/veil"
name: "veil"
description: "Rust derive macro for redacting sensitive data in std::fmt::Debug"
readmeQualityOk: true
url: "https://github.com/primait/veil"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["data-mask", "data-masking", "data-redaction", "pii", "privacy", "proc-macro", "redaction", "rust"]
stars: 49
forks: 4
openIssues: 1
closedIssues: 2
watchers: 38
contributors: 26
recentReleases: 0
createdAt: "2022-08-26T13:28:16Z"
lastCommitAt: "2026-09-29T08:10:33Z"
lastReleaseAt: "2025-12-22T13:58:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 31
maintainers: ["dependabot[bot]", "adtprima", "emiliano-at-prima"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfb9979620865c5c4176025bd1a0e318cabd9415f7c1ce3d93796d45da335934/primait/veil"
---

A derive macro that implements [`std::fmt::Debug`](https://doc.rust-lang.org/std/fmt/trait.Debug.html) for a struct or enum variant, with certain fields redacted.

The purpose of this macro is to allow for easy, configurable and efficient redaction of sensitive data in structs and enum variants.
This can be used to hide sensitive data in logs or anywhere where personal data should not be exposed or stored.

# Usage

Add to your Cargo.toml:

```toml
[dependencies]
veil = "0.3.0"
```

Usage documentation can be found [here](https://docs.rs/veil).

# Example

The example is explained in detail [here](https://docs.rs/veil).

```rust
#[derive(Redact)]
struct CreditCard {
    #[redact(partial)]
    number: String,

    #[redact]
    expiry: String,

    #[redact(fixed = 3)]
    cvv: String,

    #[redact(partial)]
    cardholder_name: String,
}

#[derive(Redact)]
#[redact(all, variant)]
enum CreditCardIssuer {
    MasterCard,
    Visa,
    AmericanExpress,
}

#[derive(Redact)]
#[redact(all, partial)]
struct Vehicle {
    license_plate: String,
    make: String,
    model: String,
    color: String,
}

#[derive(Debug)]
struct Policy {
    id: Uuid,
    name: String,
    description:…
