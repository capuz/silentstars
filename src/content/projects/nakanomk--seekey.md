---
repo: "Nakanomk/Seekey"
name: "Seekey"
description: "A tool to show your key inputs on wayland."
readmeQualityOk: true
url: "https://github.com/Nakanomk/Seekey"
homepage: "https://www.nkns.cc/blog/seekey"
language: "C"
languages: ["C"]
languagePcts: [94]
stars: 32
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-06-17T15:52:50Z"
lastCommitAt: "2026-11-27T13:00:59Z"
lastReleaseAt: "2026-11-27T13:00:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 20
maintainers: ["Nakanomk", "fzhnf"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b1fed18b20bd2c02d298b50a13448c39daac4054dbadf8b1f6ba2d122814c39/Nakanomk/Seekey"
discussionCount: 2
---

# ⌨️ Seekey

**A tiny Wayland keyboard visualizer.**

Shows your last keystrokes as floating bubbles anchored to the bottom of the
screen — see shortcuts, modifiers, and typed text at a glance, without
breaking your flow.

**[English](https://github.com/Nakanomk/Seekey/blob/HEAD/README.md)** · **[简体中文](https://github.com/Nakanomk/Seekey/blob/HEAD/README.zh-CN.md)** · **[📖 Wiki](https://github.com/Nakanomk/Seekey/wiki)**

---

## ✨ What is this?

Seekey is a keyboard visualizer for Linux Wayland. It listens to your
keyboard (and optionally your mouse) and draws the last few keys as little
rounded bubbles anchored to the bottom edge of the screen.

> Great for **streaming & recording**, **live tutorials**, or just catching
> your own accidental modifier presses and typos.

It is **not** a keylogger — it only displays the most recent few keys
temporarily, reads input straight from the kernel (`/dev/input/event*`), and
never claims keyboard focus. The overlay is **click-through**, so it never
gets in the way of whatever is underneath.

---
