---
repo: "wbyates777/Articulated-Rigid-Body"
name: "Articulated-Rigid-Body"
description: "Compact implementation of spatial algebra, and Featherstone's articulated-body algorithm (ABA), composite rigid body algorithm (CRBA), and the recursive Newton-Euler algorithm (RNEA) with end-to-end automatic differentiability (AD). Depends on STL,  GLM and autodiff libraries."
readmeQualityOk: true
url: "https://github.com/wbyates777/Articulated-Rigid-Body"
language: "C++"
languages: ["C++"]
languagePcts: [85]
topics: ["glm", "rbdl", "rigid-body-dynamics", "autodiff", "automatic-differentiation", "kinematic-trees", "urdf", "featherstone", "cpp23", "gjk"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-05-02T10:01:01Z"
lastCommitAt: "2026-11-07T22:51:19Z"
lastReleaseAt: "2026-02-13T16:05:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 65
maintainers: ["wbyates777"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a615469f40f66d208228e6749306a273ea73988b49f0da889ec9f5d1c058211/wbyates777/Articulated-Rigid-Body"
---

# <img width="80" height="80" alt="icon" src="https://github.com/user-attachments/assets/7e7f598c-a0b1-47de-a18c-6572527ed229" />  Articulated Rigid Body (ARB) 

**Compact C++ articulated rigid body simulation library implementing:**

* Articulated-body algorithm (ABA) - $O(N_B)$ forward dynamics for kinematic trees.
* Composite Rigid-Body Algorithm (CRBA) - $O(N_B^2)$ joint-space inertia matrix $M(q)$ for kinematic trees.
* Recursive Newton-Euler algorithm (RNEA) - $O(N_B)$ inverse dynamics for kinematic trees.
* Spatial algebra implementation (header-only).
* End-to-end automatic differentiability using autodiff (header-only).
* Collision Resolution –  spatial impulses, GJK/EPA, and 4-point persistent contact manifolds.
* Unified Robot Description Format (URDF) import and export.
  
  
**End-to-end automatic differentiation** enables derivatives  to propagate through the physics pipeline supporting  system identification, gradient based optimisation, and machine learning applications.

Dependencies: STL, glm, libccd, TinyXML2, autodiff (openGJK optional).

---

### Visual Demos

**Simulating a simple real-world robot - the UR5:**

https://youtu.be/mSGq3sTns7I

**Rigid body…
