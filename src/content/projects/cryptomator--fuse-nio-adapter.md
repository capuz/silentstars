---
repo: "cryptomator/fuse-nio-adapter"
name: "fuse-nio-adapter"
description: "FUSE-based adapter to provide directory contents specified by a java.nio.file.Path"
readmeQualityOk: true
url: "https://github.com/cryptomator/fuse-nio-adapter"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["fuse", "fuse-filesystem", "nio"]
stars: 27
forks: 14
openIssues: 4
closedIssues: 66
watchers: 7
contributors: 10
recentReleases: 0
createdAt: "2017-11-16T11:22:07Z"
lastCommitAt: "2026-11-23T10:14:35Z"
lastReleaseAt: "2020-03-12T10:33:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 94
undervaluedScore: 63
maintainers: ["infeo", "dependabot[bot]", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/3331bf2db76a69e7cee9aa942ad33eae53a20a0bca169cb69ef671b1c8c36222/cryptomator/fuse-nio-adapter"
fundingLinks: ["GITHUB:https://github.com/cryptomator", "CUSTOM:https://cryptomator.org/sponsors/"]
---

# fuse-nio-adapter
Provides directory contents specified by a `java.nio.file.Path` via a FUSE filesystem.

Uses [jfuse](https://github.com/cryptomator/jfuse), i.e. you need to install the specified fuse drivers for your OS.

## Usage

This library calls native code and therefore requires native access to be enabled for its module, in addition to the one of jfuse:

```
java --enable-native-access=org.cryptomator.jfuse,org.cryptomator.frontend.fuse ...
```

Native access is used to locate the native FUSE library:
* On Windows, the WinFsp installation directory is read from the registry via `Advapi32.dll`.
* On Linux, libfuse3 is loaded via the dynamic linker and its path is resolved via `dladdr`.

## Mirroring Test

To try out the adapter, `MirroringFuseMountTest` can be run in a forked JVM with native access enabled. Both profiles prompt for what to mirror and, unless the mount provider picks the mount point itself, where to mount it.

Mirror a directory:

```
./mvnw test -Pmirror
```

Mirror a vault (additionally prompts for the passphrase):

```
./mvnw test -Pcrypto-mirror
```
