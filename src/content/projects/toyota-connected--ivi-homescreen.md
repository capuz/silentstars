---
repo: "toyota-connected/ivi-homescreen"
name: "ivi-homescreen"
description: "Flutter Linux C++ embedder for desktop and embedded displays, with Wayland, DRM/KMS, EGL, Vulkan, and software backends"
url: "https://github.com/toyota-connected/ivi-homescreen"
language: "C++"
languages: ["C++"]
languagePcts: [83]
topics: ["flutter", "flutter-embedder", "wayland", "embedded-linux", "linux", "toyota-flutter", "toyota", "embedded-flutter", "drm-kms", "drm-kms-egl"]
stars: 371
forks: 55
openIssues: 7
closedIssues: 28
watchers: 12
contributors: 10
recentReleases: 0
createdAt: "2021-08-31T22:16:24Z"
lastCommitAt: "2026-06-28T03:11:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 36
maintainers: ["jwinarske", "kerberjg"]
openGraphImageUrl: "https://opengraph.githubassets.com/afc849ebc47c1eb7c15e094024cc6928aca55585af8669a123cda275693ee6ed/toyota-connected/ivi-homescreen"
---

# ivi-homescreen

Flutter Linux CPP Embedder

#### Discord Server https://discord.gg/V5uWD9fvws

## Highlights

* Desktop Plugin Registry
    * Flutter Pigeon CPP compatible
    * Plugins modeled after Window CPP
    * Plugins enabled/disabled via CMake
    * Firestore first party compatible
* Desktop Texture Registry
    * Camera first party compatible
    * Video Player first party compatible
* Platform View Framework
    * AndroidView widget compatible
* Backend Support
    * EGL
    * Vulkan (first Flutter embedder to support this)
    * Wayland Leased DRM (coming soon)
    * DRM/KMS (coming soon)
* Same source code runs on Desktop and embedded Linux image
    * Ubuntu 18+
    * Fedora 33+
    * Yocto Dunfell/Kirkstone/Scarthgap

## Plugins

ivi-homescreen plugins are located at https://github.com/toyota-connected/ivi-homescreen-plugins

There are two ways to reference this repo:

1. Clone plugins repo to root of ivi-homescreen folder
2. Set PLUGIN_DIR to repo path. -DPLUGIN_DIR=<my path>

## Logging

Logging level support

* trace
* debug
* info
* warn
* error
* critical
* off

If environmental variable SPDLOG_LEVEL is not set, logging defaults to info.

To set logging to…
