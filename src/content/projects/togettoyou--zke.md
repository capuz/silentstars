---
repo: "togettoyou/zke"
name: "zke"
description: "ZKE（Z Kubernetes Engine）：AI 原生的 Kubernetes 云操作环境，桌面式多集群控制台加受控 AIOps Agent，基于 Server + Agent 与 QUIC/mTLS，适用于私有云、混合云及边缘环境"
readmeQualityOk: true
url: "https://github.com/togettoyou/zke"
homepage: "https://fbcupchhlacp.sealosbja.site"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [67, 31]
topics: ["agent", "cloud-native", "kubernetes", "kubernetes-engine", "multi-cluster", "multi-tenant", "edge-computing", "hybrid-cloud", "kubernetes-dashboard", "cloudos"]
stars: 99
forks: 12
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-23T02:14:33Z"
lastCommitAt: "2026-08-27T14:25:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 26
maintainers: ["togettoyou"]
openGraphImageUrl: "https://opengraph.githubassets.com/8621ac55de7f1e32c89738247f02f1ee9159d425c14eb1f32f9bdf069f4e25f7/togettoyou/zke"
---

# ZKE

**AI 原生的 Kubernetes 云操作环境**

[在线体验](https://fbcupchhlacp.sealosbja.site/) · [部署指南](https://github.com/togettoyou/zke/blob/HEAD/docs/deployment.md) · [完整文档](https://github.com/togettoyou/zke/blob/HEAD/docs/README.md) · [Roadmap](https://github.com/togettoyou/zke/blob/HEAD/docs/roadmap.md)

</div>

ZKE（Z Kubernetes Engine）是一个 AI 原生的 Kubernetes 云操作环境，把分散在数据中心、私有云、公有云和边缘的 Kubernetes 集群，收敛成一个可以直接操作的云环境：Agent 从每个集群主动向 Server 建立 QUIC/mTLS 出向连接，Console 用桌面、窗口和 Dock 组织能力，AIOps 作为常驻其中的运维 Agent，与人共用同一套权限、同一条通道和同一份审计。

ZKE Console 采用了一套运行在浏览器中的桌面式交互界面。集群接入管理、组织与资源、访问与审计、容器服务、Helm 应用、终端和 AIOps 都以独立应用存在。用户可以从桌面或 Dock 打开应用，在窗口之间切换、最小化、最大化，并保存自己的桌面布局和工作作用域。这种设计并不只是视觉模仿。多集群运维很少是一条从上到下的单页面流程。排查一个异常工作负载时，操作者可能同时需要资源详情、事件、Pod 日志和终端。多窗口让这些上下文保留在同一个工作空间中，最小化终端窗口也不会被当成关闭会话。

https://github.com/user-attachments/assets/f06f2229-48c2-4911-8e72-8cf60975d28f

> **在线体验：** <https://fbcupchhlacp.sealosbja.site/>
>
> 用户名 `view` / 密码 `LECQkqcp2tQ5Yh8`（只读账号，体验数据可能随时重置）

## 把多集群当成一台机器来用

| 操作系统里的概念 | ZKE 中对应的东西 |
| --- | --- |
| 硬件 | 你已有的 Kubernetes 集群，分布在数据中心、私有云、公有云和边缘 |
| 内核与驱动 | ZKE Server 加每个集群里的 Agent；Server 不直连任何集群的 Kubernetes API Server |
| 系统调用 | 携带明确 Cluster、Namespace 与资源身份的具名操作，逐次判权并写入审计 |
| 桌面与窗口…
