---
repo: "BlkSword/CTX-Audit"
name: "CTX-Audit"
description: "Rust 代码安全审计引擎：跨文件污点追踪 + CPG 数据流分析产出可验证证据链，通过 MCP 让 LLM 基于证据完成漏洞判定。Rust code security audit engine: cross-file taint tracking and CPG data-flow analysis produce verifiable evidence chains; MCP lets LLMs make evidence-based vulnerability verdicts."
readmeQualityOk: true
url: "https://github.com/BlkSword/CTX-Audit"
homepage: "https://github.com/BlkSword/CTX-Audit"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
topics: ["code-audit", "llm", "mcp", "rust", "sast", "security", "static-analysis", "vulnerability-detection", "taint-analysis"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2025-12-17T03:41:34Z"
lastCommitAt: "2026-08-29T14:37:12Z"
lastReleaseAt: "2026-07-12T12:09:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 70
maintainers: ["BlkSword"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbfa2f0443dcca863e2d30363b2c8b98ef9c0fc88c4dedbd64175048b37bd035/BlkSword/CTX-Audit"
---

# CTX-Audit

**Rust 代码安全审计引擎 · LLM 协作 · 证据驱动**

**跨文件数据流追踪 · CPG 污点分析 · MCP 工具链 · 可验证漏洞判定**

不做规则堆砌——先构建调用图并追踪数据从入口到危险函数的完整路径，输出结构化证据链；再通过 MCP 协议把分析能力交给 LLM，让它在调用图、污点路径和中间件上下文中完成可验证的漏洞判定。

[English](https://github.com/BlkSword/CTX-Audit/blob/HEAD/README_EN.md)

</div>

---

## 为什么选择 CTX-Audit？

传统 SAST 的主要痛点：

- **规则命中不等于漏洞**：大量规则扫描结果无法回答“这条数据是否真的外部可控”。
- **跨文件链路断裂**：危险函数在 A 文件，入口参数在 B 文件，单文件扫描只能看到局部。
- **LLM 容易“脑补”**：直接把扫描结果丢给 LLM 判定，它没有可验证的调用图、数据流和中间件上下文，容易把 FP 当 TP。

CTX-Audit 的解法：

1. **先建图，再扫描**：解析 AST、构建调用图、计算函数摘要，把跨文件调用关系变成可查询的结构化数据。
2. **用证据链说话**：每个高危 finding 携带 `enclosing_function`、`evidence_refs`、source/sink 代码片段，必要时附带污点传播路径。
3. **把分析能力交给 LLM**：通过 MCP 暴露 57 个工具，LLM 可以像安全工程师一样查询调用者、追踪变量、检查中间件和 sanitizer，最后基于确定性证据给出 TP / FP / Needs Review 判定。

> **核心定位：确定性引擎负责“证据供给”，LLM 负责“语义判定”。**

---

## 目录

- [快速开始](#快速开始)
- [命令总览](#命令总览)
- [LLM 协作审计（推荐）](#llm-协作审计推荐)
- [配置文件](#配置文件)
- [检测能力](#检测能力)
- [自定义规则](#自定义规则)
- [报告与输出](#报告与输出)
- [架构](#架构)
- [项目现状与成就](#项目现状与成就)
- [开发与测试](#开发与测试)
- [许可证](#许可证)

---

## 快速开始

```bash
# 获取与构建
git clone https://github.com/BlkSword/CTX-Audit.git
cd CTX-Audit
cargo build --release

# 规则扫描：秒级批处理
ctx-audit scan ./myproject

# 深度扫描：规则 + AST 污点 + 跨文件追踪…
