---
repo: "neflibata-feng/MyArxiv-Agent"
name: "MyArxiv-Agent"
description: "个人arXiv论文知识空间，欢迎fork或star!"
readmeQualityOk: true
url: "https://github.com/neflibata-feng/MyArxiv-Agent"
homepage: "https://neflibata-feng.github.io/MyArxiv-Agent/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [66, 21]
topics: ["agent", "ai", "arxiv", "arxiv-api", "arxiv-daily", "paper", "uestc"]
stars: 128
forks: 4
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-02-05T14:00:02Z"
lastCommitAt: "2026-09-15T08:54:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 31
maintainers: ["github-actions[bot]", "neflibata-feng"]
openGraphImageUrl: "https://opengraph.githubassets.com/e324a45502da08af0f3e42b9b7bdd05a24e9d8a0881707074ce440f31cfdf75b/neflibata-feng/MyArxiv-Agent"
discussionCount: 0
---

</p>

</p>

  <strong>中文</strong> · <a href="README.en.md">English</a>
</p>

## 关于本仓库

- 这是一个由 **neflibata-feng** 个人维护和自用的 arXiv 论文知识空间，用于自动整理 AI Agent 相关论文、筛选阅读内容并持续撰写研究笔记。
- 仓库中的论文元数据来自 **arXiv**，`Inbox.md` 用于每日筛选，`Papers/` 用于归档，`Notes/` 用于记录个人笔记与思考。
- 本仓库也可以作为完整模板使用：你可以 **fork** 到自己的账号，清空示例数据并修改配置，建立独立的 arXiv 自动化论文与笔记仓库。

### Fork 后迁移为自己的仓库

1. **清空现有数据**：删除 `data/arxiv.db`，清空 `Papers/`、`Notes/` 与可选的 `pdfs/` 内容；将 `Inbox.md` 保留为仅含分隔线 `---`，并重置 `Contents.md`。请保留目录、脚本和工作流文件。
2. **修改配置**：在 `config.yaml` 中更新 `meta.owner`、关注分类、关键词、每日抓取数量及 Inbox 容量等配置。
3. **重建数据库**：安装 `scripts/requirements.txt` 后运行 `python scripts/migrate_to_sqlite.py`，生成属于你自己的空 SQLite 数据库和 Inbox 视图，然后提交这些初始化结果。
4. **启用自动化**：在 fork 仓库的 Actions 页面启用工作流，并在 `Settings → Actions → General` 中确认 `GITHUB_TOKEN` 具有读写仓库内容的权限。可先手动运行 `Daily Arxiv Fetcher` 检查配置。
5. **配置网页 PAT**：创建只授权该 fork 仓库的 fine-grained PAT，仅授予 `Contents: Read and write`，设置合理的有效期。在网页登录页填写 `你的用户名/仓库名` 和 PAT；不要把 PAT 写入仓库、`config.yaml` 或提交记录。当前网页会在浏览器本地保存 PAT，请只在可信设备上使用。
6. **启用网页**：手动运行 `Deploy Web App` 生成 `gh-pages` 分支，再到 `Settings → Pages` 选择从 `gh-pages` 分支根目录发布。

> 完成迁移后，SQLite 是完整数据源，`Inbox.md` 只是固定容量的可编辑视图；不要只删除 Inbox 来清空历史状态。

---

## 许可说明

-…
