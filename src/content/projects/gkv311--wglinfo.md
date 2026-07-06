---
repo: "gkv311/wglinfo"
name: "wglinfo"
description: "wglinfo is a command-line tool printing information about OpenGL on Windows platform in similar way as glxinfo does on Linux"
readmeQualityOk: true
url: "https://github.com/gkv311/wglinfo"
language: "C++"
languages: ["C++"]
languagePcts: [76]
stars: 27
forks: 3
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2018-09-18T16:40:15Z"
lastCommitAt: "2026-07-06T07:04:50Z"
lastReleaseAt: "2026-02-06T03:52:45Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 87
undervaluedScore: 44
maintainers: ["gkv311", "theoparis"]
openGraphImageUrl: "https://opengraph.githubassets.com/3521f8d69974ca5f0e2b086e424ae370c085eae9081d82d4decf03c347e70c82/gkv311/wglinfo"
---

wglinfo - command line tool printing OpenGL information
=================================

`wglinfo` is a diagnostic tool printing information about *OpenGL* library on *Windows* system in a similar way as `glxinfo` does the job on *Linux*.
In case, if `libEGL.dll` (e.g. *Angle* or another implementation) is in `PATH`, it also prints information about `EGL`/`GLES`.

The output includes:

  * Platform (`EGL`, `WGL`, `GLX`, `CGL`)
    - Vendor, version and extensions list
  * OpenGL context (Compatibility and Core profiles).
    - Vendor, version, extensions list and API limits.
  * OpenGL ES context.
    - Vendor, version, extensions list and API limits.
  * List of visuals.

Supported platforms:

  * *WGL (Windows)*
    * OpenGL Compatibility Profile.
    * OpenGL Core Profile (`WGL_CONTEXT_CORE_PROFILE_BIT_ARB`).
    * OpenGL Software implementation (`WGL_NO_ACCELERATION_ARB`).
    * OpenGL ES context information (`WGL_CONTEXT_ES_PROFILE_BIT_EXT`).
  * *GLX (Linux)*
    * OpenGL Compatibility Profile.
    * OpenGL Core Profile (`GLX_CONTEXT_CORE_PROFILE_BIT_ARB`).
    * OpenGL Software implementation (`LIBGL_ALWAYS_SOFTWARE=1`).
  * *CGL (macOS)*
    * OpenGL Compatibility…
