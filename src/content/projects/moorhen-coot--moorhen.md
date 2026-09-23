---
repo: "moorhen-coot/Moorhen"
name: "Moorhen"
description: " A JavaScript molecular graphics program "
readmeQualityOk: true
url: "https://github.com/moorhen-coot/Moorhen"
homepage: "https://moorhen.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [74]
stars: 29
forks: 15
openIssues: 36
closedIssues: 168
watchers: 5
contributors: 14
recentReleases: 0
createdAt: "2023-07-07T13:32:52Z"
lastCommitAt: "2026-09-23T08:46:29Z"
lastReleaseAt: "2023-09-20T15:50:35Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 96
undervaluedScore: 65
maintainers: ["stuartjamesmcnicholas", "cdegut", "SeanWang5868"]
openGraphImageUrl: "https://opengraph.githubassets.com/539d3c49d699945c0996295a73fa48fcc59b50f8380aadca56886a4c788d676f/moorhen-coot/Moorhen"
---

# Moorhen

Moorhen is a web browser molecular graphics program based on the Coot desktop program.
It is developed by compiling some [CCP4](https://www.ccp4.ac.uk/) libraries and programs, [Coot](https://www2.mrc-lmb.cam.ac.uk/personal/pemsley/coot/) and their dependencies to Web Assembly and then combining with a React user interface.

The emscripten suite of tools is required to do the
compilation.

The sources of CCP4, Coot, Privateer, FFTW, and GSL are not included. They are downloaded and (possibly) patched by the build process of this project.

The following libraries/programs are compiled to Web Assembly:
* libccp4 (8.0.0)
* clipper ('gemmi' branch)
* ssm (1.4.0)
* mmdb2 (2.0.22)
* gemmi 0.7.0
* libcoot (commit hash specified in `VERSIONS`; latest release is 1.3.3)
* Lhasa (commit 4e11ebf3b6)
* fftw 2.1.5
* fftw3 3.3.10
* gsl 2.8
* Boost 1.89.0
* glm 0.9.9.8
* Eigen 5.0.1
* RDKit 2025\_09\_6
* graphene 1.10.8
* libsigc++ 3.8.0
* Freetype 2.14.3
* Jsoncpp 1.9.6

Moorhen is available to use at [https://moorhen.org](https://moorhen.org).

Further information can be found in our [wiki pages](https://moorhen-coot.github.io/wiki/) and our [dev.…
