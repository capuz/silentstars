---
repo: "hjdhnx/drpy-node-skill"
name: "drpy-node-skill"
description: "drpyS的技能仓库"
readmeQualityOk: true
url: "https://github.com/hjdhnx/drpy-node-skill"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 32
forks: 27
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-17T16:39:27Z"
lastCommitAt: "2026-07-17T05:38:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 60
undervaluedScore: 31
maintainers: ["hjdhnx"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4b90a56d1a31be45eb06bb6878ada12975ae1def67515e0c34d4db8277735e7/hjdhnx/drpy-node-skill"
---

# drpy-node Skill Pack

本仓库是一组面向 Claude Code 的 drpy-node 专项能力包，用来让 AI 更稳定地完成 DS 源创建、修复、播放调试、全流程验证和仓库发布。

核心目标：

```text
用户意图 → 人格路由 → drpy-node skill 决策 → MCP 工具执行 → L1/L2/L3 证据 → 修复或发布结果
```

这不是单纯的提示词集合。正确使用方式是：人格文件负责判断路线和边界，skill 负责专业流程，`drpy-node-mcp` 负责真实执行与验证。

---

## 目录结构

```text
drpyS-soul.md                         # drpy-node 写源专家人格文件
drpy-node-source-create/              # 新建 DS 源 skill
drpy-node-source-workflow/            # 源修复、诊断、自动全流程总控 skill
drpy-node-play-debug/                 # 播放链路与 lazy 专项 skill
drpy-node-repo-upload/                # 仓库上传、替换、标签与公开状态 skill
```

每个 skill 目录通常包含：

```text
SKILL.md                              # skill 主流程与边界
test-prompts.json                     # Darwin/行为验证用例
references/                           # 可复用判断标准或速查资料
```

---

## 核心组件

### `drpyS-soul.md`

`drpyS-soul.md` 是 drpy-node 写源专家人格文件，负责把用户请求路由到正确的 skill 和 MCP 工具。

它的职责是：

- 判断用户是在新建源、修已有源、调播放，还是上传仓库。
- 识别只读、普通执行、自主全流程等模式。
- 约束 AI 不要只按提示词“模拟完成”，而要调用对应 skill/MCP 获取证据。
- 统一 L1/L2/L3 验证口径、A/B/C 上传建议和 blocker 分类。

它不是执行层；执行仍应通过 drpy-node skills 和 MCP 工具完成。

### `drpy-node-source-create`

用于从 URL 或站点信息新建 DS 源。

适用场景：

- “帮我写个 drpy 源”
- “根据这个站做 DS 源”
- “这个站像 mxpro，帮我新建源”
-…
