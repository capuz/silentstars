---
repo: "Amber-siley/JCZXAutoScript"
name: "JCZXAutoScript"
description: "交错战线自动化脚本"
readmeQualityOk: true
url: "https://github.com/Amber-siley/JCZXAutoScript"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 17
forks: 1
openIssues: 3
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-10-05T09:46:58Z"
lastCommitAt: "2026-08-29T17:24:46Z"
lastReleaseAt: "2025-05-30T20:42:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 62
maintainers: ["Amber-siley"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f457e2efa7ec53a71c2dfe7db2d9c5dcfea4cf6809f20aa2548426e3176eaeb/Amber-siley/JCZXAutoScript"
---

# 交错战线 AutoScript

交错战线手游自动化脚本，基于 ADB + cv2 模板匹配 + PaddleOCR。Windows，Python >=3.14。

本项目使用 [uv](https://docs.astral.sh/uv/) 管理 Python 环境与依赖（`uv.lock` 锁定版本）。

## 如何使用

> 本章节为**预留**，用于后续打包发布 releases 后指导最终用户使用，内容将从用户（玩家）视角补充。

（待发布后完善：如何安装、启动、连接模拟器、选择任务、开始自动化等面向玩家的操作指引。）

## 快速开始

```powershell
# ① 安装/同步依赖（含 dev 依赖组，自动创建 .venv）
uv sync

# ② 激活虚拟环境（可选，uv run 不需要激活）
.\.venv\Scripts\activate

# ③ 运行 Textual TUI（主入口）
uv run main.py
# 或激活后直接：
python main.py

# 构建可执行文件（推荐 pyinstaller；nuitka 暂未验证）
python build.py
```

> **环境说明**：项目是 uv 管理环境，`uv sync` 会按 `pyproject.toml` 同步 `dependencies` 与 `[dependency-groups] dev`（pytest 等），并生成/复用 `.venv`。日常运行直接用 `uv run main.py`，无需手动激活。

## 功能

| 功能 | 说明 |
|------|------|
| 检测式启动游戏 | 自动启动游戏 App，首次启动自动签到 |
| 周本虚影微晶 | 阿瑞斯/宙斯虚影，支持预设队伍 |
| 虚影刷好感 | 自定义队伍和次数 |
| 竞技场挑战 | OCR 战力识别，可设置战力阈值 |
| 驻员预设切换 | 工作成员心情耗尽时自动切换到心情正常的预设（method+call+index 逐设施） |

## 架构

| 入口 | 命令 |
|------|------|
| TUI（推荐） | `uv run main.py` |
| GUI（已日落） | `python jczx/jczx.py` |

旧版 PyQt6 GUI **已日落（不再维护）**，推荐使用新版 Textual TUI。

## 模拟器推荐

雷电模拟器，开启 ADB 本地调试。MuMu 需开桥接模式。

已测试分辨率：1920×1080 (dpi 280)、2400×1080 (dpi 320)。

## 配置文件

| 文件 | 用途 |
|------|------|
| `jczx/Config/Config.txt` |…
