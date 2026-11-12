---
repo: "mumuxiao722/fedora-sheng"
name: "fedora-sheng"
description: "Use GitHub Actions to customize and build Fedora RootFS for Xiaomi Pad 6S Pro (sheng)."
readmeQualityOk: true
url: "https://github.com/mumuxiao722/fedora-sheng"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["aarch64", "arm64", "fedora", "github-actions", "linux", "rootfs", "sheng", "xiaomi", "xiaomi-pad-6s-pro"]
stars: 8
forks: 10
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-09-04T18:54:54Z"
lastCommitAt: "2026-11-12T05:39:04Z"
lastReleaseAt: "2026-10-23T16:59:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 78
undervaluedScore: 68
maintainers: ["mumuxiao722"]
openGraphImageUrl: "https://opengraph.githubassets.com/b73e35e040421a07e156f1d780eae3525deb1f85cf34be413c7e9620d68020f4/mumuxiao722/fedora-sheng"
---

# fedora-sheng

[中文版](https://github.com/mumuxiao722/fedora-sheng/blob/HEAD/README_CN.md)

> **Project Status**  
> This project is still in its **early development stage**. Functionality may be incomplete and build results may contain unknown issues.  
> If you encounter any problems, please open an [Issue](https://github.com/mumuxiao722/fedora-sheng/issues).

---

## Overview

This project uses **GitHub Actions** to automatically build a Fedora root filesystem for the Xiaomi Pad 6S Pro (sheng), providing a flashable `rootfs.img` and `boot.img`.  
Simply start a workflow in your own repository and you will have a ready-to-use Fedora environment.

---

## Getting Started

### 1. Fork & Enable Actions

Click the **Fork** button at the top right to copy the repository to your GitHub account.

Navigate to the **Actions** tab of your forked repository.  
If Actions are disabled, click `I understand my workflows, go ahead and enable them`.

### 2. Run the Build Workflow

In the **Actions** page, select **"Build Fedora RootFS"** from the left sidebar, then click the **Run workflow** dropdown on the right.

You will see a list of configurable options (see [Advanced…
