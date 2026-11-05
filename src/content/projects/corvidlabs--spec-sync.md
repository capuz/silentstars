---
repo: "CorvidLabs/spec-sync"
name: "spec-sync"
description: "📐 Bidirectional spec-to-code drift detection. Rust CLI and MCP server that catches undocumented exports and vanished symbols in CI."
readmeQualityOk: true
url: "https://github.com/CorvidLabs/spec-sync"
homepage: "https://corvidlabs.xyz/spec-sync/"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["ai-coding", "ci", "code-quality", "documentation-testing", "spec-driven-development", "static-analysis", "ai-agents", "cli", "developer-tools", "documentation"]
stars: 6
forks: 1
openIssues: 59
closedIssues: 242
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-03-18T15:32:39Z"
lastCommitAt: "2026-11-05T00:21:39Z"
lastReleaseAt: "2026-03-25T14:09:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 64
maintainers: ["0xLeif", "corvid-agent", "0xGaspar"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbbc31e4c9d78a46208f8670a720c218233f6d2cd7c8a97e4c8db6a9c57e30b7/CorvidLabs/spec-sync"
discussionCount: 5
---

# SpecSync

**Turn requirements into module contracts that fail CI when code drifts—without losing the decisions and evidence around the fix.**

Rust · single binary · 33 languages · no SpecSync API key required

[Install](#install) · [Quick start](#quick-start) · [Verified change workflow](#verified-change-workflow) · [Live documentation](https://corvidlabs.xyz/spec-sync/docs/) · [Examples](#executable-examples) · [Comparisons](#how-it-compares)

---

## Install

The GitHub **6.1.2** release uses the immutable candidate qualified on Ubuntu and
macOS, and crates.io serves 6.1.2. This separate Action wrapper update selects its
published binary by default. Confirm availability at your chosen distribution before
using the 6.1.2 installation pins below; GitHub asset publication does not itself
establish Homebrew publication.
Confirm what you received with `specsync --version`, and pin all lifecycle writers and CI to
the same 6.x version.

### Cargo

```bash
cargo install specsync
```

### Homebrew

```bash
brew install CorvidLabs/tap/spec-sync
```

### GitHub Action

```yaml
- uses: CorvidLabs/spec-sync@v6.1.2
  with:
    version: '6.1.2'
    strict: 'true'
    require-coverage: '100'…
