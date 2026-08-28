---
repo: "Hector-xue/IvyeaOps"
name: "IvyeaOps"
description: "面向亚马逊卖家的自托管运营工作台 —— AI 智能体、市场调研、广告分析、Listing 生成、知识库"
readmeQualityOk: true
url: "https://github.com/Hector-xue/IvyeaOps"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [45, 45]
stars: 136
forks: 39
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-23T06:39:12Z"
lastCommitAt: "2026-08-28T14:23:35Z"
lastReleaseAt: "2026-06-09T06:14:11Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 28
maintainers: ["Hector-xue"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd7743ffb01710191e3f0d02955889ae82c7c9209821e7cdb2e82c63577037f7/Hector-xue/IvyeaOps"
---

# IvyeaOps · 自托管亚马逊运营工作台

**IvyeaOps** 是一套**开源、自托管**的亚马逊运营工作台：一台服务器、一次登录，把
Listing 套图制作、图片翻译、市场调研、深度分析、广告优化（含领星 ERP 接入）、内置 IvyeaAgent、
知识库、Skill 工坊、服务器运维等运营全流程，统一收进浏览器里。

> 数据与密钥都留在你自己的服务器，不绑定任何第三方云。**AGPL-3.0** 开源，可自由使用、修改、自托管。

  <br />
  <sub>Listing 工作台 · 套图分镜：一张白底图锁住产品真值，整套主图 / A+ 的画面与英文文案由模型一次直出；每张过质检、人工复核后才可交付（方法论见 <a href="docs/listing-visual-studio.md">套图工作台文档</a>，更多界面见 <a href="#界面预览">界面预览</a>）</sub>
</p>

- **技术栈**：后端 FastAPI（Python）+ 前端 React / Vite（TypeScript），后端直接托管前端构建产物。
- **预构建发行包**：`IvyeaOps.zip` 已含前端 `client/dist` 与 Windows Python 3.12 后端依赖 wheels；`IvyeaOps-Windows-x64.zip` 额外内置后端 `IvyeaOpsServer.exe`，Windows 可免 Python / Node；`IvyeaOps-macOS.zip` 解压得到 **`IvyeaOps.app`（自包含、内嵌 Python，双击即用）**，macOS 可免 Python / Node。
- **内置 Agent**：默认安装 IvyeaAgent，提供右下角会话入口、知识库上传、搜索和本地检索；知识库工作台新增治理中心，支持官方变更审核、覆盖/时效看板、41 项持续评测、冲突检查、账户证据脱敏导入和二次确认发布；管理员审核身份通过本地 Agent token 签名，未验证批准不能发布；可在「系统配置 → IvyeaAgent → 检查并更新」一键升级；Hermes / Ollama 仅作为旧兼容组件保留。
- **支持平台**：Linux / macOS（完整，含 `.app` 免环境包）· Windows（除 PTY 终端外完整；Windows x64 有免 Python 包）。
  - macOS 首次双击 `IvyeaOps.app` 若被 Gatekeeper 拦截（未签名），右键 →「打开」一次即可；浏览器会自动开到 http://127.0.0.1:8001 。
- **默认端口**：`8001`（`http://127.0.0.1:8001`）。
-…
