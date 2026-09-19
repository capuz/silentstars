---
repo: "grizzlypeak3d/tlRender"
name: "tlRender"
description: "tlRender is an open source library for building playback and review applications for visual effects, film, and animation."
readmeQualityOk: true
url: "https://github.com/grizzlypeak3d/tlRender"
language: "C++"
languages: ["C++"]
languagePcts: [89]
topics: ["editorial", "timeline", "renderer", "opengl"]
stars: 234
forks: 28
openIssues: 28
closedIssues: 45
watchers: 11
contributors: 11
recentReleases: 0
createdAt: "2021-04-26T21:23:17Z"
lastCommitAt: "2026-09-19T02:47:07Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 91
undervaluedScore: 37
maintainers: ["darbyjohnston", "j-essie"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6385b286e52473da3a9a8755a848215904b4faf89203dca6e623c10fee2c85c/grizzlypeak3d/tlRender"
---

# &nbsp;tlRender

tlRender is an open source library for building playback and review
applications for visual effects, film, and animation.

The library can render and playback timelines with multiple video clips,
image sequences, audio clips, and transitions. Examples are provided for
integrating the library with OpenGL applications.

The library is written in C++ and uses the CMake build system, with Python
bindings on PyPI:

```sh
pip install tlRender
```

These screenshots show an example application built with tlRender. The
application is comparing two images with a wipe and horizontal layout.

Features:
* Support for timelines, image sequences, movies, and audio files
* A/B comparison with wipe, overlay, and difference modes
* Color management with OpenColorIO
* Multi-track audio with variable speed and reverse playback
* Experimental support for USD files
* Available for Linux, macOS, and Windows

## Quick start

A window that plays a timeline, movie, or image sequence given on the
command line.

### C++

```cpp
#include <tlRender/UI/Init.h>
#include <tlRender/UI/Viewport.h>
#include <tlRender/Timeline/Player.h>

#include <ftk/UI/App.h>
#include <ftk/UI/MainWindow.h>…
