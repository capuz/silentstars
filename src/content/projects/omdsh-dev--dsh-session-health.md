---
repo: "omdsh-dev/dsh-session-health"
name: "dsh-session-health"
description: "DSH 会话健康检查插件：多帧 zstd 会话文件的帧级扫描诊断（torn/损坏/空会话检测），零依赖只读，注册 session_health 工具"
readmeQualityOk: true
url: "https://github.com/omdsh-dev/dsh-session-health"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [62, 38]
topics: ["dsh-plugin", "diagnostics", "dsh", "health-check", "zstd"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-08T13:41:56Z"
lastCommitAt: "2026-08-18T03:57:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 7
maintainers: ["whiteicey"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdc3b83e23710a3bde5a174b6943f69ae7a8cab1dce724d779c4a49516bdf5e1/omdsh-dev/dsh-session-health"
---

# dsh-session-health

[English](https://github.com/omdsh-dev/dsh-session-health/blob/HEAD/README.en.md)

DSH 会话健康检查插件 —— 对 `$DSH_HOME/sessions` 下的**多帧 zstd 会话文件**做帧级扫描诊断（torn / 损坏 / 空会话 / stray 文件），输出健康报告与清理建议。**只读**：绝不修改或删除任何文件。

仓库：[https://github.com/omdsh-dev/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health)（public）

## 动机

8/7 调查 issue #376 时对 39 个会话文件做了全量解码分析，过程中发现一个关键事实：**DSH 会话文件是多个 zstd frame 的串联**（一个 19MB 会话 = 119,952 个 frame），用单帧解码 API 读多帧文件只能看到 header——曾导致"会话全空"的误判。这套诊断逻辑值得产品化为工具：模型可以直接问"我的会话文件健康吗"，而不是靠人手工写脚本。

与 `dsh-session-repair-skill`（修复损坏会话）互补：本工具**只读诊断发现** → repair 技能**修复**。

## 安全模型

- **只读保证**：绝不修改/删除任何文件（测试覆盖"扫描后文件字节数不变"，见 files.spec SH-06 用例）
- **路径围栏**：session id 严格目录名白名单（防 `../` 穿越）；绝对路径与最终文件均做 `fs.realpath` 真实路径 containment（防符号链接/junction 逃逸）；枚举用 lstat 拒绝 symlink
- **零业务依赖**：zstd 帧扫描器为独立实现（DataView 读字节，RFC 8878 结构，与官方 `scanZstdFrames` 差分一致）
- **深度分析可选**：`deep: true` 时动态 import 官方解码器；解析失败明确降级 `deep: "unavailable"`，绝不静默
- 输入范围固定（sessions 目录），无网络、无执行面

## 工具声明

注册 `session_health` 工具（`@deepseek-ai/dsh-session-health`，row id `tool-session-health`），统一输出 JSON 文本。

| 参数 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `action` | string | ✅ | `scan` /…
