---
repo: "StereoKit/sk_app"
name: "sk_app"
description: "Cross-platform abstraction for windowing, Vulkan surfaces, and input."
readmeQualityOk: true
url: "https://github.com/StereoKit/sk_app"
language: "C"
languages: ["C"]
languagePcts: [80]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-20T05:30:15Z"
lastCommitAt: "2026-08-12T05:15:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 35
maintainers: ["maluoi"]
openGraphImageUrl: "https://opengraph.githubassets.com/5bf4bb88df1e7bf8034fba44502662b3733b82c06797742be07e1d7f836de4c2/StereoKit/sk_app"
---

# sk_app

A small cross-platform library for windows / vulkan surfaces / input / OS functionality. Targets Win32, Linux, Android, and MacOS.

## Building

From the project root:

### Linux

Linux has both a Wayland and an X11 backend, picked at runtime. Wayland is
preferred when a compositor is present, and X11 is used otherwise. Neither
library is linked: both are loaded with `dlopen`, so one binary runs on a
Wayland-only system, an X11-only system, or headless. Override the choice with
`SKA_VIDEODRIVER=wayland|x11`, or the `linux_backend` field in `ska_settings_t`.

Only headers are needed to build. The Wayland protocol sources are generated
ahead of time and committed under `src/wayland`, so neither
`wayland-scanner` nor `wayland-protocols` is a build dependency; refresh them
with `tools/gen_wayland_protocols.sh` when adding a protocol.

Windows always render at the display's native resolution: sizes are screen
coordinates, `ska_window_get_drawable_size` is the pixel framebuffer, and
`ska_window_get_dpi_scale` is the factor to raster UI by. For an application
icon, install a `.desktop` file and set `ska_settings_t.app_id` to match its
`StartupWMClass`; this is the only way a…
