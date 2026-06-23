---
repo: "vmoranv-reborn/AstrBot_Plugins_Collection"
name: "AstrBot_Plugins_Collection"
description: "三方astrbot插件收集"
url: "https://github.com/vmoranv-reborn/AstrBot_Plugins_Collection"
homepage: "https://astr-bot-plugins-collection.vercel.app"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 41
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-12-15T14:44:18Z"
lastCommitAt: "2026-06-23T06:42:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 59
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6369ae711e7319d870ec5680de905222bc09f1d11e10960d9f916c045d31481/vmoranv-reborn/AstrBot_Plugins_Collection"
---

# AstrBot Plugins Collection

![GitHub last commit](https://img.shields.io/github/last-commit/vmoranv-reborn/AstrBot_Plugins_Collection)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/vmoranv-reborn/AstrBot_Plugins_Collection)

## 插件提交

> [!NOTE]
> 请前往三方仓库提交您的插件：[🥳 发布插件](https://github.com/vmoranv-reborn/AstrBot_Plugins_Collection/issues/new?template=PLUGIN_PUBLISH.yml)

## 自动化数据处理脚本

本仓库包含一套自动化脚本，用于定期同步和处理插件数据：

- [check_for_changes](./scripts/transform_plugin_data/check_for_changes/run.sh) - 检查插件数据文件变更情况
- [clean_up](./scripts/transform_plugin_data/clean_up/run.sh) - 清理临时文件
- [commit_and_push_changes](./scripts/transform_plugin_data/commit_and_push_changes/run.sh) - 提交并推送更新到远程仓库
- [configure_git](./scripts/transform_plugin_data/configure_git/run.sh) - 配置 Git 用户信息
- [fetch_original_plugin_data](./scripts/transform_plugin_data/fetch_original_plugin_data/run.sh) - 从原始仓库获取插件数据
- [get_github_api_info_for_repositories](./scripts/transform_plugin_data/get_github_api_info_for_repositories/run.sh) - 获取插件仓库的 GitHub API 信息（星标数、更新时间等）
- [load_existing_cache_for_fallback](./scripts/transform_plugin_data/load_existing_cache_for_fallback/run.sh) - 加载现有缓存作为回退数据
-…
