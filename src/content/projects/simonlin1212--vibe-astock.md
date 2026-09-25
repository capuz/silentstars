---
repo: "simonlin1212/vibe-astock"
name: "vibe-astock"
description: "A-share short-term daily-review dashboard: limit-up pool, consecutive limit-up board ladder, dragon-tiger board, sector funding all visible on one screen; derived indicators such as profit momentum/promotion rate/ladder discontinuity/sentiment cycle are computed purely locally (not through AI); AI only strings data into readable market analysis. Runs entirely locally; can use Claude/Codex subscription without API key. | A-share short-term daily-review dashboard: derived sentiment metrics computed locally, AI only writes the narrative. No API key needed."
originalDescription: "A 股短线复盘看板：涨停池·连板梯队·龙虎榜·板块资金一屏看完，赚钱效应/晋级率/梯队断层/情绪周期等派生指标纯计算直出（不经过 AI），AI 只把数据串成能读的盘面研判。全本地运行，可用 Claude/Codex 订阅免 API key。| A-share short-term daily-review dashboard: derived sentiment metrics computed locally, AI only writes the narrative. No API key needed."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/simonlin1212/vibe-astock"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [73, 26]
topics: ["a-share", "ai-agent", "akshare", "china-stock-market", "dashboard", "fastapi", "fintech", "llm", "market-sentiment", "multi-agent"]
stars: 414
forks: 132
openIssues: 1
closedIssues: 10
watchers: 6
contributors: 4
recentReleases: 8
createdAt: "2026-07-29T23:40:47Z"
lastCommitAt: "2026-09-25T09:02:11Z"
lastReleaseAt: "2026-09-20T12:07:56Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 95
undervaluedScore: 30
maintainers: ["simonlin1212", "WenhuaXia", "PaulX1029"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec2d75a98ad80e12fe64a82072ddecab15df57966ccd9720262430fd742b931e/simonlin1212/vibe-astock"
---

<h1 align="center">Vibe AStock</h1>

  <b>A-share short-term daily review and tracking workbench based on OpenAI Codex Harness</b><br>
  Market observation · Evidence review · Bull-bear debate · Historical backtesting · Local web interface
</p>

</p>

> **Author Seeking Employment | Shenzhen · Hong Kong · Remote**
>
> I am Simon, focused on AI Agent and practical tool development, currently seeking job opportunities in Shenzhen, Hong Kong, or remote positions. Feel free to contact: [simonlin0423@gmail.com](mailto:simonlin0423@gmail.com).

</p>

**V1.1.3: Fixed regression from v1.1.2 — `http://0.0.0.0:<port>` printed at self-hosted gateway startup is usable again; error message directly points to port when port is misconfigured.**

Unified AI integration, task progress tracking and evidence verification; maintains and improves short-term review, market monitoring, individual stock research and historical backtesting. Provides Codex, Claude, WorkBuddy / CodeBuddy subscription integration access, and API configurations such as DeepSeek; see [AI Integration](#接入-ai) for specific requirements.

---

## Product Positioning

Vibe AStock puts repetitive tasks in A-share short-term…
