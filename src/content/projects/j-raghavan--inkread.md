---
repo: "j-raghavan/inkread"
name: "inkread"
description: "A Supernote friendly Rust e-ink reader with first-class handwriting"
readmeQualityOk: true
url: "https://github.com/j-raghavan/inkread"
language: "Rust"
languages: ["Rust", "Kotlin"]
languagePcts: [63, 34]
stars: 17
forks: 3
openIssues: 20
closedIssues: 61
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-11T18:30:02Z"
lastCommitAt: "2026-08-22T04:07:15Z"
lastReleaseAt: "2026-08-02T20:55:50Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 93
undervaluedScore: 51
maintainers: ["j-raghavan", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/068c4ea8da7b2bb010d93f094ee06326c8fdc9028dd996bc5d3110bd5cbf9737/j-raghavan/inkread"
discussionCount: 2
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/assets/inkread-icon-dark.png">
  </picture>
</p>

<h1 align="center">inkread</h1>

  <strong>A Rust-core, e-ink-first document reader with first-class handwriting.</strong><br>
  KOReader-class reading meets Supernote-class inking — open source, in a clean Rust core.
</p>

</p>

---

inkread is a document reader and writing platform for tablet-class **e-ink** devices, targeting the
**Supernote** (Ratta, RK3566, Android 11) first. A Kotlin/Android shell wraps a Rust `cdylib` (over
JNI) that owns parsing, layout, rendering, the refresh policy, and the **ink model** — so the hard
parts are memory-safe, vendor-neutral, and testable on your laptop with no device.

>inkRead is an open-source e-ink reader for Supernote that combines serious PDF/EPUB reading with
>handwriting-first annotation. It uses a Kotlin Android shell around a Rust core for parsing, layout, rendering,
>ink, dictionaries, and refresh policy. The goal is simple: portable reading, portable annotations, and no cloud dependency.

## Why inkread?

On e-ink today you usually pick one of two compromises:

- **KOReader** reads beautifully and has a…
