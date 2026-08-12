---
repo: "qin1473692580-ux/oh-story-claudecode"
name: "oh-story-claudecode"
description: "网文/小说写作 skill 包，覆盖长篇与短篇网络小说的扫榜、拆文、写作、去AI味、封面图全流程"
readmeQualityOk: true
url: "https://github.com/qin1473692580-ux/oh-story-claudecode"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [50, 28]
stars: 59
forks: 12
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 3
createdAt: "2026-08-08T19:38:08Z"
lastCommitAt: "2026-08-12T05:12:16Z"
lastReleaseAt: "2026-08-08T20:09:20Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 38
maintainers: ["worldwonderer", "claude", "elvisw"]
openGraphImageUrl: "https://opengraph.githubassets.com/e26299b09c6aa26d96ff3253acd6960c0e68a5c8537f47b5de12b556a8aca8e1/qin1473692580-ux/oh-story-claudecode"
discussionCount: 0
---

[English](https://github.com/qin1473692580-ux/oh-story-claudecode/blob/HEAD/README_EN.md) | **中文**

# oh-story

网文写作 skill 包，覆盖长篇与短篇网络小说的扫榜、拆文、写作、去AI味、封面图全流程。内置适配 Claude Code、OpenCode、ZCode、OpenClaw、Codex CLI、Reasonix、workbuddy；能读取项目文件的 Web AI / Agent 环境也可按通用 skills 路径使用。

> **独立仓库与发行线**：本仓库是 oh-story 的现役独立产品仓库和发行线，不属于 GitHub Fork 网络，也不会自动同步任何外部仓库。后续功能、版本、Dev/Release 渠道及商业化由本项目独立规划和维护。早期代码基于 MIT 开源版本演进；完整 Git 历史用于持续记录代码来源与贡献归属，具体许可见 [`LICENSE`](https://github.com/qin1473692580-ux/oh-story-claudecode/blob/HEAD/LICENSE)。
>
> 本 README 只介绍本仓库能力与本仓库案例，不混入第三方演示项目。自研改动来自真实写作复盘——长篇《[财阀除名那晚，古井给我递了药方](https://fanqienovel.com/page/7661645008545516606)》（番茄小说连载中，星河上人 著）与多篇番茄短故事全流程落地：把实战中踩过的坑改回工具本身，而不是每次靠人工记住。

### 自研升级清单（按实战复盘沉淀）

- **错别字校验前置门**：新增 `check-typos.js`，作为每章写完落盘后的第一道检查（先于AI味/退化/标点脚本）——源自真实漏检案例（"那笔钱"误写"那笔欠"被读者发现），高置信度固定搭配词典，advisory级从不自动改写
- **实战验证的题材包**：新增 `现实共鸣型`（原生家庭剥削/职场PUA反杀/彩礼陷阱）与 `悬疑脑洞型`（死亡游戏/规则怪谈，含创作五步法与真规则原则）两个题材包——基于番茄作家后台真实热门故事榜与两轮独立爆款语料交叉验证后补齐的覆盖缺口，并已用于实际成稿
- **反转规则消歧**："一个反转撑一篇"改写为"一个核心反转撑骨架，高频小反转做肌肉"——用真实爆款语料（约每800-1500字一次小翻转）修正了易被误读的执行规则

- **Phase 5 质检步骤硬性化**：一致性检查、去AI味独立审查从"如果部署了可以 spawn"改成硬性必须项，不再因软性措辞被连续多章静默跳过
- **逐章质检进度表**：新增…
