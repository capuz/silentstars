---
repo: "RunoreLab/MahoShojo-Generator"
name: "MahoShojo-Generator"
description: "基于 AI 结构化生成的个性化魔法少女角色生成器。"
url: "https://github.com/RunoreLab/MahoShojo-Generator"
homepage: "https://mahoshojo.colanns.me"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 164
forks: 9
openIssues: 1
closedIssues: 13
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-05-28T11:22:22Z"
lastCommitAt: "2026-07-03T06:24:02Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 44
maintainers: ["notuhao", "colasama"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a6b2e5bf9f0e14d562fbcc1118e933793e38c11096547b63e0661c18630175b/RunoreLab/MahoShojo-Generator"
discussionCount: 0
---

</p>

  
  
</div>

## ✨ 项目介绍

**魔法少女生成器 (MahoShojo-Generator)** 是一款基于 AI 结构化生成技术的 Web 小游戏，玩家可以创建个性化、可成长的魔法少女（也可能是奇奇怪怪的角色）及相关角色，然后开始紧张刺激的赛博斗蛐蛐或者是创作小故事的活动，甚至还有排位功能！

除此之外，项目也实现了 AI 多渠道轮询、用户系统、数据卡公开分享、敏感词检测等丰富神秘的功能。

📖 查看完整的版本更新历史，请参阅 [CHANGELOG.md](./CHANGELOG.md)

> 当前版本：`v0.8.2`
>  
> 最新版本重点：接入万途生态互通与竞技场素材注入。档案馆可导入/导出万途通用角色卡，竞技场可把角色、情景、历史、问卷或万途 Card 作为参考素材注入战报；顶部导航新增万途驿站、万途竞技场、废土车卡与废土旅途入口。

## ✨ 核心功能

### 角色生成
- **魔法少女生成**：输入名字快速生成基础设定
- **深度问卷生成**：通过奇妙妖精大调查问卷生成深度设定
- **残兽生成**：创建魔法少女的宿敌——残兽
- **流式/非流式切换**：角色生成支持实时 Markdown 或结构化 JSON
- **随机组合**：一键从预设素材库随机生成角色
- **通用角色模板**：支持多种角色模板切换

### 竞技场系统
- **故事生成**：上传 1-10 位角色，AI 生成刺激的对战，或温馨（？）的故事
- **实时流式生成**：实时观看战报生成过程
- **连续战报会话**：本地保存章节链，支持章节规划、续写 / 分支 / 重写最后一章，适合长篇连续剧情
- **素材注入**：可把 JSON 数据卡、万途 Card、历史或问卷作为参考素材加入普通竞技场与连续战报；使用素材时不计严格排位
- **情景卡章节规划**：主情景可为连续战报提供建议或固定章节数，帮助 AI 按章推进并控制终章收束
- **多种模式**：经典/日常/羁绊/情景模式
- **随机元素**：随机角色加入、随机判定事件
- **历战记录**：AI 参考角色过往经历生成故事

### 成长与社交
- **成长升华**：角色通过对战积累经验并进化
- **排位系统**：1v1 对局计算排位分，展示排行榜
- **PVP 卡牌对决**：回合制对战，投票决定胜负
- **个人中心**：展示战报、生成个人资料卡

### 云端与分享
- **用户系统**：注册/登录账户，云端保存角色数据（v0.8.0 起进入旧密钥迁移窗口）
- **公开分享**：分享角色供他人使用，支持点赞和筛选
- **数据卡管理**：可视化编辑器、回收站、徽章系统
- **万途通用卡互通**：档案馆支持把本站角色导出为万途 `character`…
