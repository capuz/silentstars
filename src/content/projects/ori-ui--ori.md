---
repo: "ori-ui/ori"
name: "ori"
description: "Experimental gui library for rust"
readmeQualityOk: true
url: "https://github.com/ori-ui/ori"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 9
forks: 2
openIssues: 0
closedIssues: 16
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-04-10T13:18:07Z"
lastCommitAt: "2026-10-05T10:47:38Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 81
undervaluedScore: 51
maintainers: ["ChangeCaps"]
openGraphImageUrl: "https://opengraph.githubassets.com/3942678682cb0bb7014a11b8afb766199cc7d342cf149988734854d895b82773/ori-ui/ori"
---

# Ori

Ori is a framework for building user interfaces in a declarative manner.

## Example

```rust
use ori_gtk4::prelude::*;

// Here we define our `Data`, the state of our application, this can be anything but in this case
// it's a struct with a `count` field.
struct Data {
    count: u32,
}

// The most important concept in Ori is the `View` trait. A `View` represents the current state of
// your UI based on your `Data`. The `ui` function is called every time the `Data` changes, or more
// accurately is estimated to change. The new `View` is then compared to the previous `View` and
// the differences are applied to the UI.
fn counter(data: &Data) -> impl View<Data> + use<> {
    let text = label(format!("Clicked {} times!", data.count));

    // A button is created, taking a closure mutating our `Data` when the button is clicked. Note
    // that this closure returns a type that can be converted into an `Action`. The default
    // `Action`, i.e. `()` the unit value, is to rebuild the UI by calling the `ui` function. Other
    // actions include sending `Messages` or spawning futures.
    button(text, |data: &mut Data| data.count += 1)
        .halign(Align::Center)…
