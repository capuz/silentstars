---
repo: "BeacherZ/cdt-management"
name: "cdt-management"
description: "🔖 A web management panel built with Docker: single-instance keep-alive for Alibaba Cloud CDT preemptible instances + multi-instance joint shift rotation + DDNS + notifications."
originalDescription: "🔖 Docker 搭建的网页管理面板：阿里云 CDT 抢占式实例的单机保活 + 多机联合换班 + DDNS + 通知。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/BeacherZ/cdt-management"
language: "Python"
languages: ["Python"]
languagePcts: [70]
topics: ["aliyun", "cdt", "cloudflare-ddns", "docker", "fastapi", "keepalive", "self-hosted", "spot-instance", "telegram-bot"]
stars: 44
forks: 10
openIssues: 3
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-26T10:20:37Z"
lastCommitAt: "2026-11-17T12:19:19Z"
lastReleaseAt: "2026-10-26T17:05:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 74
undervaluedScore: 37
maintainers: ["BeacherZ"]
openGraphImageUrl: "https://opengraph.githubassets.com/b803b1f80bd1fc0e7beca0113cf2b001512005cef1e106b315cbbb98927620f1/BeacherZ/cdt-management"
---

# CDT-Management

**A web management panel built with Docker: single-instance keep-alive for Alibaba Cloud CDT preemptible instances + multi-instance joint shift rotation + DDNS + notifications.**

Three modules, each handling its own part without interfering with the others:

| Module | Function |
| --- | --- |
| **Single-instance keep-alive** | Automatically restarts an instance when it goes offline; a running window can be freely set |
| **Joint shift rotation** | Multiple instances are grouped together and take turns on duty, scheduled by working hours or days |
| **DNS** | Centralized management of domain records; each record is explicitly bound to one instance or one shift group |

Idle instances not included in any workflow can still be started and stopped manually.

**Instances are not limited to preemptible types. Pay-as-you-go and subscription instances work equally well; they just don't need "preemption recovery".**

## 🖥️Interface

Light / dark (`设置 → 常规设置 → 外观`, click to view full size)

Mobile (responsive layout, click to view full size)

## ✨Key Features

### Single-instance keep-alive

**Description**: An instance manages itself. If it goes down, it is brought…
