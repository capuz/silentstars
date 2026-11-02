---
repo: "jax-ml/ml_dtypes"
name: "ml_dtypes"
description: "A stand-alone implementation of several NumPy dtype extensions used in machine learning."
readmeQualityOk: true
url: "https://github.com/jax-ml/ml_dtypes"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [66, 32]
stars: 366
forks: 66
openIssues: 30
closedIssues: 52
watchers: 15
contributors: 33
recentReleases: 0
createdAt: "2022-11-11T20:53:14Z"
lastCommitAt: "2026-11-02T13:38:30Z"
lastReleaseAt: "2023-09-22T18:39:05Z"
status: "thriving"
tags: []
healthScore: 85
undervaluedScore: 35
maintainers: ["hawkinsp", "dependabot[bot]", "seberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2486576a78843044b4674e3e50483d225fff86c163d6204e3242dcfcf73ec28/jax-ml/ml_dtypes"
---

# ml_dtypes

`ml_dtypes` is a stand-alone implementation of several NumPy dtype extensions used in machine learning libraries, including:

- [`bfloat16`](https://en.wikipedia.org/wiki/Bfloat16_floating-point_format):
  an alternative to the standard [`float16`](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) format
- 8-bit floating point representations, parameterized by number of exponent and
  mantissa bits, as well as the bias (if any) and representability of infinity,
  NaN, and signed zero.
  * `float8_e3m4`
  * `float8_e4m3`
  * `float8_e4m3b11fnuz`
  * `float8_e4m3fn`
  * `float8_e4m3fnuz`
  * `float8_e5m2`
  * `float8_e5m2fnuz`
  * `float8_e5m3fnu`
  * `float8_e8m0fnu`
- Microscaling (MX) sub-byte floating point representations:
  * `float4_e2m1fn`
  * `float6_e2m3fn`
  * `float6_e3m2fn`
- Narrow integer encodings:
  * `int1`
  * `int2`
  * `int4`
  * `uint1`
  * `uint2`
  * `uint4`
- 16-bit complex floating point numbers. (See below below for important limitations.)
  * `complex32` (matching `numpy.float16`)
  * `bcomplex32` (matching `numpy.bfloat16`)

See below for specifications of these number formats.

## Installation

The `ml_dtypes` package is…
