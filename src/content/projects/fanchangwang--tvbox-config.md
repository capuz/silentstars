---
repo: "FanchangWang/tvbox_config"
name: "tvbox_config"
description: "自用 tvbox 配置，都是收集的公开订阅"
url: "https://github.com/FanchangWang/tvbox_config"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 20
forks: 8
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-01-09T17:37:56Z"
lastCommitAt: "2026-06-27T06:22:31Z"
status: "thriving"
tags: []
healthScore: 76
undervaluedScore: 62
maintainers: ["github-actions[bot]", "FanchangWang", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/4658364707abf9f2fe22b7625208d7e60040a04e6609b80fbbf43b4fc09733dc/FanchangWang/tvbox_config"
---

# tvbox_config

自用 TVBox 线路配置生成工具

## 线路链接

**tvbox.json（不含 R18）**

- GitHub: [https://raw.githubusercontent.com/FanchangWang/tvbox_config/main/dist/tvbox.json](https://raw.githubusercontent.com/FanchangWang/tvbox_config/main/dist/tvbox.json)
- 代理: [https://fastly.jsdelivr.net/gh/FanchangWang/tvbox_config@main/dist/tvbox.json](https://fastly.jsdelivr.net/gh/FanchangWang/tvbox_config@main/dist/tvbox.json)

**my.json（含 R18）**

- GitHub: [https://raw.githubusercontent.com/FanchangWang/tvbox_config/main/dist/my.json](https://raw.githubusercontent.com/FanchangWang/tvbox_config/main/dist/my.json)
- 代理: [https://fastly.jsdelivr.net/gh/FanchangWang/tvbox_config@main/dist/my.json](https://fastly.jsdelivr.net/gh/FanchangWang/tvbox_config@main/dist/my.json)

## 项目结构

```
tvbox_config/
├── config/                 # 配置文件
│   ├── sources.yaml        # 源列表配置
│   └── history.yaml        # 历史记录（自动生成）
├── dist/                   # 生成的 JSON 文件
│   ├── tvbox.json          # 不含 R18
│   └── my.json             # 含 R18
├── src/tvbox_config/       # 源代码包
│   ├── __init__.py         # 公开 API
│   ├── app.py              # 主程序入口
│   ├── _check.py           # `uv run check` 入口
│   ├── decrypt.py          #…
