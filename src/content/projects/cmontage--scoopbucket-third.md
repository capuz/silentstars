---
repo: "cmontage/scoopbucket-third"
name: "scoopbucket-third"
description: "将一些 Scoop 第三方库整合到一个 Bucket 中，每天同步更新，便于自用"
url: "https://github.com/cmontage/scoopbucket-third"
language: "templ"
languages: ["templ", "PowerShell"]
languagePcts: [49, 27]
topics: ["scoop", "scoop-bucket", "windows"]
stars: 33
forks: 3
openIssues: 0
closedIssues: 14
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-08-18T16:06:22Z"
lastCommitAt: "2026-06-25T02:07:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 57
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fe53849201fb77760b59028868eca748095a20808841e7ac9c8e0959492e388/cmontage/scoopbucket-third"
---

<h1 align="center">Third Bucket All In One</h1>

将 Scoop 第三方库整合成一个 Bucket，每日同步，作为我的 [Scoop 官方整合库](https://github.com/cmontage/scoopbucket) 的拓展，安装应用时便于分辨官方源与第三方源，方便我自己自用。

Integrate Scoop third-party libraries into a Bucket, synchronized daily, as an extension of my official Scoop integration library, easy to distinguish between official and third-party sources when installing applications, convenient for self-use.

## 介绍

包含了我觉得自己用得到的 Scoop 第三方库：
- ivaquero/scoopet
- scoopcn/scoopcn
- kkzzhizhou/scoop-apps
- ~~anderlli0053/DEV-tools~~ (该存储库中收集的部分文件包含其作者未授权文件，已删除)
- akirco/aki-apps

**本应用库每天自动更新一次。本仓库是为了我自己方便使用scoop而创建的，但是之前考虑到除了我可能还会有人用所以我套了个加速镜像域名，但是域名经常挂要更新十分麻烦，目前我把加速镜像去掉了，网络问题请自行使用霍格华兹魔法。**

## 安装 Scoop

请看[这里](https://github.com/cmontage/scoopbucket?tab=readme-ov-file#%E5%AE%89%E8%A3%85-scoop)，或者[官方文档](https://github.com/ScoopInstaller/Install#readme)

## 添加仓库

> [!CAUTION]
> 确保你已经安装了 Scoop ！
>
> 建议与我的 Scoop 官方整合库一起使用
>
> 输入 scoop -V 命令查看 Scoop 版本

添加本仓库，运行命令

    ```powershell
    scoop bucket add third https://gitee.com/cmontage/scoopbucket-third

    # 如果需要移除本仓库
    scoop bucket rm third
    ```

> [!TIP] 
>
> 如果你之前添加过其他 bucket 并下载过应用，你希望他们全部或者部分使用本仓库来进行更新。那么你需要在 app 安装后的…
