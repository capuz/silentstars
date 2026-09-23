---
repo: "beatreichenbach/realflare"
name: "realflare"
description: "Physically-Based Lens Flare Tool"
readmeQualityOk: true
url: "https://github.com/beatreichenbach/realflare"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 94
forks: 5
openIssues: 3
closedIssues: 13
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2022-07-25T05:22:56Z"
lastCommitAt: "2026-09-23T08:47:04Z"
lastReleaseAt: "2023-05-22T06:48:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 43
maintainers: ["beatreichenbach"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cb7584bf03c635a5a688f9b249473344a4a55bb2fef8e7b71bdeece58ce0114/beatreichenbach/realflare"
---

# Realflare

Physically-based lens flare rendering using spectral raytracing on the GPU.

https://github.com/user-attachments/assets/3ff69249-5d84-454b-83e9-51f4b0e06797

## Installation

### Requirements

- **Python 3.11–3.13** (OpenEXR ships no 3.14 wheels yet)
- **OpenGL 4.3+** (compute shaders required)
- **Discrete GPU** recommended (NVIDIA/AMD with 4GB+ VRAM)

| Platform        | Status            | Notes                                       |
|-----------------|-------------------|---------------------------------------------|
| Linux (Wayland) | Partial           | Use `egl` backend and `wayland` Qt Platform |
| Linux (X11)     | Supported         | Use `glx` backend and `xcb` Qt Platform     |
| Windows         | Supported         | Install GPU drivers                         |
| macOS           | **Not supported** | Apple stopped at OpenGL 4.1                 |

### Quick Install (Linux)

```bash
git clone https://github.com/beatreichenbach/realflare.git
cd realflare
chmod +x scripts/install.sh
./scripts/install.sh
```

### Wayland

If not automatically detected:
```bash
export QT_QPA_PLATFORM=wayland
export PYOPENGL_PLATFORM=egl
```

### NVIDIA

Force to use the…
