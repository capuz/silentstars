---
repo: "stevereaver/uaos"
name: "uaos"
description: "A bare-metal x86_64 hobby operating system inspired by the Amiga Workbench 3.x aesthetic, built from scratch using NASM, C11, GRUB2, and OVMF/UEFI."
readmeQualityOk: true
url: "https://github.com/stevereaver/uaos"
language: "C"
languages: ["C"]
languagePcts: [96]
stars: 13
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-23T04:17:17Z"
lastCommitAt: "2026-10-06T10:39:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 48
maintainers: ["stevereaver"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fc36ef99b40d6ee83cbc51654f58928c77fedf8d66dc17cb892db83485be687/stevereaver/uaos"
---

# Ultimate Amiga OS (UAOS)

A bare-metal x86_64 hobby operating system inspired by the Amiga Workbench 3.x aesthetic, built from scratch using NASM, C11, GRUB2, and OVMF/UEFI.

UAOS boots directly from a hybrid ISO via GRUB2 Multiboot2, initialises a linear framebuffer, and presents a graphical Workbench-style desktop with a window manager, PS/2 mouse and keyboard support, and an interactive shell.

---

## Features

- **Workbench-style desktop** — solid Amiga grey backdrop, menu bar, status bar, disk icons
- **Window manager** — multiple windows, click-to-focus, z-order, title bar drag, resize grip
- **PS/2 mouse** — IRQ12-driven relative tracking, 16×16 Amiga-style software cursor
- **PS/2 keyboard** — IRQ1-driven, scancode set 1, ring buffer
- **Shell window** — scrollable history, input line, built-in commands: `help`, `cd`, `alias`, `unalias`, `set`, `unset`, `path`, `setenv`, `unsetenv`, `showconfig`
- **Native C: commands** — 65+ x86-64 kernel commands including `version`, `mem`, `libs`, `dir`, `makedir`, `delete`, `type`, `copy`, `rename`, `echo`, `protect`, `attr`, `info`, `date`, `which`, `disks`, `fdisk`, `format`, `assign`, `execute`, `loadwb`, `run`, `ping`,…
