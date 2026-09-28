---
repo: "ParaS-Ecosystem/ParaS-Compiler"
name: "ParaS-Compiler"
description: "ParaS (sounds like paa-ruhs) is an implementation of the SYCL 2020 specification, developed to facilitate architectural and vendor neutral programming. It aims to achieve the principle of Code Once and Execute on All. The current version enables seamless execution across CPUs of x86 (Intel and AMD) and ARM as well as CUDA enabled NVIDIA GPUs."
readmeQualityOk: true
url: "https://github.com/ParaS-Ecosystem/ParaS-Compiler"
language: "C++"
languages: ["C++"]
languagePcts: [98]
stars: 12
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-06-11T07:32:11Z"
lastCommitAt: "2026-09-28T10:06:42Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 45
maintainers: ["LaxmikantBotkewar", "Himanshu-Chaudhary25", "garadeaniket"]
openGraphImageUrl: "https://opengraph.githubassets.com/beba765185caf7ad3bbed4734e0eb562b94e02dc0c8990ea1c5ad67778ffe89d/ParaS-Ecosystem/ParaS-Compiler"
---

# ParaS Compiler

ParaS (pronounced **paa-ruhs**) is an implementation of the **SYCL 2020** specification, developed to enable architecture and device agnostic unified programming model. It follows the principle of **"Code Once, Execute on All"**. The current release provides seamless execution on **CPU** and **GPU** platforms.

---

## Table of Contents

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Building ParaS](#building-paras)
- [Usage](#usage)
- [Environment Setup](#environment-setup)
- [Reporting Issues](#reporting-issues)

---

## Introduction

ParaS is designed to provide a portable SYCL programming environment that allows developers to write code once and execute it across different hardware architectures. The current version supports **CPUs** and **NVIDIA GPUs** execution, with future support planned for additional backends.

---

## Requirements

### For CPU
| Software | Version |
|----------|----------|
| Operating System | Linux |
| Compiler | Clang/LLVM v21.1.0 |
| Build System | CMake v3.28 or later |
| Build Generator | Unix Makefiles or Ninja |

### For GPU
| Software | Version |
|----------|----------|
| CUDA Drivers | v560.28.03 |
| CUDA…
