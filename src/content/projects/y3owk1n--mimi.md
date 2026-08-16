---
repo: "y3owk1n/mimi"
name: "mimi"
description: "A cli for macOS windows and spaces, with a simple menubar indicator."
readmeQualityOk: true
url: "https://github.com/y3owk1n/mimi"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["macos", "cli", "macos-spaces", "workspace"]
stars: 36
forks: 2
openIssues: 0
closedIssues: 64
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-31T09:05:03Z"
lastCommitAt: "2026-08-16T04:09:49Z"
lastReleaseAt: "2026-06-15T01:38:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 46
maintainers: ["y3owk1n", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f7893d55259a3f100d88720efc819a9d764ce2346952761e130f7b51a8cc9f7/y3owk1n/mimi"
fundingLinks: ["GITHUB:https://github.com/y3owk1n"]
discussionCount: 0
---

# mimi

**macOS windows and spaces. From the terminal.**

</div>

---

https://github.com/user-attachments/assets/1b21b596-1578-4344-96d3-eaea8a5ab9c0

---

You already know your way around a terminal. Why are you still reaching for the trackpad just to move a window?

**mimi** gives you one-shot commands to jump spaces, move windows, cycle focus, and resize — bind them to hotkeys, drop them in dotfiles, wire them to shell hooks. No SIP disable. No tiling paradigm to learn. Just commands that do what they say.

```bash
mimi action space 2                      # jump to space 2
mimi action move_window_to_space next    # throw window forward
mimi action resize_window left-half      # tile left
mimi action focus_window                 # cycle focus
```

> **Early development** — config format, CLI, and behavior may change between releases.

---

## Install

```bash
brew tap y3owk1n/tap
brew install --cask y3owk1n/tap/mimi
```

Grant **Accessibility** in **System Settings → Privacy & Security → Accessibility**, then start using it immediately. No daemon required.

Other options (Nix flake, build from source) → [Installation…
