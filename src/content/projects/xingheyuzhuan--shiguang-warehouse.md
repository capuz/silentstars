---
repo: "XingHeYuZhuan/shiguang_warehouse"
name: "shiguang_warehouse"
description: "本仓库用于 shiguangschedule 适配脚本的管理和测试。所有适配脚本将集中存放于此，方便软件拉取和测试"
readmeQualityOk: true
url: "https://github.com/XingHeYuZhuan/shiguang_warehouse"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 43
forks: 106
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 82
recentReleases: 0
createdAt: "2025-09-23T02:23:47Z"
lastCommitAt: "2026-08-24T04:22:29Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 61
maintainers: ["XingHeYuZhuan", "Selffox", "lhgr"]
openGraphImageUrl: "https://opengraph.githubassets.com/863eb6436aa404c9901d300cf6c610e0f9d3d0cdf8cf6d1bedf35f99e89693ae/XingHeYuZhuan/shiguang_warehouse"
---

# shiguang_warehouse  

本仓库用于管理 [shiguangschedule](https://github.com/XingHeYuZhuan/shiguangschedule) 的适配脚本，供软件拉取和测试。

> [!important]
> **为避免代码出现问题，`main` 分支已启用分支保护，需要先合并到 `pending` 分支等待分支同步。**

## 仓库结构

```
shiguang_warehouse/
├───.github/
│   ├───workflows/
│   │   ├───build-index.yml  # 生成 Protobuf 数据索引
│   │   └───...
│   └───...
├───index/
│   └───root_index.yaml      # 整个适配器仓库的根索引文件
├───resources/               # 资源目录
│   ├───CUST/                # 学校目录
│   │   ├───adapters.yaml    # 配置信息
│   │   └───cust.js          # 适配脚本
│   ├───GLOBAL_TOOLS/        # 通用工具
│   │   ├───adapters.yaml
│   │   ├───school.js        # 组件测试脚本
│   │   └───...
│   └───...
├───proto/
|   └───school_index.proto #索引模板文件 可使用protoc等工具编译为其他平台代码用于解析仓库索引
└───...
```

## root_index.yaml 字段说明

**每个条目需包含以下字段：**

| 字段名            | 类型      | 说明                       |
| ----------------- | --------- | -------------------------- |
| `id`              | `string`  | 唯一标识（拼音或缩写，如果可以更建议使用域名）<br>一般来说我们建议教务使用全大写，工具使用全小写 |
| `name`            | `string`  | 中文名称                   |
| `initial`         | `string`  | 名称首字母（用于排序）     |
| `resource_folder` | `string`  | 资源文件夹名称（建议和 `id` 保持一致）|

**示例：**
```yaml
schools:…
