---
repo: "MoegirlPediaInterfaceAdmins/MoegirlPediaInterfaceCodes"
name: "MoegirlPediaInterfaceCodes"
description: "萌娘百科界面代码库"
readmeQualityOk: true
url: "https://github.com/MoegirlPediaInterfaceAdmins/MoegirlPediaInterfaceCodes"
homepage: "https://zh.moegirl.org.cn/MGP:Interface-admin"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
topics: ["moegirlpedia", "javascript", "nodejs"]
stars: 51
forks: 20
openIssues: 10
closedIssues: 93
watchers: 8
contributors: 22
recentReleases: 0
createdAt: "2022-06-20T01:10:26Z"
lastCommitAt: "2026-08-22T04:07:12Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 58
maintainers: ["dependabot[bot]", "github-actions[bot]", "Saoutax"]
openGraphImageUrl: "https://opengraph.githubassets.com/16693afdf4a84ff84022044ec5bfc7699fd2f46128c57ea926f2e9b5ff3a0051/MoegirlPediaInterfaceAdmins/MoegirlPediaInterfaceCodes"
discussionCount: 1
---

# MoegirlPediaInterfaceCodes

萌娘百科界面代码库

欢迎来到萌娘百科界面代码库，本仓库由[萌娘百科界面管理员](https://zh.moegirl.org.cn/_?curid=489391)所组成的[团队](https://github.com/MoegirlPediaInterfaceAdmins)维护，旨在以自动化的方式减轻维护界面代码的复杂度。

目前只有[萌娘百科的界面管理员](https://zh.moegirl.org.cn/Special:Listusers/interface-admin)可以拥有本仓库的读写权限，如果你是萌娘百科的界面管理员但没有权限，你可以向 U:AnnAngela 获取本仓库的读写权限；不过如果你尚不是界面管理员，我们也欢迎你以[下列方式](#参与维护)参与到本仓库的维护工作中来。

## 仓库架构

### 仓库文件架构

本仓库包含多组文件用以实现不同用途，详情见下。

<details><summary>仓库架构详情</summary>

- [`.github`](https://github.com/MoegirlPediaInterfaceAdmins/MoegirlPediaInterfaceCodes/blob/HEAD/.github) 文件夹用以保存 GitHub Dependabot 和 GitHub Actions 所需配置文件，其中：
  - [`.github/workflows/postCommit.yaml`](https://github.com/MoegirlPediaInterfaceAdmins/MoegirlPediaInterfaceCodes/blob/HEAD/.github/workflows/postCommit.yaml) 用以保存自动化流程，包含自动配置 Conventional Commits（约定式提交）所需 scope（作用域）信息、自动导入来自 npm 和指定页面的代码、自动补全小工具列表；
  - [`.github/workflows/generatePolyfill.yaml`](https://github.com/MoegirlPediaInterfaceAdmins/MoegirlPediaInterfaceCodes/blob/HEAD/.github/workflows/generatePolyfill.yaml) 用以自动生成 polyfill 文件；
  -…
