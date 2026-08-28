---
repo: "Zheyi-D/quota-monitor"
name: "quota-monitor"
description: "香港入境处换领身份证预约配额实时监控 | 飞书群 + HTML邮件双通道通知 | GitHub Actions 全自动"
readmeQualityOk: true
url: "https://github.com/Zheyi-D/quota-monitor"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [39, 33]
stars: 30
forks: 5
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-29T05:03:15Z"
lastCommitAt: "2026-08-28T12:24:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 60
undervaluedScore: 30
maintainers: ["github-actions[bot]", "Zheyi-D"]
openGraphImageUrl: "https://opengraph.githubassets.com/0db5a441bd620843f199153d17e34140a3404a39839385377969b531abdabed5/Zheyi-D/quota-monitor"
---

# 🪪 香港入境处预约配额监控

实时追踪香港入境事务处**换领身份证**预约配额，新名额放出时 **飞书群 + 飞书私聊** 自动通知。

---

## 📱 方式一：加入飞书群（推荐）

机器人自动推送配额变化，**消息秒达**，加群即用，无需任何配置。

> 📖 **[群信息 & 加群方式](https://scn7uo58gnuo.feishu.cn/wiki/QSFlwcMBmil7sGkZRBTcAWqwnCf)**（多群方案，群满自动分流）

### 💬 方式二：飞书私聊订阅

如果不想加群，也可以**按日期过滤**，仅接收你关注日期的通知：

1. [私聊机器人「HKID放号自动监测」](https://applink.feishu.cn/T98uc8RbxI8c)（发送任意消息即可触发）
2. 机器人会回复交互卡片，支持：
   - 📅 **订阅特定日期** — 只关注你预约的那天
   - 🔔 **订阅全部日期** — 所有放号都通知
   - 📊 **查看 / 修改 / 取消订阅**
3. 也可以直接回复日期一键订阅，例如 `08/15, 08/20-08/25`

支持三种过滤模式：
- 📅 **按日期** — 只看特定日期，不限办事处
- 🏢 **按办事处** — 只看特定办事处，不限日期
- 🎯 **按日期+办事处** — 精确匹配

> 💡 机器人私聊有 1-2 秒延迟，着急的话推荐进群。

---

## 🖥 看板

> 🖥 **[quota-monitor 看板](https://Zheyi-D.github.io/quota-monitor)**

- 📊 实时查看全港各办事处预约配额状态
- 📈 放号规律热力图，可视化各时段放号频次
- 📖 附电话预约办理教程
- 🔧 内置管理后台，支持订阅者管理、统计概览、双通道群发

---

## 📨 通知流程

检测到新配额放出时，按以下顺序推送：

> **群聊广播**（多群并行）→ **私聊 DM**（并行，仅推送给匹配日期的订阅者）

飞书群和私聊几乎同时到达。

---

## 🔒 隐私与安全

- 飞书用户数据使用 **AES-256-GCM 加密存储**，仓库中不可读
- 仅读取入境处**公开发布**的配额数据
- ⚠️ 免责声明：本系统为第三方开源工具，非香港入境事务处官方服务，请以官网信息为准

---

## 📄 License

MIT © [Deng Zheyi](https://github.com/Zheyi-D)

> ⚠️ **本开源项目仅供学习交流使用，请勿用于任何商业盈利目的。**

---

## 🙏 鸣谢

- 数据来源：[香港入境事务处 —…
