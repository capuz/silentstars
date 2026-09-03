---
repo: "lostjared/shaders"
name: "shaders"
description: "Collection of GLSL Shader Effects "
readmeQualityOk: true
url: "https://github.com/lostjared/shaders"
homepage: "https://lostsidedead.biz/acmx2/shader_browser.html"
language: "GLSL"
languages: ["GLSL"]
languagePcts: [100]
topics: ["effects", "glsl", "post-processing", "shaders"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-04-10T11:18:35Z"
lastCommitAt: "2026-09-03T08:12:58Z"
lastReleaseAt: "2026-08-29T16:59:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 53
maintainers: ["lostjared"]
openGraphImageUrl: "https://opengraph.githubassets.com/5cd8af769bae6de646ded52d0a76d11b44f37a824ddd577b4caa39f00d30a562/lostjared/shaders"
---

# GLSL Shader Collection

A collection of **2700+ OpenGL GLSL fragment shaders** and **182 GLSL compute shaders** for real-time video and image processing. These shaders are designed to be used as post-processing effects applied to live camera feeds, video textures, or generated visuals.

## Overview

All shaders are written in **GLSL (OpenGL Shading Language)**. Most are fragment shaders; the programs in `compute/` are OpenGL 4.3 compute shaders. They take texture input (typically a webcam or video source) and apply various visual transformations in real time. Many shaders support interactive control via mouse input and react to time-based animation.

## Directory Structure

Shaders are organized alphabetically into folders by the first character of their filename:

| Folder | Contents |
|--------|----------|
| `0-9/` | Shaders starting with a digit |
| `A/`–`Z/` | Shaders starting with the corresponding letter (case-insensitive) |
| `compute/` | 182 OpenGL 4.3 compute-shader effects and their separate manifests |
| `material/` | Material-based texture blending and compositing shaders |

## Fragment Shaders (`*.glsl`)

Fragment shaders make up the main library in the alphabetical…
