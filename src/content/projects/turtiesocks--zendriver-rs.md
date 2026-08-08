---
repo: "TurtIeSocks/zendriver-rs"
name: "zendriver-rs"
description: "Async-first, undetectable browser automation in Rust via the Chrome DevTools Protocol. Stealth-by-default port of zendriver — no WebDriver, no JS shim."
readmeQualityOk: true
url: "https://github.com/TurtIeSocks/zendriver-rs"
homepage: "https://turtiesocks.github.io/zendriver-rs/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["anti-detection", "async", "automation", "bot", "browser-automation", "cdp", "chrome-devtools-protocol", "chromium", "cloudflare-bypass", "crawler"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-24T18:34:37Z"
lastCommitAt: "2026-08-08T04:33:06Z"
lastReleaseAt: "2026-05-25T19:20:33Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 63
maintainers: ["TurtIeSocks"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f869986e4a4e48f586970674c16fab1fe4dadb66e45aa7f7ddcb563830d677f/TurtIeSocks/zendriver-rs"
---

# zendriver-rs

Async-first browser automation via the Chrome DevTools Protocol, with a coherent stealth identity and explicit anti-detection controls on by default — drive real Chrome from Rust, or hand the keys to an LLM agent over the [Model Context Protocol](https://modelcontextprotocol.io/).

A Rust port of [zendriver](https://github.com/cdpdriver/zendriver). Drives Chrome via raw CDP — no WebDriver, no JS shim — with anti-detection patches baked in by default.

📖 **[User guide & full documentation →](https://turtiesocks.github.io/zendriver-rs/)** · 🦀 **[API reference (docs.rs) →](https://docs.rs/zendriver)** · 🤖 **[MCP server for AI agents →](https://turtiesocks.github.io/zendriver-rs/mcp.html)**

## Quick example

```rust,no_run
use zendriver::Browser;

#[tokio::main]
async fn main() -> zendriver::Result<()> {
    let browser = Browser::builder().headless(true).launch().await?;
    let tab = browser.main_tab();

    tab.goto("https://example.com").await?;
    tab.wait_for_load().await?;

    // Find by visible text (auto-waits up to the selector's timeout).
    let link = tab.find().text("More information...").one().await?;
    link.click().await?;…
