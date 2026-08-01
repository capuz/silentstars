---
repo: "chiba233/atm10-zh-cn"
name: "atm10-zh-cn"
description: "这是个ATM10汉化补丁，嗯....似乎也没啥好说的。哦对了，不收费不收费，如果遇到骗捐赠或收费的都不是本人。"
readmeQualityOk: true
url: "https://github.com/chiba233/atm10-zh-cn"
language: "Python"
languages: ["Python", "MDX"]
languagePcts: [56, 34]
stars: 75
forks: 1
openIssues: 1
closedIssues: 6
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-07-24T09:49:17Z"
lastCommitAt: "2026-08-01T06:13:44Z"
lastReleaseAt: "2026-07-25T15:54:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 37
maintainers: ["chiba233", "phoenix594"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e40e26d08bca7ff0c46afc2cf9e0c2340ccdd1539e53aeb899c0e5e0f0aeb50/chiba233/atm10-zh-cn"
discussionCount: 0
---

alt="ATM10 汉化补丁「绿油油版」资源包图标">
</p>

# All the Mods 10 汉化补丁 —— 绿油油版

All the Mods 10 的简体中文汉化补丁，**同时支持 7.0 / 7.1 / 7.2**，每个整合包版本一个专属包。
整理／补译：**星野夢華 (Hoshino Yumeka)**。改动幅度较大，独立命名、独立发布；原始底本见[致谢](#许可证与致谢)。

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

一次构建产出**三个专属包**，下载时对号入座：

| 整合包版本 | NeoForge | 状态 |
|---|---|---|
| All the Mods 10 **7.2** | 21.1.241 | ✅ 作者实机在用 |
| All the Mods 10 **7.1** | 21.1.234 | ⚠️ 已按该版逐条核验，但未实机长期游玩 |
| All the Mods 10 **7.0** | 21.1.228 | ⚠️ 同上 |

Minecraft 均为 1.21.1。

**为什么要分开发**：整合包升级会改英文原文。7.1→7.2 之间 ATM 动了 13 条任务书正文，
其中 5 条是实质改写（其余是拼写修正）。逐条对过对应模组的 jar 版本之后：

| | 7.1 的原文 | 7.2 的原文 | 模组版本 |
|---|---|---|---|
| 模拟室 | 没有模式之分 | 分训练 / 推演两种模式 | **6.4.1 → 6.5.0，真升级** |
| 灌注塔 | 无视距离，走到哪都生效 | 只在设定的区块范围内生效 | 5.4.2 → 5.4.2，**同一个 jar** |
| 御腐 | 挖矿或怪物掉落 | 9 破片合 1 片簇，再用凝注台合成 | 0.9.6 → 0.9.6，**同一个 jar** |
| AE2 陨石 | 地表或地下都有 | 埋在地下、通常靠近地表 | 19.2.17 → 19.2.17，**同一个 jar** |
| 腐化怪 | 泛指「腐化怪物」 | 点名四种怪物 | 0.9.6 → 0.9.6，**同一个 jar** |

**只有模拟室那条是机制真的变了**（HNN 6.5.0 新增两种模拟模式）。其余四条模组一行代码
没动，是 ATM 把原先写得含糊或干脆写错的描述改准了——比如灌注塔，Pylons 自己的
物品提示与 JEI…
