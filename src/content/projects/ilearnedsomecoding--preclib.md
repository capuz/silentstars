---
repo: "ILearnedSomeCoding/preclib"
name: "preclib"
description: "A simple multi-precision C++ library, now with a CAS. A simple high-precision C++ library: more for the same price, with a CAS included at no extra cost."
originalDescription: "A simple multi-precision C++ library, now with a CAS. 一个简单的高精度C++库，加量不加价给了CAS"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ILearnedSomeCoding/preclib"
language: "C++"
languages: ["C++", "HTML"]
languagePcts: [50, 49]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-13T06:57:49Z"
lastCommitAt: "2026-11-05T14:03:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 37
maintainers: ["StevenJinyanCheng"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f0141da2e9521ea03a9d3106fe0c27c469757e94c13a471c5b5f2ee422c9a57/ILearnedSomeCoding/preclib"
---

# preclib

`preclib` is an experimental C++17 high-precision computation library. Integers use little-endian 64-bit limbs; multiplication and division select different algorithms depending on operand size. The repository also includes a π computation program, an interactive calculator, symbolic computation (CAS), and test and benchmark programs.

This project is mainly intended for researching, validating, and comparing high-precision algorithms. Its API and ABI are not yet stable, and it is not recommended as a direct replacement for the long-established GMP.

## Numeric Types

| Type | Header | Purpose |
| --- | --- | --- |
| `precn_t` | `prec.hpp` | Non-negative arbitrary-precision integer |
| `precz_t` | `prec.hpp` | Signed arbitrary-precision integer |
| `precq_t` | `prec.hpp` | Rational number automatically reduced to lowest terms |
| `precf_t` | `prec.hpp` | Fixed-point number using the global binary precision |
| `Number` | `prec_num.hpp` | Binary floating-point number whose precision is recorded per object |

For general integer operations, `precz_t` is recommended; for non-integer approximate computation, `Number` is recommended. The value of `precn_t` is `a[0] + a[1] *…
