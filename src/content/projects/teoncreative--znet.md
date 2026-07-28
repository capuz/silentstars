---
repo: "teoncreative/znet"
name: "znet"
description: "znet is a modern C++ networking library with built in packet serialization. "
readmeQualityOk: true
url: "https://github.com/teoncreative/znet"
language: "C++"
languages: ["C++"]
languagePcts: [97]
stars: 6
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-07-20T17:12:10Z"
lastCommitAt: "2026-07-28T14:56:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 50
maintainers: ["irrld", "Staraven"]
openGraphImageUrl: "https://opengraph.githubassets.com/640395cdd5ab11eb538d43a28670af639ff505e13c2aa557037c20f9deffa485/teoncreative/znet"
---

# znet

znet is a modern C++ networking library that provides seamless packet serialization, TLS encryption, and cross-platform support. It's designed to be simpler and more approachable than low-level libraries like asio or libuv.

## Features

- ✅ **Simple API**: Clean, event-driven design.
- 🔒 **TLS Encryption**: Secure communication out of the box.
- ⚡ **Async Connect**: Non-blocking connections.
- 📦 **Built-in Packet Serialization**: Define your own packets easily.
- 🛠 **Cross-Platform**: Windows, Linux, macOS.

## Installation

### Using as a Git Submodule

1. **Add znet to your project:**

```bash
git submodule add https://github.com/irrld/znet.git external/znet
git submodule update --init --recursive
```

2. **Link znet in your `CMakeLists.txt`:**

Example using the bundled `zstd` inside znet

```cmake
# Example using the bundled zstd inside znet
add_subdirectory(external/znet/vendor/zstd/build/cmake ${CMAKE_CURRENT_BINARY_DIR}/zstd)
add_subdirectory(external/znet/znet ${CMAKE_CURRENT_BINARY_DIR}/znet)
target_link_libraries(your_target PRIVATE znet)
```

Example using your own `zstd` submodules

```cmake
# Example using your own submodules…
