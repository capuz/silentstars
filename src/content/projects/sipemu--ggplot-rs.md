---
repo: "sipemu/ggplot-rs"
name: "ggplot-rs"
description: "A Rust implementation of ggplot2's Grammar of Graphics"
readmeQualityOk: true
url: "https://github.com/sipemu/ggplot-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 9
forks: 1
openIssues: 5
closedIssues: 179
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-17T08:37:04Z"
lastCommitAt: "2026-11-04T11:27:38Z"
lastReleaseAt: "2026-07-03T20:31:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 61
maintainers: ["sipemu"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d5a78de368a8b8da104f6ee20893ae7cc38ebb8dfc27cf68216e3f29fdb5a77/sipemu/ggplot-rs"
---

# ggplot-rs

A Rust implementation of ggplot2's Grammar of Graphics, rendering through a
self-contained SVG backend (no dependencies) or, with the default `plotters`
feature, the [plotters](https://github.com/plotters-rs/plotters) SVG/bitmap backend.

**Validated against R.** Computed layers — binning, density, stacking, QQ/ECDF,
LOESS, and axis-tick placement (extended-Wilkinson) — are checked against
[R ggplot2](https://ggplot2.tidyverse.org/) 4.0.3's `ggplot_build()` output, so a
histogram or a stacked bar comes out where ggplot2 puts it. See
[`validation/`](https://github.com/sipemu/ggplot-rs/blob/HEAD/validation/).

## Gallery

Every image below is produced by [`examples/gallery.rs`](https://github.com/sipemu/ggplot-rs/blob/HEAD/examples/gallery.rs) —
regenerate them all with `cargo run --features sf --example gallery` (the
choropleth needs the `sf` feature; drop it for the rest). The
`supplier_leadtime*.png` images come from
[`examples/supplier_leadtime.rs`](https://github.com/sipemu/ggplot-rs/blob/HEAD/examples/supplier_leadtime.rs), and
`inventory_twin.png` from [`examples/inventory_twin.rs`](https://github.com/sipemu/ggplot-rs/blob/HEAD/examples/inventory_twin.rs)
(its…
