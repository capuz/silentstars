---
repo: "ubugeeei-prod/corsa-bind"
name: "corsa-bind"
description: "corsa (typescript 7 \"previously typescript-go\") bindings (ffi & orchestration) for rust and js/ts, etc..."
readmeQualityOk: true
url: "https://github.com/ubugeeei-prod/corsa-bind"
homepage: "https://corsa-bind.void.app"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [63, 31]
topics: ["linter", "moonbit", "napi", "rust", "swift", "tsgo", "type-aware", "typesc", "zig", "c"]
stars: 61
forks: 2
openIssues: 3
closedIssues: 140
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-30T13:46:24Z"
lastCommitAt: "2026-09-03T08:13:21Z"
lastReleaseAt: "2026-05-27T08:55:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 38
maintainers: ["ubugeeei", "dependabot[bot]", "mizchi"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d8fea2d665f2d2e09425cc7191f5b2097ac51f238f4aacd5cf7839155daffc8/ubugeeei-prod/corsa-bind"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/logo-dark.svg">
  </picture>
</p>

  Rust, Node.js, and native bindings for the upstream Corsa checker — over stdio, with no forks and no patches.
</p>

---

`corsa-bind` is a multi-crate workspace for talking to [Corsa](https://devblogs.microsoft.com/typescript/typescript-native-port/)
(the native TypeScript 7 implementation line) from Rust and JavaScript runtimes.
Hot paths live in Rust and stay zero-cost; `napi-rs`, Rustler, and a shared C
ABI carry that performance to JS/TS, Elixir, C, C++, Go, Zig, C#, Swift, and
MoonBit — so you can author custom checker tooling and lint rules without
reimplementing the checker.

> [!WARNING]
> This repository is still evolving. The local Rust and Node API/LSP surfaces
> are hardened for production-style use, but distributed orchestration stays
> behind the `experimental-distributed` cargo feature and some upstream-facing
> endpoints remain explicitly experimental.

> [!IMPORTANT]
> `corsa-bind` is built around upstream-supported Corsa workflows. We follow
> Corsa's recommended stdio/API/LSP integration points, keep
> `ref/corsa-upstream` as an exact upstream…
