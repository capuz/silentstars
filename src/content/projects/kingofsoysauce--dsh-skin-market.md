---
repo: "kingOfSoySauce/dsh-skin-market"
name: "dsh-skin-market"
description: "DeepSeek Harness skin market 皮肤市场 已收录200+DSH 皮肤 完善评分系统加人工审核，有便捷的社区收录入口；有在线页面方便在线浏览，也有插件方便管理本地皮肤"
readmeQualityOk: true
url: "https://github.com/kingOfSoySauce/dsh-skin-market"
homepage: "https://kingofsoysauce.github.io/dsh-skin-market/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [54, 40]
topics: ["deepseek-harness", "dsh-plugin", "plugin-market", "skin-market", "themes"]
stars: 92
forks: 8
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 6
recentReleases: 9
createdAt: "2026-08-16T12:31:32Z"
lastCommitAt: "2026-08-26T04:15:59Z"
lastReleaseAt: "2026-08-25T06:23:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 37
maintainers: ["kingOfSoySauce", "github-actions[bot]", "UniverFV"]
openGraphImageUrl: "https://opengraph.githubassets.com/623f0fd3c5d94b9854c6191c6858efd73885d3120a469677006dbc63354c465b/kingOfSoySauce/dsh-skin-market"
discussionCount: 1
---

# DSH 皮肤市场

一个嵌入 DSH 设置页的皮肤市场，可以浏览、安装、使用、停用、更新和卸载社区皮肤。
</p>

</p>

### 在线预览

[点击查看在线皮肤市场](https://kingofsoysauce.github.io/dsh-skin-market/)

### 近期收录

- 2026-08-21：[UniverFV/dsh-Furina-theme](https://github.com/UniverFV/dsh-Furina-theme)（`0.1.0`）——芙宁娜主题 Furina Theme
- 更多请查看[收录日志](https://github.com/kingOfSoySauce/dsh-skin-market/blob/HEAD/docs/recently-added.md)

## 安装

#### 方式一，命令安装：

> 安装前请确保已关闭其他皮肤插件，避免冲突

```sh
dsh plugin --profile web add "dsh-skin-market@latest"
```

#### 方式二，提示词安装：
<details>
<summary><strong>点击展开提示词</strong></summary>

复制以下给 DSH 即可，会先检查冲突，再安装皮肤市场

```text
请把 dsh-skin-market 插件安装到 DSH 的 web profile。不能先安装再检查，必须严格按以下顺序执行：

1. 安装前只读检查 web profile 的 package.json（dependencies 与 dsh.profile.bundles）、profile 的 cordis.patch.yml 和 $DSH_HOME/cordis.patch.yml（如有）。
2. 从当前启用的 bundles 中识别皮肤、主题或外观插件：排除 @deepseek-ai/dsh-base、@deepseek-ai/dsh-web-app 和 dsh-skin-market；读取候选 package.json 的名称、描述、dsh.client/dsh.bundle 声明，必要时再读 README。无法确定的候选先列出包名和描述。
3. 如果发现已启用的皮肤插件，列出它们并停在安装前，提醒我先停用以避免冲突；未经我确认不得修改任何 profile 文件，也不得执行安装。
4. 如果没有冲突，明确说“未检测到已启用的皮肤插件”，然后直接执行：

dsh plugin --profile web add "dsh-skin-market@latest"

5. 安装后读取 web profile 的 package.json，确认 dependencies 和…
