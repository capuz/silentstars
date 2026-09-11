---
repo: "easyeda/pro-api-sdk"
name: "pro-api-sdk"
description: "嘉立创EDA专业版扩展开发SDK，你可以基于这个SDK开发你自己的嘉立创EDA插件，内置简单demo。EasyEDA Pro Extension API Development Kit, You can develop your own EasyEDA plugin based on this SDK, with a built-in simple demo"
readmeQualityOk: true
url: "https://github.com/easyeda/pro-api-sdk"
homepage: "https://prodocs.easyeda.com/en/api/guide/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["easyeda", "easyeda-extension", "jlceda", "jlceda-extension", "lceda"]
stars: 65
forks: 26
openIssues: 8
closedIssues: 27
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2024-07-19T02:17:57Z"
lastCommitAt: "2026-09-11T08:15:46Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 83
undervaluedScore: 55
maintainers: ["yanranxiaoxi", "easyeda2021"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2f89d6132e92431792eaedddfe0e444080cc81a923cdae6e2cbd07e744e2abd/easyeda/pro-api-sdk"
---

[简体中文](#) | [English](https://github.com/easyeda/pro-api-sdk/blob/HEAD/README.en.md) | [繁體中文](https://github.com/easyeda/pro-api-sdk/blob/HEAD/README.zh-Hant.md) | [日本語](https://github.com/easyeda/pro-api-sdk/blob/HEAD/README.ja.md) | [Русский](https://github.com/easyeda/pro-api-sdk/blob/HEAD/README.ru.md)

# pro-api-sdk

嘉立创EDA & EasyEDA 专业版扩展 API 开发工具

> [!NOTE]
>
> 详细开发文档请访问：[https://prodocs.lceda.cn/cn/api/guide/](https://prodocs.lceda.cn/cn/api/guide/)

## 进入开发

本开发工具组包含了用于开发 [嘉立创EDA专业版](https://pro.lceda.cn/) 扩展包的所有环境和工具，并内置了 ESLint 的推荐规则。

1. 克隆 [pro-api-sdk](https://github.com/easyeda/pro-api-sdk) 项目仓库到本地

    Gitee:

    ```shell
    git clone --depth=1 https://gitee.com/jlceda/pro-api-sdk.git
    ```

    GitHub:

    ```shell
    git clone --depth=1 https://github.com/easyeda/pro-api-sdk.git
    ```

2. 初始化开发环境（安装依赖）

    ```shell
    npm install
    ```

3. 进行些许变更 ...

    - 修改文件夹名称为你的项目名称
    - 参考 [开发指南](https://prodocs.lceda.cn/cn/api/guide/how-to-start.html#ii-%E6%89%A9%E5%B1%95%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6) 修改 `extension.json` 中的 `name`、`displayName`、`description`、`publisher` 字段
    - 结合 [扩展 API 参考文档](https://prodocs.lceda.cn/cn/api/reference/pro-api.html)…
