---
repo: "BitBoxSwiss/bitbox-api-rs"
name: "bitbox-api-rs"
description: "BitBox02 client library for Rust and TypeScript"
readmeQualityOk: true
url: "https://github.com/BitBoxSwiss/bitbox-api-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 8
forks: 20
openIssues: 1
closedIssues: 15
watchers: 4
contributors: 16
recentReleases: 0
createdAt: "2023-07-18T11:53:42Z"
lastCommitAt: "2026-09-29T10:03:28Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 79
maintainers: ["benma", "benma-agent", "frijolo"]
openGraphImageUrl: "https://opengraph.githubassets.com/048d62745ce17eb6f0cbe99b25cbdcea0b4b08f0a6544dd437e08167041f6339/BitBoxSwiss/bitbox-api-rs"
---

# BitBox02 Rust library

A Rust library to interact with the BitBox02 hardware wallet.

The TypeScript library is maintained in
[BitBoxSwiss/bitbox-api-ts](https://github.com/BitBoxSwiss/bitbox-api-ts/).

Check out [examples/singlethreaded.rs](https://github.com/BitBoxSwiss/bitbox-api-rs/blob/HEAD/examples/singlethreaded.rs) for an example.

To run the example:

    cargo run --example singlethreaded --features=usb,tokio/rt,tokio/macros

See [Cargo.toml](https://github.com/BitBoxSwiss/bitbox-api-rs/blob/HEAD/Cargo.toml) for further examples.

## Simulator tests

The integration tests in [tests/](https://github.com/BitBoxSwiss/bitbox-api-rs/blob/HEAD/tests/) run against BitBox02 simulators. The simulators are
automatically downloaded based on [tests/simulators.json](https://github.com/BitBoxSwiss/bitbox-api-rs/blob/HEAD/tests/simulators.json), and the tests
run against each one.

To run them, use:

    cargo test --features=simulator,tokio -- --test-threads 1

Use `--nocapture` to also see some useful simulator output.

    cargo test --features=simulator,tokio -- --test-threads 1 --nocapture

If you want to test against a custom simulator build (e.g. when developing new firmware…
