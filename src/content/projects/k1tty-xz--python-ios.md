---
repo: "k1tty-xz/python-ios"
name: "python-ios"
description: "Standalone Python for iOS"
readmeQualityOk: true
url: "https://github.com/k1tty-xz/python-ios"
homepage: "https://k1tty-xz.github.io/python-ios/"
language: "HTML"
languages: ["HTML", "Shell"]
languagePcts: [61, 39]
stars: 12
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2025-08-17T19:14:08Z"
lastCommitAt: "2026-09-24T11:48:33Z"
lastReleaseAt: "2026-09-23T20:30:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 76
maintainers: ["k1tty-xz"]
openGraphImageUrl: "https://opengraph.githubassets.com/959d8c3c693d1fba76471cc65df516d023de39424b2c2185513ddc9240657199/k1tty-xz/python-ios"
postedAt: "2026-09-16T08:51:55.843Z"
---

# Python for iOS

CPython 3.14 for ARM64 jailbroken iOS devices. Includes Python.framework, the
standard library, and pip.

## Install

Download and install the package that matches your jailbreak:

| Environment | Package | Installs to |
| --- | --- | --- |
| Rootful | `_iphoneos-arm.deb` | `/usr/local` |
| Rootless (iOS 15+) | `_iphoneos-arm64.deb` | `/var/jb/usr/local` |

Run Python with its full path:

```sh
# Rootful
/usr/local/bin/python3

# Rootless
/var/jb/usr/local/bin/python3
```

Check pip with the path for your jailbreak:

```sh
# Rootful
/usr/local/bin/python3 -m pip --version

# Rootless
/var/jb/usr/local/bin/python3 -m pip --version
```

> **Warning:** Add the corresponding `bin` directory to `PATH` only if you
> want this installation's `python3` command to be the default on your device.

## Build

Requires macOS, Xcode with the iOS SDK, Python 3, Homebrew, and `dpkg`.

```sh
brew install dpkg
./scripts/build.sh          # Build both packages
./scripts/build.sh rootful  # Build rootful only
./scripts/build.sh rootless # Build rootless only
```

Packages are written to `dist/`.

## License

Maintained by k1tty-xz. Build scripts are [MIT…
