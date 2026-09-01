---
repo: "oneclickvirt/speedtest"
name: "speedtest"
description: "就近节点测速模块"
readmeQualityOk: true
url: "https://github.com/oneclickvirt/speedtest"
homepage: "https://github.com/oneclickvirt/ecs"
language: "Go"
languages: ["Go"]
languagePcts: [91]
topics: ["goecs"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2024-06-27T11:11:18Z"
lastCommitAt: "2026-09-01T08:49:46Z"
lastReleaseAt: "2026-08-26T07:53:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 68
maintainers: ["github-actions[bot]", "spiritLHLS", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/984e44977ae9cf2c9e0fe21fec94120b57b3c31f86bba79539708690fc9a22c4/oneclickvirt/speedtest"
---

# speedtest

就近节点测速模块

## 说明

- [x] 基于[speedtest.net-爬虫](https://github.com/spiritLHLS/speedtest.net-CN-ID)、[speedtest.cn-爬虫](https://github.com/spiritLHLS/speedtest.cn-CN-ID)的数据
- [x] 基于[speedtest-go](https://github.com/showwin/speedtest-go)二次开发，go原生实现就近测速无需使用shell命令
- [x] 已适配 speedtest-go v1.8.2：用户配置请求使用随机缓存旁路参数，避免共享 CDN 返回其他客户端的配置
- [x] `-dns-mode=auto` 在本地 DNS 被独立探测确认失效时，仅在当前进程中选择最低延迟的内置 DoH/DoT；瞬时网络错误不会改变系统解析路径
- [x] 主体逻辑借鉴了[ecsspeed](https://github.com/spiritLHLS/ecsspeed)
- [x] 使用shell命令使用```speedtest```进行测速

## TODO

- [ ] 添加对泰尔测速的支持

## 下载speedtest或speedtest-go

目前默认安装官方的speedtest包

```
curl https://raw.githubusercontent.com/oneclickvirt/speedtest/main/dspt.sh -sSf | bash
```

或

```
curl https://cdn.spiritlhl.net/https://raw.githubusercontent.com/oneclickvirt/speedtest/main/dspt.sh -sSf | bash
```

## 使用

下载及安装

```
curl https://raw.githubusercontent.com/oneclickvirt/speedtest/main/spt_install.sh -sSf | bash
```

或

```
curl https://cdn.spiritlhl.net/https://raw.githubusercontent.com/oneclickvirt/speedtest/main/spt_install.sh -sSf | bash
```

使用

```
spt
```

或

```
./spt
```

进行测试

无环境依赖，理论上适配所有系统和主流架构，更多架构请查看 https://github.com/oneclickvirt/speedtest/releases

```…
