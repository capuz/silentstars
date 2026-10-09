---
repo: "agmayorov/GTsimulation"
name: "GTsimulation"
description: "Development of GetTrajectory simulation software for calculations of particle's propagation through the electromagnetic fields and mediums in space"
readmeQualityOk: true
url: "https://github.com/agmayorov/GTsimulation"
language: "Python"
languages: ["Python"]
languagePcts: [78]
stars: 5
forks: 2
openIssues: 4
closedIssues: 8
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2024-03-19T19:15:27Z"
lastCommitAt: "2026-10-09T10:51:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 78
maintainers: ["Starwarskust", "diag4nd", "vlad10433"]
openGraphImageUrl: "https://opengraph.githubassets.com/40418b15d25b667136ed5ac45ae78d17578b515e14b5068669d2a4cdf72dbb3d/agmayorov/GTsimulation"
---

[**GT simulation**](https://geospace.mephi.ru/GTsimulation) (GT) is a package that is created for simulations of propagation of charged particles in electromagnetic fields.
GT solves the relativistic equation of motion of a particle using Buneman-Boris scheme. That allows to recover the trajectory
of a particle with high precision. Additionally, we take into account the energy losses of particles such as, radiation losses
(synchrotron radiation), adiabatic losses (in the heliosphere), and the interactions with the medium. As a result of interaction
with the medium secondary particles may be created, that are later simulated in GT.

The code is written in a flexible manner, and easily can be extended by inheriting from the abstract classes of each module. To
enhance the speed of calculations **numba** just-in-time compiler is used to compile the main functions.

# Installation

GT requires Python 3.10+. To avoid possible package conflicts, you can optionally create an isolated virtual environment
using `venv`:
```console
$ python -m venv gt_env
$ source gt_env/bin/activate
```
See the `venv` [official documentation](https://docs.python.org/3/library/venv.html) for details.

If you…
