---
repo: "evrone-erp/yandex-tracker-action"
name: "yandex-tracker-action"
description: "Move the task at Yandex Tracker board."
readmeQualityOk: true
url: "https://github.com/evrone-erp/yandex-tracker-action"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 21
forks: 4
openIssues: 0
closedIssues: 1
watchers: 28
contributors: 6
recentReleases: 0
createdAt: "2022-07-04T13:25:08Z"
lastCommitAt: "2026-08-28T14:22:42Z"
lastReleaseAt: "2025-04-18T07:35:07Z"
status: "thriving"
tags: ["hidden_gem", "community_watch"]
healthScore: 92
undervaluedScore: 33
maintainers: ["grmnga"]
openGraphImageUrl: "https://opengraph.githubassets.com/295fe1c947ac1e7d4886a273368025e50f50cac5aa69a9626b26af8540c43b76/evrone-erp/yandex-tracker-action"
---

# Yandex Tracker action

[RUS](https://github.com/evrone-erp/yandex-tracker-action/blob/master/README_RUS.md)

This action allows you to automatically move tasks on the board.

Move the task at Yandex Tracker board.

By default, it parses commits of the form "[RI-1] implement something" and takes the task number, which in this case is
RI-1.

You can also set tasks directly in the action, for example, by specifying the output from the previous job.

If there are multiple commits with different task keys in the pull request, they will all be moved on the board.

It is also possible to specify multiple tasks in an action. See documentation below.

All task keys will be collected, both specified in the action and found in the commits.

If the task key is not found in the tracker, you will receive a warning, but the tasks found will be processed.

If the task has nowhere to move or it is already in the desired status, a message will be displayed.

Please feel free to report any issues.

## Usage

### Basic

By default, commit messages such as `"[RI-1] awesome-feature"` will be parsed, where `"RI-1"` will be the feature key.
You can specify a specific task key. You can also use the…
