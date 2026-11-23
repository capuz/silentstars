---
repo: "DroidKali/iot-firmware-vuln-hunting"
name: "iot-firmware-vuln-hunting"
description: "IoT Firmware Vulnerability Hunting Skill"
originalDescription: "IoT Firmware Vulnerability Hunting Skill"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/DroidKali/iot-firmware-vuln-hunting"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["firmware-analysis", "firmware-security", "iot-security", "reverse-engineering"]
stars: 15
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-12T02:37:12Z"
lastCommitAt: "2026-11-23T12:22:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 33
maintainers: ["DroidKali"]
openGraphImageUrl: "https://opengraph.githubassets.com/439f7fb22d21bfadb42d5cad9f7d8fcc454050df8b2f54c8f07d431cef506565/DroidKali/iot-firmware-vuln-hunting"
---

# IoT Firmware Vulnerability Hunting

> Packaging the "skeleton of a senior firmware auditor's work" into an LLM: **define the workflow, allocate resources, set guardrails, standardize output**, and persist intermediate state to the filesystem instead of trusting the model's memory.

A systematic vulnerability hunting pipeline for IoT / embedded firmware. It covers firmware images, routers / cameras / IPCs / smart locks / smart home devices, rootfs, and embedded ELF binaries, running from extraction and static auditing through SBOM/CVE triage, all the way to emulated execution, fuzzing, vulnerability verification, and report output.

---

## Table of Contents

- [Why It's Needed](#为什么需要它)
- [Three-Layer Architecture](#三层架构方法论--决策判据--原子能力)
- [Pipeline](#流水线)
- [Seven Iron Rules](#七条铁律)
- [Installation](#安装)
- [Quick Start](#快速开始)
- [Blackboard (M1)](#黑板m1)
- [Resource Admission (M2)](#资源准入m2)
- [EMBA Adapter (M3)](#emba-适配器m3)
- [Lightweight Whole-System Emulation (M4)](#轻量整机仿真m4)
- [Roadmap](#路线图)
- [Scripts](#脚本)
- [Reference Files](#参考文件)
- [Directory Structure](#目录结构)
- [Design Sources](#设计来源)
- [License](#许可)

---
