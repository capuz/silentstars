---
repo: "rmolives/devore"
name: "devore"
description: "这是Devore语言（一种Lisp方言）的解释器，运行于JVM平台。"
url: "https://github.com/rmolives/devore"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["lisp"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2024-11-11T09:28:50Z"
lastCommitAt: "2026-06-28T06:56:05Z"
lastReleaseAt: "2026-06-28T06:57:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 72
maintainers: ["rmolives"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ed6f424d99f488dfa9a07912b65a8d798e296ff7c639325d27bec23bc148a7a/rmolives/devore"
---

# Devore Language

## 关于

这是Devore语言（一种Lisp方言）的解释器，运行于JVM平台。

## 示例

### Sqrt

```scheme
(def (mysqrt x)
    (def (good-enough guess)
        (< (abs (- (pow guess 2) x)) 0.001))
    (def (improve guess)
        (average guess (/ x guess)))
    (def (sqrt-iter guess)
        (if (good-enough guess)
            guess
            (sqrt-iter (improve guess))))
    (sqrt-iter 1.0))
(println (mysqrt 81))
```

### Prime?

```scheme
(def (myprime? n)
    (def (divides? a b)
        (= (mod b a) 0))
    (def (find-divisor n test-divisor)
        (cond [(> (sqrt test-divisor) n) n]
              [(divides? test-divisor n) test-divisor]
              [else (find-divisor n (+ test-divisor 1))]))
    (def (smallest-divisor n)
        (find-divisor n 2))
    (= n (smallest-divisor n)))
(println (myprime? 17))
```

### Fibonacci

```scheme
(def (fib n)
    (cond [(= n 0) 0]
          [(= n 1) 1]
          [else (+ (fib (- n 1)) (fib (- n 2)))]))
(println (fib 10))
```

### Quicksort

```scheme
(def (qsort xs)
    (if (<= (length xs) 1)
        xs
        (++ (qsort (filter
                (lambda (x) (< x (head xs))) (tail xs)))
            (list (head xs))
            (qsort (filter…
