---
repo: "WXUProjects/CWXU-Algo"
name: "CWXU-Algo"
description: "无锡学院-算法协会"
readmeQualityOk: true
url: "https://github.com/WXUProjects/CWXU-Algo"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-02T15:28:52Z"
lastCommitAt: "2026-07-17T05:57:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 53
maintainers: ["srcenchen"]
openGraphImageUrl: "https://opengraph.githubassets.com/1915b9c01b849721ca859e29d9c5705a8b624e1b5bf5fbd25eade07a0b60f4d8/WXUProjects/CWXU-Algo"
---

# 无锡学院-算法协会网站开发规划
## 技术栈选型
### 后端
- golang
- kratos 微服务框架
- redis 缓存
- rabbitMQ 消息队列
- mysql
- ent orm框架
- consul 注册中心
- casbin ACL权限控制

### 前端
- 缺失
### 移动端 仅用于教练管理
- kotlin
- jetpack compose

## 功能需求
### 学生端
- [ ] 学生自主上报做题情况
    - 包括 OJ网站，题目名称，涉及算法，备注
- [x] 绑定相关做题网站，允许去爬取相关做题记录
    - 尝试适配 cf nowcoder atcoder leetcode?
- [x] 论坛讨论功能计划单独拆开来做，直接跳转到Flarum
- [ ] 做题排行榜功能
- [ ] 每场比赛排行榜功能
- [ ] 色块墙
- [ ] 做题统计

### 教练/管理web端
- [ ] 分组功能，ACM集训队和算法协会俩组做隔离
- [ ] 监测学生做题情况，可以认为就是一个不具备上报功能的学生
- [ ] 允许教练看到题目类型统计

### 教练安卓端
- 与上方类似
