---
repo: "chaun-yi7/Clay"
name: "Clay"
description: "Clay —— 一款仿 Claude 审美的 Typora 主题，暖纸质感、明暗双色，克制耐看。"
readmeQualityOk: true
url: "https://github.com/chaun-yi7/Clay"
language: "CSS"
languages: ["CSS"]
languagePcts: [100]
stars: 26
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-07-14T05:09:12Z"
lastCommitAt: "2026-08-21T04:11:26Z"
lastReleaseAt: "2026-07-14T06:25:35Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 54
undervaluedScore: 5
maintainers: ["chaun-yi7"]
openGraphImageUrl: "https://opengraph.githubassets.com/6eafaf6de0204708a6505700ecc5d390148f9db102aef96376fd8f8b011aacfb/chaun-yi7/Clay"
---

# Clay — Typora 主题(明 / 暗)

> A warm, paper-textured Typora theme (light + dark), inspired by the claude.ai design language.

一对以 **claude.ai 官网设计语言**为蓝本的 Typora 主题:暖白纸感的浅色 `clay` 与暖灰深底的深色 `clay-dark`。配色对齐官网实测色板(陶土橙 Clay `#d97757` + 暖灰中性色),标题与正文统一走**随主题打包的霞鹜文楷 LXGW WenKai**,所有功能区块明暗**结构完全对称**(184 对规则逐条配对、零单边差异)。

- 适配环境:**Typora 1.13.4 / Windows**(1.5+ 版本的语法块均有覆盖;含 macOS seamless 兼容规则)
- **内置中文字体**:附带霞鹜文楷 Regular / Medium / Mono 三款 woff2,明暗两版一致,无需另行安装字体
- 零网络依赖:字体为本地自托管,不发起任何在线请求,离线 / 弱网 / 大陆网络环境下无渲染阻塞
- 中英混排优化:文楷统一覆盖中英文与标点;未命中时按宋体系 / 苹方 / 雅黑 / 更纱黑体逐级回退

---

## 预览

**浅色 · Clay**

**深色 · Clay Dark**

> 上图为主题渲染效果预览;实际以 Typora 中体验为准(建议配合「一体化」窗口样式)。

---

## 一、安装

### 文件构成

| 文件 / 目录 | 说明 |
|---|---|
| `clay.css` | 浅色主题 |
| `clay-dark.css` | 深色主题(与浅色逐区块对称) |
| `clay/` | 字体目录:霞鹜文楷 3 款 woff2 + `OFL.txt`。**两个 css 都依赖它**,需一起复制 |

### 主题目录

把两个 `.css` **和 `clay/` 目录**一起复制到 Typora 的主题目录:

| 平台 | 路径 |
|---|---|
| Windows | `%APPDATA%\Typora\themes\` |
| macOS | `~/Library/Application Support/abnerworks.Typora/themes/` |
| Linux | `~/.config/Typora/themes/` |

> 在 Typora → 文件 → 偏好设置 → 外观 → **打开主题文件夹**,可直接跳到该目录。

复制完成后,主题目录下应该是这样:

```
themes/
├── clay.css
├── clay-dark.css
└── clay/
    ├──…
