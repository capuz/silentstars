---
repo: "1276486/ZERO-X-Bypass-Jailbreak"
name: "ZERO-X-Bypass-Jailbreak"
description: "ZERO-X破甲 · AI 客户端破甲工具：Codex / Claude / Cursor / OpenCode / WorkBuddy / DeepSeek / 豆包 一键注入指令集。覆盖免杀 · EDR 绕过 · Shellcode · 加载器 · Webshell · 远控 · C2 · 反调试 · 反虚拟机 · 反沙箱 · 提权 · 内网渗透 · 横向移动 · 渗透测试 · 逆向工程 · 破解 · 卡密校验 · 样本分析 · 提示词注入 Prompt Injection · AI 越狱 AI Jailbreak · CVE · PoC · RCE · SSRF。Windows 桌面（Electron + React）"
readmeQualityOk: true
url: "https://github.com/1276486/ZERO-X-Bypass-Jailbreak"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [65]
topics: ["ai-security", "llm-security", "penetration-testing", "prompt-injection", "red-team", "reverse-engineering", "ai-jailbreak", "claude", "codex", "cve"]
stars: 65
forks: 12
openIssues: 4
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 8
createdAt: "2026-11-18T01:44:21Z"
lastCommitAt: "2026-11-23T10:30:35Z"
lastReleaseAt: "2026-11-18T12:41:43Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 70
undervaluedScore: 24
maintainers: ["1276486"]
openGraphImageUrl: "https://opengraph.githubassets.com/195fedc2c95737b0d07d589cccd38373fd115d2c2baa6a8230fc6ca169c453f5/1276486/ZERO-X-Bypass-Jailbreak"
---

# ZERO-X破甲 - AI 客户端破甲 / 免杀 / Shellcode / 渗透 / 逆向 指令注入工具

> 把你自己写的指令正文，一键写入本机常用的 AI 编程客户端。
> 指令集覆盖方向：免杀 · EDR 绕过 · Shellcode · 加载器 · Webshell · 远控 · C2 · 反调试 · 反虚拟机 · 反沙箱 · 提权 · 内网渗透 · 横向移动 · 渗透测试 · 逆向工程 · 破解 · 卡密校验 · 样本分析 · 提示词注入 · AI 越狱。
> Windows 桌面工具 · Electron + React · 全部在本机完成，无需登录、无需账号。

> 最近更新：2026-11-23 18:30

---

## 目录

- [界面预览](#界面预览)
- [交流群](#交流群)
- [关键词](#关键词)
- [1. 这是什么](#1-这是什么)
- [2. 功能特性](#2-功能特性)
- [3. 支持的目标与写入位置](#3-支持的目标与写入位置)
- [4. 安装与使用](#4-安装与使用)
- [5. 指令文件（memory）](#5-指令文件memory)
- [6. 工作原理](#6-工作原理)
- [7. 目录结构](#7-目录结构)
- [8. 开发环境](#8-开发环境)
- [9. 构建与打包](#9-构建与打包)
- [10. 命令行直接调用安装脚本](#10-命令行直接调用安装脚本)
- [11. 验收与清理脚本](#11-验收与清理脚本)
- [12. 故障排查](#12-故障排查)
- [13. 安全边界与已知限制](#13-安全边界与已知限制)
- [14. 版本、联系与说明](#14-版本联系与说明)

---

## 1. 这是什么

ZERO-X破甲 是一个**指令注入管理器**，随包附带一份**调教好的指令集**，装上即可使用。它只做三件事：

1. 读取你放在 `memory/` 目录里的指令正文；
2. 判断每个目标软件的配置目录在哪；
3. 调用对应的 PowerShell 脚本，把正文写进那个软件自己会读取的位置，并记录写入状态。

撤销时按注入标记反向摘除，只回收本工具写入的部分，**你自己的记忆、规则、配置一律不动**。

适用场景：**Codex 破甲、Claude 破甲、Cursor 破甲、OpenCode 破甲、WorkBuddy 破甲、DeepSeek 破甲、豆包破甲**，以及 AI 安全与大模型破甲、提示词注入与指令管理、逆向工程与二进制分析、渗透测试与红队演练、卡密 / 授权校验分析、恶意样本分析。
