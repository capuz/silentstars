---
repo: "solarbrowser/quanta"
name: "quanta"
description: "Experimental ECMAScript (js) engine written in C++"
readmeQualityOk: true
url: "https://github.com/solarbrowser/quanta"
homepage: "https://quanta.js.org"
language: "C++"
languages: ["C++"]
languagePcts: [99]
topics: ["ecmascript", "javascript", "javascript-engine", "solar-project"]
stars: 26
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 3
createdAt: "2025-04-04T14:47:43Z"
lastCommitAt: "2026-09-05T07:43:55Z"
lastReleaseAt: "2026-08-30T20:16:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 72
maintainers: ["ataturkcu"]
openGraphImageUrl: "https://opengraph.githubassets.com/de084c6c6683683b974d60430334c6f03f84cc801cab4c940fb32e728e9f185b/solarbrowser/quanta"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/solarbrowser"]
---

# Quanta

Quanta is an experimental ECMAScript (or JS) engine focused on both **memory efficiency** and **execution speed**.  

## Specification Support

### Test262
  
You can review executed tests here: [quanta.js.org](https://quanta.js.org/test262/test262.html)

If the results are outdated, use the dedicated [runner](https://github.com/ataturkcu/quanta-test262-runner)

---

## For Developers

### Documentation

You can reach all the documentation files from [here](https://quanta.js.org/docen/index.html).

### Build
<details>
  
Quanta uses **Clang++** across all platforms.

<details>
<summary><strong>Windows</strong></summary>

```bash
# Install LLVM and add to PATH
clang++ --version

git clone https://github.com/solarbrowser/quanta
cd quanta
build-windows.bat
```
</details>

<details>
<summary><strong>Linux</strong></summary>

```bash
# Ubuntu/Debian
sudo apt install clang lld

# Fedora
sudo dnf install clang lld

# Arch
sudo pacman -S clang lld

git clone https://github.com/solarbrowser/quanta
cd quanta
./build.sh
# or
make -j$(nproc)
```
</details>

<details>
<summary><strong>macOS</strong></summary>

```bash
xcode-select --install

git clone…
