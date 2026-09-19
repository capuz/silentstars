---
repo: "facebookincubator/axiom"
name: "axiom"
description: "Axiom is a set of reusable and extensible components designed to be compatible with Velox. Its primary purpose is to simplify the process of building front-ends for query execution powered by Velox."
readmeQualityOk: true
url: "https://github.com/facebookincubator/axiom"
language: "C++"
languages: ["C++"]
languagePcts: [98]
stars: 84
forks: 80
openIssues: 53
closedIssues: 112
watchers: 7
contributors: 45
recentReleases: 0
createdAt: "2024-12-12T18:57:00Z"
lastCommitAt: "2026-09-19T01:33:16Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 74
undervaluedScore: 54
maintainers: ["mbasmanova", "amitkdutta", "kKPulla"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3cdd297040d8799522439d3b21cda7dc597d83188e6374ab98872f7233a39fe/facebookincubator/axiom"
---

## License

Axiom is licensed under the Apache 2.0 License. A copy of the license
[can be found here.](https://github.com/facebookincubator/axiom/blob/HEAD/LICENSE)

## Getting Started

### Get the Source

```
git clone --recursive https://github.com/facebookincubator/axiom.git
cd axiom
```

If you already cloned without `--recursive`, initialize the Velox submodule:

```
git submodule sync --recursive
git submodule update --init --recursive
```

### System Requirements

Axiom requires a C++20 compiler. Supported platforms:

- **Linux**: Ubuntu 22.04+ with gcc 11+ (tested up to gcc 14) or clang 15+
- **macOS**: macOS 13+ with Apple Clang 15+ (Xcode 15+)

### Setting up Dependencies

Axiom uses Velox's dependency setup scripts. On macOS, dependencies are
installed to `deps-install/` by default. Set `INSTALL_PREFIX` to control
the installation directory:

```
export INSTALL_PREFIX=$(pwd)/deps-install
```

Then run the appropriate script for your platform:

**macOS:**

```
VELOX_BUILD_SHARED=ON PROMPT_ALWAYS_RESPOND=y velox/scripts/setup-macos.sh
```

**Ubuntu:**

```
VELOX_BUILD_SHARED=ON PROMPT_ALWAYS_RESPOND=y velox/scripts/setup-ubuntu.sh
```

`VELOX_BUILD_SHARED=ON` ensures…
