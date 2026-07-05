---
repo: "J-Pai/EnvTrackerNode"
name: "EnvTrackerNode"
description: "Collection for services for the Raspberry Pi to track power consumption."
readmeQualityOk: true
url: "https://github.com/J-Pai/EnvTrackerNode"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["raspberry-pi", "rtimulib", "sense-hat", "grpc", "humidity", "temperature", "video", "kasa-api", "kasa-devices", "kasa-smart"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2020-08-22T14:34:42Z"
lastCommitAt: "2026-07-05T06:31:31Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 77
maintainers: ["J-Pai"]
openGraphImageUrl: "https://opengraph.githubassets.com/55b16b45536dce4a72c8d243f92303d25f930f5865794100c779a7533fe1e386/J-Pai/EnvTrackerNode"
---

# Environment Tracker Node

## Environment Setup

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
sudo dnf install clang clang-devel clang-tools-extra libxkbcommon-devel pkg-config openssl-devel libxcb-devel gtk3-devel atk fontconfig-devel
cargo install cargo-edit
cargo install trunk --locked
cargo install cross --git https://github.com/cross-rs/cross
```

## Kasa Core

- Commands: https://docs.rs/kasa-core/0.6.0/kasa_core/commands/index.html#constants.

## Launch

```shell
./launch.sh
cross build --target aarch64-unknown-linux-musl
```

## Wiki Pages

- [pikvm](https://github.com/J-Pai/EnvTrackerNode/blob/HEAD/wiki/pikvm.md)
- [tls](https://github.com/J-Pai/EnvTrackerNode/blob/HEAD/wiki/tls.md)
- [forwarding](https://github.com/J-Pai/EnvTrackerNode/blob/HEAD/wiki/forwarding.md)
