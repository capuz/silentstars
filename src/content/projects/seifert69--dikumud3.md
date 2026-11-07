---
repo: "Seifert69/DikuMUD3"
name: "DikuMUD3"
description: "DikuMUD III using HTML and websockets. "
readmeQualityOk: true
url: "https://github.com/Seifert69/DikuMUD3"
language: "C++"
languages: ["C++"]
languagePcts: [59]
topics: ["mud", "mud-server", "mud-client", "mud-engine", "mud-game-server"]
stars: 228
forks: 60
openIssues: 40
closedIssues: 68
watchers: 12
contributors: 21
recentReleases: 0
createdAt: "2020-05-22T05:35:00Z"
lastCommitAt: "2026-11-07T09:29:38Z"
lastReleaseAt: "2023-01-01T11:40:06Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 93
undervaluedScore: 39
maintainers: ["Seifert69"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/266027003/880806a8-8fec-4f3e-845d-f35553fa3f07"
---

# DikuMUD3
DikuMUD III using HTML, websockets and live Discord integrated.

D-Day June 21, 2020

Look at the end of this file if you want to contribute.

Join us on Discord (live integrated):

https://discord.gg/vmha2rGRA2

Documentation goes here:

https://wiki.dikumud.com/wiki/DikuMUD

The Wiki docs are sync'ed into this GitHUB repo daily. Many thanks to @Damien Davison. 

Pre-requisites:
   * gcc/g++
   * flex/bison (sudo apt-get install bison flex)
   * boost devel (sudo apt-get install libboost-all-dev)
   * OpenSSL devel (sudo apt-get install libssl-dev)
   * Rapidjson devel (sudo apt-get install rapidjson-dev)
   * Debian users look here for flex: https://github.com/Seifert69/DikuMUD3/issues?q=70

Optional:
 * Doxygen (sudo apt-get install doxygen graphviz dia mscgen)
   
How to build & launch (using the new cmake)

1) First build the binaries:

        See [CMake](https://github.com/Seifert69/DikuMUD3/blob/HEAD/README_cmake.md)* for more details.

       cd DikuMUD3/
       cmake .
       make all -j8 # -j8 to compile on 8 threads in parallel
       make test # optionally run the unit tests

*Code documentation will be generated in docs/ after the build completes.…
