---
repo: "romixlab/egui_tabular"
name: "egui_tabular"
description: "Table viewer and editor for egui"
readmeQualityOk: true
url: "https://github.com/romixlab/egui_tabular"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["egui", "rust", "ui", "gui", "imgui"]
stars: 21
forks: 1
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-02-17T18:38:36Z"
lastCommitAt: "2026-11-07T13:55:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 66
undervaluedScore: 45
maintainers: ["romixlab"]
openGraphImageUrl: "https://opengraph.githubassets.com/552403fe5c47c6908013e230c53483651a6a60172c3a510e53a55c558a648031/romixlab/egui_tabular"
---

# Customizable egui table viewer and editor.

Fast and responsive table viewer and editor, that only shows visible rows. The data model is fully generic,
allowing implementations based on vectors, files, databases, live bus traces and other data structures.

TODO: Add web demo.

## Features

* [x] Data comes from the egui-free [TableModel](https://github.com/romixlab/egui_tabular/blob/HEAD/tabular_core/src/model.rs) trait; change detection with revision counters, so any number of views and app code can observe one model.
* [x] Custom cell viewer and editor ui through [CellUi](https://github.com/romixlab/egui_tabular/blob/HEAD/src/cell_ui.rs), any egui or user widgets can be used.
  A row is looked up once and its cells filled by column, values (`Variant`) are optional.
* [x] Built-in cell viewers and editors ([VariantCellUi](https://github.com/romixlab/egui_tabular/blob/HEAD/src/cell_ui.rs)) and an in-memory [VariantTable](https://github.com/romixlab/egui_tabular/blob/HEAD/src/backends/variant.rs):
    * [x] String, string list, numbers, booleans, custom enums
    * [x] Date, time, date-time
    * [ ] SI values, currency
* [x] Data import with automatic column mapping based on…
