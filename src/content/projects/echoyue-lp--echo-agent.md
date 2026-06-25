---
repo: "EchoYue-lp/echo-agent"
name: "echo-agent"
description: "一个rust实现的agent框架"
url: "https://github.com/EchoYue-lp/echo-agent"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 62
forks: 12
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-02-06T09:07:53Z"
lastCommitAt: "2026-06-24T23:43:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 32
maintainers: ["EchoYue-lp"]
openGraphImageUrl: "https://opengraph.githubassets.com/e356d62a15421a22aff219f120238ce8cf6646c57ccc1363324fcd7924fe8112/EchoYue-lp/echo-agent"
---

# echo-agent

### The Production-Grade AI Agent Framework for Rust

**ReAct Engine • Multi-Agent • Memory • Streaming • MCP • IM Channels • Workflows**

[中文文档](./README.zh.md) &middot; [Documentation](./docs/en/README.md) &middot; [Examples](./examples/) &middot; [Changelog](./CHANGELOG.md)

</div>

---

## Quick Start

Add to `Cargo.toml`:

```toml
[dependencies]
echo-agent = "0.2.0"
tokio = { version = "1", features = ["full"] }
```

Define a tool and run an agent — in under 20 lines:

```rust,no_run
use echo_agent::prelude::*;
use echo_agent::{agent, tool};

#[tool(name = "add", description = "Add two numbers")]
async fn add(a: f64, b: f64) -> Result<ToolResult> {
    Ok(ToolResult::success(format!("{}", a + b)))
}

#[tokio::main]
async fn main() -> Result<()> {
    let mut agent = agent! {
        model: "qwen3.7-max",
        system_prompt: "You are a helpful math assistant",
        tools: [AddTool],
    }?;

    let answer = agent.execute("What is 1337 * 42?").await?;
    println!("{answer}");
    Ok(())
}
```

---

## Why echo-agent?

Most AI agent frameworks live in Python. **echo-agent** brings full-featured Agent development to Rust — matching…
