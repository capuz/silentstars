---
repo: "zhuhu00/Paper-digest"
name: "Paper-digest"
description: "Get the papers you want from ArXiv every weekday."
readmeQualityOk: true
url: "https://github.com/zhuhu00/Paper-digest"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["paper", "python", "slam", "slam-algorithms"]
stars: 24
forks: 10
openIssues: 209
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-06-05T01:57:29Z"
lastCommitAt: "2026-07-08T05:40:18Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "under_pressure"]
healthScore: 70
undervaluedScore: 50
maintainers: ["github-actions[bot]", "stevealpha20"]
openGraphImageUrl: "https://opengraph.githubassets.com/35f04ecd60f4720b2b29b4ad721d22745bdeabe0e271008f230edbd89c1a6c9c/zhuhu00/Paper-digest"
---

# Get-daily-arxiv-notice

> 不知道什么原因，不能更新issue了，本地运行返回401，action也不能正常更新issue，不过还是会更新到markdown里面的，每天论文都是在文件夹`Arxiv_Daily_Notice`文件夹下`xxxx-xx-xx-Arxiv-Daily-Paper.md`，文件夹的`README.md`是最新更新的论文
> 
> 以及，如果感觉以后论文太多翻的麻烦，可以在个人主页看：[**https://zhuhu00.top/blog/**](https://zhuhu00.top/blog/)，这里会更新每天的arxiv有关SLAM等的文章

# 如何使用
1. `fork`本repository，然后在Setting->Security->Secrets->Actions下，创建一个`Repository secrets`, 并记下名字为`ISSUE_TOKEN`,这个TOKEN上需要先做github账号下申请的。然后粘贴到`ISSUE_TOKEN`。
2. 修改`config.py`下，repo的名字，以及github名字等，可查看后面的内容。
3. 可先在本地运行，成功后github的action会每天自动运行

You can get daily arxiv notification with pre-defined keywords as [here](https://github.com/zhuhu00/arxiv-daily-notice/issues).

Arxiv.org announces new submissions every day on fixed time as informed [here](https://arxiv.org/help/submit).

This repository makes it easy to filter papers and follow-up new papers which are in your interests by creating an issue in a github repository.

## Prerequisites

- Python3.x

Install requirements with below command.

```bash
$ pip install --upgrade pip
$ pip install -r requirements.txt
```

## Usage

### 1. Create a Repo

Create a repository to get notification in your github.

### 2. Set Config

Revise…
