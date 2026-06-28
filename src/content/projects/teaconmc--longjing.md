---
repo: "teaconmc/Longjing"
name: "Longjing"
description: "TeaCon Continuous Submission Delivery Service"
url: "https://github.com/teaconmc/Longjing"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [55, 29]
stars: 23
forks: 5
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2020-12-13T16:39:14Z"
lastCommitAt: "2026-06-28T06:56:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 64
maintainers: ["teacon-bot[bot]", "3TUSK"]
openGraphImageUrl: "https://opengraph.githubassets.com/54e34413c3c7821c6bc3182cb5aaab3579a5a985f3f8960c718c17c592aded18/teaconmc/Longjing"
---

# 龙井 - TeaCon Continuous Delivery Service

We leverage GitHub Actions to provide continuous integration and delivery of all TeaCon 2026 participant mods.

## 工作流程 Workflow

  1. 使用 GitHub Action 的 Cron Trigger，每半小时触发一次轮询。
     轮询的 Workflow 由 `.github/workflows/query.yaml` 描述。
  2. 轮询的过程为访问碧螺春的 API，获取当前有效报名的列表。
     通过 API 拿到报名信息中的队伍名、模组名和 Git Repo 地址，生成对应的信息。
     对于新报名的队伍，将会在 `.github/workflows/` 目录下创建新的 Workflow，并在 `mods` 下创建对应的目录。
     对于已有信息的队伍，将会更新其在 `mods` 目录下的信息（Git Repo 地址、HEAD shasum 等）
  3. 将新建或更新的构建信息推送回本仓库，触发构建和发布。
     构建时，`setup.gradle` 会作为参赛项目的 [Init Script][ref-2] 注入到构建流程中。
  4. 构建成功后，龙井会找出正确的构建产物，并从碧螺春获取 Mod 前置，并将这些模组一并传入 
     [Dedicated Server Launch Test][ref-3]（下简称 DSLT）中，在 CI 环境下启动一次服务器，
     以确认其可正常在服务器环境中启动。
  5. 通过 DSLT 测试后，龙井会执行 `publish.sh` 脚本，将构建产物上传至 TeaCon 归档服务，
     并通知碧螺春有新构建产生。
  6. 对于未能完整通过构建的模组，龙井会执行 `failure-callback.sh` 脚本，透过碧螺春向对应报名队伍的队长发送电邮通知，
     告知其构建失败。

[ref-2]: https://docs.gradle.org/current/userguide/init_scripts.html
[ref-3]: https://github.com/teaconmc/dedicated-server-launch-test

## 项目结构 Structure

### `fetch/query.py`

轮询脚本的主体。

Main/entry script of the scheduled query.

### `fetch/workflow_template.yaml`

轮询时自动创建的新 GitHub Action…
