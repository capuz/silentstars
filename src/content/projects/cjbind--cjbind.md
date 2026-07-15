---
repo: "cjbind/cjbind"
name: "cjbind"
description: "Automatically generate FFI binding code from C libraries to Cangjie."
originalDescription: "自动生成 C 库到仓颉的 FFI 绑定代码。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/cjbind/cjbind"
homepage: "https://cjbind.zxilly.dev"
language: "Cangjie"
languages: ["Cangjie"]
languagePcts: [95]
stars: 31
forks: 6
openIssues: 3
closedIssues: 14
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-11-25T06:25:14Z"
lastCommitAt: "2026-07-15T05:54:41Z"
lastReleaseAt: "2025-02-16T20:21:15Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 90
undervaluedScore: 54
maintainers: ["Zxilly"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d76cbcd22fa5bcaed532093b2e1ac161e615d9931a52c396b0e16f3ad5d13bd/cjbind/cjbind"
---

# cjbind

Automatically generate FFI binding code from Cangjie to C libraries.

## Documentation

For complete documentation, please visit [cjbind.zxilly.dev](https://cjbind.zxilly.dev)

## Usage

### Installation

You can download the binaries for your platform from [GitHub Releases](https://github.com/cjbind/cjbind/releases), or refer to the [Build](https://github.com/cjbind/cjbind/blob/HEAD/DEVELOPMENT.md) documentation to build it yourself.
You can also install using the following installation script:

#### Linux/macOS

```shell
curl -fsSL https://cjbind.zxilly.dev/install.sh | bash
```

You can use a mirror source to speed up the download:

```shell
curl -fsSL https://cjbind.zxilly.dev/install.sh | bash -s -- --mirror
```

#### Windows

```powershell
irm https://cjbind.zxilly.dev/install.ps1 | iex
```

You can use a mirror source to speed up the download:

```powershell
& ([scriptblock]::Create((irm https://cjbind.zxilly.dev/install.ps1))) --mirror
```

### Usage

```text
Automatically generate FFI binding code from Cangjie to C libraries.

Usage: cjbind <OPTIONS> <HEADER> -- <CLANG_ARGS>

Parameters:
    <HEADER>          Path to the C header file
    [CLANG_ARGS]...…
