---
repo: "cutefishos/cutefish-toolkit"
name: "cutefish-toolkit"
description: "The UI toolkit of the Cutefish desktop: a Wayland client toolkit drawing with Skia"
readmeQualityOk: true
url: "https://github.com/cutefishos/cutefish-toolkit"
homepage: "https://cutefish.org"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 230
forks: 46
openIssues: 0
closedIssues: 26
watchers: 3
contributors: 13
recentReleases: 0
createdAt: "2021-03-16T03:17:35Z"
lastCommitAt: "2026-11-05T00:20:25Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 100
undervaluedScore: 44
maintainers: ["reionwong", "serjykalstryke"]
openGraphImageUrl: "https://opengraph.githubassets.com/18476cfc474afc2d936cd4f38f13d63a7def32226b698a1b8e7f77fec0f43b13/cutefishos/cutefish-toolkit"
fundingLinks: ["GITHUB:https://github.com/cutefishos"]
---

# Cutefish Toolkit

The UI toolkit of the Cutefish desktop: a Wayland client for
cutefish-compositor, drawing with Skia on GLES, with retained views, text
layout, controls and frame-paced animation.

## Dependencies

### Debian/Ubuntu

```shell
sudo apt install cmake ninja-build clang pkg-config python3 git \
    libwayland-dev wayland-protocols libegl-dev libgles-dev libxkbcommon-dev libsystemd-dev \
    libfontconfig-dev libfreetype-dev libharfbuzz-dev libicu-dev \
    libpng-dev libjpeg-dev zlib1g-dev libexpat1-dev \
    libwebp-dev libtiff-dev libheif-dev libjxl-dev
```

### Arch Linux

```shell
sudo pacman -S --needed base-devel cmake ninja clang pkgconf python git \
    wayland wayland-protocols libglvnd libxkbcommon systemd-libs fontconfig freetype2 harfbuzz icu \
    libpng libjpeg-turbo zlib expat libwebp libtiff libheif libjxl
```

## Build

Skia is fetched at a pinned revision and built as part of the project:

```shell
scripts/fetch-skia.sh
mkdir build
cd build
cmake ..
make
```

`examples/` has a demo window, `cutefish-toolkit-demo`, and
`cutefish-toolkit-gallery` with every control.

## License

BSD-3-Clause; see…
