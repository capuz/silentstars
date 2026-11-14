---
repo: "Cherrytree56567/ClientWarden"
name: "ClientWarden"
description: "A custom Bitwarden Client that aims to use less resources, look good and be more secure"
readmeQualityOk: true
url: "https://github.com/Cherrytree56567/ClientWarden"
homepage: "http://clientwarden.app/"
language: "Makefile"
languages: ["Makefile", "C++"]
languagePcts: [48, 24]
topics: ["bitwarden", "cmake", "cpp", "password", "password-manager", "swiftui", "vaultwarden", "winui3"]
stars: 92
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-04-04T13:48:46Z"
lastCommitAt: "2026-11-14T22:05:33Z"
lastReleaseAt: "2026-10-27T11:03:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 35
maintainers: ["Cherrytree56567"]
openGraphImageUrl: "https://opengraph.githubassets.com/183f18305133000bbb164db567145011c5f327da0bed2e17a3229bd582d53302/Cherrytree56567/ClientWarden"
discussionCount: 1
---

## About The Project

The official BitWarden Client is inefficient, resource intensive and uses electron and there aren't any currently maintained open-source BitWarden clients for desktop. Clientwarden is a native, platform-specific BitWarden client that aims to match the core BitWarden features while being well designed, visually appealing, lightweight and secure. Some functionality (like Passkey Login, Device Login, etc) is still being implemented.

Anyways, here are some reasons to use Clientwarden:
* Clientwarden uses SwiftUI to blend in with MacOS and look as good as possible
* Clientwarden uses Botan secure_vector's for storing passwords safely
* Clientwarden avoids using too much memory

### Built With

* Botan - [](https://conan.io/center/recipes/botan)
* SPDLog - [](https://conan.io/center/recipes/spdlog)
* OpenSSL - [](https://conan.io/center/recipes/openssl)
* Nlohmann JSON - [](https://conan.io/center/recipes/nlohmann_json)
* CPP HTTPLib - [](https://conan.io/center/recipes/cpp-httplib)
* Boost - [](https://conan.io/center/recipes/boost)

## Getting Started

Here are some instructions on how to build Clientwarden, currently only on MacOS.

### Prerequisites

Before…
