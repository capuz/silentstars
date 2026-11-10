---
repo: "chteau/rbx-native"
name: "rbx-native"
description: "Unofficial, native Roblox Studio–style editor written in Rust with GPUI and wgpu. It opens, renders and edits .rbxl/.rbxlx places, and ships its own parsers, reflection database and sandboxed Luau runtime."
readmeQualityOk: true
url: "https://github.com/chteau/rbx-native"
homepage: "https://rbxnative.chteau.bzh/"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 14
forks: 6
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-09-14T20:36:03Z"
lastCommitAt: "2026-11-10T11:38:07Z"
lastReleaseAt: "2026-11-09T22:00:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 59
maintainers: ["chteau"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc085e5fb5b321c120649483a99f88b33b8ac5f234b0190df0fd17bd13776c13/chteau/rbx-native"
---

rbx-native

rbx-native is a Roblox Studio replacement for Linux and Windows, written from
scratch in Rust. It reads and writes place and model files (binary and XML),
renders them with wgpu, runs Luau, talks to Open Cloud, and the editor tries
to look and feel as close to Studio as I can get it.

This is an unofficial community project. It isn't affiliated with or endorsed
by Roblox Corporation, and "Roblox" is their trademark.

## Status

Pre-alpha, but moving fast. The file format side (`rbx_dom`, `rbx_binary`,
`rbx_xml`, `rbx_reflection`, `rbx_mesh`) is solid and round-trip tested on
real files. The viewer (`rbx_viewer`) and the editor (`rbx_studio`, binary
`rbxstudio`) work on real places: you can open them, edit them, script them,
animate rigs and playtest. A lot is still approximated or missing though.
[ROADMAP.md](https://github.com/chteau/rbx-native/blob/HEAD/ROADMAP.md) has the full list of what's done, what's faked and
what's out of scope on purpose.

## About AI

I use AI coding tools a lot on this project, and I'd rather say it than hide
it. That said, nothing lands without me going through the code myself, and
every PR gets tested against real Roblox Studio before…
