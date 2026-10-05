---
repo: "openmusx/musxdom"
name: "musxdom"
description: "C++17 object model for the EnigmaXml format in Finale musx files."
readmeQualityOk: true
url: "https://github.com/openmusx/musxdom"
homepage: "https://openmusx.github.io/musxdom/"
language: "C++"
languages: ["C++"]
languagePcts: [100]
stars: 6
forks: 2
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2024-11-27T19:45:57Z"
lastCommitAt: "2026-10-05T10:46:28Z"
lastReleaseAt: "2026-03-01T02:34:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 79
maintainers: ["rpatters1"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8a851f81cebfeb7c54f88e7adca724e49faae79b74e150db913feeff4267971/openmusx/musxdom"
---

# musx object model

Document object model for the EnigmaXml format in Finale musx files. It is compatible with the C++17 through C++23 standards.

**This project is not affiliated with or endorsed by Finale or its parent company.**

- It is an independent open-source library designed to help users access and convert their own data in the absence of Finale, which has been discontinued.
- It does not contain any Finale source code.
- It is not capable of writing Finale files, only reading them.
- It has been separately developed by analyzing the contents of EnigmaXml files and other publically available resources, such as the [PDK Framework](https://pdk.finalelua.com/) for Finale and Jari Williamsson’s [original site](https://www.finaletips.nu/frameworkref/index.html).
- Nothing in this repository circumvents digital copy protection on the Finale application.

### Documentation

[MUSX Document Model](https://openmusx.github.io/musxdom/)

Here is a simple example to create a document from a buffer containing EnigmaXml. It loops through every staff, measure, and layer in the Musx document.

```cpp
#include "musx/musx.h"

using namespace musx::dom;
using namespace musx::util;

void…
