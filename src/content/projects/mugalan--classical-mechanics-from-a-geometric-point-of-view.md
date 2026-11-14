---
repo: "mugalan/classical-mechanics-from-a-geometric-point-of-view"
name: "classical-mechanics-from-a-geometric-point-of-view"
description: "This is a collection of interactive IPython notebooks for teaching/learning mechanics from a geometric point of view"
readmeQualityOk: true
url: "https://github.com/mugalan/classical-mechanics-from-a-geometric-point-of-view"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [95]
topics: ["classical-mechanics", "control-systems", "geometric", "mechanical-engineering", "mechanics", "physics", "rigid-body-dynamics", "rigid-body-control"]
stars: 15
forks: 7
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2022-09-27T02:48:53Z"
lastCommitAt: "2026-11-14T10:44:06Z"
lastReleaseAt: "2026-02-17T04:38:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 66
maintainers: ["mugalan"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3caeabd6d910c919c9338e5815fb566b58ee3a4d94b94f50cd0c11fb7722e3b/mugalan/classical-mechanics-from-a-geometric-point-of-view"
---

# rigid-body-sim (sims)

This is a compilation of a set of interactive notes and supplementary material for teaching and learning Mechanics.

They have been the source for the undergraduate courses CE1010, ME211, ME320, ME301, ME327, ME518 offered by the Department of Mechanical Engineering at the University of Peradeniya.

**D. H. S. Maithripala, PhD.**  
smaithri@eng.pdn.ac.lk  
https://eng.pdn.ac.lk/ME/People/FacultyProfiles.php?id=6  
https://orcid.org/0000-0002-8200-2696

It also contains lightweight Python utilities for rigid‑body simulations and simple dynamical system demos — with Plotly animations and quaternion/rotation helpers.

> Package import: `import sims` → `sims.RigidBodySim`

For theory and simulation of intrinsic PID control and DEKF for rigid body motion can be found in the repo:

https://github.com/mugalan/intrinsic-rigid-body-control-estimation

---

## ✨ Features

- Skew (hat) matrix: cross-product as a matrix operator.
- Quaternion ⇄ rotation matrix conversions.
- Euler-angle extraction (ZYX convention in this implementation).
- Align $e_3$ to a target direction $R e_3 = \gamma$ via axis–angle.
- Rotate + translate arbitrary vertices.
- Plotly helpers:
  -…
