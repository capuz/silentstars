---
repo: "Mrmayman/frostmark"
name: "frostmark"
description: "HTML/Markdown widget for iced"
readmeQualityOk: true
url: "https://github.com/Mrmayman/frostmark"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 14
forks: 6
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2025-10-07T13:23:53Z"
lastCommitAt: "2026-08-16T04:09:05Z"
lastReleaseAt: "2026-01-18T11:54:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 27
maintainers: ["Mrmayman", "mariinkys", "Drodofsky"]
openGraphImageUrl: "https://opengraph.githubassets.com/809b2c1b1cf65ed63f700dc55cd0233485f1858544276388421173648e402878/Mrmayman/frostmark"
---

# 🧊 Frostmark

**An HTML + Markdown viewer for [iced](https://iced.rs/)**

Render rich text in your `iced` app at lightning-fast speeds using plain HTML or Markdown!

---

## Usage

1. Create a [`MarkState`] and **store it in your application state**.

```rust
use frostmark::MarkState;

let text = "Hello from **markdown** and <b>HTML</b>!";

let state = MarkState::with_html_and_markdown(text);
// or if you just want HTML
let state = MarkState::with_html(text);
// put this in your App struct
```

2. In your `view` function use a [`MarkWidget`].

```txt
iced::widget::container( // just an example
    MarkWidget::new(&self.mark_state)
)
.padding(10)
```

You can find runnable examples [here](https://github.com/Mrmayman/frostmark/blob/HEAD/examples/README.md)

<details>
<summary>Click to expand a full example</summary>

```rust
use frostmark::{MarkState, MarkWidget};
use iced::{widget, Element, Task};

#[derive(Debug, Clone)]
enum Message {}

struct App {
    state: MarkState,
}

impl App {
    fn update(&mut self, _: Message) -> Task<Message> {
        Task::none()
    }

    fn view(&self) -> Element<'_, Message> {
        widget::container(MarkWidget::new(&self.state))…
