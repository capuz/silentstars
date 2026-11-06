---
repo: "arm/ai-ml-sdk-for-vulkan"
name: "ai-ml-sdk-for-vulkan"
description: "The ML SDK for Vulkan® is an SDK to facilitate the development of projects using the ML extensions for Vulkan®. This repository contains scripts to facilitate building all the ML SDK for Vulkan® components, utilities, and documentation. "
readmeQualityOk: true
url: "https://github.com/arm/ai-ml-sdk-for-vulkan"
homepage: "https://arm.github.io/ai-ml-sdk-for-vulkan/"
language: "Python"
languages: ["Python", "CMake", "Dockerfile"]
languagePcts: [58, 22, 20]
stars: 29
forks: 11
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 26
recentReleases: 1
createdAt: "2025-06-10T13:09:57Z"
lastCommitAt: "2026-11-06T12:17:04Z"
lastReleaseAt: "2026-09-28T16:34:26Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 68
maintainers: ["davidegrohmann", "nlithammer", "mahabadm"]
openGraphImageUrl: "https://opengraph.githubassets.com/e41052223325f858842e96a0a49296eed49c7602fb25b41923ea52dde1976bb8/arm/ai-ml-sdk-for-vulkan"
---

# ML SDK for Vulkan®

The ML SDK for Vulkan® is an SDK to facilitate the development of projects
using the ML extensions for Vulkan®.

## Content

This repository contains scripts to facilitate building all the ML SDK for
Vulkan® components, utilities, and documentation.

## Cloning the repository

To clone the ML SDK for Vulkan® repository, you can use the
[Repo tool](https://gerrit.googlesource.com/git-repo). Cloning using Repo tool
ensures all components and dependencies are fetched and in a suitable default
location on the file system. To initialize the repo structure for the entire ML
SDK for Vulkan®, including all components, run:

```bash
repo init -u https://github.com/arm/ai-ml-sdk-manifest.git -g all
```

After the repository is initialized, fetch the contents with:

```bash
repo sync --no-clone-bundle
```

### Cloning on Windows®

To ensure nested submodules do not exceed the maximum long path length, you must
enable long paths on Windows®, and you must clone close to the root directory
or use a symlink. Make sure to use Git for Windows.

Using **PowerShell**:

```powershell
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem" -Name…
