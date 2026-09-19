---
repo: "chebpy/chebpy"
name: "chebpy"
description: "A Python implementation of Chebfun"
readmeQualityOk: true
url: "https://github.com/chebpy/chebpy"
homepage: "http://chebpy.github.io/chebpy/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 156
forks: 23
openIssues: 12
closedIssues: 84
watchers: 5
contributors: 9
recentReleases: 0
createdAt: "2016-05-13T13:35:19Z"
lastCommitAt: "2026-09-19T02:47:36Z"
lastReleaseAt: "2024-01-24T14:17:11Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 45
maintainers: ["tschm", "dependabot[bot]", "janniklasrose"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4eddd2b62bcb988602ec0b210cadaa44932233e62d9ba97ff156e4f877dfa77/chebpy/chebpy"
discussionCount: 1
---

# ChebPy

### A Python implementation of Chebfun

**🔬 Numerical computing with Chebyshev series approximations**

Symbolic-numeric computation with functions

</div>

ChebPy is a Python implementation of [Chebfun](http://www.chebfun.org/), bringing the power of Chebyshev polynomial approximations to Python. It allows you to work with functions as first-class objects, performing operations like differentiation, integration, and root-finding with machine precision accuracy.

---

## Table of Contents

- [✨ Features](#-features)
- [📥 Installation](#-installation)
- [🛠️ Development](#️-development)
- [🚀 Quick Start](#-quick-start)
- [📖 Documentation](#-documentation)
- [📄 License](#-license)
- [👥 Contributing](#-contributing)

---

## ✨ Features

> **Work with functions as easily as numbers**

- 🔢 **Function Approximation**: Automatic Chebyshev polynomial approximation of smooth functions
- 🌊 **Periodic Functions**: Fourier-based approximation via `trigfun` for smooth periodic functions
- ♾️ **Infinite Intervals**: Functions on $[a, \infty)$, $(-\infty, b]$ or the full real line via `CompactFun`
- 📍 **Endpoint Singularities**: Resolve $\sqrt{x}$, $\sqrt{x(1-x)}$ and similar…
