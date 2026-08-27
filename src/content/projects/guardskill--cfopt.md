---
repo: "GuardSkill/CFOpt"
name: "CFOpt"
description: "CF最优IP发布"
readmeQualityOk: true
url: "https://github.com/GuardSkill/CFOpt"
language: "Shell"
languages: ["Shell", "PowerShell"]
languagePcts: [49, 46]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-27T13:59:16Z"
lastCommitAt: "2026-08-27T14:28:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 46
maintainers: ["GuardSkill", "Nueractive"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9584c3ce8ead763e1949348df31043b83de334c12463a8e6f0fddb0ff201baa/GuardSkill/CFOpt"
---

# CFOpt

## 中文说明

CFOpt 是一个 Cloudflare 优选 IP 自动测速与发布工具。它会下载候选 IP，按多个 Cloudflare 端口运行 `CloudflareSpeedTest`，过滤不可用、丢包和低速结果，然后生成 Edge Tunnel 可导入的 CSV 并上传到 GitHub。

### 一键运行

Windows 首次运行并安装每日任务：

```powershell
git clone https://github.com/GuardSkill/CFOpt.git H:\Projects\CFOpt
cd H:\Projects\CFOpt
[Environment]::SetEnvironmentVariable("GITHUB_TOKEN_CFOPT", "你的 GitHub token", "User")
powershell -NoProfile -ExecutionPolicy Bypass -File ".\scripts\windows\Invoke-CFOptAutoPush.ps1" -Force
powershell -NoProfile -ExecutionPolicy Bypass -File ".\scripts\windows\Install-CFOptAutoPushTask.ps1"
```

Linux / 容器一键下载、授权、运行，并用 crontab 每天自动检查：

```bash
GITHUB_TOKEN_CFOPT="你的 GitHub token" AUTORUN_BACKEND=cron INSTALL_DAILY_AUTORUN=1 bash -c "$(curl -fsSL https://raw.githubusercontent.com/GuardSkill/CFOpt/main/scripts/linux/install-and-run-cfopt-linux.sh)"
```

只手动跑一次：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File ".\scripts\windows\Invoke-CFOptAutoPush.ps1" -Force
```

```bash
FORCE=1 ./scripts/linux/invoke-cfopt-auto-push-linux.sh
```

### 输出文件

- `CloudflareSpeedTest_CD.csv`：Windows / 成都测速默认输出。
- `CloudflareSpeedTest_BJ.csv`：Linux / 北京测速默认输出。
- `proxyip-best.txt`：每日从…
