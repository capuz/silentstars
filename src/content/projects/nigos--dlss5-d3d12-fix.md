---
repo: "NIGos/dlss5-d3d12-fix"
name: "dlss5-d3d12-fix"
description: "Makes DLSS 5 Neural Rendering work in Resonance: A Plague Tale Legacy, and in any other D3D12 game whose DLSS output has a mip chain"
readmeQualityOk: true
url: "https://github.com/NIGos/dlss5-d3d12-fix"
language: "C++"
languages: ["C++"]
languagePcts: [100]
topics: ["d3d12", "directx12", "dlss", "game-modding", "ngx", "nvidia", "reshade", "upscaling", "dlss-neural-rendering", "a-plague-tale"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-08-29T09:14:19Z"
lastCommitAt: "2026-08-29T17:26:46Z"
lastReleaseAt: "2026-08-29T14:42:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 23
maintainers: ["NIGos"]
openGraphImageUrl: "https://opengraph.githubassets.com/be5e42649e9e7409d47fe7a3433713a4182cc4e3d8e864e22c4023530435d34d/NIGos/dlss5-d3d12-fix"
---

# DLSS 5 D3D12 Mip Fix

A ReShade add-on that makes a DLSS 5 neural-rendering add-on work in a DirectX 12
game whose DLSS output carries a mip chain.

**Written for Resonance: A Plague Tale Legacy** — D3D12, Streamline, with Ray
Reconstruction and Frame Generation enabled. That is the game it was built
against and the only one it is known to fix.

Nothing in the code is specific to it: every size, format and resource is read
from the parameter block the caller passes. Whether other titles carry the same
defect is an open question, and the log answers it in the first second of play.

## The symptom

The DLSS 5 add-on's panel shows that it can see the game's DLSS calls, but never
produces a frame:

```
DLSSNR: STANDBY/FAILED
NGX hooks: creates 2 | evaluations 11960
Streamline direct fallback: 10885 attempts | 0 success
Successful NR frames: 0 | Guides: 0x0 | Output: 0x0
Latest NR NGX result: 0xBAD00005
```

Thousands of attempts, zero successes, and the guides never resolve.

## The cause

That add-on requires the DLSS output texture to have exactly one mip level. When
it doesn't, the add-on returns without doing anything and without logging
anything — indistinguishable from never…
