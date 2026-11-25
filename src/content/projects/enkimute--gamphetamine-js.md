---
repo: "enkimute/GAmphetamine.js"
name: "GAmphetamine.js"
description: "A geometric algebra library for javascript."
readmeQualityOk: true
url: "https://github.com/enkimute/GAmphetamine.js"
homepage: "https://bivector.net"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["clifford-algebras", "geometric-algebra", "geometry", "operator-overloading"]
stars: 14
forks: 1
openIssues: 3
closedIssues: 0
watchers: 6
contributors: 5
recentReleases: 0
createdAt: "2023-06-27T14:19:12Z"
lastCommitAt: "2026-11-25T13:23:34Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 66
undervaluedScore: 26
maintainers: ["enkimute"]
openGraphImageUrl: "https://opengraph.githubassets.com/c73615cbdc5032713016acbc47dc2fe8f218aa8140c086d67ea116417c319684/enkimute/GAmphetamine.js"
---

# GAmphetamine.js

** Note - this project is WIP ** 

A Geometric Algebra code generator for JavaScript with advanced symbolic optimisation and a focus on performance.

# **Why GAmphetamine?**

## **Performance**

GAmphetamine is fast. Not just compared to it's predecessor ganja.js, but also compared to
GA implementations for other languages. The comparison with ganja.js is however most relevant,
so we've summarized some of this in the table below.

| task | Algebra | ganja.js | GAmphetamine.js | Speedup
|------|:-------:|---------:|---------------:|---:
| 1M geometric product of bivectors | $\mathbb R_5$       | 1332.78 ms | 95.09 ms | **14.0 x**
| 1M commutator product of bivectors| $\mathbb R_{3,0,1}$ | 963.82 ms  | 59.73 ms | **16.1 x**
| 10M sandwich rotor on trivector   | $\mathbb R_{3,0,1}$ | 3491.78 ms | 589.49 ms| **5.9 x**
| 1M bivector inverse               | $\mathbb R_{3,0,1}$ | 3215.18 ms | 79.79 ms | **40.29 x**
| 1M sandwich rotor on vector       | $\mathbb R_{6}$     |304558.73 ms| 387.16ms | **768.64 x** 
| 1M commutator product of bivectors| $\mathbb R_{6}$     |305316.87 ms|  98.86ms | **3088.22 x**
