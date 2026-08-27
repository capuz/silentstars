---
repo: "3MAH/fedoo"
name: "fedoo"
description: "Finite element library "
readmeQualityOk: true
url: "https://github.com/3MAH/fedoo"
homepage: "https://3mah.github.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 33
forks: 5
openIssues: 1
closedIssues: 1
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2020-05-07T07:57:55Z"
lastCommitAt: "2026-08-27T14:16:54Z"
lastReleaseAt: "2025-02-28T16:06:57Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 56
maintainers: ["pruliere", "chemiskyy"]
openGraphImageUrl: "https://opengraph.githubassets.com/029e86e3caf18bec70e81699dac025f5424baab36eb6d117b126eaf5120d5b7b/3MAH/fedoo"
---

# fedoo
Finite element library

About
-----

Fedoo is a free open source Finite Element library developed in Python.
It is mainly dedicated for mechanical problems but is easily developpable for other kind of problems (thermal laws already included).
One of the main application of fedoo is to simulate the mechanical response of heterogeneous materials. 
For that purpose, fedoo is part of the 3mah set that also include microgen for the CAD and meshing of heterogeneous materials 
and simcoon for the non linear material constitutive models in finite strain. 

Here are the main features:

- *New* A full interactive viewer is now included to improve the results visualization.
- Entirely written in Python 3
- Implicit finite element Solver for Static and Dynamics poblems
- Finite strain constitutive laws based on the simcoon library (simcoon is developped in C++ allowing a fast execution)
- Geometrical non linearities based on the simcoon library 
- Wide constitutive equation library including composites law, elasto-plastic law, ...
- Include many types of elements like 2D, 3D, beam, plate, cohesive elements, ...
- Homogeneisation: Easy application of periodic boundary conditions and…
