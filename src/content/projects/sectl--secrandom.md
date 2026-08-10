---
repo: "SECTL/SecRandom"
name: "SecRandom"
description: "基于动态权重的公平随机工具，让抽取与决策告别争议"
readmeQualityOk: true
url: "https://github.com/SECTL/SecRandom"
homepage: "https://secrandom.sectl.cn"
language: "C#"
languages: ["C#"]
languagePcts: [98]
stars: 151
forks: 24
openIssues: 1
closedIssues: 138
watchers: 2
contributors: 23
recentReleases: 0
createdAt: "2025-03-21T12:08:06Z"
lastCommitAt: "2026-08-10T05:04:21Z"
lastReleaseAt: "2025-06-02T07:32:54Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 47
maintainers: ["lrsgzs", "lzy98276", "PANDAJSR"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/952515661/8908e206-fc12-4428-9a35-a70dfec31a4f"
discussionCount: 1
---

# SecRandom

**基于动态权重的公平随机工具，让抽取与决策告别争议**

**语言** [ **简体中文** | [English](https://github.com/SECTL/SecRandom/blob/HEAD/resources/README_EN.md) | [日本語](https://github.com/SECTL/SecRandom/blob/HEAD/resources/README_JA.md) ]

</div>

> [!NOTE]
> SecRandom 以 GNU GPLv3 协议发布！您可以修改和再发布源代码，但再发布的衍生作品也必须遵循 GNU GPLv3

## SecRandom

SecRandom 是面向课堂、团队、活动、决策等场景的公平抽取应用

## 软件功能

### 抽取流程

- **点名**：支持普通随机、历史平衡及重复控制
- **闪抽**：通过独立悬浮窗快速抽取学生
- **抽奖**：支持奖品盘和库存抽取，学生与奖品独立管理
- **丰富呈现**：统一配置动画、结果、语音、音乐和通知，并支持通知失败回退

### 公平与名单管理

- 根据历史次数、抽取间隔、分组、性别等因素动态调整权重，降低重复与分布失衡
- 使用稳定内部标识维护历史，学号、编号和名称仅作为显示信息
- 支持多名单、多奖品池及 `.xlsx`、`.xls`、`.csv` 导入、映射和预览
- 每轮抽取均保存历史，方便查询和回顾

### 抽取结果可复查

- 每次抽取都会自动保存证明记录文件
- 可以选择让服务器参与并见证抽取过程
- 可以通过官方渠道重新检查抽取结果

### 数据、隐私与安全

- 设置、名单和历史记录都可以导入、导出、备份和恢复
- 备份可以包含名单、历史、抽取证明、图片、音频等信息，但不会包含密码等安全信息
- 支持使用密码、TOTP或 U 盘保护重要操作，并可设置哪些操作需要验证

### 验证边界

| 模式 | 可以做到 | 不能证明 |
|---|---|---|
| 离线证明 | 复查已完成的抽取过程 | 不是抽取前的服务器见证；不能证明本地程序或现实名单未被篡改 |
| 在线见证 | 保护服务端锁定后的抽取流程 | 不能证明名单真实、完整，或提交前未被筛选 |

## 技术演进

| 版本 | 技术栈 | 阶段 |
| --- | --- | --- |
| v1 | Python + PyQt5 + qfluentwidgets | 初代桌面实现 |
| v2 | Python + PySide6 + qfluentwidgets | Qt 技术栈演进 |
| **v3** | **C# + Avalonia + FluentAvalonia** | .NET…
