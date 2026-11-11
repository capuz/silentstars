---
repo: "LinJianKun/deepseek-harness-desktop-mirror"
name: "deepseek-harness-desktop-mirror"
description: "DeepSeek Harness Desktop 安装包非官方镜像（win-x64 / mac-arm64）| Unofficial installer mirror. Prefer official downloads."
readmeQualityOk: true
url: "https://github.com/LinJianKun/deepseek-harness-desktop-mirror"
homepage: "https://github.com/deepseek-ai/deepseek-harness"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["deepseek", "deepseek-harness", "desktop-app", "dsh", "installer", "mirror"]
stars: 12
forks: 3
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-28T14:56:14Z"
lastCommitAt: "2026-11-11T19:44:52Z"
lastReleaseAt: "2026-11-11T19:44:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 48
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3e8a90ca210a4fc70c159bf079ff07fbf832b923f185169fab6a1ed801f5a561/LinJianKun/deepseek-harness-desktop-mirror"
---

# DeepSeek Harness Desktop — 安装包镜像

本仓库用于存放 **DeepSeek Harness 桌面版** 的官方安装包副本，方便在无法直接访问官方下载域名的网络环境下获取安装文件。

> ⚠️ **这是非官方镜像仓库。** 与 DeepSeek 官方无任何隶属或背书关系。
> 能够访问官方渠道时，**请优先从官方渠道下载**。

---

## 发布目的

1. **网络可达性**：部分企业/校园网络仅放行白名单域名，官方下载站点（`download.deepseek.com`）不在名单内，导致无法取得安装包。本仓库提供一份在这些环境下可达的副本。
2. **可复现性**：每个版本均发布 SHA-256 校验值，任何人都能验证下载到的文件与官方原文逐字节一致、未被篡改。
3. **归档**：官方渠道通常只保留最新版本，此处保留**全部历史版本**。

## 自动同步

本仓库由 GitHub Actions 自动同步上游发布：定时读取 [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) 的最新 tag，按版本号从官方下载地址取得对应安装包，校验后发布为本仓库的 Release，并自动更新本文件。

- 同步脚本：[scripts/sync-upstream.sh](https://github.com/LinJianKun/deepseek-harness-desktop-mirror/blob/HEAD/scripts/sync-upstream.sh)
- 工作流：[.github/workflows/sync-upstream.yml](https://github.com/LinJianKun/deepseek-harness-desktop-mirror/blob/HEAD/.github/workflows/sync-upstream.yml)
- 同步不会修改下载到的二进制，仅原样转发并记录 SHA-256。

### 启用工作流需要 workflow scope

**GitHub 不允许只具备 `repo` scope 的 token 推送 `.github/workflows/` 下的文件**（API 会返回 `404`，这是 GitHub 有意的模糊响应，并非路径错误）。若工作流尚未出现在仓库中，用以下任一方式启用：

**方式一：为本地 `gh` 补授权（推荐，一次性）**

```bash
gh auth refresh -h github.com -s workflow
```

在浏览器中确认后，再执行 `./release.sh` 即可推送工作流文件。

**方式二：网页端手动添加**…
