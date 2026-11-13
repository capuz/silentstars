---
repo: "matrix-research-inc/egui-elegance"
name: "egui-elegance"
description: "Elegant UI elements for egui"
readmeQualityOk: true
url: "https://github.com/matrix-research-inc/egui-elegance"
language: "Rust"
languages: ["Rust", "HTML"]
languagePcts: [76, 24]
stars: 66
forks: 6
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 4
recentReleases: 3
createdAt: "2026-04-21T13:49:53Z"
lastCommitAt: "2026-11-13T18:32:19Z"
lastReleaseAt: "2026-10-21T22:14:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 38
maintainers: ["stephenberry"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca28e1f3204e98332d180cb1a8d08283338cf3cbdea10b7113897ea044c64e05/matrix-research-inc/egui-elegance"
---

# egui-elegance

Opinionated widgets for [`egui`]: six-accent rounded buttons, text inputs with a focus ring and submit-flash feedback, themed selects and tabs, segmented LED toggles, status pills, and badges — all driven by a single installable `Theme`. Four palettes ship built-in — two dark (`Theme::slate`, `Theme::charcoal`) and two light (`Theme::frost`, `Theme::paper`) — paired so you can toggle without any layout shift.

The design aims to make native apps feel as polished as modern web UIs.

## Install

```sh
cargo add egui-elegance
```

or, in `Cargo.toml`:

```toml
[dependencies]
egui          = "0.37"
egui-elegance = "0.20"
```

The crate is published as `egui-elegance` but the library name is `elegance`, so imports look like `use elegance::Button;`.

MSRV: Rust 1.95.

## Quick start

Install the theme once per `Context`, then drop widgets into any `Ui` the way you would an egui built-in:

```rust
use elegance::{Accent, Button, Card, Checkbox, TextInput, Theme};

struct App {
    email: String,
    remember: bool,
}

impl eframe::App for App {
    fn ui(&mut self, ui: &mut egui::Ui, _: &mut eframe::Frame) {
        Theme::slate().install(ui.ctx()); // cheap to call every…
