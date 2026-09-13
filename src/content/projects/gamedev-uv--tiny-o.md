---
repo: "gamedev-uv/tiny-O"
name: "tiny-O"
description: "Numerical optimization assignments and lab work completed as part of my undergraduate coursework at Sister Nivedita University. "
readmeQualityOk: true
url: "https://github.com/gamedev-uv/tiny-O"
language: "C"
languages: ["C"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-13T19:49:38Z"
lastCommitAt: "2026-09-13T08:28:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 17
maintainers: ["gamedev-uv"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1299680096/12666ff0-9d19-4626-8e34-eb02591ddca2"
---

# tinyO
Numerical optimization assignments and lab work completed as part of my undergraduate coursework at Sister Nivedita University. 

Can't figure out how to run the code? Have a look at [Setup](#setup).

--- 

## Questions
| Sl. No. | Name | Link | 
|  :-     | :-   | :-   |
|  1.     | Bisection | [Link](#1--bisection) |
|  2.     | Tabular Bisection | [Link](#2-tabular-bisection) |
|  3.     | Regula Falsi | [Link](#3-regula-falsi) |
|  4.     | Newton Raphson | [Link](#4-newton-raphson) |
|  5.     | Integration    | [Link](#5-integration) |
|  6.     | Differential Equation  | [Link](#6-differential-equations) |
|  7.     | Positive Difference Table  | [Link](#7-forward-difference-table) |

### 1.  Bisection
WAP in C to find the root of the equation of $x^3 - x - 1$ using the interval $[0, 2]$.

`Answer` [bisection.c](https://github.com/gamedev-uv/tiny-O/blob/HEAD/src/Roots/bisection.c)

`Output Terminal`
```
Finding root of the equation x^3 + x - 1. Using a = 0, b = 2
--- INPUT ---
 - Enter precision: 0.005

--- OUTPUT ---
Approximate root: 1.324219. After 9 iterations
```

> [!NOTE]
> Bisection is one of the methods used to approximate the root of an equation. It works…
