---
repo: "zhaohui-yang/official-document-drafting"
name: "official-document-drafting"
description: "A Codex skill for drafting, standardizing, and exporting Chinese official documents and formal reports to Markdown and Word (.docx)."
url: "https://github.com/zhaohui-yang/official-document-drafting"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["agents", "chinese-writing", "codex-skill", "document-template", "docx-generator", "formal-writing", "government-documents", "markdown-to-docx", "official-document", "openai-codex"]
stars: 34
forks: 4
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-15T16:40:24Z"
lastCommitAt: "2026-06-25T06:41:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 62
undervaluedScore: 24
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/5bc3dea353d825e97d6f791ed4a9bd6c45643ac651b864905664c4a65f2231ca/zhaohui-yang/official-document-drafting"
---

# 公文写作 Skill

## 目录

- [一、安装](#install)
- [二、使用](#usage)
- [三、项目概览](#overview)
- [四、当前能力](#capabilities)
- [五、Word 导出与版式](#word-export)
- [六、图片、附件与附录](#images-attachments-appendices)
- [七、结构校验](#validation)
- [八、规则体系](#rules)
- [九、构建与目录说明](#build-and-maintain)
- [十、字体与依赖](#fonts-and-deps)
- [十一、合规与使用声明](#compliance)
- [十二、设计原则](#principles)
- [十三、License](#license)
- [十四、公开参考来源](#references)
- [十五、反馈与贡献](#feedback)

## 一、安装

### （一）在线工具中的 Skill 安装

适用于 Codex、agents 或其他兼容 `~/.codex/skills/` 目录的宿主环境。

从 GitHub 安装：

```bash
CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
python3 "$CODEX_HOME/skills/.system/skill-installer/scripts/install-skill-from-github.py" \
  --repo zhaohui-yang/official-document-drafting \
  --path . \
  --name official-document-drafting
```

如果你的宿主把 Codex 安装在其他目录，优先改 `CODEX_HOME`，不要把路径写死成某一台机器上的绝对路径。

从本地复制安装：

```bash
mkdir -p ~/.codex/skills
cp -R ./official-document-drafting ~/.codex/skills/
```

安装后，目标目录通常是：

- Linux / macOS / UOS / 麒麟等类 Unix 系统：`~/.codex/skills/official-document-drafting`
- Windows：`%USERPROFILE%\\.codex\\skills\\official-document-drafting`

### （二）Claude Code 安装

如果你的宿主是 Claude Code，更接近的安装目录通常是 Claude 自己的 skills 目录，而不是 `~/.codex/skills/`。…
