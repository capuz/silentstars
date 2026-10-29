---
repo: "soixantecircuits/ofxSocketIO"
name: "ofxSocketIO"
description: "ofx addons that wraps socket.io-client-cpp for OF"
readmeQualityOk: true
url: "https://github.com/soixantecircuits/ofxSocketIO"
language: "C++"
languages: ["C++", "Makefile"]
languagePcts: [71, 21]
topics: ["openframeworks", "ofx", "socket-io", "websocket", "realtime"]
stars: 30
forks: 21
openIssues: 3
closedIssues: 1
watchers: 4
contributors: 7
recentReleases: 0
createdAt: "2016-02-10T20:01:29Z"
lastCommitAt: "2026-10-29T10:37:02Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 81
undervaluedScore: 32
maintainers: ["hugohil", "danoli3"]
openGraphImageUrl: "https://opengraph.githubassets.com/e89f6147a4c62151d0329fd6a7438235f815f106b2456c3a22aa79bb112bc584/soixantecircuits/ofxSocketIO"
---

# ofxSocketIO

### Description

`ofxSocketIO` is an ofxaddon that wraps [`socket.io-client-cpp`](https://github.com/socketio/socket.io-client-cpp). **It is still under ~~active~~ development.**

### Installation

`ofxSocketIO` provides the compiled libraries for `osx`, `linux64` (x86_64), `linuxaarch64` (64-bit ARM: Raspberry Pi OS 64-bit, ARM servers) and `linuxarmv6l` out of the box. If you have to compile `socket.io-client-cpp yourself`, follow the [installation](https://github.com/socketio/socket.io-client-cpp/blob/master/INSTALL.md) instructions.

##### TLS/SSL

`socket.io-client-cpp` compiles with SSL support by default. However, we had issues with certificates and thus removed the SSL support. **The provided libs (osx and linux64) does not support TLS/SSL**.

*FYI, we simply removed the `find_package(OpenSSL)` call in the `CMakeLists.txt`.*

##### Linux

The `linux64` and `linuxaarch64` libraries (socket.io-client-cpp and the Boost libraries it uses) are static and built with `-fPIC`, so apps link as PIE, the default on current distros. They're built on Ubuntu 18.04 and link on any newer distro. To rebuild them with Docker:

```sh
scripts/build_socketio_linux.sh           #…
