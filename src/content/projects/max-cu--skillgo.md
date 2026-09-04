---
repo: "Max-cu/SkillGo"
name: "SkillGo"
description: "A self-hosted multi-user Agent and Skill platform with isolated execution, auditable runs, and verifiable artifacts."
readmeQualityOk: true
url: "https://github.com/Max-cu/SkillGo"
language: "Python"
languages: ["Python"]
languagePcts: [61]
stars: 7
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-08-20T09:44:48Z"
lastCommitAt: "2026-09-04T07:21:16Z"
lastReleaseAt: "2026-09-04T02:05:53Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 55
maintainers: ["Max-cu"]
openGraphImageUrl: "https://opengraph.githubassets.com/9aa73223a2d36b7beac4ccad715562e3538745d069ddc7f3a273d6cccf01748c/Max-cu/SkillGo"
---

</p>

<h1 align="center">SkillGo</h1>

  企业级多用户 Skill 管理、任务级独立沙箱运行与二次开发平台。<br />
  <sub>A self-hosted, multi-user Skill platform for governance, isolated per-task execution, and API integration.</sub>
</p>

</p>

</p>

SkillGo 面向需要私有化部署、多人共用和业务集成的团队。它把 Skill 的上传、版本、审核、运行、产物交付和 API 接入放进同一条闭环，并让每次任务尝试都在全新的容器与 Volume 中执行，避免不同用户、不同任务之间共享文件、依赖、进程或运行状态；gVisor 在此基础上提供纵深隔离。

普通消息可以直接流式调用模型；需要脚本、工具或文件处理的 Skill 则进入持久任务和独立沙箱。所有关键步骤、联网授权和产物校验都有记录，已发布的固定 Skill 版本还可以部署为带独立密钥的 API Endpoint，供现有系统二次开发和集成。

</p>

## 项目定位

SkillGo 不只是 Skill 仓库，也不只是聊天界面。它关注的是如何让 Skill 成为一个**可治理、可隔离运行、可验证交付、可接入业务**的运行单元：

```text
上传 Skill → 固定版本 → 审核发布 → 发起任务 → 隔离执行 → 验证产物 → 网页或 API 交付
```

| 环节 | SkillGo 提供的能力 |
| --- | --- |
| 治理 | ZIP/目录结构检查、不可变版本、权限声明、审核发布与逐版本联网授权 |
| 协作 | 普通对话、附件工作区、多 Skill 顺序编排与任务时间线 |
| 执行 | 租约 Worker、每次尝试独立 Volume 与容器、gVisor `runsc` |
| 交付 | 只接收真实输出文件，并校验大小、SHA-256 与文件结构 |
| 接入 | 将已发布的固定版本部署为同步或异步 API Endpoint |

SkillGo 的重点不是长期维护一组会互相污染的共享运行环境，而是把“**固定版本 + 本次输入 + 本次授权**”组合成可追踪的一次执行。它尤其适合在同一套私有部署中为多个用户提供 Skill 能力，同时保留管理员治理和后续业务集成空间。

> SkillGo 仍处于积极开发阶段。公网正式部署应配置 TLS、妥善保管密钥并限制 Worker 对 Docker Socket 的宿主访问范围。

## 核心能力

- **Skill 生命周期**：兼容以顶层 `SKILL.md` 为入口的 Agent Skill，支持可选的…
