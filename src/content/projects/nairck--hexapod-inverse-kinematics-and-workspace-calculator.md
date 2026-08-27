---
repo: "nairck/Hexapod-Inverse-Kinematics-and-Workspace-Calculator"
name: "Hexapod-Inverse-Kinematics-and-Workspace-Calculator"
description: "MATLAB GUI for Stewart Platform inverse kinematics and workspace analysis, with full configuration, plotting, and export tools."
readmeQualityOk: true
url: "https://github.com/nairck/Hexapod-Inverse-Kinematics-and-Workspace-Calculator"
language: "Python"
languages: ["Python", "MATLAB"]
languagePcts: [57, 37]
stars: 16
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2022-08-09T13:08:26Z"
lastCommitAt: "2026-08-27T14:29:33Z"
lastReleaseAt: "2026-08-27T14:20:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 71
undervaluedScore: 53
maintainers: ["nairck"]
openGraphImageUrl: "https://opengraph.githubassets.com/aae0f8cb7626ccba3de3ece22e77fede3d8200790e32cde0a58e318a78d29209/nairck/Hexapod-Inverse-Kinematics-and-Workspace-Calculator"
---

# Hexapod — Inverse Kinematics & Workspace Calculator

A tool for computing and visualizing the **inverse kinematics (IK)** and **workspace** of a
**6-6 Gough-Stewart platform** — commonly known as a **hexapod**. The "6-6" means six independent
base joints and six independent platform joints; the solver assumes a **fully general geometry with
no symmetry requirement**, so any valid joint layout is supported. Given a commanded pose it solves
the actuator (leg) lengths needed to reach it, draws the hexapod, and maps the **reachable**
(translational) and **orientation** (rotational) workspaces — giving clear insight into the
system's operational limits for safe, precise alignment.

*(The mechanism is called a hexapod throughout the rest of this document.)*

- **Original concept/author:** Joe Brown (CSU Sacramento), 2006 — <https://github.com/jotux/Steward-Platform-Forward-Kinematics-Solver>
- **Adapted & extended by:** Adam B. Johnson, 2022–2026 (University of Victoria, 2021–2025)

> Several figures come from the dissertation, where the calculator was adapted to align the SPIDERS
> instrument (Subaru Pathfinder Instrument for Detecting Exoplanets & Retrieving Spectra) on the
> Subaru…
