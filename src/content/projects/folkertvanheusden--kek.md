---
repo: "folkertvanheusden/kek"
name: "kek"
description: "PDP-11/70 emulator"
url: "https://github.com/folkertvanheusden/kek"
homepage: "https://vanheusden.com/emulation/PDP-11/kek/"
language: "C++"
languages: ["C++"]
languagePcts: [95]
topics: ["esp32", "pdp-11", "macos", "pico", "teensy41", "windows", "freebsd", "linux"]
stars: 19
forks: 3
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2022-03-19T13:52:10Z"
lastCommitAt: "2026-07-04T06:15:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 89
undervaluedScore: 61
maintainers: ["folkertvanheusden"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a77964a3dfe92bc31439d47e94998621b635c53f4276254cc980eba7f5eabbf/folkertvanheusden/kek"
fundingLinks: ["GITHUB:https://github.com/folkertvanheusden", "PATREON:https://patreon.com/folkertvanheusden"]
---

KEK
---

Kek is a DEC PDP-11 (11/70) emulator capable of running e.g. UNIX-v7 and BSD 2.11.

You need to retrieve the git repository with the --recursive switch for the git command:

    git clone --recursive https://github.com/folkertvanheusden/kek

To build for e.g. linux:

    mkdir build
    cd build
    cmake ..
    make

    Required:
    * libncursesw5-dev, cmake, build-essential, pkg-config, libjansson-dev
    Optional:
    * libsdl3-dev, libsdl3-ttf-dev

To build for e.g. windows, use msys2 with only "ucrt" packages:

    mkdir build-win32
    cd build-win32
    cmake -DCMAKE_TOOLCHAIN_FILE=../msys2.cmake ..
    ninja kek-win32

Windows users are advised to run only the imgui output version (-u imgui) as the command.com-terminal versions (-u ncurses for example) is unbearable slow.

To run an RK05 disk image:

    ./kek -r filename.rk -R rk05 -b rk05

Replace rk05 by rl02 or rp06 for variations.

To run a tape image:

    ./kek -T filename.bin -b tm11

When you run UNIX 7, you can (if your system has enough RAM - use a micrcontroller with 2 MB PSRAM or more) run multi-user via the DZ-11 emulation.
Note that UNIX 7 starts in single user mode first; press ctrl+d to switch…
