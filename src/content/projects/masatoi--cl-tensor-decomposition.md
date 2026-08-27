---
repo: "masatoi/cl-tensor-decomposition"
name: "cl-tensor-decomposition"
description: "A tensor decomposition library for Common Lisp which support sparse tensor."
readmeQualityOk: true
url: "https://github.com/masatoi/cl-tensor-decomposition"
language: "Common Lisp"
languages: ["Common Lisp"]
languagePcts: [100]
topics: ["common-lisp", "machine-learning", "tensor-decomposition", "tensor-factorization", "matrix-decompositions", "matrix-factorization"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-02-18T03:33:27Z"
lastCommitAt: "2026-08-27T14:16:11Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 46
maintainers: ["masatoi"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cd5620781226555ddbdf7d958bc531d2c7bde90edce16b6a6aa7bf0ca756297/masatoi/cl-tensor-decomposition"
---

# cl-tensor-decomposition

- Non-negative tensor decomposition implementation for Common Lisp
- Update algorithm: Multiplicative Update (MU) for minimization of KL divergence
- Support sparse tensor only

## Installation
```lisp
ros install masatoi/cl-tensor-decomposition
```

## Usage
```lisp
(in-package :cltd)

;; Prepare sparse tensor data

(defparameter *shape* '(2 3 4))
(defparameter *nnz* 3)  ; number of non-zero elements

(defparameter *indices*
  (make-array (list *nnz* (length *shape*))
              :element-type 'fixnum
              :initial-contents '((0 1 0)   ; each row is a coordinate
                                  (1 2 3)
                                  (0 0 1))))

(defparameter *values*
  (make-array *nnz*
              :element-type 'double-float
              :initial-contents '(1d0 2d0 3d0)))

;; Create sparse tensor (validates input)
(defparameter *tensor*
  (make-sparse-tensor *shape* *indices* *values*))

;; Run decomposition
(decomposition *tensor* :n-cycle 10 :r 2 :verbose t)

#|
cycle: 1, kl-divergence: 13.444468
cycle: 2, kl-divergence: 12.223802
...
cycle: 10, kl-divergence: 2.2586484
#(#2A((0.0 1.289) (0.734 0.0))
  #2A((0.0 1.333) (0.0 0.444)…
