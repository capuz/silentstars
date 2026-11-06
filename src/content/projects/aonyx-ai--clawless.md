---
repo: "aonyx-ai/clawless"
name: "clawless"
description: "A framework to build command-line applications in Rust"
readmeQualityOk: true
url: "https://github.com/aonyx-ai/clawless"
homepage: "https://clawless.rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["cli", "otter-managed", "rust", "rakko"]
stars: 13
forks: 0
openIssues: 6
closedIssues: 17
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2025-05-03T13:30:37Z"
lastCommitAt: "2026-11-06T12:17:08Z"
lastReleaseAt: "2026-09-30T10:23:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 76
maintainers: ["renovate[bot]", "dependabot[bot]", "jdno"]
openGraphImageUrl: "https://opengraph.githubassets.com/f36ef246461ceecb69d94e065ab685d5c284841adc20cceee3f37320a6525b51/aonyx-ai/clawless"
---

# 🦦 Clawless

Clawless is a batteries-included framework that provides everything you need for
production CLIs: structured output, environment context, graceful cancellation,
and scaffolding tools. You write command functions; Clawless provides the
infrastructure.

```rust
use clawless::prelude::*;

#[derive(Debug, Args)]
pub struct GreetArgs {
    /// The name to greet
    #[arg(default_value = "World")]
    name: String,
}

/// Greet the user
#[command]
pub async fn greet(args: GreetArgs, context: Context) -> CommandResult {
    message!("Hello, {}!", args.name);
    Ok(())
}
```

That's it. The function name becomes your command name, and doc comments become
help text. The `message!` macro sends output through the Clawless output
system. Users can pass `--quiet`, `--verbose`, or `--json` to control the
output of any command, without changes to the command itself.

## Quick Start

Install the scaffolding tool:

```bash
cargo install cargo-clawless
```

Create a new project:

```bash
cargo clawless new my-cli
cd my-cli
cargo run -- greet
```

Read the [Quick Start guide][quick-start] for a complete walkthrough.

## Features

- **Convention over configuration** - File hierarchy…
