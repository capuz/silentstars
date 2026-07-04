---
repo: "nice-people-frontend-community/nice-leetcode"
name: "nice-leetcode"
description: "好青年 |  leetcode 打卡群"
url: "https://github.com/nice-people-frontend-community/nice-leetcode"
homepage: "https://nice-people-frontend-community.github.io/nice-leetcode/docs/#/weekly"
language: "Vue"
languages: ["Vue", "TypeScript"]
languagePcts: [53, 41]
stars: 39
forks: 8
openIssues: 1
closedIssues: 9
watchers: 4
contributors: 23
recentReleases: 0
createdAt: "2022-05-03T06:41:14Z"
lastCommitAt: "2026-07-04T06:13:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 59
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/d769135d11f0536cb1cadf768b72cf6af2fdfbf5511be0c1cb8255619fe91b8e/nice-people-frontend-community/nice-leetcode"
---

# 好青年 | LeetCode 打卡群

## 免责声明

本项目仅供学习交流参考，在任意情况下均不得用于任何商业用途。如有意外，本人不承担任何责任。^\_^

## 用途

- 日报: 每天每小时的 50 分获取用户的当天的刷题记录，结果记录在 [data/records 目录](data/records/) 下
- 周报: 日报更新后自动汇总本周周报，结果记录在 [data/weeks 目录](data/weeks/) 下
- 头等舱航班：离群航班会在每月一号启航，登机客户为上个月不曾打卡的同学，离群后可再次申请入群

注意：由于调用的接口只能返回最近 15 次 AC 的记录，可能会包含重复的题目，如果用户存在反反复复重复提交的情况，可能会导致统计不全~

## 线上地址

- [用户日报](https://nice-people-frontend-community.github.io/nice-leetcode/docs/#/daily)
- [本周周报](https://nice-people-frontend-community.github.io/nice-leetcode/docs/#/weekly)
- [头等舱航班](https://nice-people-frontend-community.github.io/nice-leetcode/docs/#/first-class)
- [总榜](https://nice-people-frontend-community.github.io/nice-leetcode/docs/#/ranking)

## 使用方法

### 添加 LC ID

- Step1. 修改文件 [scripts/add_user.ts](scripts/add_user.ts)

```ts
const newUsers: IUser[] = [
  {
    // 用户名称，随便你取什么名字
    userName: '你好啊派大星',
    // LeetCode 中用户唯一标识
    userId: 'ni-hao-a-pai-da-xing',
    // 是否是美服账号
    // 此字段选填，默认：false（国服）
    lcus: false,
    // 刷题记录是否周报中屏蔽
    // 此字段选填，默认：false
    hideInWeek: false,
  }
];
```

- Step2. 执行命令

该命令会扫描以上人员本周内的提交记录，生成日报 json

并且会把用户信息自动更新到 `data/common/user.json` 文件中。

```sh
yarn add_user
```

- Step3. 提交 Git

将生成的用户日报…
