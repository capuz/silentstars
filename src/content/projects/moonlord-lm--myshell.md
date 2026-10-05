---
repo: "MoonLord-LM/MyShell"
name: "MyShell"
description: "A function library for the Linux Shell. Linux 脚本函数库（Shell）"
readmeQualityOk: true
url: "https://github.com/MoonLord-LM/MyShell"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 0
closedIssues: 21
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-08-04T18:51:18Z"
lastCommitAt: "2026-10-05T10:47:28Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 80
maintainers: ["MoonLord-LM", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/55f44abb73f182b101f420a0f7755b4ccbb88278e28bcb75b802dd2f6954ce72/MoonLord-LM/MyShell"
---

# MyShell

Common Linux Shell scripts and function library  
Provides some practical utility functions on Ubuntu / Debian servers, and one-click installation, configuration and tuning scripts for common software  

常用 Linux Shell 脚本和函数库  
提供在 Ubuntu / Debian 服务器上的一些实用的功能函数，以及一些常用软件的一键安装配置调优脚本  

## [使用说明]

### 功能函数

需要先执行 source 命令，加载 My.sh 之后，才可以执行函数  

```bash
source <( wget -O- --timeout=10 --no-cache \
'https://raw.githubusercontent.com/MoonLord-LM/MyShell/master/bash/My.sh' )
```

| 分类 | 函数 | 说明 |
| --- | --- | --- |
| 设置 | `prepare_common_command`         | 安装常用命令（curl、openssl 等） |
| 设置 | `reset_root_password`            | 重设 root 密码为 Base64 编码的 256 bit 随机数，并显示新密码 |
| 设置 | `set_timezone_china`             | 设置系统时区为中国时区（Asia/Shanghai GMT+08:00） |
| 设置 | `set_tcp_congestion_control_bbr` | 设置 TCP 拥塞控制算法为 BBR |
| 设置 | `set_tcp_network_buffer`         | 设置 TCP 收发缓冲区上限为 16MB |
| 设置 | `set_tcp_fastopen`               | 设置 TCP Fast Open 为 3（客户端+服务端） |
| 设置 | `set_memory_swap_to_4GB`         | 设置虚拟内存，保证物理内存 + 虚拟内存总量在 4GB 以上 |
| 设置 | `update_software`                | 更新软件 |
| 设置 | `update_software_aggressive`     | 更新软件，更激进 |
| 设置 | `update_system`                  | 系统版本升级（Debian…
