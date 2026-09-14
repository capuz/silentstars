---
repo: "saschpe/docker-android-ndk"
name: "docker-android-ndk"
description: "Android NDK OCI image including CMake based on Alpine Linux"
readmeQualityOk: true
url: "https://github.com/saschpe/docker-android-ndk"
homepage: "https://hub.docker.com/r/saschpe/android-ndk"
language: "Shell"
languages: ["Shell"]
languagePcts: [82]
topics: ["android", "android-development", "android-sdk", "android-ndk", "docker", "docker-container", "alpine-linux"]
stars: 48
forks: 6
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2017-12-10T21:59:11Z"
lastCommitAt: "2026-09-14T09:12:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 86
undervaluedScore: 43
maintainers: ["saschpe"]
openGraphImageUrl: "https://opengraph.githubassets.com/64cf9ce88bbf12fdf159d1d9188d46945b5f193e5e1420ddf921eb01e3d7841b/saschpe/docker-android-ndk"
fundingLinks: ["GITHUB:https://github.com/saschpe"]
---

# Android NDK OCI / Docker image

Android Native Development Kit (NDK) OCI image including CMake based on Docker image `saschpe/android-sdk`.

## Android SDK, NDK, CMake and JDK support

The following JDK (horizontal axis) and Android SDK API level combinations are currently available:

|      | 11 | 17 | 21 | 22 | 23 | 25 |
|------|----|----|----|----|----|----|
| 31   | ✅ | ✅ |    |    |    |    |
| 32   | ✅ | ✅ | ✅ | ✅ |    |    |
| 33   | ✅ | ✅ | ✅ | ✅ |    |    |
| 34   | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 35   |    | ✅ | ✅ |    | ✅ | ✅ |
| 36   |    | ✅ | ✅ |    | ✅ | ✅ |
| 36.1 |    | ✅ | ✅ |    | ✅ | ✅ |
| 37.2 |    | ✅ | ✅ |    | ✅ | ✅ |

* Recent image NDK versions: **29.0.14206865** and **30.0.16248370**
    * Previous images: **25.2.9519653**, **26.2.11394342**, **27.2.12479018** and
      **28.0.13004108**
* CMake version: **3.31.6**, **4.1.2**
    * Previous images: **3.22.1**, **3.31.1**, **3.31.5**

## Usage

```shell
docker pull saschpe/android-ndk:37.2-jdk25.0.4_7-ndk30.0.14904198-cmake4.1.2
```

Use as a base image:

```Dockerfile
FROM saschpe/android-ndk:37.2-jdk25.0.4_7-ndk30.0.14904198-cmake4.1.2
RUN android sdk install emulator
```

## Building

These scripts…
