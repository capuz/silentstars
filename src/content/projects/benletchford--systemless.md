---
repo: "benletchford/systemless"
name: "systemless"
description: "System-free & ROM-free classic Mac high-level emulator / runtime for 68k games and apps on modern systems written in Rust"
readmeQualityOk: true
url: "https://github.com/benletchford/systemless"
homepage: "https://systemless.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 25
forks: 1
openIssues: 6
closedIssues: 56
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-31T08:16:44Z"
lastCommitAt: "2026-07-29T06:12:29Z"
lastReleaseAt: "2026-07-26T04:32:42Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 51
maintainers: ["benletchford", "github-actions[bot]", "rlanday"]
openGraphImageUrl: "https://opengraph.githubassets.com/80db280cdbc1c99bf2c445b48a328433a2b0f9426a55578e4ea2448382d29aca/benletchford/systemless"
---

# systemless

Systemless is a high-level runtime for 68k classic Macintosh applications and
games, written in Rust.

It interprets guest 68k code with the [`m68k`](https://crates.io/crates/m68k)
crate and handles Mac OS A-line traps in native Rust. That lets packaged Mac
applications run without a Mac ROM image, a full System install, or hardware
emulation.

See it running in the browser: **[Marathon](https://systemless.org/marathon)**
and **[Escape Velocity](https://systemless.org/escape-velocity)**. More demos
are available at <https://systemless.org/>.

## Status

Systemless is focused on real 68k applications that use the classic Mac Toolbox.
The HLE now covers the major runtime surfaces needed by interactive software:

- Memory Manager handles, pointers, zones, low-memory globals, and common
  exception paths.
- Resource Manager, Segment Loader, File Manager calls, and an in-memory
  HFS-like VFS with data and resource forks.
- QuickDraw ports, regions, text, shapes, PICT, CopyBits, color tables,
  offscreen GWorlds, cursors, and 1bpp/8bpp framebuffers.
- Event, Menu, Window, Control, Dialog, TextEdit, Cursor, Process, Sound,
  SANE, and common Toolbox utility traps.
-…
