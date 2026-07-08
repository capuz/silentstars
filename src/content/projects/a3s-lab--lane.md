---
repo: "A3S-Lab/Lane"
name: "Lane"
description: "Lane-based priority queue"
readmeQualityOk: true
url: "https://github.com/A3S-Lab/Lane"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 47
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-04T05:51:11Z"
lastCommitAt: "2026-07-08T05:41:35Z"
lastReleaseAt: "2026-02-18T10:31:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 32
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/4117a3b5ba5ed9a2eb6766f67504982d06c73b3958b2fc3228382e4652429568/A3S-Lab/Lane"
---

# a3s-lane

Lane-based priority queue for concurrent async tasks. Commands are organized into named lanes with configurable concurrency and priority — the highest-priority lane with pending work is always scheduled next.

Used in the A3S ecosystem to guarantee control commands (pause/cancel) always preempt LLM generation: `control` (P=1) beats `prompt` (P=5) regardless of arrival order.

## Install

```toml
[dependencies]
a3s-lane = "0.4"
```

All four features (`distributed`, `metrics`, `monitoring`, `telemetry`) are on by default. Core queue only:

```toml
a3s-lane = { version = "0.4", default-features = false }
# or pick selectively:
a3s-lane = { version = "0.4", default-features = false, features = ["metrics", "distributed"] }
```

Enable the optional Redis generic job backend for multi-process workers:

```toml
a3s-lane = { version = "0.4", features = ["redis-backend"] }
```

## Usage

Implement the `Command` trait for each task type:

```rust
#[async_trait]
pub trait Command: Send + Sync {
    async fn execute(&self) -> Result<serde_json::Value>;
    fn command_type(&self) -> &str;
}
```

Then build a manager, start the scheduler, and submit:

```rust
use…
