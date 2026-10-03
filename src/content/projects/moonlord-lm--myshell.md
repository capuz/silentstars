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
lastCommitAt: "2026-10-03T09:21:52Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 80
maintainers: ["MoonLord-LM", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/faddf57eb1e16c306b808fe1b4860e3c04046e0f0940aa092093fe517fe1f858/MoonLord-LM/MyShell"
---

# MyShell

Common Linux Shell scripts and functions  
One-click installation and configuration scripts for common software on Ubuntu / Debian servers, along with some practical functions  

常用的 Linux Shell 脚本和函数库  
在 Ubuntu / Debian 服务器上，提供一些常用软件的一键安装配置脚本，以及一些实用的功能函数  

## [使用说明]

### 部署脚本

脚本可重复执行，已安装时直接退出  
优先使用 export 的环境参数，无参数时，使用高强度的随机数，并在日志中显示  

#### 安装 MySQL（监听端口 13306，开启 SSL）

```bash
export MYSQL_PASSWORD="<预设密码>"
wget -O- --timeout=10 --no-cache \
'https://raw.githubusercontent.com/MoonLord-LM/MyShell/master/bash/install/mysql.sh' | bash
```

#### 安装 Redis（监听端口 16379，开启 SSL）

```bash
export REDIS_PASSWORD="<预设密码>"
wget -O- --timeout=10 --no-cache \
'https://raw.githubusercontent.com/MoonLord-LM/MyShell/master/bash/install/redis.sh' | bash
```

#### 安装 Nginx（监听端口 80、443，开启 Http 强制跳转 Https）

```bash
wget -O- --timeout=10 --no-cache \
'https://raw.githubusercontent.com/MoonLord-LM/MyShell/master/bash/install/nginx.sh' | bash
```

#### 安装 PHP

```bash
wget -O- --timeout=10 --no-cache \
'https://raw.githubusercontent.com/MoonLord-LM/MyShell/master/bash/install/php.sh' | bash
```

#### 安装 Cockpit（面板端口 19190，开启 Https）

```bash
wget -O- --timeout=10 --no-cache \…
