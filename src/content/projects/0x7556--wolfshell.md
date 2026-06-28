---
repo: "0x7556/wolfshell"
name: "wolfshell"
description: "幽狼AI Shell：首款支持AI渗透的高级WebShell & C2管理工具，首款支持多层内网级联的ASPX、ASHX高级WebShell管理工具，AES加密通信，无需代理，内存加载渗透工具，无文件落地隐蔽渗透目标，动态代码执行，ShellCode加载(Metasploit/Cobalt Strike)，反弹Shell，Socks代理，内存马，C2远控,IIS端口复用后门、.NET反序列化漏洞Payload"
url: "https://github.com/0x7556/wolfshell"
language: "ASP.NET"
languages: ["ASP.NET"]
languagePcts: [93]
stars: 234
forks: 22
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-09-25T15:23:17Z"
lastCommitAt: "2026-06-28T02:02:35Z"
lastReleaseAt: "2025-12-07T10:31:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 34
maintainers: ["0x7556"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc5c394f1bef22756dc2658f6af3466b3c9d876655dc425b4f7b7d8ff50d76b5/0x7556/wolfshell"
---

## 金刚狼：首款支持AI渗透的高级WebShell & C2管理工具

金刚狼是一款为微软 **.NET/ASPX** 环境打造的高级 **WebShell** 与 **C2 管理工具**，面向安全研究与渗透测试（**红队**）使用，提供强大的**命令执行**、**提权**与**内网穿透**能力；内置大量渗透工具并集成 **AI 智能渗透** 辅助，支持**内存加载**、**无文件落地**操作，从而实现**高隐蔽性**的内网渗透与灵活扩展。

## 🚀 核心优势
*   AI智能渗透：支持使用自然语言指挥AI操作WebShell执行命令进行渗透。
*   高效隐蔽的通信： 采用 二进制流 传输协议，确保通信的高效性与隐蔽性。
*   端到端安全加密： 所有传输 Payload 均经过 AES加密 保护，且每次通信使用 随机密钥，保障数据安全。
*   无痕运行： 支持直接在 内存中加载并执行代码，最大程度避免在磁盘留下痕迹，显著提升操作隐蔽性和安全性。
*   内网级联WebShell控制： 通过现有已控的WebShell，无需部署代理或配置端口转发，即可连接控制更深层内网环境中的WebShell。
*   Hacking后渗透：通过已控的 WebShell 在内存中加载渗透工具，无需部署代理或配置端口转发，即可实现便捷高效的内网横向渗透。
*   语言特征: 服务端(webshell)及payload均为纯英文，只有提供的WebShell变种文件包含英文、日文、韩文。

## 🔥 功能特性

*   Shell：支持[ASPX](shell/aspx)、[ASHX](shell/ashx)、ASMX、[内存马](shell/mem)、[EXE](shell/wolf.cs)、[PowerShell](shell/wolf.ps1)、DLL、MSbuild、ysoserial反序列化等9种类型)。
*   正向马：支持个人机植入正向后门级联控制整个内网，[EXE](shell/wolf.cs)、[PS1](shell/wolf.ps1)、DLL、MSbuild等，支持IIS端口复用。
*   内存马：ASPX一键注入内存马，任意路径访问，每次都可修改shell地址连接，干扰蓝队分析。
*   Cmd命令执行： 在目标系统上直接执行任意 CMD 命令。魔改whoami防止被EDR记录并报警。
*   文件管理： 在目标系统上枚举目录文件、新建文件、文件上传、EXE执行、重命令、删除、设置文件时间等。
*   PowerShell执行： 支持执行 PowerShell 代码和命令。魔改whoami防止被EDR记录并报警。
*   Shellcode执行： 可在目标环境内直接执行原生的 Shellcode，一键上线Cobalt…
