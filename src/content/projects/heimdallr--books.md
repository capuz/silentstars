---
repo: "heimdallr/books"
name: "books"
description: "FLibrary: another e-book cataloger"
originalDescription: "FLibrary: another e-book cataloger"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/heimdallr/books"
language: "C++"
languages: ["C++"]
languagePcts: [97]
topics: ["cpp", "qt", "sqlite3", "cmake", "epub", "fb2"]
stars: 116
forks: 13
openIssues: 1
closedIssues: 750
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2021-03-04T10:59:22Z"
lastCommitAt: "2026-10-31T07:46:14Z"
lastReleaseAt: "2023-12-01T15:52:52Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 46
maintainers: ["heimdallr", "GoncharovYegor"]
openGraphImageUrl: "https://opengraph.githubassets.com/aea70cf8b96d8c4db4607a228b79752f7fbac83d0d736fe81ef15be060a82fb8/heimdallr/books"
---

# FLibrary - e-book library cataloger

## Build

#### Clone the sources with submodules
```
git clone https://github.com/heimdallr/books.git --recursive
```

#### Install and configure conan
[Instructions](https://docs.conan.io/2/installation.html)  

#### Install the modules that are not available in conan
* Qt6 (6.10.0 minimum) [^1] [^2]  
* 7zip [^3]  

### Windows  
Tested on Windows 10 and 11, with the MS compiler in the MSVS2022 and QtCreator environments

#### Add the paths to the following to PATH:
* conan.exe  
* cmake.exe. The cmake version must support your version of MSVS, conan,... in short, use a fairly recent cmake  
* git.exe. Optional, but useful: it lets you see the hash of the current commit in the logs  
* Inno Setup, if you need an installer  

#### Configure:
In the configure.bat batch file, change the dependency paths to your own and run it. Other approaches may also work, such as cmake-gui, or opening the source folder in MSVS.  

#### Build:
Configuring creates the FLibrary.sln solution in the build folder. In it, build the FLibrary project.  

#### Other options:
* You can run the build.bat batch file. If the environment is set up correctly, the built…
