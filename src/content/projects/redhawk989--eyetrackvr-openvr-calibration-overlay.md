---
repo: "RedHawk989/EyeTrackVR-OpenVR-Calibration-Overlay"
name: "EyeTrackVR-OpenVR-Calibration-Overlay"
description: "C++ 3D, 9-Point Calibration Overlay for OpenVR and SteamVR"
url: "https://github.com/RedHawk989/EyeTrackVR-OpenVR-Calibration-Overlay"
language: "C++"
languages: ["C++"]
languagePcts: [95]
topics: ["eyetracking", "openvr", "steamvr-overlay"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-10-07T19:52:17Z"
lastCommitAt: "2026-06-28T01:46:04Z"
lastReleaseAt: "2026-01-17T19:09:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 55
undervaluedScore: 45
maintainers: ["RedHawk989"]
openGraphImageUrl: "https://opengraph.githubassets.com/56b27c2b9a1f12e1c9174f7b66d06e5f04d0314aa53ec39978f34995bb096430/RedHawk989/EyeTrackVR-OpenVR-Calibration-Overlay"
---

# EyeTrackVR Calibration Overlay

Cross-platform **OpenXR + Vulkan** eye-tracking calibration overlay for EyeTrackVR.
Renders a follow-the-dot target (plus instruction text) in the headset and streams
capture signals to the EyeTrackVR Python app over localhost UDP.

Previously a Windows-only OpenVR/SteamVR overlay; now a standalone OpenXR
application that runs on any PC OpenXR runtime (SteamVR, WMR, Oculus, Monado) on
**Windows and Linux**.

## Why a standalone app (not an "overlay")

OpenXR has no portable overlay extension (`XR_EXTX_overlay` is Monado-only), so the
tool runs as a focused OpenXR session that owns the headset for the duration of a
calibration. Targets are placed using the runtime's authoritative per-eye field of
view (`xrLocateViews` → `XrFovf`): each eye's frustum is intersected with the
overlay plane and the two are overlapped to get the **binocular** region, centred on
the true optical axis. This guarantees every target is inside both eyes' visible
field and centred correctly — fixing the out-of-FOV / too-high/low targets some
users hit with the old build.

The dot and text are drawn as head-locked `XrCompositionLayerQuad` layers; Vulkan is
used only to upload…
