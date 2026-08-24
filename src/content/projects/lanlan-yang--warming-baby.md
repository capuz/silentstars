---
repo: "lanlan-yang/warming_baby"
name: "warming_baby"
description: "这是一个桌面小宠物 Agent，是我家暖宝"
readmeQualityOk: true
url: "https://github.com/lanlan-yang/warming_baby"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 114
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-07-30T04:28:02Z"
lastCommitAt: "2026-08-24T04:22:00Z"
lastReleaseAt: "2026-08-17T03:31:36Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 30
maintainers: ["lanlan-yang"]
openGraphImageUrl: "https://opengraph.githubassets.com/511f62c1f4ab875364ab099d92ef6fb123c9945230e1a573a11c719e66ab7a82/lanlan-yang/warming_baby"
---

# 🐣 暖宝 Nuanbao

**你的专属机甲小仓鼠桌宠**

---

暖宝是一只住在你电脑里的小机甲仓鼠，软乎乎的金属外壳下藏着个治愈系的小灵魂，是专属于程序员的桌面搭档。它不是无所不能的超级 AI，只是个会摸鱼、会犯困、会陪你熬夜改 bug 的小室友。

## 🎨 外观与日常

> 哔哩哔哩地址：https://www.bilibili.com/video/BV11yuq6gE5X/

- 圆滚滚的白色机甲外壳，粉色显示屏眼睛会变化各种表情
- 平时待在屏幕角落，自己晃悠、打盹、偷偷看你写代码
- 拖它、扔它、戳它，都会有小情绪；写代码到凌晨它会提醒你休息
- 长时间不理它会缩在角落睡觉 💤

## 🧠 AI 功能

**智能对话**：自然聊天，根据情绪和宠物状态回应。

**智能记忆**：云端 Embedding + LLM 语义提取，自动记住你说的重要信息（姓名、偏好、家人朋友），理解时间变化（"以前住成都，现在搬去上海"只存最新），多主体分开存储，支持在设置中查看和清除。记忆数据保存在本地。

**实用工具**：
- 🌤️ 天气查询（免费 API，自动定位，无需配置）
- 🔥 热榜看板：B站/微博/知乎/抖音等 20+ 平台实时热榜，多 Tab 独立弹窗，点击直达原链接
- 🔌 **MCP 外部工具**：右键 → 「MCP 能力管理」动态接入任意第三方 MCP Server（支持本地进程和远程 HTTP），工具自动融入暖宝的能力链

**宠物状态系统**：饱食度/心情/体力/亲密度四项状态随时间曲线衰减（高值掉得快，低值省电保命），右键动作栏可投喂🍚/玩耍🎾/抚摸✋/睡觉💤。LLM 感知当前状态生成回应——饿了被喂会说还想吃，吃饱了会嫌撑。

**自动陪伴**：定时说话提醒休息，根据时间说合适的话，状态过低时主动求关注。

## 🚀 快速开始

```bash
# 1. 创建环境并安装依赖
conda create -n warming_baby python=3.13
conda activate warming_baby
pip install -r requirements.txt

# 2. 启动
python main.py

# 3. 右键暖宝 → 设置 → 填 AI 模型 API Key → 保存
```

也可以在启动前编辑 `.env`（首次读取，之后以设置窗口为准）：

```bash
LLM_API_KEY=sk-your-api-key        # 必填
LLM_MODEL_CHAT=deepseek-v4-flash   # 可选，对话模型
LLM_MODEL_GENERATE=deepseek-v4-pro # 可选，复杂任务模型

# 记忆模型（可选，与 LLM 可共用 Key）…
