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
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-19T03:50:37Z"
lastCommitAt: "2026-09-12T08:03:54Z"
lastReleaseAt: "2026-09-06T13:04:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 50
maintainers: ["eacryo"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a7be9404a522ee2fd713414813da5d01b330bcd6667d962f9586084160dc51b/eacryo/oh-my-tab"
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

It is written in pure Rust, calling AppKit / CoreGraphics / ApplicationServices directly through `objc2` FFI — there is no Swift bridge and no Rust UI framework.

- <img height="14" src="docs/icons/stack.svg"> **Native switcher**: app names, window titles, one card per window, across multiple displays.
- <img height="14" src="docs/icons/image.svg"> **Window thumbnails**: caption row above a 16:10 live preview, captured via a private WindowServer API and cached in memory — cached frames render instantly and a background refresh keeps them current; rows are balanced when they fit, and when they overflow the grid fills in MRU order and scrolls continuously. Requires **Screen…
