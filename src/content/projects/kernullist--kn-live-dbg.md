---
repo: "kernullist/kn-live-dbg"
name: "kn-live-dbg"
description: "Windows kernel research tool. Looks like a debugger, but it is not a debugger. It uses a kernel driver to provide a WinDbg-like live kernel debugging experience from a TUI console."
readmeQualityOk: true
url: "https://github.com/kernullist/kn-live-dbg"
language: "C++"
languages: ["C++"]
languagePcts: [89]
stars: 72
forks: 10
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-05-17T02:49:49Z"
lastCommitAt: "2026-08-28T14:25:21Z"
lastReleaseAt: "2026-06-26T03:03:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 41
maintainers: ["kernullist"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3ecd93d8cee5a9bf6c89f63a3c03ecc48c457ceca1f413c9d053adadcbf058d/kernullist/kn-live-dbg"
---

# Kn-Live-Dbg

Kn-Live-Dbg is a Windows kernel live-debugging experiment shaped after the useful part of LiveKD: the kernel driver exposes narrow memory primitives, while the user-mode console owns service lifecycle, symbol loading, type interpretation, and operator UX.

## Demo

https://github.com/user-attachments/assets/f3542a85-c960-46f2-a151-fdd23a8294a6

If the embedded video does not render, open the [README-sized demo](https://github.com/kernullist/kn-live-dbg/blob/HEAD/demo/kn-live-dbg-demo-readme.mp4) or the [full-resolution demo](https://github.com/kernullist/kn-live-dbg/blob/HEAD/demo/kn-live-dbg-demo.mp4).

### AI Command Demo

<video src="demo/kn-live-dbg-demo-ai.mp4" controls muted playsinline width="100%"></video>

If the AI command demo does not render inline, open [demo/kn-live-dbg-demo-ai.mp4](https://github.com/kernullist/kn-live-dbg/blob/HEAD/demo/kn-live-dbg-demo-ai.mp4).

## Scope and Signing Notice

This tool is built for defensive Windows security research, anti-cheat research, driver diagnostics, and controlled lab analysis. It is not designed to bypass Windows Code Integrity and does not include Code Integrity bypass functionality. To load the driver, use…
