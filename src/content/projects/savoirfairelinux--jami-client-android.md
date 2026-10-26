---
repo: "savoirfairelinux/jami-client-android"
name: "jami-client-android"
description: "Mirror of Gerrit Jami Android Client"
readmeQualityOk: true
url: "https://github.com/savoirfairelinux/jami-client-android"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [93]
stars: 198
forks: 57
openIssues: 0
closedIssues: 0
watchers: 16
contributors: 33
recentReleases: 0
createdAt: "2015-11-05T19:24:58Z"
lastCommitAt: "2026-10-26T18:05:45Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 68
undervaluedScore: 39
maintainers: ["aberaud", "cyrilleberaud", "pavan-koushik-sfl"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa1eac669d524036bbcfb85608754003cc61524757ee62d40b5c980b5f2939a3/savoirfairelinux/jami-client-android"
fundingLinks: ["CUSTOM:https://jami.net/donate/", "LFX_CROWDFUNDING:https://crowdfunding.lfx.linuxfoundation.org/projects/jami-a-gnu-package"]
---

# Jami Android

The Jami client for Android

| App | CI
| :-: | :-: |
| [](https://play.google.com/store/apps/details?id=cx.ring) [](https://f-droid.org/repository/browse/?fdid=cx.ring) | [](https://jenkins.jami.net/job/client-android/)

## Environment

### Submodule

Download the project including the daemon submodule with:

```sh
git clone --recursive https://review.jami.net/jami-client-android
```

Or to download the daemon submodule from the existing project directory:

```sh
git submodule update --init --recursive
```

### Dependencies

Make sure to have autotools, autopoint, swig, yasm, m4, ninja-build and cmake available on your system.

> [!WARNING]
>
> Jami needs at least swig 4.2 to work. Else it will raise errors at compilation.
> See if the package is available with this version from your package manager, else you will need to install it [from sources](https://github.com/swig/swig).

##### On Debian/Ubuntu

```sh
apt install cmake build-essential swig yasm ninja-build m4 autotools-dev autopoint libtool
```

##### On Arch

```sh
pacman -S cmake ninja automake swig yasm m4 patch autoconf pkgconf
```

##### On macOS:

```sh
brew install cmake automake autotools libtool…
