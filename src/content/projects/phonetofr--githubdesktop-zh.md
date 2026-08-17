---
repo: "PhonetoFR/githubdesktop-zh"
name: "githubdesktop-zh"
description: "GitHub Desktop 汉化补丁工具 - 一键汉化，支持还原"
readmeQualityOk: true
url: "https://github.com/PhonetoFR/githubdesktop-zh"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [45, 40]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-07-06T07:10:46Z"
lastCommitAt: "2026-08-17T04:19:47Z"
lastReleaseAt: "2026-07-20T14:42:47Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 58
maintainers: ["PhonetoFR"]
openGraphImageUrl: "https://opengraph.githubassets.com/1297777f3aeae4eefcafbaea73b529245710c82cf94acc6659f89f28dc6b151c/PhonetoFR/githubdesktop-zh"
---

</p>

<h1 align="center">GitHub Desktop 汉化补丁</h1>

</p>

---

## 使用方法

1. 从 [Releases](https://github.com/PhonetoFR/githubdesktop-zh/releases/latest) 下载 `github-desktop-zh-*-portable.exe`
2. 关闭 GitHub Desktop
3. 双击运行，选择目标版本 → **应用汉化**
4. 重新打开 GitHub Desktop

> 还原：同样操作，点击 **还原英文** 即可恢复。

## 特性

<table>
<tr><td><strong>现代桌面界面</strong></td><td>双击即用，自动检测安装版本、运行状态和备份状态</td></tr>
<tr><td><strong>一键汉化 / 还原</strong></td><td>无需手动选择文件，操作只修改所选版本</td></tr>
<tr><td><strong>安全回滚</strong></td><td>自动备份原文件，写入失败时回滚，不覆盖非本工具文件</td></tr>
<tr><td><strong>免安装便携</strong></td><td>单个 portable EXE，不写入系统安装项，关闭即清理</td></tr>
<tr><td><strong>深色模式</strong></td><td>跟随系统自动切换，标题栏与主体颜色一致</td></tr>
<tr><td><strong>离线运行</strong></td><td>不联网、不收集数据、不需要账号</td></tr>
</table>

## 原理

在 GitHub Desktop 的 `index.html` 中加载翻译运行时，并在 `main.js` 顶部注入菜单补丁。运行时使用 MutationObserver 监听 DOM 变化，将英文文本替换为中文。

不修改核心业务逻辑 · 不影响自动更新 · 不收集用户数据

## 命令行用法

> GUI 是默认发行形式。如需脚本化，可构建 CLI 版本：

```bash
patch-cli.exe --patch              # 汉化最新安装
patch-cli.exe --restore            # 还原最新安装
patch-cli.exe --status             # 查看所有安装状态
patch-cli.exe --patch --target=3.6.2
```

## 构建

```bash
npm install
npm run dev           # 启动桌面 GUI
npm run package…
