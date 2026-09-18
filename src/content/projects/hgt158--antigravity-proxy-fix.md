---
repo: "HGT158/antigravity-proxy-fix"
name: "antigravity-proxy-fix"
description: "One-click fix for Antigravity (Google Gemini IDE) black screen - auto-detect install + proxy, inject HTTP_PROXY so the Go language server stops timing out on Google endpoints."
readmeQualityOk: true
url: "https://github.com/HGT158/antigravity-proxy-fix"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [91]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-09-07T13:02:48Z"
lastCommitAt: "2026-09-18T08:23:47Z"
lastReleaseAt: "2026-09-12T07:03:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 18
maintainers: ["HGT158"]
openGraphImageUrl: "https://opengraph.githubassets.com/6fd2192f735f486d09b5e1379e9a9a661eb911bd04ff446f03361e3c9adaea3c/HGT158/antigravity-proxy-fix"
---

# Antigravity 黑屏修复（自动走代理）

> 一键修复 Antigravity（Google Gemini 编码工具）启动后**窗口黑屏 / 空白**的问题。
> 自动定位 Antigravity 安装位置、自动探测本地代理端口，生成走代理的启动器并把快捷方式指过去，之后双击图标即可正常打开。

## 为什么会黑屏？

Antigravity 的语言服务器（一个 Go 编写的后端程序）**不读取 Windows 的“系统代理”设置**，它只认 `HTTP_PROXY` / `HTTPS_PROXY` 环境变量。

如果你的网络无法直接访问 Google（需要代理才能上），就会出现这种情况：

- 系统代理明明开着（浏览器能上 Google），但 Antigravity 依然**裸连** Google 的服务器；
- 连不上 → 它的内部登录页一直加载超时（日志里表现为 `ERR_TIMED_OUT`、`dial tcp ... connectex`）；
- 结果就是：进程在跑、窗口标题在，但**页面黑屏 / 一片空白**。

## 这个脚本做了什么

1. **自动定位** `Antigravity.exe`（读取注册表中的 `DisplayIcon` / `InstallLocation`，并扫描常见安装目录）；
2. **自动探测**你的本地代理端口（先读系统代理设置，再用 `curl` 实测 7890 / 7897 / 7899 / 7891 / 10809 / 10808 / 10811 / 1080 / 8888 / 2080 等常见端口能否连到 Google，连不上就跳过继续试下一个）；
3. 在 Antigravity 安装目录生成启动器 `launch-antigravity.bat`，启动时自动注入 `HTTP_PROXY / HTTPS_PROXY / ALL_PROXY = http://127.0.0.1:<端口>`；
   （启动器里用 `%~dp0` 定位同目录的 `Antigravity.exe`，不写死绝对路径，因此**中文用户名 / 中文安装路径**都能正常工作）
4. 把 **桌面** 与 **开始菜单** 的快捷方式都指向这个启动器；
5. （可选）重启 Antigravity 完成修复。

## 给普通用户：双击运行（推荐）

在 [Releases](https://github.com/HGT158/antigravity-proxy-fix/blob/HEAD/../../releases) 页面下载最新版 `antigravity-proxy-fix.zip`：

1. 解压 zip（里面是 `fix-antigravity.cmd` + `antigravity-proxy-fix.ps1` +…
