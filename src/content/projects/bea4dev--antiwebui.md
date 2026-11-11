---
repo: "bea4dev/AntiWebUI"
name: "AntiWebUI"
description: "A GPU-rendered native UI toolkit. No Chromium, no WebView, no DOM. Your app is not a website."
readmeQualityOk: true
url: "https://github.com/bea4dev/AntiWebUI"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 132
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-11-02T12:38:24Z"
lastCommitAt: "2026-11-11T11:16:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 23
maintainers: ["bea4dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/1eafbaf1efcc6129aac58ff3e64bc7447fcd1f468d2b409f5b1e44b852ef968a/bea4dev/AntiWebUI"
---

# AntiWebUI

A lightweight framework for building UIs in **Rust with its own wgpu renderer**, no WebView required.

- **Fractional scaling done right from the start**: styles are written in logical pixels and layout happens in integer physical pixels. Borders stay crisp at 125% or 180%, and elements with the same style have the same size wherever they are placed.
- **Browser-grade text selection**: drag selection across multiple elements, double/triple click, copy, and the primary selection.
- **IME support**: Wayland text-input-v3, XIM on X11, `NSTextInputClient` on macOS, and IMM32 on Windows. Preedit text is shown inline.
- **SolidJS-like**: builders such as `div().flex().gap(8.0)` and fine-grained updates driven by `signal()`.

## showcase

 - Wayland shell ([shoji-bar-4](https://github.com/bea4dev/shoji-bar-4))

 - PDF viewer (`cargo run --example pdf --features=pdf -- filepath`)

 - Markdown editor (`cargo run --example markdown_editor --features=markdown -- filepath --split`)

## Example

```rust
use anti_webui::prelude::*;

fn main() {
    App::new().title("Counter").run(|| {
        let count = signal(0);
        div()
            .flex().flex_col().gap(8.0).p(16.0)…
