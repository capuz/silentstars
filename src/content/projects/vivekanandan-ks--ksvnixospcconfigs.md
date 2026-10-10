---
repo: "vivekanandan-ks/ksvnixospcconfigs"
name: "ksvnixospcconfigs"
description: "pesonal nixospc config files"
readmeQualityOk: true
url: "https://github.com/vivekanandan-ks/ksvnixospcconfigs"
language: "Nix"
languages: ["Nix"]
languagePcts: [80]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-01-09T15:26:45Z"
lastCommitAt: "2026-10-10T09:24:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 68
maintainers: ["vivekanandan-ks"]
openGraphImageUrl: "https://opengraph.githubassets.com/de58816773c1deaafcd081fe8b6305382642d82e4ba6ff643e2333fe81150e51/vivekanandan-ks/ksvnixospcconfigs"
---

This is my personal config, each step is taken towards a scalable way to maintain configs and keep aspects together and I am currently following dendritic pattern through flake-parts. All .nix file is a flake-parts module and imported recursively in an easy way thanks to vic's import-tree.

And the flake-file of this project is also crucial as it makes me group aspects in same file. Dont want something? Just move the file out of the import-tree folder (flakepartsModules in this case). No need to hardcode any path as everything is a top level flake-parts module. This way simplifies tons of things and reduce some config efforts debt later.

I have adopted nix multiverse project for this config. Feel free to DM me on migration help.
And with flake-file's help, it's possible to ditch the nixpkgs inputs url and replace it with mv generated rev. so your workflow should never do flake update and then run the command.
ur workflow is, update flake, run write-flake and then build command and then commit. This order is important

The configs are guardailed with treefmt(which inclused deadnix, statix, nixf-diagnose, alejandra formatting and formatting for other file formats too, etc),…
