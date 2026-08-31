---
repo: "eacryo/oh-my-tab"
name: "oh-my-tab"
description: "A macOS window switcher — an alternative to the system Cmd+Tab"
readmeQualityOk: true
url: "https://github.com/eacryo/oh-my-tab"
homepage: "https://oh-my-tab.app"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["macos", "rust", "utility", "window-manager", "clipboard", "clipboard-manager", "mouse-control"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-07-19T03:50:37Z"
lastCommitAt: "2026-08-31T10:00:37Z"
lastReleaseAt: "2026-08-30T02:20:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 55
maintainers: ["eacryo"]
openGraphImageUrl: "https://opengraph.githubassets.com/37a38c65fab790ae7ca3ff27590bb3fefe30d123fd9ed54e0d17dbd6caf17e72/eacryo/oh-my-tab"
---

</p>

<br />

<br />

</p>

<br />

</p>

  Official Website: <a href="https://oh-my-tab.app/">https://oh-my-tab.app/</a>
</p>

<br />

oh-my-tab is a macOS window switcher that complements the system Cmd+Tab: it runs as a **menu-bar accessory** app (no Dock icon), intercepts a global shortcut (**Command+Tab** by default, toggleable to Option+Tab), shows a floating **Liquid Glass** overlay of cards for currently-open windows, and raises the selected window on release (via a private SkyLight API plus AX).

It is pure Rust calling AppKit / CoreGraphics / ApplicationServices directly through `objc2` FFI — there is no Swift bridge and no Rust UI framework.

- <img height="14" src="docs/icons/stack.svg"> **Native switcher**: app names, window titles, one card per window.
- <img height="14" src="docs/icons/key.svg"> **Keyboard navigation**: Tab, Shift+Tab, arrow keys, or mouse after Command/Option.
- <img height="14" src="docs/icons/zap.svg"> **Lightweight**: pure Rust — the current arm64 release executable is about 3.7 MB; observed physical footprint is about 80 MB after startup and 140–160 MB after thumbnails warm in a typical active session with thumbnails and persistent clipboard…
