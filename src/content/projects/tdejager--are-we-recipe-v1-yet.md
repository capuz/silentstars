---
repo: "tdejager/are-we-recipe-v1-yet"
name: "are-we-recipe-v1-yet"
description: "Website: Tracking the progress of migrating conda-forge recipes from the legacy meta.yaml format to the new recipe.yaml format"
url: "https://github.com/tdejager/are-we-recipe-v1-yet"
homepage: "https://tdejager.github.io/are-we-recipe-v1-yet/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 9
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-06-19T19:01:00Z"
lastCommitAt: "2026-06-28T03:10:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 71
maintainers: ["actions-user", "tdejager", "wolfv"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ee07281ad14c8aab9be7c537bcef9db640683c68d99b2b7a4f85b0e3af3c246/tdejager/are-we-recipe-v1-yet"
---

# Are we Recipe v1 yet? 🍃

A website tracking the progress of migrating conda-forge recipes from the legacy `meta.yaml` format to the new `recipe.yaml` format (Recipe v1).

## 🌟 About

This project monitors the adoption of [Recipe v1](https://github.com/conda/ceps/blob/main/cep-0013.md), the new standardized format for conda package recipes. Recipe v1 provides better structure, validation, and tooling support compared to the legacy `meta.yaml` format.

## 🏗️ Architecture

The project consists of two main components:

### Web Frontend (`web/`)
- **Framework**: [Leptos](https://leptos.dev/) with client-side rendering
- **Styling**: Tailwind CSS v4 with Inter font
- **Build**: Trunk for WASM compilation

### Data Collector (`data-collector/`)
- **Purpose**: Analyzes conda-forge feedstocks via cf-graph-countyfair sparse checkout
- **Output**: Generates `feedstock-stats.toml` with current statistics
- **Method**: Uses git sparse checkout for efficient metadata access

## 🚀 Development

### Prerequisites
- [pixi](https://pixi.sh/) package manager

### Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/are-we-recipe-v1-yet.git
cd…
