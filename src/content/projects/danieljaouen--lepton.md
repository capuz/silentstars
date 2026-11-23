---
repo: "danieljaouen/lepton"
name: "lepton"
description: "Lepton is a fully-functioning Unix-like OS written entirely in Elixir.  Made With Claude."
readmeQualityOk: true
url: "https://github.com/danieljaouen/lepton"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-11-17T00:04:59Z"
lastCommitAt: "2026-11-23T13:28:45Z"
status: "thriving"
tags: []
healthScore: 70
undervaluedScore: 35
maintainers: ["github-actions[bot]", "danieljaouen"]
openGraphImageUrl: "https://opengraph.githubassets.com/8df8c6fcc8e483bc68f32dd3e365243e17397ece183c6e79aa9eff75dab81bea/danieljaouen/lepton"
---

# Lepton OS

A Unix-like operating system for aarch64 whose entire userland (init, drivers
loading, networking, terminals, shell, coreutils, editor, multiplexer, git,
GitHub CLI, test runner) is written in Elixir and runs on the BEAM as PID 1.
It boots from a UEFI ISO in UTM or QEMU and is configured by **your dotfiles**:
Spacemacs keybindings, tmux key tables, git aliases, zsh aliases and the
starship prompt are read from the files themselves, not re-typed.

```
 ┌──────────────────────────────────────────────────────────────────────┐
 │  Elixir (this repo)                                                  │
 │   lsh · coreutils · le (Spacemacs) · tmux · git · gh · www · svc     │
 │   TTY/line discipline · VT emulator · netlink + DHCP · init (PID 1)  │
 ├──────────────────────────────────────────────────────────────────────┤
 │  Erlang/OTP 29 runtime (ERTS, kernel, stdlib, ssl, crypto, inets)    │
 ├──────────────────────────────────────────────────────────────────────┤
 │  Linux 6.18 kernel (Alpine virt) · glibc · GRUB (UEFI)               │
 └──────────────────────────────────────────────────────────────────────┘
```
