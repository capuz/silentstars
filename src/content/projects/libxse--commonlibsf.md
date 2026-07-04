---
repo: "libxse/commonlibsf"
name: "commonlibsf"
description: "A collaborative reverse-engineered library for Starfield"
readmeQualityOk: true
url: "https://github.com/libxse/commonlibsf"
language: "C++"
languages: ["C++"]
languagePcts: [100]
topics: ["commonlibsf", "sfse", "xmake"]
stars: 25
forks: 13
openIssues: 0
closedIssues: 2
watchers: 5
contributors: 25
recentReleases: 0
createdAt: "2023-09-26T00:50:02Z"
lastCommitAt: "2026-07-04T22:21:08Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 96
undervaluedScore: 66
maintainers: ["ozooma10", "qudix", "Zzyxz"]
openGraphImageUrl: "https://opengraph.githubassets.com/a80237c11d67ab7e4d118cf5975fdf917669eb1484ee5f6997dc1856a31db5e2/libxse/commonlibsf"
---

# CommonLibSF

### Requirements
* [XMake](https://xmake.io) [3.0.0+]
* C++23 Compiler (MSVC or Clang-CL)

## Getting Started
```bat
git clone --recurse-submodules https://github.com/libxse/commonlibsf
cd commonlibsf
```

### Build
To build the project, run the following command:
```bat
xmake build
```

> ***Note:*** *This will generate a `build/windows/` directory in the **project's root directory** with the build output.*

### Project Generation (Optional)
If you use Visual Studio, run the following command:
```bat
xmake project -k vsxmake
```

> ***Note:*** *This will generate a `vsxmakeXXXX/` directory in the **project's root directory** using the latest version of Visual Studio installed on the system.*

**Alternatively**, if you do not use Visual Studio, you can generate a `compile_commands.json` file for use with a laguage server like clangd in any code editor that supports it, like vscode:
```bat
xmake project -k compile_commands
```

> ***Note:*** *You must have a language server extension installed to make use of this file. I recommend `clangd`. Do not have more than one installed at a time as they will conflict with each other. I also recommend installing the `xmake`…
