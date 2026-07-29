---
repo: "bighu630/piplus"
name: "piplus"
description: "session manager with role (power by pi-code-agent)"
readmeQualityOk: true
url: "https://github.com/bighu630/piplus"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-06-21T06:30:11Z"
lastCommitAt: "2026-07-29T05:57:42Z"
lastReleaseAt: "2026-07-29T06:05:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 56
maintainers: ["bighu630"]
openGraphImageUrl: "https://opengraph.githubassets.com/c1da503f1204f6d6308aa675f82d7b71527e53f1c3c1b5d686712ba141d70086/bighu630/piplus"
---

<br/>
  <h1><img src="docs/images/1783586341957_icon.png" alt="Piplus" height="32" style="vertical-align: middle; border-radius: 10px;" /> Piplus</h1>
  <p><strong>Pi Coding Agent 本地桌面工作台</strong></p>
  <p>
    用更顺手的方式管理项目、Session、模型、文件、Git 和多角色协作
  </p>
  <p>
    智能拆分 需求/bug/可预期任务 给不同会话，保持核心session上下文干净
  </p>
  <br/>
  <br/><br/>
</div>

---

## 📦 安装

<table>
<tr>
<th>平台</th><th>格式</th><th>系统依赖</th>
</tr>
<tr>
<td>🐧 Linux</td><td>AppImage / deb</td><td><a href="https://bun.sh">Bun</a>（运行时需安装）</td>
</tr>
<tr>
<td>🍎 macOS</td><td>dmg</td><td>安装后需执行 <code>xattr -c /Applications/piplus.app</code></td>
</tr>
<tr>
<td>🪟 Windows</td><td><code>piplus Setup *.exe</code></td><td>无额外依赖</td>
</tr>
</table>

### 前置要求

1. 安装 **Bun**（Linux 必需 / Windows 免装）：<https://bun.sh>

---

## 🚀 快速启动

下载对应平台的最新包，从 [Releases](https://github.com/bighu630/piplus/releases) 获取。

登陆密码： `piplus-local`

**Linux：**
```bash
chmod +x piplus-*.AppImage
./piplus-*.AppImage
# 或
sudo dpkg -i piplus_*.deb
```

**Windows：** 直接运行安装程序，安装完成后从桌面 / 开始菜单启动。

---

## 🤖 多角色协作

Piplus 内置角色化工作方式，让复杂的开发任务管理更自然：

| 角色 | 职责 |
|------|------|
| **planner** | 负责人 / 规划者，拆解大目标 |
| **worker** | 执行者，完成具体任务 |
| **reviewer** | 代码审查 |
|…
