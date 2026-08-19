---
repo: "chen1111-a/hkid-quota-monitor"
name: "hkid-quota-monitor"
description: "香港入境处智能身份证预约配额监控看板：5分钟级检测+邮件/飞书放号通知（第三方工具，非官方）"
readmeQualityOk: true
url: "https://github.com/chen1111-a/hkid-quota-monitor"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [71, 28]
stars: 38
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-30T04:09:09Z"
lastCommitAt: "2026-08-19T04:08:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/b3ade9b9d4459c965d2725772f488cd0975e4c26cead70d700ac96d83499b767/chen1111-a/hkid-quota-monitor"
---

# 香港身份证预约配额看板

监控香港入境处六大人事登记办事处的智能身份证预约配额，约 2 分钟检测一次，
放号时通过邮件 / 飞书群提醒订阅者。**第三方公益工具，非入境处官方服务；只做监控提醒，不做任何代抢代约。**

## 看板入口

- **首选（内地直连稳定）**：https://hkid-quota-monitor.pages.dev/
- 备用：https://chen1111-a.github.io/hkid-quota-monitor/
  （内地网络对 github.io 时通时断；jsDelivr/raw 直链带 nosniff 头只会显示源码，不要当网页入口用）
- 内地免翻墙的完整体验走**邮件订阅 + 飞书群**——通知链路全程国内直连，放号第一时间推到手机，看板只是辅助

## 它怎么工作

```
cron-job.org（每2分钟）──▶ GitHub Actions
                            │  python -m quota_monitor.run
                            │  ├─ 抓入境处公开配额接口（只读，一次一请求）
                            │  ├─ 与上一轮快照 diff → 放号事件
                            │  └─ commit data/ + 刷新 jsDelivr 缓存
                            ▼
        index.html 看板（手机优先，90 秒自动刷新）
        邮件 + 飞书通知（放号事件触发，带防抖冷却）
```

- 接口结构：[docs/api-notes.md](https://github.com/chen1111-a/hkid-quota-monitor/blob/HEAD/docs/api-notes.md)
- 2 分钟触发配置：[docs/cron-setup.md](https://github.com/chen1111-a/hkid-quota-monitor/blob/HEAD/docs/cron-setup.md)

## 相比同类工具的改进

- **手机优先**：日期做行纵向滚动，6 办事处一屏放下，不用横向拖表格
- **色盲友好**：状态格颜色+文字双通道（有/少/满）
- **防通知轰炸**：官方接口存在负载均衡数据抖动（实测同一分钟内 304↔346 格波动），通知层带单格冷却期，不会每轮都轰炸一次
- **内地直连**：邮件订阅与飞书通知链路全程国内直达，无需科学上网
- 深浅双主题、摘要卡直接回答「最早哪天能约」

## 个性化订阅…
