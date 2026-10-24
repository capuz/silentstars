---
repo: "jsk-ros-pkg/solidworks_urdf_exporter2"
name: "solidworks_urdf_exporter2"
description: "Cross-platform SolidWorks → URDF converter with a browser editor: auto-infers joints from mates, edits any URDF, free prebuilt binaries (Win/macOS/Linux)."
readmeQualityOk: true
url: "https://github.com/jsk-ros-pkg/solidworks_urdf_exporter2"
homepage: "https://github.com/jsk-ros-pkg/solidworks_urdf_exporter2/releases/latest"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [72, 25]
topics: ["robot", "robotics", "solidworks", "urdf", "ros", "ros2", "cad", "gazebo", "moveit", "robot-description"]
stars: 46
forks: 10
openIssues: 6
closedIssues: 7
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2026-06-15T02:43:26Z"
lastCommitAt: "2026-10-24T08:20:45Z"
lastReleaseAt: "2026-06-20T03:09:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 37
maintainers: ["iory", "k-okada", "poyotamu000"]
openGraphImageUrl: "https://opengraph.githubassets.com/d546ee17513805c2c6225f6877e9b94fb5dde3707b7cfbd3f8872963727888b4/jsk-ros-pkg/solidworks_urdf_exporter2"
---

# sw2robot

> Click an OS badge to grab the latest prebuilt editor from the release page.
> Cross-platform for **edit / build / export**; the **extract** step (driving
> SolidWorks over COM) is **Windows + SolidWorks only**.

**SolidWorks → robot (URDF) converter.** Turn a SolidWorks assembly into a
URDF, then clean it up in the browser.

https://github.com/user-attachments/assets/96c70440-b0b2-4546-af10-1568d4b97819

One import package, with two subpackages:

- **`sw2robot.exporter`** — the exporter. `extract` opens a throwaway copy of a `.sldasm`
  in a hidden SolidWorks instance and pulls the kinematic graph + per-link
  meshes into `graph.json` (slow, Windows + SolidWorks only). `build` turns that
  `graph.json` into a URDF (fast, headless, no SolidWorks). The original CAD file
  is never modified.
- **`sw2robot.editor`** — a single-page browser editor on top of the graph: re-root the
  tree, change joint types (incl. **Shift+drag box-select** to bulk-set a range),
  edit root frames, set materials/densities, see **live self-collision** as you
  drag, **auto joint limits** from a self-collision sweep, and export a ROS /
  robot-compiler package.

## How sw2robot relates to the…
