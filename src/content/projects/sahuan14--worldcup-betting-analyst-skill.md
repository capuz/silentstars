---
repo: "sahuan14/worldcup-betting-analyst-skill"
name: "worldcup-betting-analyst-skill"
description: "世界杯竞彩足球诚实分析助手 - Claude Code Skill | 体彩官网API数据源，覆盖胜平负/让球/比分/总进球/半全场全玩法"
url: "https://github.com/sahuan14/worldcup-betting-analyst-skill"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-06-04T13:11:04Z"
lastCommitAt: "2026-06-19T13:13:35Z"
lastReleaseAt: "2026-06-19T15:32:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 15
maintainers: ["sahuan14"]
openGraphImageUrl: "https://opengraph.githubassets.com/738b36b68a42b86daaaba85c076191ee1c38274916ca0721b88cc4c77ac9c6cf/sahuan14/worldcup-betting-analyst-skill"
---

# worldcup-betting-analyst

世界杯竞彩足球 · 诚实分析助手。这个 skill 可用于 Claude Code 和 Codex，帮助用户在世界杯及赛前热身赛期间分析中国竞彩足球玩法。

它的目标不是“保证命中”，而是：

1. 把实时赔率、单关/过关状态、伤停、首发、战意和市场概率查清楚。
2. 用比赛原型分析强弱对位、破密集防守、小组赛算分、同级缠斗等关键问题。
3. 明确区分“看好赛果”“相对可买”和“赔率是否真的有价值”。
4. 用主推、可选、博取、跳过做分层推荐，而不是非黑即白。
5. 识别低赔热门、乱串关、追注、借钱下注等高风险行为。

## 能做什么

- 从体彩官网 API 抓取竞彩赔率和单关/过关状态。
- 结合实时搜索分析近况、伤停、首发、战意、世界杯/大赛履历。
- 用低抽水市场概率做校准，避免纯靠主观判断。
- 输出单场分析卡片、分层推荐、串关建议和总结表。
- 在信息不足或赔率无价值时降级推荐强度；没有清晰方向时才建议跳过。

## 文件结构

```text
worldcup-betting-analyst/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── scripts/
│   ├── fetch_sporttery.py
│   └── odds_math.py
└── examples/
    └── sample-output.md
```

## 安装到 Codex

个人级别：

```bash
mkdir -p ~/.agents/skills/worldcup-betting-analyst
cp -R SKILL.md agents scripts examples ~/.agents/skills/worldcup-betting-analyst/
```

项目级别：

```bash
mkdir -p .agents/skills/worldcup-betting-analyst
cp -R SKILL.md agents scripts examples .agents/skills/worldcup-betting-analyst/
```

在 Codex 中可以显式输入：

```text
$worldcup-betting-analyst 帮我看看今晚世界杯竞彩怎么买
```

也可以直接提到世界杯、竞彩、足彩、买球、串关等关键词，让 Codex 自动判断是否触发。

## 安装到 Claude Code

个人级别：

```bash
mkdir -p ~/.claude/skills/worldcup-betting-analyst
cp -R SKILL.md scripts examples…
