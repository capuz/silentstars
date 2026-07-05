---
repo: "ksatyaki/fastviz"
name: "fastviz"
description: "Rust-based vibe-coded superfast alternative to RViz"
readmeQualityOk: true
url: "https://github.com/ksatyaki/fastviz"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 7
createdAt: "2026-05-07T21:12:19Z"
lastCommitAt: "2026-07-05T20:09:21Z"
lastReleaseAt: "2026-06-25T14:10:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 37
maintainers: ["ksatyaki"]
openGraphImageUrl: "https://opengraph.githubassets.com/4536c519b792ff5c064c3471fdc8bf69b7c22496264a41d51194cad515583564/ksatyaki/fastviz"
---

A Rust-based ROS2 visualizer built on `wgpu` + `egui`. RViz alternative.

## Quickstart (.deb)

Each tagged release publishes Ubuntu 22.04 / ROS Humble and Ubuntu 24.04 / ROS Jazzy artifacts on the [Releases page](https://github.com/ksatyaki/fastviz/blob/HEAD/../../releases), as both a tarball and a `.deb`. The `.deb` is the fastest path — it declares all runtime dependencies, including the ROS message packages and Vulkan loader, so `apt` pulls them in for you.

Pick the file that matches your distro:

| OS                  | Asset                                            |
| ------------------- | ------------------------------------------------ |
| Ubuntu 22.04 / Humble | `fastviz-humble_<version>-1_amd64.deb`         |
| Ubuntu 24.04 / Jazzy  | `fastviz-jazzy_<version>-1_amd64.deb`          |

```sh
curl -LO "https://github.com/OWNER/REPO/releases/latest/download/fastviz-jazzy_<version>-1_amd64.deb"
sudo apt install ./fastviz-jazzy_<version>-1_amd64.deb
fastviz --config /usr/share/fastviz/configs/default.toml
```

The installed binary has the ROS lib directory baked into its rpath, so you do *not* need to `source /opt/ros/<distro>/setup.bash` before launching it.

Replace…
