---
repo: "occultlang/occult"
name: "occult"
description: "An enigmatic systems programming language."
readmeQualityOk: true
url: "https://github.com/occultlang/occult"
homepage: "https://occultlang.org"
language: "C++"
languages: ["C++"]
languagePcts: [96]
topics: ["occult", "programming", "occultlang", "compiler-design", "compilers", "languages", "programming-language", "programming-language-development", "programming-languages", "jit"]
stars: 47
forks: 2
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2023-07-22T02:26:13Z"
lastCommitAt: "2026-11-05T14:04:39Z"
lastReleaseAt: "2026-09-28T05:15:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 55
maintainers: ["finalxvd", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1328bb4fecaad4a57616f1ca4de20b23cbabe5007bdd2527d222c4e6fc909513/occultlang/occult"
discussionCount: 2
---

### What is Occult? 
Occult is a systems programming language, meant to give the user the full control and power of a C-like language, but with a modern syntax with modern features, making it easy to write, read and learn. 

### Learning Occult, and the Language Specifications
You can learn more about the language and its specifications here [https://occultlang.org/language-specifications](https://occultlang.org/language-specifications).

### Building Occult

> [!NOTE]
> **The highest C++ standard that Occult should use is C++23** <br>
> Also, the only architecture Occult supports is `amd64` as of now, obviously this will change!

### Linux / MacOS
```bash
git clone --recurse-submodules https://github.com/occultlang/occult.git && cd occult
chmod +x build.sh
./build.sh
```
### Windows (You must install LLVM with clang inside Visual Studio Installer) 
There's a more in-depth guide on getting started & building Occult on windows at [https://occultlang.org/getting-started](https://occultlang.org/getting-started). <br/>
If you already have the prerequisites installed, just run the following in bash.
```bash
git clone --recurse-submodules https://github.com/occultlang/occult.git
cd…
