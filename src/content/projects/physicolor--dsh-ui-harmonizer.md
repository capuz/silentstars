---
repo: "Physicolor/dsh-ui-harmonizer"
name: "dsh-ui-harmonizer"
description: "Web UI polish layer for DeepSeek Harness: normalizes unfinished or self-contradictory official UI, reconciles style conflicts between installed plugins, and unifies the visual language via official design tokens."
readmeQualityOk: true
url: "https://github.com/Physicolor/dsh-ui-harmonizer"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [60, 40]
topics: ["dsh-plugin", "browser-extension", "cordis", "cordis-plugin", "deepseek-harness", "plugins", "ui-enhancement", "web-ui", "ui-harmonizer"]
stars: 10
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-15T10:57:51Z"
lastCommitAt: "2026-08-27T14:30:46Z"
lastReleaseAt: "2026-08-27T06:53:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 69
undervaluedScore: 32
maintainers: ["Physicolor"]
openGraphImageUrl: "https://opengraph.githubassets.com/966afc53dba8d955422e877b05f4bce9ab1540ed3a246d73aaa915eb6ae5712c/Physicolor/dsh-ui-harmonizer"
---

<h1 align="center">DSH UI Harmonizer</h1>

  <strong>UI harmonizer for DeepSeek Harness.</strong><br>
  Normalizes the official UI · reconciles every plugin · settings auto-normalizer · UI customization (incl. rounded card)
</p>

</p>

---

> **TL;DR:** You installed a bunch of DSH plugins but the UI looks inconsistent? DSH UI Harmonizer uses **CSS overrides + runtime DOM coordination** to bring them back to the official design language — **non-destructive, fully reversible, zero model cost**.

DSH UI Harmonizer is a **client-only DSH bundle plugin**. It adds no model tools and modifies no session logs — it adjusts the UI purely through official slots (`settings.section` / `settings.general.item`) and the `--dsw-*` semantic token system.

---

## Features

### 🎨 Official UI Normalization

| Capability | Detail |
| --- | --- |
| Single-line header | Moves the conversation / trajectory selector into the title row; the header collapses to one line |
| Button capsule family | Session log, widgets, and toggle buttons unified into 32px capsules |
| Right-rail flush rounded rect | better-sidebar panel overlay layout; the header stays put |
| Unified settings header | Title 18/600 +…
