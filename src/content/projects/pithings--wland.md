---
repo: "pithings/wland"
name: "wland"
description: "🪟 Wayland apps, composited in the browser: a Wayland compositor in WebAssembly."
readmeQualityOk: true
url: "https://github.com/pithings/wland"
homepage: "https://wland.vercel.app"
language: "Zig"
languages: ["Zig", "TypeScript"]
languagePcts: [52, 44]
stars: 211
forks: 12
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 7
createdAt: "2026-07-07T00:54:32Z"
lastCommitAt: "2026-11-24T01:55:06Z"
lastReleaseAt: "2026-11-24T00:39:55Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 70
undervaluedScore: 22
maintainers: ["pi0"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ea675db8a971013436936ab484933b14ba4b056e929c5e5291ee3b7cce33dbc/pithings/wland"
fundingLinks: ["GITHUB:https://github.com/pi0"]
---

# 🪟 wland

**Wayland apps, composited in the browser.**

wland is a Wayland compositor compiled to WebAssembly, ~65 kB gzipped in
total. Real apps like `foot` and `nautilus` speak the real wire protocol,
unmodified, and show up as windows in a web page. Typing, menus, clipboard,
drag and drop, HiDPI and window controls all work. ⚡ It's fast too: up to
120 FPS on a Retina MacBook.

👉 **[See it in action](https://wland.vercel.app/)**

[Quick start](#-quick-start) · [CLI](#-cli) · [Docker](#-docker) · [SDK](#-sdk) · [How it works](#-how-it-works) · [Relay](#-the-relay-wlandr) · [Security](#-security) · [What works](#-what-works) · [Limits](#-known-limits) · [Building](#-building-from-source)

## 🚀 Quick start

Run the demo image. It works anywhere Docker does:

```sh
docker run -it --rm -p 8080:8080 ghcr.io/pithings/wland
```

Open http://localhost:8080. Chromium and the PCManFM file manager are
running inside the container, and show up as windows in the page. Open the
`README.txt` in the file manager for things to try.

In the page:
