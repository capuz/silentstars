---
repo: "Choochmeque/tauri-plugin-webdriver"
name: "tauri-plugin-webdriver"
description: "W3C WebDriver implementation for Tauri applications"
readmeQualityOk: true
url: "https://github.com/Choochmeque/tauri-plugin-webdriver"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["cross-platform", "linux", "macos", "plugin", "tauri", "webdriver", "windows", "appium", "selenium"]
stars: 41
forks: 5
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-02-11T12:53:54Z"
lastCommitAt: "2026-11-08T10:42:06Z"
lastReleaseAt: "2026-09-01T11:53:19Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 87
undervaluedScore: 43
maintainers: ["Choochmeque", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba09cb8078b9599675a8e6f4f606622d2940fe53b79643f37c2e314c36be3e4e/Choochmeque/tauri-plugin-webdriver"
fundingLinks: ["GITHUB:https://github.com/Choochmeque", "BUY_ME_A_COFFEE:https://buymeacoffee.com/choochmeque", "THANKS_DEV:https://thanks.dev/u/gh/choochmeque"]
---

# tauri-plugin-webdriver

A W3C WebDriver implementation for Tauri applications, enabling automated testing with standard WebDriver clients like Selenium, and WebdriverIO.

## Features

- **Full W3C WebDriver compliance** - 47 endpoints implementing the W3C WebDriver specification
- **Native platform integration** - Uses native WebView APIs for reliable automation
- **Zero configuration** - Just add the plugin and start testing
- **Standard tooling support** - Works with Selenium, WebdriverIO, and any W3C-compliant client

### Supported Platforms

| Platform | Status | Backend |
|----------|--------|---------|
| macOS | Full support | WKWebView native APIs |
| Windows | Full support | WebView2 native APIs |
| Linux | Full support | WebKitGTK native APIs |
| Android | Full support | Android WebView native APIs |
| iOS | Full support | WKWebView native APIs |

## Installation

> **Warning**: This plugin exposes automation capabilities via HTTP. Never include it in production builds.

Add to your `Cargo.toml` as a dev/test-only dependency:

```toml
[target.'cfg(debug_assertions)'.dependencies]
tauri-plugin-webdriver = "0.2"
```

Or use a feature flag for more control:

```toml…
