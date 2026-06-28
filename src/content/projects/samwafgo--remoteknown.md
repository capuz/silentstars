---
repo: "samwafgo/RemoteKnown"
name: "RemoteKnown"
description: "RemoteKnown (远程知道了) 完全开源 本地终端远程行为感知与审计系统  让用户\"清楚知道自己是否、何时、正在被远程控制\"，保护隐私安全。"
url: "https://github.com/samwafgo/RemoteKnown"
language: "Go"
languages: ["Go", "HTML"]
languagePcts: [50, 37]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-01-15T04:42:39Z"
lastCommitAt: "2026-06-28T03:11:10Z"
lastReleaseAt: "2026-06-16T09:08:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 64
undervaluedScore: 30
maintainers: ["samwafgo"]
openGraphImageUrl: "https://opengraph.githubassets.com/3feb66789a4390ad65bf721d209397c59244471d3cb26f2f07ea53544d9c040e/samwafgo/RemoteKnown"
---

<h1>RemoteKnown (远程知道了)</h1>
  <p>
    <b>本地终端远程行为感知与审计系统</b>
  </p>
  <p>
    让用户"清楚知道自己是否、何时、正在被远程控制"，保护隐私安全。
  </p>

  <p>
  </p>

  <p>
    </a>
  </p>
</div>

---

## 📖 项目简介

**远程知道了** 是一款能够实时监测本地系统的远程控制状态，识别多种主流远程工具（如 ToDesk, 向日葵, 网易UU远程，AskLink远程，远程看看等），并提供桌面通知、飞书/钉钉告警以及详细的会话审计记录。

## 📸 界面预览

### 主界面状态
| 安全状态 | 正在被远程 |
| :---: | :---: |
| <img src="docs/images/RemoteKnown主界面.png" alt="安全状态" width="400"> | <img src="docs/images/RemoteKnown正在被远程的主界面.png" alt="被远程状态" width="400"> |

### 桌面通知
| 远程开始告警 | 远程结束通知 |
| :---: | :---: |
| <img src="docs/images/RemoteKnown正在被远程的-桌面提示.png" alt="远程开始" width="400"> | <img src="docs/images/RemoteKnown结束远程-桌面提示.png" alt="远程结束" width="400"> |

### 系统托盘
| 红色告警状态 |
| :---: |
| <img src="docs/images/RemoteKnown正在被远程的-右下角有红色提示.png" alt="托盘告警"> |

### 通知设置
| 飞书设置 | 钉钉设置 |
| :---: | :---: |
| <img src="docs/images/RemoteKnown设置通知-飞书.png" alt="飞书设置" width="400"> | <img src="docs/images/RemoteKnown设置通知-钉钉.png" alt="钉钉设置" width="400"> |

## ✨ 核心功能

*   **🛡️ 实时感知**：多维度信号（进程、窗口、网络端口、Session）综合判定。
*   **👁️ 多工具支持**：
    *   [x] ToDesk
    *   [x] 向日葵 (Sunlogin)
    *   [x] Windows 远程桌面 (RDP)
    *   [x] 网易UU远程
    *   [x] AskLink远程
    *   [x] 远程看看
*…
