---
repo: "JModelica/JModelica"
name: "JModelica"
description: "JModelica is a software platform based on the Modelica modeling language for modeling, simulating, optimizing and analyzing complex dynamic systems."
readmeQualityOk: true
url: "https://github.com/JModelica/JModelica"
language: "Modelica"
languages: ["Modelica"]
languagePcts: [70]
stars: 79
forks: 31
openIssues: 2
closedIssues: 14
watchers: 5
contributors: 5
recentReleases: 0
createdAt: "2020-04-07T17:50:33Z"
lastCommitAt: "2026-09-26T08:46:15Z"
lastReleaseAt: "2020-04-07T18:48:51Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "funded"]
healthScore: 87
undervaluedScore: 51
maintainers: ["Foadsf", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/431d2ade9e1b1246960d1de5bfe7ef51129ca8b5929876138027e73e921d2c10/JModelica/JModelica"
fundingLinks: ["GITHUB:https://github.com/Foadsf"]
discussionCount: 1
---

# JModelica.org - Modernized

This is a modernized fork of the JModelica.org platform.

## Key Changes
*   **Python 3**: The codebase has been migrated from Python 2.7 to Python 3.
*   **Java 17**: The compiler now requires Java 17 (LTS).
*   **Build System**: The legacy Autotools/Ant system has been replaced with **CMake** (C++ runtime) and **Gradle** (Java compiler).

## Prerequisites
*   **Python 3.8+** (via Conda recommended)
*   **Java JDK 17+**
*   **CMake 3.15+**
*   **Ninja Build System**
*   **C++ Compiler** (MSVC on Windows, GCC/Clang on Linux)
*   **Sundials 7.x** & **Ipopt 3.14+** (install via Conda: `conda install sundials ipopt`)

## Build Instructions

### 1. Java Compiler
```bash
cd Compiler
./gradlew build
```
This will generate the `Compiler.jar` in `Compiler/bin`.

### 2. C++ Runtime (JMI)
```bash
mkdir build
cd build
cmake .. -G "Ninja" -DCMAKE_PREFIX_PATH=$CONDA_PREFIX
cmake --build . --target jmi
```

### 3. Python Packages
(Instructions pending completion of Python bindings)
