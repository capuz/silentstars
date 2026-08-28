---
repo: "bgpeer/nodekit"
name: "nodekit"
description: "VPS网络多协议节点一键搭建"
readmeQualityOk: true
url: "https://github.com/bgpeer/nodekit"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-03T04:45:16Z"
lastCommitAt: "2026-08-28T12:22:53Z"
lastReleaseAt: "2026-07-22T05:00:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: ["bgpeer", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0e951c641f0e97b618480aaa6a7f35a41dd00fd99149d7e288cff77d58a44f1/bgpeer/nodekit"
---

# nodekit · bgpeer 一键脚本

sing-box + xray 双核心、多协议一键部署，自动生成 **mihomo / sing-box / Shadowrocket** 三种订阅，
并可一键屏蔽中国域名/IP（白名单放行）。参考 mack-a/v2ray-agent 的协议组合用 Python 重写，装完直接给客户端一条订阅链接即可。

> ⚠️ 仅供个人学习与合法用途，使用前请阅读文末[免责声明](##免责声明)。

---
[视频演示](https://youtu.be/XXuaw14Vpk4?is=WR6nu-35Zj5rvD5n)
---
[飞机](https://t.me/ruleset_bgpeer)
---
**执行代码前请先把域名拖管到CF绑定VPS的IP，不开小黄云，用域名安装效果更好**
## 👇一键安装代码

```bash
curl -sL https://raw.githubusercontent.com/bgpeer/nodekit/main/xy-installer.py -o /tmp/xy.py
sudo python3 /tmp/xy.py
```

若 `raw.githubusercontent.com` 被 GitHub 限流（HTTP 429），改用 jsDelivr 镜像（基本不会限流）：

```bash
curl -sL https://cdn.jsdelivr.net/gh/bgpeer/nodekit@main/xy-installer.py -o /tmp/xy.py
sudo python3 /tmp/xy.py
```

装过一次之后，以后直接敲 **`bgpeer`** 就能打开管理面板（内部已带镜像兜底，会尽量拉最新脚本）。

### 环境要求

- Debian / Ubuntu（systemd）
- root 权限
- Python 3
- 有域名走 acme 真证书更稳；无域名则自签证书 + 公网 IP 直连（域名需 A 记录直连指向本机）
- **证书自动续签**：走域名真证书时用 acme.sh 签发，acme.sh 会装每日 cron 自动续期（约 60 天一次），
  续期后自动重启 sing-box / xray（有 nginx 顺带 reload）使新证书生效，无需手动干预
- **内核自动更新**：安装后自动挂 cron，**每月北京时间 2 号凌晨 04:00** 把 sing-box / xray 更新到最新并重启一次
  （无新版则跳过）；也可随时进管理面板 **17 更新核心** 手动立即更新。日志在 `/var/log/bgpeer-coreupdate.log`
- **更新核心不怕 SSH…
