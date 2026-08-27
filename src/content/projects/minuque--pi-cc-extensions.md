---
repo: "minuque/pi-cc-extensions"
name: "pi-cc-extensions"
description: "Claude Code-style TUI output with some personal touches and handy utilities."
readmeQualityOk: true
url: "https://github.com/minuque/pi-cc-extensions"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["claude-code", "pi-coding-agent", "pi-extension", "pi-package"]
stars: 18
forks: 5
openIssues: 3
closedIssues: 6
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-07-20T02:08:17Z"
lastCommitAt: "2026-08-27T14:31:50Z"
lastReleaseAt: "2026-08-05T11:40:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 51
maintainers: ["minuque", "shaworr", "zenworr"]
openGraphImageUrl: "https://opengraph.githubassets.com/38ccad3bae5825bff294dbb138b5c2001c89356817ec7f0dbab69c8578b88843/minuque/pi-cc-extensions"
---

</p>

</p>

  类 Claude Code TUI 输出风格，并融入了一些个人喜好，和一些实用小功能。
</p>

  <strong>简体中文</strong> · <a href="./README.en.md">English</a>
</p>

---

## 界面预览

https://github.com/user-attachments/assets/6c858000-fdad-43f9-957f-4d0278648498

## 快速开始

```bash
pi install npm:pi-cc-extensions

# GitHub
pi install git:github.com/minuque/pi-cc-extensions
```

安装后执行 `/reload`

## 功能

| 功能                  | 说明                                                                            | 入口                                            |
| --------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------- |
| Claude Code UI        | 工具摘要、折叠展开、rich edit/write diff，以及`on` / `compact` / `off` 三种模式 | `/ccstyle`                                      |
| Markdown 增强         | Mermaid 图、提示框、URL 链接化等                                                        | 自动生效                                        |
| Fullscreen mode       | 工具卡/group 单击展开、双击收起、预览、hover 高亮、回到底部按钮                 | `TUIMODE=fullscreen` 或 `--tui-mode fullscreen` |
| 配置面板              | `Style / Diff / Thinking / UI / Feature` 五页签…
