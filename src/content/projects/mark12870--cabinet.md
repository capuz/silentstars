---
repo: "Mark12870/cabinet"
name: "cabinet"
description: "Tool that packages Wine-bridged Windows VST plugins as a Flatpak, giving each plugin its own isolated prefix"
readmeQualityOk: true
url: "https://github.com/Mark12870/cabinet"
language: "C#"
languages: ["C#"]
languagePcts: [80]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-16T09:33:35Z"
lastCommitAt: "2026-09-28T10:06:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["Mark12870"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cb06033c3527d4b944080fa6e2d392ddcb2fc0a53c7906d744d3aa65426c6fc/Mark12870/cabinet"
---

# Cabinet

Windows VST plugins on Linux as a Flatpak, aiming to work out of the box: install a plugin and it shows up in your DAW,
with no Wine or yabridge to set up. Plugins get **Wine prefixes of their own**, one per vendor or product family,
instead of a single prefix every installer fights over. Built for immutable systems like Fedora Silverblue. The bridging
is [yabridge](https://github.com/robbert-vdh/yabridge), with a few Cabinet patches, and the compatibility layer is
[Wine](https://www.winehq.org); Cabinet bundles both and wires the result to your DAW.

## Install

```sh
flatpak remote-add --if-not-exists cabinet \
  https://mark12870.github.io/cabinet/io.github.mark12870.cabinet.flatpakrepo
flatpak install cabinet io.github.mark12870.cabinet
```

**A DAW installed outside Flatpak needs nothing more.** Windows plugins land in `~/.vst3/cabinet/windows`, native
ones in `cabinet/native` (LV2 straight in `~/.lv2`), and the same under `~/.clap` and `~/.vst`, which such a DAW scans.

**A Flatpak DAW has to be enrolled first, once.** Its sandbox hides Cabinet's yabridge, your prefixes and the Wine that
runs them, so without this it sees no Windows plugins at all. Look up its id…
