---
repo: "babalae/bettergi-scripts-list"
name: "bettergi-scripts-list"
description: "BetterGI 的脚本仓库，内含BetterGI 的JS脚本、路径追踪、战斗策略、七圣召唤策略。"
url: "https://github.com/babalae/bettergi-scripts-list"
homepage: "https://bgi.sh"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [70, 29]
stars: 472
forks: 397
openIssues: 42
closedIssues: 127
watchers: 4
contributors: 216
recentReleases: 0
createdAt: "2024-10-03T07:38:25Z"
lastCommitAt: "2026-06-28T03:09:24Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 95
undervaluedScore: 42
maintainers: ["zaodonganqi", "MualaniMarine", "this-Fish"]
openGraphImageUrl: "https://opengraph.githubassets.com/358b25687508f8f110e0a716410fec62a4cca7c5f585a13e580df9be5794058d/babalae/bettergi-scripts-list"
discussionCount: 10
---

# BetterGI · 更好的原神 的脚本仓库

[BetterGI](https://github.com/babalae/better-genshin-impact) 的 📜 脚本仓库

在线版脚本仓库：[bgi.sh](https://bgi.sh)  备用地址：[https://s.bettergi.com](https://s.bettergi.com/)

作者Q群：764972801 （非作者请勿加入）

[如何提交到本仓库？（谁都能看懂的 GitHub Pull Request 使用指南）](https://bettergi.com/dev/pr.html)

## 脚本提交说明

- 战斗脚本提交到 [repo/combat](https://github.com/babalae/bettergi-scripts-list/tree/main/repo/combat) 目录；
- JS 脚本提交到 [repo/js](https://github.com/babalae/bettergi-scripts-list/tree/main/repo/js) 目录；
- 地图追踪脚本提交到 [repo/pathing](https://github.com/babalae/bettergi-scripts-list/tree/main/repo/pathing) 目录；
- 七圣召唤脚本提交到 [repo/tcg](https://github.com/babalae/bettergi-scripts-list/tree/main/repo/tcg) 目录。

## 脚本提交规范

为了保证脚本的规范性和可读性，方便用户清晰了解脚本的用途，制定以下脚本命名规则和脚本文件夹命名规则。

### 战斗策略脚本

创建战斗策略脚本请参考文档[自动战斗](https://www.bettergi.com/feats/task/domain.html)和已有的其他战斗策略脚本

#### 命名规则

- 脚本的名称**应包含使用的角色简写**
- 特别的，只能用于副本，不适用于锄地的战斗策略应当增加“-副本”的后缀

#### 注释与署名

- 战斗策略脚本中使用“//”进行注释，必要时应当在脚本中使用注释以明确使用的条件等
- 推荐在策略中同时通过注释说明自动战斗设置中的相关部分，例如：“// 检查战斗结束的延时：设置为 0.4”
- 署名使用“//作者：你的名字”，错误的格式将导致无法识别

#### 注意事项

- 确保你充分了解自动战斗的完整机制（如战斗结束检查的触发）和每个动作的具体内容再开始编写战斗策略
- 提交前请进行充分的实战测试与优化。若战斗策略被社区或管理员判定为低质量，其合并请求（PR）将不予通过。

### 地图追踪脚本…
