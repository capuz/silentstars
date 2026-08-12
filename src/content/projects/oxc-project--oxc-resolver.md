---
repo: "oxc-project/oxc-resolver"
name: "oxc-resolver"
description: "Rust version of webpack/enhanced-resolve"
readmeQualityOk: true
url: "https://github.com/oxc-project/oxc-resolver"
homepage: "https://oxc.rs/docs/guide/usage/resolver.html"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
stars: 289
forks: 45
openIssues: 9
closedIssues: 147
watchers: 5
contributors: 38
recentReleases: 0
createdAt: "2023-12-06T03:35:29Z"
lastCommitAt: "2026-08-12T05:13:54Z"
lastReleaseAt: "2024-02-20T12:18:35Z"
status: "thriving"
tags: ["funded"]
healthScore: 98
undervaluedScore: 41
maintainers: ["renovate[bot]", "Boshen", "oxc-guard[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/728015366/54b4b271-d85a-4fd8-ad74-6732b1f5ed1d"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/oxc"]
---

<br>
  <br>
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://oxc.rs/oxc-light.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://oxc.rs/oxc-dark.svg">
    </picture>
  </a>
  <br>
  <br>
  <br>
</p>

</div>

# Oxc Resolver

Rust port of [enhanced-resolve], [tsconfig-paths-webpack-plugin] and [tsconfck]

- Released on [crates.io](https://crates.io/crates/oxc_resolver) and [npm](https://npmx.dev/package/oxc-resolver).
- Implements the [ESM](https://nodejs.org/api/esm.html#resolution-algorithm) and [CommonJS](https://nodejs.org/api/modules.html#all-together) module resolution algorithm specification.
- Built-in [tsconfig-paths-webpack-plugin]
  - support extending tsconfig defined in `tsconfig.extends`
  - support paths alias defined in `tsconfig.compilerOptions.paths`
  - support project references defined `tsconfig.references`
  - support [template variable ${configDir} for substitution of config files directory path](https://github.com/microsoft/TypeScript/pull/58042)
- Built-in tsconfig discovery ([tsconfck])
- Supports in-memory file system via the `FileSystem` trait.
- Contains `tracing` instrumentation.

## Usage

### npm…
