---
repo: "amaanq/teapot"
name: "teapot"
description: "A privacy-focused Twitter/X frontend written in Rust"
readmeQualityOk: true
url: "https://github.com/amaanq/teapot"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
stars: 52
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-03-01T07:29:12Z"
lastCommitAt: "2026-09-06T08:02:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 28
maintainers: ["amaanq", "entailz"]
openGraphImageUrl: "https://opengraph.githubassets.com/4322b4d9bd42734d65ed7ec864967bb4ddcc34abc2abbae7abd137b22b860b1a/amaanq/teapot"
---

# teapot

A privacy-focused Twitter/X frontend written in Rust.

## Features

- **Privacy-focused**: No third-party JavaScript, tracking, ads, or remote fonts
- **RSS feeds**: Subscribe to any user's tweets
- **FxEmbed-style Discord embeds**:
  - Multiple images displayed in carousel on mobile
  - Videos play directly in the embed
  - Proper image dimensions for better layout
  - ActivityPub JSON endpoint for rich embeds

## Requirements

- Rust 1.96.1+
- Twitter/X session tokens for API access

## Building

```bash
cargo build --release
```

## Configuration

1. Copy the example config:

```bash
cp config/teapot.example.toml config/teapot.toml
```

1. Edit `config/teapot.toml` with your settings.

2. Create a sessions file with your Twitter/X credentials:

```bash
cp sessions.example.jsonl sessions.jsonl
# Edit sessions.jsonl with your auth_token and ct0 from browser cookies
```

Cookie sessions use `auth_token` and `ct0`. OAuth sessions use
`oauth_token` and `oauth_secret`. See `sessions.example.jsonl` for the JSONL
shape. Never commit a real session or generated `teapot.toml`.

## Running

```bash
# Development
cargo run

# Production
./target/release/teapot
```

The server…
