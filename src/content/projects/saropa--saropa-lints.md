---
repo: "saropa/saropa_lints"
name: "saropa_lints"
description: "2100+ advanced lint rules for Flutter & Dart. Catches memory leaks, security flaws (OWASP), and runtime crashes that standard linters miss. Optimized for AI coding assistants."
readmeQualityOk: true
url: "https://github.com/saropa/saropa_lints"
homepage: "https://saropa.github.io/saropa_lints/"
language: "Dart"
languages: ["Dart", "TypeScript"]
languagePcts: [73, 21]
topics: ["accessibility", "bloc", "code-quality", "compliance", "dart", "dev-tools", "flutter", "linter", "memory-leaks", "owasp"]
stars: 11
forks: 3
openIssues: 0
closedIssues: 98
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-01-07T17:38:29Z"
lastCommitAt: "2026-11-27T12:54:50Z"
lastReleaseAt: "2026-01-06T15:24:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "community_hub"]
healthScore: 100
undervaluedScore: 79
maintainers: ["saropa", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/c875cae1ad7435212e1f50cccbc2e62eca18c81314adb0642fdb8f374fd40eb3/saropa/saropa_lints"
discussionCount: 254
---

**The most comprehensive static analysis suite for Flutter and Dart.** 2,350+ lint rules that catch memory leaks, security vulnerabilities, accessibility violations, and runtime crashes — the bugs that compile fine but crash in production.

Developed by [Saropa](https://saropa.com) to make the world of Dart & Flutter better.

> Have feedback? [Open an issue](https://github.com/saropa/saropa_lints/issues/new) on GitHub.

---

## Quick Start

**Requirements:** Dart SDK `>=3.11.0 <4.0.0`. On an older SDK, see [Older Dart and Flutter SDKs](https://github.com/saropa/saropa_lints/blob/HEAD/doc/guides/older_dart_sdks.md) for the release to pin.

### Option A — VS Code extension (recommended)

1. Install [Saropa Lints](https://marketplace.visualstudio.com/items?itemName=saropa.saropa-lints) from the Marketplace (also on [Open VSX](https://open-vsx.org/extension/saropa/saropa-lints))
2. Open the **Saropa Lints** sidebar (checklist icon)
3. Run **Saropa Lints: Set Up Project** to add the package and analysis config

Run **"Saropa Lints: Getting Started"** from the Command Palette for a guided tour.

### Option B — Tier preset (zero-config)

```bash
dart pub add --dev saropa_lints
```
