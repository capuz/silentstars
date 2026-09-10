---
repo: "ml8s/liki"
name: "liki"
description: "Liki 灵机  — 命理 Skill，按命理师的专业标准构建：排盘走天文历算引擎，断语附经典出处，结论可验证， 八字 · 紫微 · 六爻 · 奇门 · 黄历择日 · 风水 · 起名。起名，问卦，风水。 Liki  —  Professional Skill for Chinese Metaphysics. Built to professional standards: astronomical-engine charting, classically-sourced judgments, verifiable conclusions BaZi · ZiWei · Liuyao · QiMen · Date Selection · Feng Shui · Naming."
readmeQualityOk: true
url: "https://github.com/ml8s/liki"
homepage: "https://liki.hk"
language: "Go"
languages: ["Go", "Python"]
languagePcts: [72, 26]
topics: ["ai-agent", "bazi", "chinese-metaphysics", "fengshui", "json-rpc", "liuyao", "naming", "qimen", "ziwei"]
stars: 58
forks: 7
openIssues: 0
closedIssues: 47
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2026-07-08T06:26:56Z"
lastCommitAt: "2026-09-10T08:18:57Z"
lastReleaseAt: "2026-08-27T11:44:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 41
maintainers: ["ml8s", "begininvoke"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad7a9c9e39bd6ae8af2afd86098c48e650d00a50fb9c3e72ac88c1a628b79abe/ml8s/liki"
---

</p>

  <strong>Liki 灵机 — 命理 Skill</strong><br>
  按命理师的专业标准构建：排盘走天文历算引擎，断语附经典出处，结论可验证<br>
  八字 · 紫微 · 六爻 · 奇门 · 黄历择日 · 风水 · 起名
</p>

  <code>npx skills add ml8s/liki</code>
</p>

</p>

---

## 30 秒了解

安装后，你的 AI 助手获得 4 个命理技能：

| 技能 | 能问什么 | 试试这样问 |
|------|---------|-----------|
| **liki-bazi** 命理 | 婚姻、事业、财运、健康、学业、性格、六亲、两人合盘、全盘命书 | `算八字，1990-05-20 12:00 北京出生，男` |
| **liki-naming** 起名 | 新生儿起名、成人改名、英文起中文名、名字评估 | `宝宝起名，2024-06-10 广州出生，男，姓陈` |
| **liki-divination** 问卦 | 六爻问成败应期、奇门问方向时机、黄历选吉日 | `这件事能成吗？什么时候有结果` |
| **liki-fengshui** 风水 | 八宅命卦布局、玄空飞星、流年风水 | `我家风水怎么样` |

**专业标准意味着什么**：

- 排盘由天文历算引擎计算（真太阳时/节气秒级精度），AI 不编数字
- 判断依据 775 条断语真值表，每条附《渊海子平》《子平真诠》等经典依据
- 160 道命理师大赛真题独立评测，答案与评测过程隔离

## 安装

```bash
npx skills add ml8s/liki          # 一次安装全部 4 个技能
```

只装某一个：

```bash
npx skills add ml8s/liki --skill liki-bazi      # 命理（八字+紫微）
npx skills add ml8s/liki --skill liki-naming    # 起名
npx skills add ml8s/liki --skill liki-divination # 问卦
npx skills add ml8s/liki --skill liki-fengshui  # 风水
```

**装完后，直接这样开始**：

```
帮我出一份命书，1990-05-20 12:00 北京出生，男
我和她合不合？我 1992-03-15 生，她 1994-08-20 生
2026 年我的事业和财运怎么样？
```

## 使用手册

### 第一次使用

**准备**：出生日期（公历）、出生时间（尽量精确到分）、出生城市、性别。

**直接发**——出生信息和问题写在一条消息里即可：…
