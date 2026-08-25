---
repo: "tompassarelli/firn"
name: "firn"
description: "NixOS for the brave and true"
readmeQualityOk: true
url: "https://github.com/tompassarelli/firn"
language: "Shell"
languages: ["Shell"]
languagePcts: [60]
topics: ["configuration", "dotfiles", "flakes", "framework", "home-manager", "niri", "nix", "nixos", "stylix", "wayland"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-11T19:22:14Z"
lastCommitAt: "2026-08-25T04:09:58Z"
lastReleaseAt: "2026-05-05T09:33:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["tompassarelli"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1179186586/d3e8f1b0-ac83-4b09-84a4-63d0431d417c"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/firn-logo.png" width="150">
    <source media="(prefers-color-scheme: light)" srcset="assets/firn-logo-dark.png" width="150">
  </picture>
</p>

**firn is a typed front-end for NixOS and nix-darwin — it catches option
typos and type errors at the source line, before `nixos-rebuild` ever runs.**

Keeps the standard NixOS module model, swaps in a small Racket DSL
([beagle/nix](https://github.com/tompassarelli/beagle)) for authoring,
adds pre-eval diagnostics that catch option typos and type errors at
the source line — typically cutting edit/validate loops from
~30 seconds to ~5 seconds.

```
$ firn rebuild
modules/printing/default.bnix:6:7: unknown option services.pipwire.alsa.enable
  did you mean: services.pipewire.alsa.enable or services.pipewire.pulse.enable?
modules/foo/default.bnix:9:34: type mismatch at services.openssh.enable:
  expected bool, got string
hosts/laptop/configuration.bnix:11:47: type mismatch at boot.loader.systemd-boot.consoleMode:
  "atuo" not in enum {…} — did you mean "auto"?
```

`file:line:col` precision on the value, with did-you-mean suggestions,
before `nixos-rebuild` runs.…
