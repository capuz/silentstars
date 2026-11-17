---
repo: "AliyunContainerService/data-on-ack"
name: "data-on-ack"
description: "Examples of Data & AI/ML on Alibaba Cloud ACK by AI Suite"
readmeQualityOk: true
url: "https://github.com/AliyunContainerService/data-on-ack"
homepage: "https://aliyuncontainerservice.github.io/data-on-ack/"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [52, 22]
topics: ["kubernetes", "ai", "ai-platform", "alibaba", "alibaba-ai", "alibaba-cloud", "alibabacloud", "cloud", "data", "llm"]
stars: 11
forks: 8
openIssues: 2
closedIssues: 3
watchers: 6
contributors: 21
recentReleases: 0
createdAt: "2024-09-09T09:10:17Z"
lastCommitAt: "2026-11-17T12:14:41Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 85
undervaluedScore: 64
maintainers: ["AlanFokCo", "TrafalgarZZZ", "Bpmm9012"]
openGraphImageUrl: "https://opengraph.githubassets.com/da1a46f2be75f5b02b8ec5c4ab5736eba321051936ad6e4d1c3c41c8f1ce36e6/AliyunContainerService/data-on-ack"
---

# data-on-ack

data-on-ack 是基于阿里云容器服务 ACK 的开源云原生 AI/ML 平台，为数据科学家和 ML 工程师提供模型开发、训练、推理的全流程工具。

## 快速开始

**前提条件**：ACK Pro 集群 (>= 1.20) + Nginx Ingress Controller + 阿里云 AK/SK

```bash
# 1. 创建凭据 Secret
kubectl create ns kube-ai
kubectl create secret generic ai-dashboard-credentials \
  --from-literal=accessKeyId=<AK> --from-literal=accessKeySecret=<SK> -n kube-ai
kubectl create secret generic ai-dev-console-credentials \
  --from-literal=accessKeyId=<AK> --from-literal=accessKeySecret=<SK> -n kube-ai

# 2. 安装运维控制台
helm install ai-dashboard charts/ack-ai-dashboard -n kube-ai \
  --set 'admin-ui.dashboard.ingress.hosts[0].host=<YOUR_DOMAIN>' \
  --set 'admin-ui.dashboard.ingress.hosts[0].paths[0]=/' \
  --set grafana.adminPassword=<PASSWORD>

# 3. 安装开发控制台
helm install ai-dev-console charts/ack-ai-dev-console -n kube-ai \
  --set 'dev-console.console.ingress.hosts[0].host=<YOUR_DOMAIN>' \
  --set 'dev-console.console.ingress.hosts[0].paths[0]=/'
```

详细步骤请参阅 [部署指南](https://github.com/AliyunContainerService/data-on-ack/blob/HEAD/docs/deploy-guide.md)。

## 文档

| 文档 | 说明 |
|------|------|
| [部署指南](https://github.com/AliyunContainerService/data-on-ack/blob/HEAD/docs/deploy-guide.md) |…
