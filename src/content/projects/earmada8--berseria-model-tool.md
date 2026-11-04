---
repo: "eArmada8/berseria_model_tool"
name: "berseria_model_tool"
description: "A tool to get models in and out of Tales of Berseria / Zestiria / Symphonia"
readmeQualityOk: true
url: "https://github.com/eArmada8/berseria_model_tool"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 1
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-02-08T21:28:04Z"
lastCommitAt: "2026-11-04T02:57:12Z"
lastReleaseAt: "2025-11-19T00:50:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 44
maintainers: ["eArmada8"]
openGraphImageUrl: "https://opengraph.githubassets.com/c94d1983a1e08248e695911ba38f3e165d7338a8fb3d970ec3cfc29cb3ba2f82/eArmada8/berseria_model_tool"
---

# Tales of Berseria mesh toolset
Scripts to get the mesh data in and out of the .TOMBDLB_D/.TOMDLP_P files from Tales of Berseria, Tales of Zestiria and Tales of Symphonia (PC).  The meshes are exported as raw buffers in the .fmt/.ib/.vb/.vgmap that are compatible with DarkStarSword Blender import plugin for 3DMigoto.  A glTF file is also exported for purposes of weight painting and texture assignment, but the glTF file is not used for modding.

*NOTE:*  There are multiple mesh types, denoted by the upper four bits of the flag byte (`0x00` and `0x40`: not animated e.g weapons, `0x50` skeletally animated e.g. bodies, `0x70` unsure animation e.g. faces).  While berseria_export_meshes.py is able to get mesh data out of all four, a lot of data is not interpreted for `0x40`/`0x70` meshes and berseria_import_meshes.py cannot rebuild them.

## Tutorials:

Please see the [wiki](https://github.com/eArmada8/berseria_model_tool/wiki), and the detailed documentation below.

## Credits:
I am as always very thankful for the dedicated reverse engineers at the Tales of ABCDE modding discord and the Kiseki modding discord, for their brilliant work, and for sharing that work so freely.  I am also…
