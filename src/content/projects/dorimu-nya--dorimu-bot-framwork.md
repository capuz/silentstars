---
repo: "Dorimu-Nya/dorimu-bot-framwork"
name: "dorimu-bot-framwork"
description: "A Rust development framework based on the official QQ Webhook API, designed for rapid feature development."
originalDescription: "基于QQ官方Webhook API实现的Rust开发框架，以能够快速开发功能"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Dorimu-Nya/dorimu-bot-framwork"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-24T15:50:05Z"
lastCommitAt: "2026-07-23T06:13:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 44
maintainers: ["sheip9", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a606fc7de8caac91506c461014283603d15182d8f2659ab13aeda067853bd70/Dorimu-Nya/dorimu-bot-framwork"
---

# qqbot_sdk

A framework in development that integrates with the official QQ bot API Webhook, aiming for one-click setup and quick usage.

## Getting Started

Create an empty Rust project as usual, then add this repository using git submodule

```sh
git submodule add https://github.com/Dorimu-Nya/dorimu-bot-sdk qqbot_sdk
```

Then, add to the `dependencies` section of `Cargo.toml`

```toml
qqbot_sdk = { path = "./qqbot_sdk" }
```

## Message Commands

Commands will not be automatically enabled by `qqbot_sdk_app`; you need to explicitly create and load the `CommandPlugin` provided by the top-level facade:

```rust
use qqbot_sdk::{AppConfig, CommandPlugin, ReplyingMessage};

let command_plugin = CommandPlugin::new()
    .with_command("/ping", || ReplyingMessage::Text("Pong!".to_string()));

let config = AppConfig::new().with_plugin(command_plugin);
```

Commands registered with `#[command(...)]` will also be collected when the `CommandPlugin` is loaded. `qqbot_sdk_app` itself does not depend on commands.

## Plugins

Plugins declare event handlers through the registrar provided by the runtime, without directly depending on a specific `App` implementation:

```rust
use…
