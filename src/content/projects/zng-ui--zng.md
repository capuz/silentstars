---
repo: "zng-ui/zng"
name: "zng"
description: "Cross-platform GUI framework."
readmeQualityOk: true
url: "https://github.com/zng-ui/zng"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 83
forks: 2
openIssues: 42
closedIssues: 159
watchers: 5
contributors: 2
recentReleases: 0
createdAt: "2022-11-29T02:43:04Z"
lastCommitAt: "2026-07-04T22:51:07Z"
lastReleaseAt: "2024-04-15T04:36:41Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "under_pressure"]
healthScore: 95
undervaluedScore: 46
maintainers: ["SamRodri"]
openGraphImageUrl: "https://opengraph.githubassets.com/ab2b54a1ec10e313297f848fb63ae4dbbb0f2f1f30a0612546c4dda43638c16b/zng-ui/zng"
discussionCount: 0
---

# zng

Zng is a cross-platform GUI framework, it provides ready made highly customizable widgets, responsive layout, 
live data binding, easy localization, automatic focus navigation and accessibility, async and multi-threaded tasks, robust
multi-process architecture and more.

Zng is pronounced "zing", or as an initialism: ZNG (Z Nesting Graphics).

## Usage

First add `zng` to your `Cargo.toml`, or call `cargo add zng -F view_prebuilt`: 

```toml
[dependencies]
zng = { version = "0.23.3", features = ["view_prebuilt"] }
```

Then create your first window:

```rust ,no_run
use zng::prelude::*;

fn main() {
    zng::env::init!();
    APP.defaults().run_window("main", async {
        let count = var(0u32);
        let count_txt = count.map(|c| match *c {
            0 => "Click Me!".to_txt(),
            1 => "Clicked 1 time!".to_txt(),
            n => formatx!("Clicked {n} times!"),
        });
        Window! {
            title = count_txt.map(|t| formatx!("Button Example - {t}"));
            child_align = Align::CENTER;
            child = Button! {
                on_click = hn!(|a| {
                    count.modify(|c| **c += 1);
                    println!("Button {}…
