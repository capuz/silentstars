---
repo: "nichols89ben/Tdarr_DoVi_Processing"
name: "Tdarr_DoVi_Processing"
description: "This repository offers Tdarr plugins and workflows to transcode and remux Dolby Vision (Profiles 4/5/7/8) and HDR10+ into MP4s compatible with LG TVs and other devices. Automates RPU extraction, metadata handling, and remuxing to ensure seamless playback while addressing platform compatibility issues."
url: "https://github.com/nichols89ben/Tdarr_DoVi_Processing"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["dolby-vision", "tdarr", "tdarr-flow", "tdarr-plugins"]
stars: 40
forks: 7
openIssues: 6
closedIssues: 7
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-01-22T13:52:42Z"
lastCommitAt: "2026-06-27T00:49:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 68
undervaluedScore: 35
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c38bc6ce6987dfd3707b06bb20dfece813d7e7045b9ffde4090374e581a583c1/nichols89ben/Tdarr_DoVi_Processing"
---

# Tdarr_DoVi_Processing

A set of Tdarr plugins that can handle Dolby Vision videos in **Profiles 4, 5, 7, 8**, and **HDR10+**, remuxing them into MP4 files compatible with LG TVs (and other devices). This project originated from andrasmaroy’s [Tdarr_Plugins_DoVi](https://github.com/andrasmaroy/Tdarr_Plugins_DoVi), then expanded to include additional functionality for Profile 7 and HDR10+ with the help of ChatGPT.

---

## Overview

Many LG OLED owners (and other users) encounter problems with certain Dolby Vision (DoVi) profiles, missing HDR10 fallback, or device crashes (e.g., the Nvidia Shield showing a green or purple screen). 

- **Goal**: Preserve Dolby Vision whenever possible while ensuring the file remains playable on LG TVs and other devices.  
- **Main Approach**:  
  - Filter or identify DV files (Profiles 4, 5, 7, 8) and HDR10+ content.  
  - If DV Profile 7 lacks HDR10 fallback metadata, optionally convert it from dual-layer to single-layer (Profile 8.1).  
  - Repack or transcode as needed, then remux into MP4 with correct DoVi flags.

This README explains how the **Extract → Inject → Package** (or skip steps if not needed) pipeline works, which ensures safer…
