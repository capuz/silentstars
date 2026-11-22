---
repo: "JingYu-er/dsh-stm32"
name: "dsh-stm32"
description: "DSH plugin: STM32 complete process tool - environment detection, .ico transactions, generating project, compiling, burning, debugging"
originalDescription: "DSH插件：STM32全流程工具--环境探测、.ico事务、生成工程、编译、烧录、调试 | DSH plugin: STM32 complete process tool - environment detection, .ico transactions, generating project, compiling, burning, debugging"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/JingYu-er/dsh-stm32"
language: "C"
languages: ["C", "JavaScript"]
languagePcts: [54, 29]
topics: ["cortex-m3", "deepseek-harness", "dsh", "dsh-plugin", "dsh-plugins", "openocd", "stm32", "stm32cubemx"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-22T11:43:37Z"
lastCommitAt: "2026-11-22T11:53:12Z"
lastReleaseAt: "2026-11-21T10:36:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 60
maintainers: ["JingYu-er"]
openGraphImageUrl: "https://opengraph.githubassets.com/4bcee61c3ec049fad954c1700eeca10e9ad3bd33718caa7ba22c99a1f5da8e5c/JingYu-er/dsh-stm32"
---

# dsh-stm32

A full-process STM32 tool layer, distributed as a plugin for [DeepSeek Harness (DSH)](https://github.com/deepseek-ai/deepseek-harness): 37 tools, 7 slash commands, and 1 bundled SKILL. It hands the whole chain to the model to execute: toolchain detection → project creation → editing `.ioc` (including clocks) → code generation → compiling → flashing → debugging → register readback. It also includes serial interaction (Windows) and an in-session “Debug Console” panel.

Within the supported scope, the same tools work the same way from F1 to H7. When an unsupported chip or feature is encountered, the call states directly what is missing and does not return a guessed result.
