---
repo: "crabnebula-dev/cargo-packager"
name: "cargo-packager"
description: "Rust executable packager, bundler and updater."
readmeQualityOk: true
url: "https://github.com/crabnebula-dev/cargo-packager"
homepage: "https://docs.crabnebula.dev/packager/"
language: "Rust"
languages: ["Rust"]
languagePcts: [78]
topics: ["appbundle", "appimage", "bundle", "bundler", "deb", "debian", "dmg", "executable", "installer", "msi"]
stars: 488
forks: 49
openIssues: 35
closedIssues: 58
watchers: 2
contributors: 37
recentReleases: 0
createdAt: "2023-09-06T00:03:42Z"
lastCommitAt: "2026-10-07T10:31:33Z"
lastReleaseAt: "2023-12-27T17:23:39Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 89
undervaluedScore: 35
maintainers: ["renovate[bot]", "26Emily", "FabianLars-crabnebula"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/687753660/9ced2692-1b89-4985-bd62-0a3c4b957ce0"
discussionCount: 2
---

# cargo-packager

Executable packager, bundler and updater. A cli tool and library to generate installers or app bundles for your executables.
It also has a compatible updater through [cargo-packager-updater](https://github.com/crabnebula-dev/cargo-packager/blob/HEAD/crates/updater/).

#### Supported packages:

- macOS
  - DMG (.dmg)
  - Bundle (.app)
- Linux
  - Debian package (.deb)
  - AppImage (.AppImage)
  - Pacman (.tar.gz and PKGBUILD)
- Windows
  - NSIS (.exe)
  - MSI using WiX Toolset (.msi)

## Rust

### CLI

The packager is distributed on crates.io as a cargo subcommand, you can install it using cargo:

```sh
cargo install cargo-packager --locked
```

You then need to configure your app so the cli can recognize it. Configuration can be done in `Packager.toml` or `packager.json` in your project or modify Cargo.toml and include this snippet:

```toml
[package.metadata.packager]
before-packaging-command = "cargo build --release"
```

Once, you are done configuring your app, run:

```sh
cargo packager --release
```

### Configuration

By default, the packager reads its configuration from `Packager.toml` or `packager.json` if it exists, and from `package.metadata.packager`…
