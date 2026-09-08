---
repo: "boykopovar/AnyPS5"
name: "AnyPS5"
description: "Convert PS5 executables to run natively on Linux"
readmeQualityOk: true
url: "https://github.com/boykopovar/AnyPS5"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 24
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-03T21:30:25Z"
lastCommitAt: "2026-09-08T08:16:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 36
maintainers: ["boykopovar"]
openGraphImageUrl: "https://opengraph.githubassets.com/eb442b8ad5ecc8145f32ee9810968745fb40d3d6bf4da3b90f67b31c89a31931/boykopovar/AnyPS5"
---

# About

Converter for native execution of PlayStation 5 ELF binaries on Linux through binary format conversion and ABI compatibility. The relinker implementation uses only the C++20 standard library and performs deterministic binary transformation.

Implementations of system prx libraries suitable for dynamic linking: [core/libs/prx](https://github.com/boykopovar/AnyPS5/blob/HEAD/core/libs/prx)
## Status

Execution reaches `_start`, stack unwinding and exception handling tables are built. All unimplemented functions throw std::runtime_error. `what()` is printed to stderr and the process terminates.
Shader initialization via `sceAgcCreate*` passes.
Now: `sceVideoOutOpen not implemented`.

## Disclaimer

This project is intended for interoperability, research, preservation, and compatibility purposes. It does not include, distribute, or require copyrighted software, firmware, cryptographic keys, or proprietary libraries. Users are responsible for ensuring that any binaries used with this project are obtained and used in accordance with applicable laws and their respective license terms.

## License

This project is licensed under the GNU General Public License version 2 only.
