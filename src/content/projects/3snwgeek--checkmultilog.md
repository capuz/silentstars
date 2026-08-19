---
repo: "3sNwgeek/CheckMultiLog"
name: "CheckMultiLog"
description: "多种web日志分析、windows日志分析，支持IIS日志、Apache日志、 Nginx 日志、 Tomcat日志 、Jetty日志、通用json（常见字段）安全分析。windows security日志、应用程序日志、系统日志分析"
readmeQualityOk: true
url: "https://github.com/3sNwgeek/CheckMultiLog"
language: "HTML"
languages: ["HTML"]
languagePcts: [99]
topics: ["log", "loganalyzer", "windowslog"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2025-09-04T15:15:01Z"
lastCommitAt: "2026-08-19T04:06:51Z"
lastReleaseAt: "2026-08-19T00:53:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 51
maintainers: ["3sNwgeek"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc9f0c24154dbc88509ebe2eaebefb4d99b67927647035961a9431d8fce6d24f/3sNwgeek/CheckMultiLog"
---

# CheckMultiLog GUI

CheckMultiLog GUI 是一款一体化日志安全分析工作台。单个主程序内置 Web 访问日志、Windows EVTX、Linux 主机日志、AI 辅助研判、pcap流量分析、报告管理与分布式节点协同能力。

> 报告中的规则命中和 AI 结论均应结合原始日志、主机状态及其他安全设备数据复核，不能单独作为入侵定性的依据。

## 功能概览

| 模块 | 能力 |
| --- | --- |
| Web 日志分析 | 自动识别日志格式，支持单文件或文件夹递归批量分析，并在应用内查看、切换和导出报告 |
| Windows 日志分析 | 一键检查本机事件日志并自动定位 EVTX，也可导入单文件/目录；原生分析 Security、System、Application，并可选 PowerShell 脚本块、Sysmon、RDP 外连、Defender 扩展通道与跨通道攻击链 。「Windows 日志分析」（日志研判 / 应急响应双模式）：本机活体排查系统基线、账户权限、网络状态、进程、服务驱动、启动项持久化、计划任务、WMI 持久化、防火墙规则、安全产品状态与文件执行痕迹 11 大域，内置 37 条 IR 检测规则与文件签名校验，一键生成含总体评估与证据链的 HTML 应急报告 |
| Linux 日志分析 | 本地导入单文件/文件夹并自动识别关联分析，或通过 SSH 执行在线检查；报告可在应用内查看、导出 |
| 智能体分析 | 对本地报告执行证据提取、逐报告研判、实体关联、综合分析与独立复核 |
| 报告分析 | 在应用内查看 HTML 报告，也可调用系统浏览器打开 |
| 分布式节点协同 | 同一个主程序可作为采集分析节点或中心汇聚节点，支持集中收集、定时分析、去重、确认与失败重试 |

## 支持的日志

### Web 访问日志

- 文件类型：`.log`、`.txt`、`.csv`、`.json`
- IIS W3C
- NCSA（Apache、Nginx、Tomcat、Jetty 等）
- NCSA-IIS
- HAProxy
- AWS ALB/ELB
- 常见字段 JSON access log
- Unknown 或多种格式混合的日志，支持逐行兜底识别

### Windows 事件日志

- 一键检查本机日志：通过 Windows 事件日志服务快照所选通道，自动定位标准 EVTX 路径作为权限受限时的只读回退
- 支持 `.evtx` 文件和目录递归分析
- 原生 Rust EVTX 引擎默认分析 `Security`、`System`、`Application`，本机模式可单独选择通道和回溯天数
- Security…
