---
repo: "danieljaouen/lepton"
name: "lepton"
description: "Lepton is a fully-functioning Unix-like OS written entirely in Elixir.  Made With Claude."
readmeQualityOk: true
url: "https://github.com/danieljaouen/lepton"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-11-17T00:04:59Z"
lastCommitAt: "2026-11-19T12:01:03Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 45
maintainers: ["danieljaouen", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/be6c0a2614aca1cffd7966185ce045f8dd2472a9529f3708fa1e373e976375a6/danieljaouen/lepton"
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
