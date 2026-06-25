---
repo: "VipMaxxxx/payincus"
name: "payincus"
description: "基于 Incus 的 LXC / KVM NAT VPS 销售、交付与管理面板。"
url: "https://github.com/VipMaxxxx/payincus"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [62, 35]
stars: 19
forks: 10
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-22T18:00:26Z"
lastCommitAt: "2026-06-25T01:31:45Z"
lastReleaseAt: "2026-06-23T03:23:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 80
undervaluedScore: 52
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/4a44a234695417c4b33fb9a4c6f3fe13ce0a7a40c9986d4f1f2f87e4eb4b8099/VipMaxxxx/payincus"
discussionCount: 0
---

<h1 align="center"><img src="./client/public/incudal_logo.webp" width="96" align="absmiddle" alt="PayIncus logo"> PayIncus</h1>

  ·
  ·
  ·
</p>

## 项目说明

PayIncus 是基于开源项目 [qwer-xyz/incudal](https://github.com/qwer-xyz/incudal) 进行二次开发的 Incus 面板，面向 NAT VPS、LXC / KVM 实例、套餐销售、账务计费、用户后台、管理员后台和宿主机 Agent 管理场景。

当前维护重点是非 Docker 生产部署、前后端分离、安全审计、支付回调、资源交付和 Agent 上报链路。

入口示例：

- 用户端：https://panel.example.com
- 管理后台：https://admin.example.com
- 在线 Demo：https://payincus.com/demo
- 文档站：https://payincus.com
- Telegram 交流群：https://t.me/Payincus
- 当前仓库：https://github.com/VipMaxxxx/payincus
- 原始项目：https://github.com/qwer-xyz/incudal

## 核心能力

- 实例交付：基于 Incus 创建和管理 LXC / KVM 实例，支持 NAT 网络、IPv6、系统镜像、套餐资源和节点绑定。
- 用户后台：注册登录、控制台、实例详情、终端 WebSocket、工单、公告、通知、邀请、钱包、邮箱和托管节点。
- 管理后台：用户、套餐、节点、镜像、订单、日志、OAuth、Telegram、邮件、系统配置、资源池和统计。
- 插件中心：后台上传安装、GitHub 插件市场安装、启用/停用/卸载、配置维护、任务日志、用户端扩展点和开发模板。
- 计费账务：余额、充值、支付回调、消费记录、返利、积分、VIP 等级和会员福利。
- 宿主机 Agent：安装脚本、心跳、资源上报、实例报告、流量统计和二进制下载代理。
- 生产安全：JWT、Cookie、CORS、CSP、Helmet、SSRF 防护、文件上传校验、支付签名/IP 白名单和敏感日志脱敏。
- 后台 OTA：管理后台查看当前版本、更新内容、Release OTA 包、SHA256、任务日志和回滚入口；生产支持 `current`/`releases` 原子切换、失败自动回滚和手动回滚。

## 技术栈

```text
client/                 Vue 3 + Vite 前端
server/…
