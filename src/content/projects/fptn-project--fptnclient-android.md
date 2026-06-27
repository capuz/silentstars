---
repo: "fptn-project/FptnClient-Android"
name: "FptnClient-Android"
description: "FPTN VPN - Android client"
url: "https://github.com/fptn-project/FptnClient-Android"
homepage: "https://storage.googleapis.com/fptn.org/index.html"
language: "Java"
languages: ["Java"]
languagePcts: [82]
topics: ["android", "java", "vpn", "fptn", "fuck-putin"]
stars: 110
forks: 14
openIssues: 3
closedIssues: 2
watchers: 6
contributors: 4
recentReleases: 0
createdAt: "2024-11-12T18:05:56Z"
lastCommitAt: "2026-06-27T06:25:07Z"
lastReleaseAt: "2025-12-13T07:42:52Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 43
maintainers: ["batchar2", "brightsunshine54", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fca6938bdced76e9bd20c1fb84817a92dd710f67dc01c9ff478e5452d3535587/fptn-project/FptnClient-Android"
---

## Setup
### Formatting
- Install ktlint plugin
- For automated formatting, Install Ktlint plugin to IDEA then you can go to `Settings -> Tools -> KtLint -> Distract free`.
- For manual formatting you can use `Command+Option+Enter`.

### Wildcard imports
For disabling wildcards go to `Settings -> Editor -> Code style -> Kotlin -> Imports`
Choose `Use single name import` for all cases and uncheck all checkboxes below.

### Submodules

```bash
git submodule update --init --recursive
```

### Install conan

(For Windows, refer to these [instructions](https://github.com/batchar2/fptn/tree/master/deploy/windows) to install all required dependencies.)

```bash
pip install conan numpy
```

```bash
sudo apt install clang
```

Create profile, get your conan home path

```bash
conan config home
```

```bash
conan profile detect -f
```

Go to the following path and open the profiles folder.
For example, on my system, the path is:
`~/.conan2/profiles`

Then, create a file named `android-studio` with the following content:

```bash
include(default)

[settings]
os=Android
os.api_level=28
compiler=clang
compiler.version=20
compiler.libcxx=c++_static
compiler.cppstd=17

[tool_requires]
*:…
