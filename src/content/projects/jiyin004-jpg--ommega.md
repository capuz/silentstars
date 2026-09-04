---
repo: "jiyin004-jpg/ommega"
name: "ommega"
description: "Ommega three-end system: A/B-side Magisk modules, relay server, and B-side Android app"
readmeQualityOk: true
url: "https://github.com/jiyin004-jpg/ommega"
language: "Rust"
languages: ["Rust", "AIDL"]
languagePcts: [72, 23]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-08-24T10:58:14Z"
lastCommitAt: "2026-09-04T08:09:57Z"
lastReleaseAt: "2026-08-24T11:10:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 24
maintainers: ["jiyin004-jpg"]
openGraphImageUrl: "https://opengraph.githubassets.com/52f2ca729faf5d9071cc6ff4389f80bc75acf45f2c225c1e45b205fb154af8c4/jiyin004-jpg/ommega"
---

# Ommega

Ommega 是一个三端远程 TEE 认证系统：让一台设备（B 端）的真实硬件 TEE 能力通过网络提供给另一台设备（A 端）使用。A 端应用发起的密钥认证（attestation）、签名（sign）、解密（decrypt）请求，经过 server 中转调度，由 B 端设备的真实硬件 TEE（KeyMint / StrongBox）执行并返回结果，从而为 A 端应用提供真实可信的硬件级安全认证。

源码版本：1.3.0（打包日期：2026-08-22）

## 系统组成

| 端 | 角色 | 形态 | 安装方式 |
|----|------|------|----------|
| **A 端（a-side）** | 服务请求端。keymint 守护进程 + inject 注入器拦截本机 keystore 调用，将认证/签名/解密请求转发到远程 B 端真实 TEE | Magisk 模块（arm64-v8a） | Magisk / KernelSU 刷入 zip |
| **B 端（b-side）** | 服务提供端。relay 守护进程长轮询 server 领取任务，调用本机真实硬件 TEE 执行认证/签名/解密并回传结果 | Magisk 模块（arm64-v8a） | Magisk / KernelSU 刷入 zip |
| **B 端 App（b-app）** | B 端管理界面，用于查看设备状态、配置连接参数 | Android APK | 直接安装 APK |
| **Server（server）** | 中转与调度中心。任务队列、设备管理、卡片计费、密钥盒（keybox）管理、在线设备状态展示 | 独立二进制 | Linux x86_64 / Windows x86_64 部署 |

## 主要功能

- **真实硬件 TEE 远程认证**：B 端使用真实 KeyMint / StrongBox 生成 attestation 证书链，A 端应用获得真实硬件安全级别（StrongBox / TEE）的认证结果
- **远程签名与解密**：A 端密钥操作完整转发到 B 端真实 TEE 执行
- **KeyMint 版本自适应**：自动探测并兼容不同 Android 版本的 KeyMint HAL 接口
- **StrongBox 优先与降级策略**：优先使用 StrongBox 安全级别，按策略处理不可用场景
- **在线设备状态页**：server 提供公开的设备在线状态展示界面
- **卡片计费体系**：server 内置卡片购买、激活与用量管理
- **管理后台**：设备管理、任务查看、密钥盒上传与自动刷新

## 快速使用（官方在线服务）

不想自己搭建的话，直接使用官方在线服务即可，以下配置填入即用：

| 项目…
