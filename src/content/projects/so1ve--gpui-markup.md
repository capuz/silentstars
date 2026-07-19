---
repo: "so1ve/gpui-markup"
name: "gpui-markup"
description: "A declarative markup DSL for building GPUI applications"
readmeQualityOk: true
url: "https://github.com/so1ve/gpui-markup"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 15
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-09T23:16:44Z"
lastCommitAt: "2026-07-19T06:11:48Z"
lastReleaseAt: "2026-01-11T20:05:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 82
undervaluedScore: 19
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2afb52f719f26d32c4ecb831d84c62ee7a4eedeb65e9b7b3c3c1358afa476874/so1ve/gpui-markup"
fundingLinks: ["GITHUB:https://github.com/so1ve", "CUSTOM:https://afdian.net/@so1ve"]
---

# gpui-markup

A declarative markup DSL for building [GPUI](https://gpui.rs) applications.

## Installation

```bash
cargo add gpui-markup
```

## Usage

```rust
use gpui::prelude::*;
use gpui_markup::ui;

fn my_view(cx: &mut ViewContext<Self>) -> impl IntoElement {
    ui! {
        div @[flex, flex_col, gap_2, p_4, bg: cx.theme().colors().background] {
            div @[text_size: px(24.0), font_weight: FontWeight::BOLD] {
                "Hello, GPUI!",
            },
            div @[text_color: cx.theme().colors().text_muted] {
                "A declarative way to build UIs",
            },
        }
    }
}
```

## Syntax

### Elements

All elements require braces `{}`. Attributes go before braces with `@[...]`:

```rust
// Empty div
ui! { div {} }
// -> div()

// Div with attributes
ui! { div @[flex, flex_col] {} }
// -> div().flex().flex_col()

// Div with children
ui! { div { "content" } }
// -> gpui::ParentElement::child(div(), "content")

// Full form: attributes before braces, children inside
ui! { div @[flex] { "content" } }
// -> gpui::ParentElement::child(div().flex(), "content")
```

### Attributes

Attributes use `@[...]` before braces, comma-separated:

```rust…
