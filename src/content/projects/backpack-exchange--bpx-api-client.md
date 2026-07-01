---
repo: "backpack-exchange/bpx-api-client"
name: "bpx-api-client"
description: "Official API clients for Backpack Exchange"
url: "https://github.com/backpack-exchange/bpx-api-client"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 46
forks: 26
openIssues: 3
closedIssues: 2
watchers: 3
contributors: 34
recentReleases: 0
createdAt: "2023-12-26T05:32:17Z"
lastCommitAt: "2026-07-01T07:05:20Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 79
undervaluedScore: 42
maintainers: ["backpack-exchange-bot", "extremeandy", "karunmatharu"]
openGraphImageUrl: "https://opengraph.githubassets.com/06ded3c605ff773d115096e7f45654031ce890fd538e3bf2d637aac55598ccd4/backpack-exchange/bpx-api-client"
---

# Backpack Exchange API

Access the official API documentation here: [https://docs.backpack.exchange/](https://docs.backpack.exchange/).

This repository contains API clients for Backpack Exchange. Currently, only a `Rust` client is available. For more details, see the [Rust Client README](./rust/client/README.md).

*Example of an Order Book*

## Setup Instructions

Assuming Rust and Cargo are installed via rustup:

1. **Navigate to the Rust Folder**:
   ```bash
   cd rust

2. **Install just**:
   ```bash
   cargo install just

3. **Build All Packages**:
   ```bash
   just build

4. **Move to the Examples Directory**:
   ```bash
   cd examples

For detailed instructions on running the examples, including configuring environment variables, see the [Examples README](./rust/examples/README.md).

## Contributing

We welcome contributions from the community!  
Feel free to open bug reports, suggest new features, or submit pull requests to improve the client and related components.

## License

This project is licensed under the [Apache 2.0 License](LICENSE).
