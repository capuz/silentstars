---
repo: "k1tty-xz/python-ios"
name: "python-ios"
description: "Standalone CPython for iOS"
readmeQualityOk: true
url: "https://github.com/k1tty-xz/python-ios"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2025-08-17T19:14:08Z"
lastCommitAt: "2026-09-16T08:47:08Z"
lastReleaseAt: "2026-09-14T23:48:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 74
maintainers: ["k1tty-xz"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5e2895681a5b36b94689f8bb25f7ea87d33183145e84f009b3ca5e51f559a6b/k1tty-xz/python-ios"
---

# Python for iOS

CPython 3.14 for developers and terminal users on ARM64, jailbroken iOS.
Includes Python.framework, the standard library, and pip.

## Install

Choose the package matching your jailbreak and install it with your package manager.

| Jailbreak | Package suffix | Install location |
| --- | --- | --- |
| Rootful | `_iphoneos-arm.deb` | `/usr/local` |
| Rootless (iOS 15+) | `_iphoneos-arm64.deb` | `/var/jb/usr/local` |

Rootless builds target the standard `/var/jb` layout. Both packages use the
same package identifier; install only the variant for your jailbreak.

Run `/usr/local/bin/python3` on rootful or `/var/jb/usr/local/bin/python3`
on rootless. Add `-m pip --version` to check pip. Add that `bin` directory
to your `PATH` to use `python3` and `pip` directly.

Packages with native extensions require compatible iOS builds.

## Build

Requires macOS, full Xcode with the iOS SDK, Python 3, and Homebrew.

```sh
brew install dpkg
./scripts/build.sh          # Both packages in dist/
./scripts/build.sh rootless # Rootless only (or use rootful)
```

GitHub Actions builds and verifies both variants and uploads the `.deb` files.
These checks inspect packaging and binaries;…
