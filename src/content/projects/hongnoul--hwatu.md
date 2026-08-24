---
repo: "hongnoul/hwatu"
name: "hwatu"
description: "Fast, interruptible verification browser for AI coding agents: 35 ms checks, pixel diffs, live human hand-off"
readmeQualityOk: true
url: "https://github.com/hongnoul/hwatu"
homepage: "https://hongnoul.github.io/hwatu/"
language: "Rust"
languages: ["Rust"]
languagePcts: [68]
topics: ["browser", "rust", "tiling-window-manager", "wayland", "webkit", "linux", "webkitgtk", "agent-tools", "ai-agents", "browser-automation"]
stars: 78
forks: 3
openIssues: 2
closedIssues: 21
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-18T02:30:54Z"
lastCommitAt: "2026-08-24T04:23:03Z"
lastReleaseAt: "2026-08-01T07:39:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 41
maintainers: ["hongnoul"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1304537472/1fcade1a-abf8-40e5-a7e7-459ba49a761c"
---

# hwatu

**Your agents are blind without hwatu**

</div>

hwatu is a visual verification harness for coding agents, built as a
WebKit daemon. Instead of "looks right to me", your agent gets
**one-call verified page checks in ~35 ms**, **pixel-diff scores it
can climb**, **animations as numbers**, and **headless windows that
never steal your focus**, at any parallelism.

For human-in-the-loop tasks (e.g. Captcha), hwatu features a lightweight
visual verification frontend renderer written in WebKit and a caller
function. For tiling WMs (Hyprland, sway, **niri**, i3), hwatu is
intended to replace your primary daily browser. Our current goal is to
provide scrolling short-form content experience in mobile-level framerate.

## Documents

- [Vision](https://github.com/hongnoul/hwatu/blob/HEAD/VISION.md): durable product principles, native platform strategy, swarm model
- [Agent guide](https://github.com/hongnoul/hwatu/blob/HEAD/docs/agents.md): protocol, primitives, verification loops
- [Human guide](https://github.com/hongnoul/hwatu/blob/HEAD/docs/human.md): daily driving hwatu in a tiling WM, keybinds, media, hand-off
-…
