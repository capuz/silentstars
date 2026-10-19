---
repo: "SkuldNorniern/aurea"
name: "aurea"
description: "Lightweight Crossplatform GUI Lib for Rust "
readmeQualityOk: true
url: "https://github.com/SkuldNorniern/aurea"
language: "Rust"
languages: ["Rust"]
languagePcts: [76]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-02-10T04:42:52Z"
lastCommitAt: "2026-10-19T09:12:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 74
maintainers: ["SkuldNorniern"]
openGraphImageUrl: "https://opengraph.githubassets.com/67cbe5846b2abfc00f5f1e29c839bb57ab639e5f57413e14d4717b8eb44e945d/SkuldNorniern/aurea"
---

# Aurea

Pre-alpha Rust GUI toolkit: native windows and widgets, canvases, canvas
widgets in `aurea::ui`, and a renderer with CPU and optional GPU backends.

> Pre-alpha. APIs still move. Not for production.

## Quick Start

```bash
cargo add aurea
```

```rust
use aurea::elements::Label;
use aurea::{AureaResult, Window};

fn main() -> AureaResult<()> {
    let mut window = Window::new("Hello", 400, 300)?;
    window.set_content(Label::new("Hello, Aurea!")?)?;
    window.run()
}
```

## Support

| | Windows | macOS | Linux (GTK3) |
| --- | --- | --- | --- |
| Windows, native widgets | yes | yes | yes |
| Canvas widgets | yes | yes | yes |
| IME | yes | yes | yes |
| Pen pressure and tilt | yes | not yet | not yet |

iOS and Android are experimental. On GPU backends, blend modes other than
normal draw through the CPU.

## Features

- `zengpu`: GPU rendering through ZenGPU, on Metal on macOS and Vulkan
  elsewhere. Experimental.
- `wgpu`: wgpu renderer and surface helpers.

## Examples

```bash
cargo run --example window
cargo run --example widgets
```

More in [`examples/`](https://github.com/SkuldNorniern/aurea/blob/HEAD/examples/).

## Projects Using Aurea

| Project | Preview |…
