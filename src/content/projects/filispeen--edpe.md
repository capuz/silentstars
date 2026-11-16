---
repo: "filispeen/EDPE"
name: "EDPE"
description: "Mod for Elite Dangerous that adds DLSS, FSR for Upscaling and Anti-Aliasing"
readmeQualityOk: true
url: "https://github.com/filispeen/EDPE"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["elite-dangerous", "elite-dangerous-tools", "elitedangerous"]
stars: 10
forks: 1
openIssues: 3
closedIssues: 8
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-09-25T19:08:33Z"
lastCommitAt: "2026-11-16T04:23:15Z"
lastReleaseAt: "2026-10-21T18:17:58Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 84
undervaluedScore: 54
maintainers: ["filispeen"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1388082174/f7be1a31-8d54-4cab-be5d-02dac078f5f1"
fundingLinks: ["CUSTOM:https://donatr.ee/filispeen"]
---

# EDPE<br><sub>(Elite Dangerous Performance Enhanced)</sub>

EDPE is a `dxgi.dll` proxy for the 2D Direct3D 11 renderer in Elite Dangerous (Cobra engine). It intercepts DXGI and Direct3D 11 calls to add temporal anti-aliasing and upscaling, leaving game binaries, gameplay, and network code untouched.

## Current status (`v0.7.1`)

As of November 2026 (`v0.7.1`), the working pipeline covers:

* `dxgi.dll` proxy forwarding system DXGI calls while hooking `IDXGIFactory::CreateSwapChain`, `IDXGISwapChain::Present`, and `D3D11CreateDevice` / `D3D11CreateDeviceAndSwapChain` via IAT. Constant buffer discovery stops once the scene camera is found, `Map()`/`Unmap()` and `OMSetRenderTargets()` use pre-filtered, per-frame memoized camera/jitter paths and a persistent 4-way RTV metadata cache, and `edpe.log` writes on a dedicated background worker thread.
* Reversed-Z scene depth discovery (`DSV #2`, `DXGI_FORMAT_R32G8X24_TYPELESS`, $B=0.025$) and once-per-frame parsing of the 5376-byte `CB0` camera buffer, with a 2nd-order kinematic filter and projection fallback to reject auxiliary eye, mirror, canopy reflection, and sagittal probes.
* Halton `(2,3)` subpixel projection jitter injected into…
