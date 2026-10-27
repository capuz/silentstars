---
repo: "ILearnedSomeCoding/preclib"
name: "preclib"
description: "A simple multi-precision C++ library, now with a CAS. A simple high-precision C++ library that gives you more for the same price, now including a CAS."
originalDescription: "A simple multi-precision C++ library, now with a CAS. 一个简单的高精度C++库，加量不加价给了CAS"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ILearnedSomeCoding/preclib"
language: "HTML"
languages: ["HTML", "C++"]
languagePcts: [51, 48]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-13T06:57:49Z"
lastCommitAt: "2026-10-27T12:40:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 37
maintainers: ["StevenJinyanCheng"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ac7260f2e6a2c47928b571ccc069acf4532b443b14f5d3526dc062d5d91c287/ILearnedSomeCoding/preclib"
---

# preclib

`preclib` is an experimental C++17 high-precision arithmetic library. Integers use little-endian 64-bit limbs, and multiplication and division choose different algorithms depending on operand size. The repository also includes a π computation program, an interactive calculator, symbolic computation (CAS), and test and benchmark programs.

This project is mainly intended for researching, validating, and comparing high-precision algorithms. Its API and ABI are not yet stable, and it is not recommended as a direct replacement for the long-established GMP.

## Numeric Types

| Type | Header | Purpose |
| --- | --- | --- |
| `precn_t` | `prec.hpp` | Non-negative arbitrary-precision integer |
| `precz_t` | `prec.hpp` | Signed arbitrary-precision integer |
| `precq_t` | `prec.hpp` | Rational number, automatically reduced |
| `precf_t` | `prec.hpp` | Fixed-point number using the global binary precision |
| `Number` | `prec_num.hpp` | Binary floating-point number that records its own precision per object |

For general integer arithmetic, `precz_t` is recommended; for approximate non-integer computation, `Number` is recommended. The value of `precn_t` is `a[0] + a[1] * 2^64 +…
