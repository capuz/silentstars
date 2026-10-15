---
repo: "OPM/opm-grid"
name: "opm-grid"
description: "DUNE module supporting grids in a corner-point format"
readmeQualityOk: true
url: "https://github.com/OPM/opm-grid"
homepage: "http://www.opm-project.org"
language: "C++"
languages: ["C++"]
languagePcts: [93]
stars: 29
forks: 83
openIssues: 5
closedIssues: 75
watchers: 24
contributors: 47
recentReleases: 0
createdAt: "2012-06-25T21:16:36Z"
lastCommitAt: "2026-10-15T08:32:53Z"
lastReleaseAt: "2019-05-20T07:38:22Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 66
maintainers: ["bska", "akva2", "GitPaean"]
openGraphImageUrl: "https://opengraph.githubassets.com/2533791116907beaddd80e164eece844bb8738bcf010e55d7e98284f0d11ec43/OPM/opm-grid"
---

# Preparing the Sources

Additional to the software mentioned in README you'll need the
following programs installed on your system:

  cmake >= 2.8

Getting started
---------------

If these preliminaries are met, you should run

  dunecontrol all

which will find all installed dune modules as well as all dune modules
(not installed) which sources reside in a subdirectory of the current
directory. Note that if dune is not installed properly you will either
have to add the directory where the dunecontrol script resides (probably
./dune-common/bin) to your path or specify the relative path of the script.

On your project and all uninstalled DUNE source modules found the script
will then calls the GNU autoconf/automake to create a ./configure-script
and the Makefiles. Afterwards that configure script will be called and the
modules will be build using make all

Most probably you'll have to provide additional information to dunecontrol
(e. g. compilers, configure options) and/or make options.

The most convenient way is to use options files in this case. The files
defining three variables:

AUTOGEN_FLAGS    flags passed to autogen
CONFIGURE_FLAGS  flags passed to configure
MAKE_FLAGS…
