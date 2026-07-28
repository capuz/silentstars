---
repo: "hezhijie0327/ZJDNS"
name: "ZJDNS"
description: "High performance recursive DNS server with DNS hijack protection, TLS/QUIC/HTTPS/HTTP3/DTLS, (PQ)DNSCrypt, TLCP/DTLCP support"
readmeQualityOk: true
url: "https://github.com/hezhijie0327/ZJDNS"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["dns", "golang", "vibe-coding", "dns-over-http3", "dns-over-https", "dns-over-quic", "dns-over-tls", "kernel-tls", "sqlite", "dnscrypt"]
stars: 44
forks: 14
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-05-03T03:04:10Z"
lastCommitAt: "2026-07-28T14:58:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 58
maintainers: ["hezhijie0327"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d5fe993ade7116e206ca8fea2e91d93eeaf9a99f4e4f4c9168291563762bea1/hezhijie0327/ZJDNS"
---

# ZJDNS

```
███████╗     ██╗██████╗ ███╗   ██╗███████╗
╚══███╔╝     ██║██╔══██╗████╗  ██║██╔════╝
  ███╔╝      ██║██║  ██║██╔██╗ ██║███████╗
 ███╔╝  ██   ██║██║  ██║██║╚██╗██║╚════██║
███████╗╚█████╔╝██████╔╝██║ ╚████║███████║
╚══════╝ ╚════╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
```

高性能递归 DNS 服务器，内置 DNS 防污染、SQLite 缓存、DNSSEC、全协议加密传输（TLS/QUIC/HTTPS/HTTP3/DTLS/(PQ)DNSCrypt/TLCP/DTLCP）及 KTLS 内核卸载。

## 快速开始

```bash
# 构建
go build -o zjdns ./cmd/zjdns

# 纯递归模式
./zjdns

# 指定配置文件
./zjdns --config config.json

# 生成示例配置
./zjdns --generate-config

# 生成 DNSCrypt 配置
./zjdns --generate-config --dnscrypt --provider example.com

# 查询测试
dig @127.0.0.1 -p 53 example.com                 # UDP
dig @127.0.0.1 -p 53 example.com +tcp             # TCP
kdig @127.0.0.1 -p 853 example.com +tls           # DoT
kdig @127.0.0.1 -p 853 example.com +quic          # DoQ
kdig @127.0.0.1 -p 443 example.com +https         # DoH

# 验证 DNSCrypt
dig @127.0.0.1 -p 8443 2.dnscrypt-cert.example.com TXT
```

## 核心特性

### DNS 解析
- **递归解析**：从 IANA 根服务器逐步解析至权威服务器，完整 DNSSEC 信任链（根提示 + 延迟排序缓存）
- **上游转发**：主/备服务器并发查询 + 首胜策略；支持 `protocol: "recursive"` 纯递归模式
- **CNAME 追踪**：最大 16 级，防循环检测
- **QNAME 最小化**：[RFC…
