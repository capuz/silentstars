---
repo: "Spoon94/skill-vault"
name: "skill-vault"
description: "Curated Agent Skills for AI coding agents — Claude Code, Codex CLI, Copilot CLI, Gemini CLI and OpenCode. Each skill is a self-contained SKILL.md following the Agent Skills spec."
readmeQualityOk: true
url: "https://github.com/Spoon94/skill-vault"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [62, 20]
topics: ["agent-skills", "agentic-coding", "ai-agents", "claude-code", "codex-cli", "copilot-cli", "developer-tools", "gemini-cli", "opencode", "prompt-engineering"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-11T15:32:08Z"
lastCommitAt: "2026-11-24T01:59:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 52
maintainers: ["Spoon94"]
openGraphImageUrl: "https://opengraph.githubassets.com/0db0678a81c9462a4b0a91079a7fb1aa42cd6a74f32d7395d3e868a794d4834c/Spoon94/skill-vault"
---

# skill-vault

> 个人收藏并整理的 AI 编程助手 **Agent Skills** 集合，按来源/主题分类组织，开箱即用。

每个 skill 都是一个独立目录。目录里有 `SKILL.md` 与它用到的资源（脚本、模板、参考文档）。每个 skill 都遵循 [Agent Skills 规范](https://agentskills.io/specification)。Claude Code、Codex CLI、Copilot CLI、Gemini CLI、OpenCode 等任何兼容 skills 的 AI 编程助手都能加载和调用它。

## 快速开始

```bash
git clone https://github.com/Spoon94/skill-vault.git
cp -r skill-vault/git-commit ~/.claude/skills/     # 以 Claude Code + git-commit 为例
```

**完整安装步骤见 [INSTALL.md](https://github.com/Spoon94/skill-vault/blob/HEAD/INSTALL.md)**（含各平台目录、软链方式、批量安装、嵌套路径）。

## 技能全景

核心三条线：**讲解编排**（eli5 · show-me 让人懂）→ **渲染产出**（7 个 diagram-\* 画图）→ **打磨交付**（falsify 验伪 · clarify 精确 · deslop-bi 自然）。其余工具技能归入检索、流程、记忆、操作四类，见下方索引。

## 组合使用

流水线：**编排**（show-me / eli5 选讲解形式）→ **渲染**（diagram-\* 按需补图）→ **质量**（falsify 验伪）→ **语言**（clarify / deslop-bi 定风格）。独立工具技能（gh、tavily、tmux 等）按需穿插到任意环节。

**关键点**：

- `show-me` 自带内联 Mermaid 与聚焦 HTML。自带图够用时，你不要再叠 `diagram-*`。只有要 UML/云架构/DOT 边路由/成品文件时，你才升级到对应 `diagram-*`。
- `eli5` 的产物不要再过 `clarify`。eli5 要生动，clarify 要平实，两者方向冲突。`clarify` 与 `deslop-bi` 互斥：前者压平人味，后者恢复人味。
- `falsify` 的对象是论断/讲解/计划，不是纯渲染产物。`diagram-*` 只是按描述画图，没有可证伪的论断。
