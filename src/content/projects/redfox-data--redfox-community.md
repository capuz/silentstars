---
repo: "redfox-data/redfox-community"
name: "redfox-community"
description: "红狐数据（RedFoxHub） 技能合集：面向 Agent 的可复用 SKILL 集合，覆盖灵感、选题、文案创作、数据复盘等场景，持续更新。"
readmeQualityOk: true
url: "https://github.com/redfox-data/redfox-community"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["agent-skills", "ai-agents", "awesome-skills", "claude-skills", "content-creation", "douyin", "skills", "social-media", "tools", "xiaohongshu"]
stars: 395
forks: 53
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-05-12T06:26:09Z"
lastCommitAt: "2026-09-08T08:17:16Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 26
maintainers: ["yuanyi-github", "redfox-data", "chenxing-oss"]
openGraphImageUrl: "https://opengraph.githubassets.com/254052a23a3b34f7a8b893da7dfc745358913c63df1dac9847d6d7b9f39a5468/redfox-data/redfox-community"
---

</a>
</p>

  中文
</p>

# redfoxdata · Agent Skills

本仓库收录 **redfoxdata** 社区维护的多枚 Agent 技能（Skill），面向灵感、选题、文案创作、数据复盘等场景。技能以 `SKILL.md` 为核心，可与 Cursor、Claude Code 等支持 Agent Skills 的工具配合使用。

## 仓库结构

```text
.
├── README.md          # 本说明（中文）
├── README.en.md       # English README
├── skills/            # 技能（每个子目录一枚技能）
│   └── <skill-name>/
│       ├── SKILL.md
│       └── …          # 脚本、参考文档等（可选）
```

## 技能目录约定

每个技能是一个**独立子文件夹**，且至少包含：

| 文件       | 说明                                                              |
| ---------- | ----------------------------------------------------------------- |
| `SKILL.md` | 技能入口：YAML frontmatter + 正文（触发条件、步骤、约束、示例等） |

建议在 `SKILL.md` 的 frontmatter 中提供清晰元信息，便于检索与导入平台识别，例如：

```yaml
---
name: Example Skill
description: 一句话说明技能适用场景与能力边界（建议具体，避免空泛）。
---
```

可选：`references/`、`scripts/`、`assets/` 等，与 `SKILL.md` 同目录存放，保持单技能自包含、路径相对引用即可。

## RedFox首页

  </a>
</p>

## 身份认证

所有 API 请求都需要有效的 API KEY。

### 获取链接：

请前往 [红狐hub](https://redfox.hk/settings/api-keys?source=github) 获取API KEY

## 丰富多样的Skill

  </a>
</p>

### Skill如何使用

#### 本地 / Cursor

将需要的技能目录复制到你所用工具的 skills 目录（例如 Cursor 的 user skills 或项目内 `.cursor/skills/`…
