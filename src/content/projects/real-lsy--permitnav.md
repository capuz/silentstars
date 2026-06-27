---
repo: "real-lsy/PermitNav"
name: "PermitNav"
description: "A rapid ROS2 3D navigation integration for Unitree Go2-W with Livox MID360."
url: "https://github.com/real-lsy/PermitNav"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [69, 24]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-26T21:49:36Z"
lastCommitAt: "2026-06-27T06:25:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 20
maintainers: ["real-lsy"]
openGraphImageUrl: "https://opengraph.githubassets.com/04087d81a782a2a41acd4a85277602060e88f382dee87098dd306e4764efcceb/real-lsy/PermitNav"
---

# PermitNav for Go2-W

Language: [中文](go2w_nav_ws/README_CN.md) | English

**PermitNav** is a rapidly integrated 3D navigation demo for **Unitree Go2-W / Go2W**, built with **Livox MID360**, **ROS2 Humble**, **FAST-LIO**, **FAST_LIO_LOCALIZATION2**, **jie_3d_nav**, and **Unitree SDK2**.

The name **PermitNav** comes from the original motivation of this project: building a working real-robot navigation demo in a very short time to prove that the system could run and to earn permission to leave for an internship.

This project is mainly intended to achieve a basic 3D navigation pipeline on a real Go2-W robot. It is an engineering integration project rather than a from-scratch navigation framework. This project is only meant to achieve a basic 3D navigation demo. My main focus is locomotion, and I have not worked much on navigation before. If bugs appear, restarting the system is probably the best first solution.

Video：
【【开源】PermitNav，缝合速成的一种全局3d导航】 https://www.bilibili.com/video/BV12Y7j6iEHi/?share_source=copy_web&vd_source=b5c22f93b0d2fd36b1d6203208bd650b

The NUC side is responsible for:

```text
MID360 data acquisition
  ↓
FAST-LIO mapping / real-time odometry
  ↓…
