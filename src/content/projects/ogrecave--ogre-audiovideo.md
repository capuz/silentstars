---
repo: "OGRECave/ogre-audiovideo"
name: "ogre-audiovideo"
description: "plugins for theora video playback and openAL audio"
readmeQualityOk: true
url: "https://github.com/OGRECave/ogre-audiovideo"
homepage: "https://ogrecave.github.io/ogre-audiovideo/"
language: "C++"
languages: ["C++"]
languagePcts: [95]
topics: ["ogre3d", "video", "openal", "theora"]
stars: 16
forks: 17
openIssues: 0
closedIssues: 8
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2018-06-03T19:34:41Z"
lastCommitAt: "2026-10-26T09:18:00Z"
lastReleaseAt: "2021-09-15T02:08:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 82
undervaluedScore: 65
maintainers: ["paroj", "chillywillysoft"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dee3cbcfe8853c8202caa2f28228f9f009ebd8fa6a4d8944cac16b985aab67f/OGRECave/ogre-audiovideo"
---

# %Ogre Video and Audio Plugins {#mainpage}

This is the API reference for the Ogre Video and Audio plugins; contained within are the 
specifications for each class and the methods on those classes which you can 
refer to when using the library in your code. 

# Building

The audio plugin builds against the bundled [mojoAL](https://github.com/icculus/mojoAL)
OpenAL 1.1 implementation by default, which requires SDL2:

    cmake -B build .
    cmake --build build

Pass `-DOGGSOUND_USE_MOJOAL=OFF` to link against a system OpenAL implementation
instead. mojoAL does not support EFX or multichannel (4/5.1/6.1/7.1) buffer
formats.

Standalone Ogg Vorbis playback is decoded with the bundled
[stb_vorbis](https://github.com/nothings/stb). stb_vorbis has no streaming IO
callbacks, so streamed `.ogg` sounds keep the compressed file in memory. The
Theora video plugin still uses libogg/libvorbis for audio multiplexed into
video files.

## Licensing

The default audio build is entirely permissively licensed: OgreOggSound is
BSD-3-Clause, the bundled [mojoAL](https://github.com/icculus/mojoAL) OpenAL
implementation is zlib, stb_vorbis is public domain/MIT, and SDL2 is zlib.
This allows static…
