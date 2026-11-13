---
repo: "dubstar-04/LibLathe"
name: "LibLathe"
description: "Python library for generating lathe paths and gcode "
readmeQualityOk: true
url: "https://github.com/dubstar-04/LibLathe"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [63, 37]
topics: ["gcode", "cnc", "python", "python-library", "profile", "freecad", "lathe", "turn", "turning"]
stars: 11
forks: 6
openIssues: 16
closedIssues: 53
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-02-26T19:55:44Z"
lastCommitAt: "2026-11-13T18:32:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "under_pressure", "fork_magnet"]
healthScore: 94
undervaluedScore: 75
maintainers: ["dubstar-04"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a40abd4ca63fb01a208dc0405429cc061c99676071c7f7a504032e8a9ee7054/dubstar-04/LibLathe"
---

# LibLathe [](https://github.com/dubstar-04/LibLathe/actions) [](https://codecov.io/gh/dubstar-04/LibLathe/branch/master/) [](https://pypi.org/project/liblathe/) 

LibLathe is an opensource standalone python library for generating turning paths and gcode for use with cnc lathes.

| :warning: WARNING: LibLathe is currently experimental / Proof of concept and only suitable for testing. |

## Installation
Installing liblathe from PYPI
```
pip install liblathe
```

Local install for testing
```
pip install .
```

:warning: Some systems require that packages are system installed. Liblathe can be installed for development purposes.
Note: This may break your system
```
pip install . --break-system-packages
pip uninstall liblathe --break-system-packages
```

## Build
Liblathe is a python library with a C++ core. Liblathe core can be compiled and tested inplace using the following steps:

Native C++ types live in the `liblathe` namespace, for example `liblathe::Point`.
Python module and class names are unchanged. Rebuild all five native extensions
together when updating the native headers.

```
cd Liblathe
cmake .
make
```

Local testing
```
python3 ./examples/defeature_example.py
```

##…
