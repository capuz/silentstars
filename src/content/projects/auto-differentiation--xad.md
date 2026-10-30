---
repo: "auto-differentiation/xad"
name: "xad"
description: "The fastest automatic differentiation library for C++, with Python bindings. Forward, adjoint and higher-order derivatives, checkpointing, Eigen support and JIT. Reproducible benchmarks against CppAD, Adept and autodiff."
readmeQualityOk: true
url: "https://github.com/auto-differentiation/xad"
homepage: "https://auto-differentiation.github.io"
language: "C++"
languages: ["C++"]
languagePcts: [97]
topics: ["automatic-differentiation", "aad", "algorithmic-differentiation", "autodiff", "adjoint", "cpp", "derivatives", "gradient", "greeks", "hessian"]
stars: 437
forks: 50
openIssues: 5
closedIssues: 29
watchers: 11
contributors: 36
recentReleases: 0
createdAt: "2022-07-07T14:00:21Z"
lastCommitAt: "2026-10-30T11:03:04Z"
lastReleaseAt: "2024-07-17T20:30:55Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 97
undervaluedScore: 37
maintainers: ["auto-differentiation-dev", "xcelerit-team", "chaitanyachaudhary30"]
openGraphImageUrl: "https://opengraph.githubassets.com/97eb67171138d9f7d4b134535666424b55dd2e8d3eb9a04fca47af09b00fbab2/auto-differentiation/xad"
discussionCount: 11
---

# XAD: The fastest automatic differentiation library for C++

Exact derivatives of your existing C++ code, in forward, adjoint and higher-order mode,
with low runtime overhead and a small memory footprint. Python bindings: `pip install xad`.

For Monte Carlo and other repetitive workloads, XAD also provides a JIT backend interface
for record-once / replay-many execution.

[Documentation](https://auto-differentiation.github.io/) ·
[Install](#install) ·
[Samples](https://github.com/auto-differentiation/xad/blob/HEAD/samples) ·
[Benchmarks](https://auto-differentiation.github.io/benchmarks/) ·
[Python](https://github.com/auto-differentiation/xad-py) ·
[Discussions](https://github.com/auto-differentiation/xad/discussions)

## Example

Every derivative of a function in one adjoint sweep:

```c++
#include <XAD/XAD.hpp>
#include <iostream>

using mode = xad::adj<double>;   // adjoint (reverse) mode
using AD = mode::active_type;

template <class T>
T f(T x, T y) { return x * sin(y) + exp(x * y); }   // your code, unchanged

int main() {
    mode::tape_type tape;
    AD x = 1.3, y = 5.2;
    tape.registerInput(x);
    tape.registerInput(y);
    tape.newRecording();
    AD z = f(x, y);…
