---
repo: "whiskerrs/whisker"
name: "whisker"
description: "Cross-platform mobile UI framework for Rust, built on the Lynx C++ engine."
readmeQualityOk: true
url: "https://github.com/whiskerrs/whisker"
homepage: "https://whisker.rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [81]
stars: 63
forks: 2
openIssues: 15
closedIssues: 44
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-13T15:40:31Z"
lastCommitAt: "2026-07-22T06:13:47Z"
lastReleaseAt: "2026-06-10T09:43:57Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 94
undervaluedScore: 40
maintainers: ["itome", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9edb58620fac9896eac0e8682ec00b57062cd7f6f9ad3b75c9c3520a94f37a68/whiskerrs/whisker"
---

<picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/whiskerrs/whisker/main/.github/assets/banner-dark.png" />
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/whiskerrs/whisker/main/.github/assets/banner-light.png" />
    </picture>
  </a>
</p>

  Build native iOS and Android apps in Rust — a Leptos-style fine-grained
  reactive API on the <a href="https://github.com/lynx-family/lynx">Lynx</a> engine.
  No virtual DOM, no JavaScript runtime.
</p>

</p>

---

```rust
use whisker::prelude::*;

#[whisker::main]
fn app() -> Element {
    render! {
        Counter
    }
}

#[component]
fn counter() -> Element {
    let count = signal(0);
    render! {
        view(style: css!(
            flex_grow: 1.0,
            display: Display::Flex,
            flex_direction: FlexDirection::Column,
            justify_content: JustifyContent::Center,
            align_items: AlignItems::Center,
            gap: px(12),
            background_color: Color::hex(0x0B0B0F),
        )) {
            text(
                value: computed(move || format!("Count: {}", count.get())),
                style:…
