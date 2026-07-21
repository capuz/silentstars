---
repo: "GVSRobotics/iDCOL"
name: "iDCOL"
description: "Implicit Differentiable Collision Detection"
readmeQualityOk: true
url: "https://github.com/GVSRobotics/iDCOL"
language: "C++"
languages: ["C++"]
languagePcts: [89]
stars: 7
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-12-12T08:17:08Z"
lastCommitAt: "2026-07-21T06:10:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 29
maintainers: ["anupteejo", "Elektron97", "AneesPeringal"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcfe7538ce02e79ea38799d6b1eaadde1d845612401274952f9c3b1d1f05013f/GVSRobotics/iDCOL"
---

</p>

# iDCOL

iDCOL is a differentiable contact kinematic framework for strictly convex contact geometry, designed for gradient-based simulation, planning, and optimization in contact-rich robotic systems.

**Paper:** [Collision Detection with Analytical Derivatives of Contact Kinematics](https://www.arxiv.org/abs/2602.03250)

It provides:

* robust collision detection for strictly convex implicit shapes,
* analytical derivatives of contact kinematics,
* efficient warm-started contact tracking,
* a lightweight C++ API suitable for physics engines and optimizers.

At its core, iDCOL reduces contact computation to a fixed-size nonlinear solve, making it fast, differentiable, and easy to integrate. 

---
## Quickstart (C++)

The intended usage is deliberately simple:

1. Create shapes
2. Create a contact pair
3. Solve contact at a relative pose

```cpp
#include <Eigen/Dense>
#include <iostream>

#include "core/idcol_implicitfamily.hpp"
#include "core/idcol_contactpair.hpp"

int main() {
    using namespace idcol;

    // --- 1) Create shapes ---
    Eigen::MatrixXd A(8,3);
    A <<  1,  1,  1,
          1, -1, -1,
         -1,  1, -1,
         -1, -1,  1,
         -1, -1, -1,…
