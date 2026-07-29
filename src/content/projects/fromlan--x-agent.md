---
repo: "Fromlan/X-agent"
name: "X-agent"
description: "基于 [Pi] SDK 的Godot专用桌面 Agent 客户端。"
readmeQualityOk: true
url: "https://github.com/Fromlan/X-agent"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-07-23T10:14:26Z"
lastCommitAt: "2026-07-29T06:10:08Z"
lastReleaseAt: "2026-07-28T07:37:44Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 49
maintainers: ["Fromlan", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d2b34ccfbae88382a0ea2b2c30d2b3ae160f05636b376f8c1e1127e9dfc39d1/Fromlan/X-agent"
---

# X-agent

基于 [Pi](https://pi.dev) 的桌面 Agent 客户端。通用编程助手，并对 Godot 编辑器提供控制面与官方文档离线检索。

## 功能

- **Agent 聊天** — 打开项目、续会话、流式中继续下指令（steer）或中止；可选 Thinking 级别；输入 `@路径` 引用文件
- **会话管理** — 按项目分组；恢复 / 重命名 / 删除；自动标题；可从侧栏隐藏项目（会话文件保留）
- **对话编辑** — 撤回、编辑后重发、重新生成；默认还原该段对文件的 `write` / `edit` 改动
- **右栏面板**
  - **上下文**：占用进度、组成拆解、本轮 / 会话用量；可手动压缩上下文
  - **工具**：已启用工具与调用详情
  - **文件**：项目文件树，右键加入对话、在资源管理器中显示、复制路径
  - **Godot**：桥接连接状态与快捷操作
- **供应商** — 多档案订阅、预设、拉取模型列表；可导入已有 Pi / cc-switch 配置
- **插件** — 提示词、技能、扩展、主题、Packages（可一键安装 Godot Pi 包）
- **工具白名单** — 内置读写与终端工具默认开启；Godot 编辑器 / 官方文档工具默认关闭，可按组一键开关
- **Godot 编辑器** — 开/重载场景、运行当前或主场景、资源导入、多编辑器选路、运行报错回传
- **Godot 官方文档** — 导入文档源码后，Agent 可离线检索（需在工具中启用）
- **用量** — 设置中查看近 30 日按日 / 按模型本地汇总
- **认证与更新** — 应用内打开 Pi 登录；安装版可检查并安装更新

## 环境要求

- Windows（当前提供安装包）
- 需要可用的模型认证（任选其一）：
  - **设置 → 供应商** 新建档案并启用
  - 或 **设置 → 通用** →「打开 Pi 登录」
  - 或本机已安装并登录 [Pi CLI](https://pi.dev)
- 使用终端类工具时，Windows 建议安装 [Git for Windows](https://git-scm.com/download/win)，或在设置中指定 bash 路径

## 使用

1. 打开应用，**打开项目**选择工作目录（默认续上该项目最近会话）
2. 顶栏选择模型与 Thinking，在输入框发送指令
3. 左侧管理历史会话；顶栏可打开右栏查看上下文、工具、文件与 Godot 状态
4. **设置**中可配置：

| 分页 | 内容 |
|---|---|
| 通用 | 主题、Thinking 默认、bash 路径、Pi 登录、自动更新 |
| 供应商 |…
