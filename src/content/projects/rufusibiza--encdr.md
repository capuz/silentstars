---
repo: "RufusIbiza/Encdr"
name: "Encdr"
description: "Native Instruments USB HID hardware and screen communication layer"
readmeQualityOk: true
url: "https://github.com/RufusIbiza/Encdr"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["native-instruments", "ni"]
stars: 30
forks: 3
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2026-03-26T11:20:43Z"
lastCommitAt: "2026-10-04T10:01:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 31
maintainers: ["RufusIbiza", "nullobject"]
openGraphImageUrl: "https://opengraph.githubassets.com/74116c2a6ca690eb2a885ada7e0d6db8477ef300c7446ac91a5913597be7624b/RufusIbiza/Encdr"
discussionCount: 1
---

# Encdr

Native Instruments USB HID hardware and screen communication layer.

Provides data-driven device definitions, real-time input parsing, LED/screen output, GPU-accelerated frame management, and an optional WebView-based screen renderer.

`#NativeInstruments` `#NI`

Born from the [openAV-Ctlra](https://github.com/openAVproductions/openAV-Ctlra) C library, reimagined in Rust with data-driven device descriptors, zero-copy I/O, and a GPU-accelerated screen pipeline.

## Quick Start

```rust
use std::time::Duration;
use encdr::{Encdr, EncdrConfig, Event, LedValue};

fn main() {
    let mut encdr = Encdr::new(EncdrConfig::default()).unwrap();
    let ids = encdr.scan().unwrap();
    let events = encdr.events().clone();

    loop {
        while let Ok(event) = events.try_recv() {
            match event {
                Event::DeviceConnected { id, descriptor } => {
                    println!("Connected: {}", descriptor.name);
                }
                Event::Button { device, name, pressed } => {
                    println!("{}: {}", name, if pressed { "ON" } else { "OFF" });
                    // Mirror button state to its LED…
