---
repo: "mullvad/wfp-rs"
name: "wfp-rs"
description: "Rust library for Windows Filtering Platform (WFP)"
readmeQualityOk: true
url: "https://github.com/mullvad/wfp-rs"
homepage: "https://docs.rs/wfp/latest/wfp/"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 11
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2025-08-21T18:17:02Z"
lastCommitAt: "2026-07-28T14:57:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 47
maintainers: ["dlon"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5f5b151c1abae043db48f04651b729d44194f9e5fb35c13c21b60d580520516/mullvad/wfp-rs"
---

# WFP - Windows Filtering Platform Rust library

A safe Rust library for the Windows Filtering Platform (WFP) API. This API is used for low-level network filtering.

## Adding wfp-rs to your project

Add it to your `Cargo.toml`: `cargo add wfp`

## Quick start

Here is a simple example adding a sublayer and a blocking rule:

```rust
use std::io;
use wfp::{ActionType, FilterBuilder, FilterEngineBuilder, Layer, SubLayerBuilder, Transaction};

fn main() -> io::Result<()> {
    println!("Creating WFP filter engine...");

    let mut engine = FilterEngineBuilder::default().dynamic().open()?;

    std::thread::spawn(move || {
        println!("Starting transaction...");
        let transaction = Transaction::new(&mut engine)?;

        // Create a custom sublayer for organizing our filters
        println!("Adding custom sublayer...");
        SubLayerBuilder::default()
            .name("Example SubLayer")
            .description("Custom sublayer for example filters")
            .weight(100)
            .add(&transaction)?;

        // Create a blocking filter for IPv4 outbound connections
        println!("Adding blocking filter...");
        FilterBuilder::default()…
