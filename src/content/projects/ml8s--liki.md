---
repo: "ml8s/liki"
name: "liki"
description: " Liki  —  Professional Skill for Chinese Metaphysics. BaZi, ZiWei, QiMen, LiuYao, XuanKong, BaZai.  Liki 灵机  — 命理师的Skill。命理，起名，问卦，风水。八字、紫微、奇门、六爻、玄空、八宅。"
readmeQualityOk: true
url: "https://github.com/ml8s/liki"
homepage: "https://liki.hk"
language: "Shell"
languages: ["Shell", "Makefile"]
languagePcts: [66, 34]
topics: ["ai-agent", "bazi", "chinese-metaphysics", "fengshui", "json-rpc", "liuyao", "naming", "qimen", "ziwei"]
stars: 26
forks: 2
openIssues: 0
closedIssues: 10
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-08T06:26:56Z"
lastCommitAt: "2026-08-04T06:11:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["ml8s"]
openGraphImageUrl: "https://opengraph.githubassets.com/afc0a38fde0a919e6b06d303a81c57c09ef3209299d1d00c8a0fbdee9762a3bf/ml8s/liki"
---

</p>

  <strong>Liki — 命理师的 Skill</strong>
</p>

  <code>npx skills add ml8s/liki</code>
</p>

</p>

---

**Liki** 是命理师的 Skill，基于精密计算引擎与系统化方法论构建，为命理师提供可靠、可复验的专业工具。在 AI 助手中完成八字、紫微、起名、六爻、奇门、择日、风水等全面命理分析。

覆盖 **8 个独立领域**，内置 **9 份方法论文档**，八字紫微**双体系交叉验证**，报告流程经 **generate → review → revise** 三阶段审查。

## 领域

| 领域 | 说明 |
|------|------|
| 八字 | 排盘、用神、格局、合会冲刑、合盘、大运流年 |
| 紫微 | 十二宫、四化、三方四正、特殊格局、大限流年 |
| 起名 | 八字用神 + 五格三才。支持外国人英文定中文姓 |
| 六爻 | 起卦→装卦→断卦 |
| 奇门 | 排盘、断事、择吉 |
| 黄历 | 择日查询 |
| 八宅 | 命卦配门主灶 |
| 玄空 | 飞星盘、三元九运、流年飞星 |

## 安装

```bash
npx skills add ml8s/liki
```

然后在 AI 助手中直接对话：

> 算八字，1990-05-20 12:00 北京出生，男
> 排个紫微盘，1988-03-15 上海出生，女
> 宝宝起名，2024-06-10 广州出生，男，姓陈
> 明天适合搬家吗

也可生成综合命书报告：

> 帮我出一份命书

AI 助手会完成八字+紫微全流程分析，输出综合论断 + 八字报告 + 紫微报告。

## 架构

```
Liki（本仓库）     → Skill（流程定义 + 方法论文档）
liki-engine        → 天文历算 API（[开源计算引擎](https://github.com/ml8s/liki-engine)）
[liki.hk](https://liki.hk)        → 官方网站，基于 engine + skill 构建
```

## 项目结构

```
├── SKILL.md    ← 路由 + 共性规则
├── app/        ← 用户应用（12个：婚姻/健康/事业/财运/学业/性格/风水/择日/占卜/合盘/起名/命盘）
├── domains/bazi/       ← 八字（16个决策表）
├── domains/ziwei/      ← 紫微（9个决策表）
├── domains/liuyao/     ← 六爻
├── domains/qimen/      ← 奇门
├── domains/huangli/    ← 黄历
├──…
