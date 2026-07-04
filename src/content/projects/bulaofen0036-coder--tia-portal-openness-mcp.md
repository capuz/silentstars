---
repo: "bulaofen0036-coder/TIA_Portal_Openness_MCP"
name: "TIA_Portal_Openness_MCP"
description: "Drive Siemens TIA Portal V20/V21 (STEP 7, WinCC Unified) from any MCP client — create projects, generate PLC & HMI, compile & diagnose. Prebuilt runtime, no Openness coding required."
url: "https://github.com/bulaofen0036-coder/TIA_Portal_Openness_MCP"
homepage: "https://github.com/bulaofen0036-coder/TIA_Portal_Openness_MCP/releases/latest"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["industrial-automation", "ladder-logic", "mcp", "model-context-protocol", "openness", "plc", "s7-1200", "s7-1500", "scl", "siemens"]
stars: 73
forks: 22
openIssues: 3
closedIssues: 3
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-05-14T02:09:06Z"
lastCommitAt: "2026-07-04T06:11:43Z"
lastReleaseAt: "2026-06-02T14:11:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 40
maintainers: ["bulaofen", "bulaofen0036-coder", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/efc901c7c244eb8796c7d77b6cde626248c6ce9b3b6dde7ef6224bcee6271529/bulaofen0036-coder/TIA_Portal_Openness_MCP"
---

# TIA Portal MCP 完整交付包（**v2.2.8** / V20+V21 + S7DCL + CLI + 在线只读监控 + 一键配置 + Doctor 体检）

[English](README.en.md) · **中文**

> **免费开源（MIT）**：服务器**无需任何 license key** 即可运行，**不含任何授权校验代码**。

在 **Windows + TIA Portal V20 或 V21** 下，通过 **MCP（stdio 或 HTTP）** 驱动博途：建项目、加硬件、生成 PLC（Tag/UDT/DB/SCL/LAD）、生成 **WinCC Unified** 画面与事件、编译诊断、保存。  
包内含 **已编译运行时**、Skill、静态工具清单、能力矩阵、PLC/HMI 模板、**一键可读的项目蓝图**与手册。**不要求**另行克隆源码仓库。

## ⚡ 最快上手（3 步，零编程·CLI 路线）

> 第一次用？**不需要 MCP 客户端、不需要写代码。** 装好 TIA 后照这 3 步，几分钟内生成第一个工程。
> （想接 Cursor / Claude Desktop 等 AI 客户端走 MCP？跳到下方 [上手步骤](#上手步骤)。）

1. **准备**：装好 **TIA Portal V20 或 V21** + **.NET Framework 4.8**；把当前 Windows 用户加入本地组 **`Siemens TIA Openness`**，注销重登一次。**装的是哪个版本就用哪个**——交付包根目录已备好 `tia.cmd`（V21）/ `tia-v20.cmd`（V20），其余路径自动选。
2. **预热（可选但强烈推荐）**：双击 `scripts\预热.bat`，留着这个窗口。它常驻一个无界面 TIA，让之后每条命令 **~1 秒**连上（不预热则每次冷启动约 3 分钟）。用完按 `Ctrl+C` 关闭。
3. **生成工程**：把现成模板 `templates\project-blueprints\scaffold_spec_motor.json`（或 `scaffold_spec_start_stop.json`）**拖到 `scripts\生成工程.bat` 图标上**——一条龙建项目→加 PLC/HMI→写块→编译→存盘。退出码 `0` 即成功。
   - 想改成自己的需求：让任意 AI 照 [`docs/AI_spec_prompt.md`](docs/AI_spec_prompt.md) 产出一份 spec（YAML/JSON 都行），再拖给 `生成工程.bat`。
   - 命令行等价写法：把根目录加进 PATH 后，`tia gen <spec>`（先…
