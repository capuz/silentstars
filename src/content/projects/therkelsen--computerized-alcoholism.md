---
repo: "Therkelsen/Computerized_Alcoholism"
name: "Computerized_Alcoholism"
description: "Robot throws ping pong ball into cup"
readmeQualityOk: true
url: "https://github.com/Therkelsen/Computerized_Alcoholism"
language: "C++"
languages: ["C++"]
languagePcts: [91]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2021-10-02T16:47:34Z"
lastCommitAt: "2026-11-06T13:19:51Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 42
maintainers: ["Therkelsen"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3e73a3eb4233557da957136b5fab14765af42886faa3b5cd8f7cfe224f8e182/Therkelsen/Computerized_Alcoholism"
---

# Computerized Alcoholism

## 📄 Academic Project Report

The complete methodology, mathematical modeling, and engineering design for this project are detailed in the university report (in Danish):
[**Gruppe 5 Rapport - Computerized Alcoholism**](https://github.com/Therkelsen/Computerized_Alcoholism/blob/v2/Assets/Gruppe%205%20Rapport.pdf)

## Overview

This repository contains the software stack for an industrial robotics project utilizing a **UR5 series robotic arm** equipped with a Weiss WSG-50 gripper and an industrial camera (Basler pylon) to accurately throw a ping-pong ball into a target cup. 

The software integrates computer vision, coordinate frame transformations, trajectory planning via Jacobian matrix calculations, database management, and real-time robot control via `ur_rtde`.

## System Architecture

* **Machine Vision (`machinevision.cpp`)**: Utilizes Basler pylon and OpenCV to capture images, remove optical lens distortion using intrinsic camera matrices and distortion coefficients, and compute homography perspectives (`cv::getPerspectiveTransform`) to map pixel coordinates to real-world table coordinates. Employs Hough Circle Transforms (`cv::HoughCircles`) to…
