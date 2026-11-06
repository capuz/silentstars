---
repo: "pcppcp/op1r-src"
name: "op1r-src"
description: "GPL sources for the op1r firmware mod. PRs are welcome!"
readmeQualityOk: true
url: "https://github.com/pcppcp/op1r-src"
language: "C"
languages: ["C"]
languagePcts: [87]
stars: 20
forks: 15
openIssues: 0
closedIssues: 2
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2026-10-13T14:06:10Z"
lastCommitAt: "2026-11-06T11:20:51Z"
status: "newborn"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 96
undervaluedScore: 52
maintainers: ["Hundekraft", "aiaaaa", "AnthonyBerg1983"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6102e1a8ccff94a2d334e303c93ca78eef5afc61139d1fe588329b68eba203b/pcppcp/op1r-src"
---

# op1r-src

Source code of **op1r**, custom firmware for the Teenage Engineering OP-1 (firmware R246): custom synth engines and
effects with their own screens, quad LFO, euclid and dots sequencers, USB audio track outs, tape markers, count-in,
punch in/out, sample editor, resource monitor and more.

- **Users:** you don't need this repository. Patch your firmware with
  [op1r](https://github.com/pcppcp/op1r) (also in the browser).
- **Plugin authors** (new synths / effects): read [synth_sdk/PLUGINS.md](https://github.com/pcppcp/op1r-src/blob/HEAD/synth_sdk/PLUGINS.md). You can write and
  test a plugin on a PC without any firmware.
- **Firmware builders:** see below.

This repository contains no Teenage Engineering firmware. Building needs your own copy of the official
`op1_246.op1`. The next op1r release (op1r 27) is the first one built from this repository.

## Layout

| path | content |
|---|---|
| `synth_sdk/plugins/` | synth engines and effects, one folder each (`plugin.json` + C + screen) |
| `synth_sdk/template/` | starting points for a new synth / effect |
| `synth_sdk/op1_plugin.h` | the plugin API |
| `synth_sdk/dispatcher.c`, `hook.S`, `link.ld` | hooks into the…
