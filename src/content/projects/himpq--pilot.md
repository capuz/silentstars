---
repo: "Himpq/Pilot"
name: "Pilot"
description: "A Magisk-like modular framework for Sony cameras, designed for reversible runtime AP/CP memory patching."
originalDescription: "A Magisk-like modular framework for Sony cameras, designed for reversible runtime AP/CP memory patching."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Himpq/Pilot"
language: "C"
languages: ["C"]
languagePcts: [84]
topics: ["a6700", "aarch64", "firmware", "sony"]
stars: 20
forks: 3
openIssues: 4
closedIssues: 4
watchers: 3
contributors: 4
recentReleases: 10
createdAt: "2026-11-17T14:47:45Z"
lastCommitAt: "2026-11-27T12:56:47Z"
lastReleaseAt: "2026-11-26T16:22:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 45
maintainers: ["Himpq", "web-flow", "zhuorantiancheng"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b5242c5b6f1fdcaeb98d30299192d53b67c76f272ddb4b124f86a3de7f5dca0/Himpq/Pilot"
fundingLinks: ["KO_FI:https://ko-fi.com/Himpq"]
---

# Pilot

Pilot 是索尼相机的模块化扩展框架，支持运行时访问 AP / CP 内存、写入代码区，并从 SD 卡加载功能模块。

## Features

- **运行时读写**：读取和修改 AP / CP 内存及代码区，CP 写入支持异步操作和 UIPC v4 批量处理。
- **模块加载**：通过 SD 卡清单选择和组合模块，框架负责加载与初始化。
- **文件与日志**：支持 SD 卡文件读写，以及框架和模块的独立日志。

## Discussion
Feel free to open an issue to report bugs, suggest new ideas, or even share your success stories!

## Develop

模块只需实现 `pilot_module_init`，即可通过 `PilotApi` 使用文件、日志、时间和内存等能力。`sdk/pilot_mod_util.h` 提供常用辅助函数；通用工具支持补丁描述、模块构建、部署和日志导出。

- [安装与使用](https://github.com/Himpq/Pilot/blob/HEAD/docs/USAGE.md)
- [模块开发与构建](https://github.com/Himpq/Pilot/blob/HEAD/docs/DEVELOPMENT.md)
- [通用补丁工具](https://github.com/Himpq/Pilot/blob/HEAD/tools/README.md)
- [下载模块和框架](https://github.com/Himpq/Pilot/releases)
