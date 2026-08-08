---
repo: "chiba233/atm10-zh-cn"
name: "atm10-zh-cn"
description: "这是个ATM10汉化补丁，嗯....似乎也没啥好说的。哦对了，不收费不收费，如果遇到骗捐赠或收费的都不是本人。"
readmeQualityOk: true
url: "https://github.com/chiba233/atm10-zh-cn"
language: "Python"
languages: ["Python", "MDX"]
languagePcts: [53, 38]
stars: 125
forks: 2
openIssues: 1
closedIssues: 12
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-07-24T09:49:17Z"
lastCommitAt: "2026-08-08T04:36:19Z"
lastReleaseAt: "2026-07-25T15:54:28Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 94
undervaluedScore: 35
maintainers: ["chiba233", "0xyk3r"]
openGraphImageUrl: "https://opengraph.githubassets.com/88f57d85f59a5298e7f2ed9ef8cc2a7087b17450ab06b128e69165af1671ce64/chiba233/atm10-zh-cn"
discussionCount: 0
---

alt="ATM10 汉化补丁「绿油油版」资源包图标">
</p>

# All the Mods 10 汉化补丁 —— 绿油油版

All the Mods 10 的简体中文汉化补丁，**同时支持 7.0 / 7.1 / 7.2 / 7.3**，每个整合包版本一个专属包。
整理／补译：**星野夢華 (Hoshino Yumeka)**。改动幅度较大，独立命名、独立发布；原始参考见[致谢](#许可证与致谢)。

> **装这一个就够。** 本包是**完整的一份汉化**，不是叠加在别家之上的补充包：语言文件 18.4 万余条、
> 任务书、19 本模组手册、字节码硬编码、195 张图片艺术字全都在里面（见[汉化范围](#汉化范围)）。
> **不需要**先装 BBSMC 或任何其他汉化当前置——同时装两份反而会互相覆盖。
> 整合包装好后直接装本包即可。

## 目录

- [兼容版本](#兼容版本)
- [汉化范围](#汉化范围)
- [我该下载哪个包？](#我该下载哪个包)
- [客户端安装（图文步骤）](#客户端安装图文步骤)
- [服务端安装](#服务端安装)
- [常见问题](#常见问题)
- [已知限制](#已知限制)
- [参与与反馈](#参与与反馈)
- [许可证与致谢](#许可证与致谢)

## 兼容版本

一次构建产出**四个专属包**，下载时对号入座：

| 整合包版本 | NeoForge | 状态 |
|---|---|---|
| All the Mods 10 **7.3** | 21.1.247 | ✅ 作者已实机验证 |
| All the Mods 10 **7.2** | 21.1.241 | ✅ 作者已实机验证 |
| All the Mods 10 **7.1** | 21.1.234 | ⚠️ 已按该版逐条核验，未实机验证 |
| All the Mods 10 **7.0** | 21.1.228 | ⚠️ 同上 |

Minecraft 均为 1.21.1。

**为什么要分开发**：整合包升级会改英文原文。7.1→7.2 之间 ATM 动了 13 条任务书正文，
其中 5 条是实质改写（其余是拼写修正）。逐条对过对应模组的 jar 版本之后：

| | 7.1 的原文 | 7.2 的原文 | 模组版本 |
|---|---|---|---|
| 模拟室 | 没有模式之分 | 分训练 / 推演两种模式 | **6.4.1 → 6.5.0，真升级** |
| 灌注塔 | 无视距离，走到哪都生效 | 只在设定的区块范围内生效 | 5.4.2 → 5.4.2，**同一个 jar** |
| 御腐 | 挖矿或怪物掉落 | 9 破片合 1 片簇，再用凝注台合成 | 0.9.6 → 0.9.6，**同一个 jar** |…
