---
repo: "KiritakeKumi/fm10k-tools"
name: "fm10k-tools"
description: "Silicom PE31625G24DIRA"
readmeQualityOk: true
url: "https://github.com/KiritakeKumi/fm10k-tools"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [53, 39]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-11T03:44:05Z"
lastCommitAt: "2026-08-28T15:32:50Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 73
undervaluedScore: 22
maintainers: ["KiritakeKumi"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9028c1d1929675ab31a3cf1443ca5b8a1986df74e6a0cfa9eae7b7bc72a1f7d/KiritakeKumi/fm10k-tools"
---

# FM10000 二层交换机改造

**本项目由 Claude Opus 5 实现 ， 下面全是AI写的.jpg**

把 Silicom A11h（Intel FM10000 "Red Rock Canyon"）从 IBM Genesis overlay fabric 节点改成纯二层硬件交换机，附带一个端口状态 Web 面板。

目前按二层交换机设计，可以跑满 600G 带宽。三层/主机侧智能网卡功能会让 PEP/TE 占用交换容量——二层模式下也会占，但不影响 100G×6 的实现。

转发全走 FM10000 芯片，不经 Linux 网桥或 OVS。板载 Atom E3826 双核扛不住数据面，也没必要——芯片本来就干这个。

---

## 硬件环境

在一块 Silicom A11h 上开发并实测：

| 项 | 值 |
|---|---|
| 交换芯片 | Intel FM10000 (`8086:15a4`) |
| CPU | Intel Atom E3826 @ 1.46GHz |
| 对外光口 | 2 × MPO24（不是 6 × QSFP，见 [01](https://github.com/KiritakeKumi/fm10k-tools/blob/HEAD/docs/01-hardware.md#2-对外是-2-个-mpo24不是-6-个-qsfp)） |
| 系统 | Ubuntu 16.04 / 内核 4.4.0-38 / Python 3.5 |
| SDK | Intel IES SDK 4.3.3 + TestPoint |
| 驱动 | fm10k 0.21.7 (dkms) |

同系列 Silicom bridge board / IBM Genesis FP 板卡应该能直接用或小改，但端口映射强依赖板型，换板必须重新核对 cfg 里的 EPL / hwResourceId。

> 本仓库不含 Intel IES SDK。SDK、TestPoint、`fm10k` 驱动请从 Intel/Silicom 原厂渠道获取。

---

## 目录结构

| 路径 | 说明 |
|---|---|
| `docs/` | 文档，建议按 01→05 顺序读 |
| `boot/` | GRUB / UEFI 启动修复（独立于交换机功能） |
| `config/` | 平台 cfg 生成器 + TestPoint 二层配置脚本 |
| `services/` | 常驻服务 + 兜底 timer + CLI |
| `web/` | 端口状态面板前端 |

### 文档索引

| 文档 | 内容 |
|---|---|
|…
