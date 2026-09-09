---
repo: "jumpserver/installer"
name: "installer"
description: "Installer is a tool for managing the installation of JumpServer, enabling users to conveniently install, deploy, update, and manage JumpServer."
readmeQualityOk: true
url: "https://github.com/jumpserver/installer"
homepage: "http://www.jumpserver.org"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["docker-compose", "release", "install", "quickstart"]
stars: 132
forks: 87
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 20
recentReleases: 0
createdAt: "2020-10-13T11:22:30Z"
lastCommitAt: "2026-09-09T08:17:57Z"
lastReleaseAt: "2021-04-14T03:47:12Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 47
maintainers: ["ibuler", "feng626", "fit2bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b54389fd601f3cb1e090d02f3839a13a63fd9f4326208b61ba07fe6ea8e3133/jumpserver/installer"
---

# JumpServer Installer

JumpServer Installer 用来安装和管理 JumpServer。

## 环境依赖
  - Linux x86_64
  - Kernel 大于 4.0

## 安装部署

```bash
# 安装，版本是在 static.env 指定的
$ ./jmsctl.sh install
```

## 管理命令

```
# 启动
$ ./jmsctl.sh start

# 重启
$ ./jmsctl.sh restart

# 关闭, 不包含数据库
$ ./jmsctl.sh stop

# 关闭所有
$ ./jmsctl.sh down

# 备份数据库
$ ./jmsctl.sh backup_db

# 查看日志
$ ./jmsctl.sh tail

# 单独管理企业版 video-worker
$ ./jmsctl.sh video-worker {start|stop|restart|status}

```

`video-worker` 的 Compose service、容器名和配置键统一使用该名称；可通过
`VIDEO_WORKER_ENABLED=0` 禁用。旧版本的 `VIDEO_ENABLED`、`VIDEO_ENABLE` 以及
`${VOLUME_DIR}/video` 数据目录会在升级时迁移。

## JDMC（企业版）

JDMC 是企业版组件，需要在 `/opt/jumpserver/config/config.txt` 中设置
`USE_XPACK=1`。它作为宿主机 systemd 服务安装，不加入 Docker Compose。社区版不
下载或安装 JDMC；企业版必须安装 JDMC，不再提供单独的启用或禁用开关。

安装器默认根据 `IMAGE_PULL_PREFIX` 拉取 JDMC artifact 镜像（未配置时使用
`jumpserver/jdmc:${VERSION}`），再按需标记为
`${NAMESPACE:-jumpserver}/jdmc:${VERSION}`，从 `/dist` 提取并执行 JDMC 自带的
`scripts/install.sh` 或 `scripts/upgrade.sh`。
JDMC 与 Core 等自有组件使用相同的拉取和重标记规则，企业版离线包始终包含该镜像。
服务跟随 `jmsctl.sh start/stop/restart/status` 管理，日志可通过
`./jmsctl.sh tail jdmc` 查看。安装器会为 Core 配置
`JDMC_SOCK_PATH=/opt/jumpserver/data/unshare/jdmc.sock`；Core 根据企业版自动启用
JDMC 集成。…
