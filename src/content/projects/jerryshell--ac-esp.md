---
repo: "jerryshell/ac-esp"
name: "ac-esp"
description: "AssaultCube ESP DLL with Rust 🦀"
readmeQualityOk: true
url: "https://github.com/jerryshell/ac-esp"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["assaultcube", "esp", "game-hack", "rust", "cheat", "dll"]
stars: 115
forks: 33
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-01-06T20:58:42Z"
lastCommitAt: "2026-10-30T10:22:22Z"
lastReleaseAt: "2025-02-17T11:34:21Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 30
maintainers: ["jerryshell"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f83957e47eeac23865df8d9c95bf61716149b747b49ed530f383cd6f8c513dd/jerryshell/ac-esp"
---

# AssaultCube ESP DLL with Rust 🦀

Applicable game version: **1.3.0.2**

Download: [AssaultCube v1.3.0.2 Lockdown Edition](https://github.com/assaultcube/AC/releases/download/v1.3.0.2/AssaultCube_v1.3.0.2_LockdownEdition.exe)

## How to use

1. Download `ac_esp.dll` from [releases](https://github.com/jerryshell/ac-esp/releases)
2. Run AssaultCube in **Windowed Mode**
3. Inject `ac_esp.dll` into `ac_client.exe` ( You can do this with [System Informer](https://github.com/winsiderss/systeminformer) )

## Build DLL

```sh
cargo build --release --target=i686-pc-windows-msvc
```

`.cargo/config.toml` pins `i686-pc-windows-msvc` as the default target, because AssaultCube runs as a 32-bit process.

or

```sh
cross build --release --target=i686-pc-windows-gnu
```

## Test

```sh
cargo test
```

The overlay test opens a 1920x1080 window, animates a few rectangles, then exits.

## Screenshot

## Related

- [ac-aimbot](https://github.com/jerryshell/ac-aimbot)

The Direct2D overlay lives in `src/overlay.rs`, merged from the former [windows-ez-overlay](https://github.com/jerryshell/windows-ez-overlay) crate.

## References

- [About…
