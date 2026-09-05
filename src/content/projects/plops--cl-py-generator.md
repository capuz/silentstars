---
repo: "plops/cl-py-generator"
name: "cl-py-generator"
description: "generate python code from s-expressions (has been used for lots of data analysis code)"
readmeQualityOk: true
url: "https://github.com/plops/cl-py-generator"
language: "Common Lisp"
languages: ["Common Lisp", "C++"]
languagePcts: [36, 33]
stars: 9
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2018-10-24T07:32:54Z"
lastCommitAt: "2026-09-05T07:50:26Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 75
undervaluedScore: 58
maintainers: ["plops", "martinkielhorn-hexagon"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2d25203e59911041e176b098086c159c4548a714b8423cd73fda1edb2aab578/plops/cl-py-generator"
---

# cl-py-generator

A Common Lisp library that transpiles S-expressions into Python code. Write Python using Lisp syntax and leverage the power of Lisp macros for Python code generation.

## Why cl-py-generator?

- **Lisp macros for Python**: Use Common Lisp's powerful macro system to generate Python code
- **Type-safe code generation**: Generate correct Python code through S-expression transformation
- **Extensive library support**: Over 170 working examples covering NumPy, PyTorch, JAX, Django, FastAPI, Qt, and more
- **Well-tested**: Comprehensive test suite with documented behavior for all supported forms

## Quick Start

```lisp
(ql:quickload "cl-py-generator")

;; note: write-source appends ".py" and, for a relative name, writes into the
;; third argument (default: your home directory)
(cl-py-generator:write-source
  "output"
  '(do0
     (imports ((np numpy)))
     (def calculate-mean (data)
       (return (np.mean data)))
     (setf result (calculate-mean (list 1 2 3 4 5)))
     (print result))
  #p"/tmp/")
```

This generates clean, readable Python:

```python
import numpy as np

def calculate_mean(data):
    return np.mean(data)

result = calculate_mean([1, 2, 3, 4, 5])…
