---
repo: "intel/compute-benchmarks"
name: "compute-benchmarks"
description: "Compute Benchmarks for oneAPI Level Zero and OpenCL™ Driver"
readmeQualityOk: true
url: "https://github.com/intel/compute-benchmarks"
language: "C++"
languages: ["C++"]
languagePcts: [89]
stars: 45
forks: 49
openIssues: 1
closedIssues: 7
watchers: 9
contributors: 67
recentReleases: 0
createdAt: "2022-03-28T21:19:13Z"
lastCommitAt: "2026-10-29T08:37:13Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 62
maintainers: ["darmroz", "MichalMrozek", "KonstantyMisiak"]
openGraphImageUrl: "https://opengraph.githubassets.com/b47ad065bb95c490441dec4e56e0a6065fe6eb4f348c4008a7e08e8988e1e5b0/intel/compute-benchmarks"
---

# Compute Benchmarks
A benchmark suite developed and maintained by NEO driver development team in order to provide a stable environment, which allows checking and reproducing performance for various parts of the driver. The benchmark suite is divided into multiple executables, each of which tests a different aspect of the driver. Each executable contained in ComputeBechmarks consists of multiple test cases with a set of predefined configurations (parameters like buffer sizes, workgroup sizes, etc.) along with a possibility to run them with any desired parameters. They support both OpenCL and Level Zero APIs, although some tests may be available in only one API.

Current list of tests can be found in [TESTS.md](https://github.com/intel/compute-benchmarks/blob/HEAD/TESTS.md).

## How to run benchmarks
For specific information about how to run the benchmarks, please run the binary with "--help" parameter.

## FAQ
Answers to frequently asked questions and common problems can be found in [FAQ.md](https://github.com/intel/compute-benchmarks/blob/HEAD/FAQ.md).

## Building

### Run CMake and compile
Build the benchmark as any other CMake project. Example command sequence:
```
git clone…
