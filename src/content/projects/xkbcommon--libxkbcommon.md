---
repo: "xkbcommon/libxkbcommon"
name: "libxkbcommon"
description: "keymap handling library for toolkits and window systems"
readmeQualityOk: true
url: "https://github.com/xkbcommon/libxkbcommon"
homepage: "https://xkbcommon.org"
language: "C"
languages: ["C"]
languagePcts: [87]
topics: ["keyboard", "keyboard-layout", "keymap", "wayland", "x11", "xkb", "xkbcommon"]
stars: 372
forks: 147
openIssues: 35
closedIssues: 337
watchers: 17
contributors: 73
recentReleases: 0
createdAt: "2013-04-01T17:31:10Z"
lastCommitAt: "2026-09-12T08:04:36Z"
lastReleaseAt: "2025-04-26T19:42:45Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 97
undervaluedScore: 41
maintainers: ["wismill"]
openGraphImageUrl: "https://opengraph.githubassets.com/a06cd89c1b2ee14d15bcf2801474531eb392408bfdbfd3398dacabdfd52c9504/xkbcommon/libxkbcommon"
discussionCount: 12
---

# xkbcommon

**xkbcommon** is a keyboard keymap compiler and support library which
processes keymaps as defined by the [XKB] \(X Keyboard Extension) specification
(minus some legacy features). It also contains a module for handling *Compose*
and dead keys, a separate *registry* library for listing available keyboard
layouts and a fair set of <abbr title="Command-Line Interface">CLI</abbr> *tools* to support keyboard layouts development.

xkbcommon is the standard keymap handling library on Wayland and is used by
compositors, toolkits, and applications to handle keyboard state and translate
key events into characters and actions.

[XKB]: doc/introduction-to-xkb.md

## Quick Guide

### Introduction to XKB

See [Introduction to XKB][XKB] for the essentials of XKB concepts and how a
keymap is built.

### Features

xkbcommon implements <em>most of the [XKB] specification</em>, except for
some obscure features. xkbcommon has *notable additions* that lift hard-coded limitation of the X11 Protocol (e.g. keycodes and modifiers).

See the [Compatibility](https://github.com/xkbcommon/libxkbcommon/blob/HEAD/doc/compatibility.md) page for further details.

### Using the library

<dl>
<dt>…
