---
repo: "Hector-xue/ivyea-agent"
name: "ivyea-agent"
description: "自托管的亚马逊运营 CLI Agent (Ivyea Agent) "
readmeQualityOk: true
url: "https://github.com/Hector-xue/ivyea-agent"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-16T05:46:24Z"
lastCommitAt: "2026-08-27T14:28:08Z"
lastReleaseAt: "2026-06-22T06:06:11Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 54
maintainers: ["Hector-xue"]
openGraphImageUrl: "https://opengraph.githubassets.com/029e86e3caf18bec70e81699dac025f5424baab36eb6d117b126eaf5120d5b7b/Hector-xue/ivyea-agent"
---

# Ivyea Agent · 自托管亚马逊运营 CLI Agent

**Ivyea Agent** 是一个**开源、自托管**的亚马逊运营命令行智能体：把搜索词 / 广告数据变成**可执行、可审计**的优化动作——**确定性规则引擎打底、LLM 只做复核**，所有写操作走**审核制 + 护栏**，数据与密钥全部留在你自己的机器。

它同时内置对话式交互、通用代码工程、长期记忆、Skill / 知识库与多模型接入，既能当亚马逊运营助手，也能当你的本地终端 Agent。纯 Python（≥3.9），无需 Node / 数据库，装完任意目录敲 `ivyea` 即用。

> 设计哲学：**证据驱动 + 标签化结论、确定性护栏不交给模型判断、写操作永远经人工审批、数据私有**。

- **门户网站**：<https://agent.ivyea.com>
- **仓库**：<https://github.com/Hector-xue/ivyea-agent>
- **最新 Release**：`v1.4.1`（`main` 分支可能包含尚未打包的新改动）

---

## 交流与反馈

欢迎扫码加入微信群，反馈 Bug、交流 Ivyea Agent 使用经验、AI 工具与亚马逊运营相关知识。**也欢迎提改进建议**——功能需求、交互优化、文档纠错都行，可在群里直接说，或到 GitHub 提 [Issue](https://github.com/Hector-xue/ivyea-agent/issues) / PR。群二维码可能会过期；如果扫码失效，可先关注公众号，再获取最新群二维码。

<table>
  <tr>
    <td align="center" width="50%">
      <br />
      <strong>微信群：Ivyea 的精神股东们</strong>
      <br />
      <sub>反馈 Bug / 交流 AI 与运营 / 提改进建议</sub>
    </td>
    <td align="center" width="50%">
      <br />
      <strong>公众号</strong>
      <br />
      <sub>群二维码失效时，关注后获取最新版</sub>
    </td>
  </tr>
</table>

---

## 目录

- [核心特性](#核心特性)
- [三分钟安装](#三分钟安装)
- [广告优化闭环](#广告优化闭环核心)
- [对话模式](#对话模式)
- [配置模型与登录](#配置模型与登录)
- [代码工程能力](#代码工程能力)
- [记忆与检索](#记忆与检索)
- [Skill 与知识库](#skill-与知识库)
-…
