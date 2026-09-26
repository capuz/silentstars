---
repo: "HiroIshida/plainmp"
name: "plainmp"
description: "Very fast motion planning for articulated robot, through a bit of premature-optimization (C++ core with Python bindings) *less than 1ms for moderate problems"
readmeQualityOk: true
url: "https://github.com/HiroIshida/plainmp"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [71, 28]
topics: ["collision-detection", "motion-planning", "robotics-kinematics", "inverse-kinematics", "trajectory-optimization", "signed-distance-field", "ompl"]
stars: 99
forks: 8
openIssues: 3
closedIssues: 8
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2024-07-28T17:10:36Z"
lastCommitAt: "2026-09-26T08:47:08Z"
lastReleaseAt: "2025-07-18T19:01:48Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 24
maintainers: ["HiroIshida"]
openGraphImageUrl: "https://opengraph.githubassets.com/60fbf144e2e751c5431a829507966572b4c7f3f2c49c368cca3a19a1d155ec9d/HiroIshida/plainmp"
discussionCount: 0
---

# plainmp  [](https://github.com/HiroIshida/plainmp/actions/workflows/build_and_test.yaml) [](https://github.com/HiroIshida/plainmp/actions/workflows/check_format.yaml) [](https://doi.org/10.5281/zenodo.14271046) [](https://pypi.org/project/plainmp)

The project is licensed under the BSD 3 License (see [LICENSE](https://github.com/HiroIshida/plainmp/blob/HEAD/LICENSE-BSD3)), except for the code in `cpp` directory which is licensed under the MPL2.0 (see [cpp/LICENSE-MPL2](https://github.com/HiroIshida/plainmp/blob/HEAD/cpp/LICENSE-MPL2)).

plainmp provides:
- Fast sampling-based motion planning (e.g., **less than 1ms** for moderate problems using RRTConnect)
- Collision-aware inverse kinematics (IK) solver
- Motion planning/IK for various models (e.g. movable base, dual-arm, object attachment)
- Flexible framework for defining various robot model and motion planning problems
- Collision checking for primitives (sphere/box/cylinder...) and/or point cloud vs. robot
- (Beta) Sampling-based constrained motion planning solver (e.g., whole-body humanoid)
- (Beta) SQP-based constrained motion planning (will be used as smoother for sampling-based planner)

Note that plainmp currently…
