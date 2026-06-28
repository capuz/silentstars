---
repo: "KDE/knights"
name: "knights"
description: "Chess board program."
url: "https://github.com/KDE/knights"
homepage: "https://invent.kde.org/games/knights"
language: "C++"
languages: ["C++"]
languagePcts: [97]
stars: 25
forks: 7
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 38
recentReleases: 0
createdAt: "2015-09-18T16:00:39Z"
lastCommitAt: "2026-06-28T01:46:43Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 73
undervaluedScore: 44
maintainers: ["heirecka", "tsdgeos", "petitlapin"]
openGraphImageUrl: "https://opengraph.githubassets.com/00398795582629fdea2e57e5d8933d10d8ea37c34189e3c20e681221ee0c4ece/KDE/knights"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# Knights

Knights is KDE's chess frontend. It supports playing local games against human players or against chess engines (XBoard and UIC)

as well as playing online games on FICS server:

Furthermore, it is possible to watch two different chess engines playing against each other:

Knights is not bound to any specific chess engine and talks to every engine supporting either the XBoard or the UIC protocols. For couple of well known open-source chess engines provided by linux distributions, knights has an auto-detection of installed engines which simplifies the initial configuration:

# Required Packages

* CMake version 2.8.12 or higher
* ECM (extra cmake modules)
* KDE Frameworks (including the devel-package)
* KDE Games libraries (including the devel-package)
* Qt version 5.6 or higher (including the devel-package, libqt5-devel or similar)

# How To Build Knights

To build and to install the project, execute

* cd <project_name_path>
* mkdir build
* cd build
* cmake .. -DCMAKE_INSTALL_PREFIX=<path_to_install_>
* make
* make install or sudo make install or su -c 'make install'

To uninstall the project, execute
* make uninstall or sudo make uninstall or su -c 'make uninstall'

#…
