---
repo: "IntelPython/mkl-service"
name: "mkl-service"
description: "Python hooks for Intel® oneAPI Math Kernel Library (oneMKL) runtime control settings."
readmeQualityOk: true
url: "https://github.com/IntelPython/mkl-service"
language: "Cython"
languages: ["Cython", "Python"]
languagePcts: [53, 37]
topics: ["python", "mkl"]
stars: 81
forks: 41
openIssues: 8
closedIssues: 14
watchers: 6
contributors: 16
recentReleases: 0
createdAt: "2019-02-19T16:26:13Z"
lastCommitAt: "2026-10-29T12:25:46Z"
lastReleaseAt: "2025-06-27T16:56:12Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 49
maintainers: ["antonwolfy", "ndgrigorian", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/119440fda2083d908a14f3d9ed604d1982b14162d7fd86182c98691220554d61/IntelPython/mkl-service"
---

# `mkl-service` - Python package for run-time control of Intel® oneAPI Math Kernel Library (oneMKL).

---

To install conda package, use `conda install -c https://software.repos.intel.com/python/conda/ mkl-service`, or `conda install -c conda-forge mkl-service`.

To install PyPI package, use `python -m pip install mkl-service`.

---

Intel® oneAPI Math Kernel Library (oneMKL) supports functions are subdivided into the following groups according to their purpose:
 - Version Information
 - Threading Control
 - Timing
 - Memory Management
 - Conditional Numerical Reproducibility Control
 - Miscellaneous

A short example, illustrating its use:

```python
>>> import mkl
>>> mkl.domain_set_num_threads(1, domain="fft") # oneMKL FFT functions to run sequentially
# 'success'
```

For more information about the usage of support functions see [Developer Reference for Intel® oneAPI Math Kernel Library for C](https://www.intel.com/content/www/us/en/docs/onemkl/developer-reference-c/2025-2/support-functions.html).

---

## Building

A C compiler and Intel(R) oneAPI Math Kernel Library (oneMKL) are required to build mkl-service from source.
The compiler must support C11 atomics (i.e., for…
