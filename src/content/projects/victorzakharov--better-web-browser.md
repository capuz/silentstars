---
repo: "VictorZakharov/better-web-browser"
name: "better-web-browser"
description: "Experimental performance-first browser engine and native Windows browser written in Rust—without Chromium, WebView2, or Gecko."
readmeQualityOk: true
url: "https://github.com/VictorZakharov/better-web-browser"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["browser", "browser-engine", "css", "html5", "javascript", "performance", "rendering-engine", "rust", "systems-programming", "web-browser"]
stars: 5
forks: 1
openIssues: 22
closedIssues: 81
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-12T17:54:52Z"
lastCommitAt: "2026-10-25T22:11:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 96
undervaluedScore: 55
maintainers: ["VictorZakharov"]
openGraphImageUrl: "https://opengraph.githubassets.com/99bfcf21792ab9b1f8871c15fa9464d8194fa1eeeb5ed2e2ca550940361081c0/VictorZakharov/better-web-browser"
---

# Breeze (temporary name)

Breeze is a performance-first browser-engine MVP written in Rust. The product name is provisional and isolated in `src/branding.rs` so it can be replaced without touching engine code.

This is not a Chromium, WebView2, Gecko, or operating-system web-view wrapper. The executable owns its HTML DOM, CSS cascade, JavaScript bindings, layout, display list, resource loading, image/SVG/font decoding, form submission, cookie jar, and Win32 painting path.

## Run it

Requirements: Windows 10/11 x64, PowerShell 7, Rust via rustup (the repository pins
Rust 1.95.0), and the Visual Studio C++ build tools/Windows SDK for the MSVC target.
The first build downloads locked dependencies and the checksum-verified V8 library.

```powershell
./scripts/prepare-v8.ps1 -Profile release
./scripts/prepare-angle.ps1
cargo build --release --locked --bin better-web-browser
./target/release/better-web-browser.exe
./target/release/better-web-browser.exe https://example.org/
```

Persistent cookies and `localStorage` use `%LOCALAPPDATA%\Breeze`; `sessionStorage` remains
tab-scoped and is not written to disk. Tests and isolated automation can set
`BREEZE_PROFILE_DIRECTORY` to an…
