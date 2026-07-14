---
repo: "chinawsb/daofy"
name: "daofy"
description: "Daofy for Delphi — MCP Server that compiles Delphi projects and queries knowledge base for AI assistants."
readmeQualityOk: true
url: "https://github.com/chinawsb/daofy"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["ai-assistant", "delphi", "delphi-compiler", "delphi-ide", "embarcadero", "mcp", "model-context-protocol", "opencode", "trae", "claude-desktopcodearts"]
stars: 84
forks: 14
openIssues: 0
closedIssues: 4
watchers: 3
contributors: 2
recentReleases: 7
createdAt: "2026-03-10T08:00:49Z"
lastCommitAt: "2026-07-14T05:51:38Z"
lastReleaseAt: "2026-07-14T05:50:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 39
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/6d6fd993ca8c0e6b4028f9af1c156fc54ab8905fb16cb71f692e1d7dda9e495c/chinawsb/daofy"
---

# Daofy for Delphi

一个为 AI 助手(如 Claude Desktop、CodeArts Agent 等)提供 Delphi 工程编译能力和知识库查询功能的 MCP Server。如果您觉得有用，请不要吝啬您的 Star! ⭐

Daofy（道飞）——为创意插上翅膀。

## 项目简介

Daofy for Delphi 是一个基于 Model Context Protocol (MCP) 的 MCP Server，它允许 AI 助手直接编译 Delphi 项目并查询 Delphi 知识库。通过这个工具,您可以在与 AI 助手的对话中直接编译 Delphi 工程、查询 API 文档、搜索代码示例,无需手动切换到 IDE 或命令行。

**主要优势:**

- **Delphi 自动化测试**: 内置 GUI/Console 自动化测试框架，AI 驱动脚本操控 Delphi 程序
- 无缝集成到 AI 助手工作流中
- 自动检测和配置 Delphi 编译器
- 内置 Delphi 源码知识库,支持语义搜索
- 项目级知识库,自动追踪三方库和项目源码
- 通用文档知识库支持 Delphi CHM 帮助文档全文搜索
- 支持所有主流 AI 助手平台
- 完整的编译事件支持
- 详细的错误诊断和日志

## 功能特性

### 编译功能

- **工程整体编译**: 支持编译完整的 Delphi 工程(.dproj/.dpr),生成可执行文件或动态链接库
- **MSBuild 编译**: 优先使用 MSBuild 编译,自动处理依赖关系和编译事件
- **单文件编译**: 支持编译单个 Delphi 单元文件(.pas),进行语法检查
- **自动检测编译器**: 自动从注册表检测已安装的 Delphi 编译器,无需手动配置
- **智能库路径解析**: 自动分析项目依赖，智能选择需要的第三方库路径，避免命令行过长
- **编译事件支持**: 支持 PreBuildEvent、PostBuildEvent、PreLinkEvent,包含完整的参数替换
- **命令行参数生成**: 支持生成 Delphi 编译器命令行参数,便于调试和预览
- **编译器配置管理**: 支持配置和管理多个 Delphi 编译器版本
- **环境检查**: 提供编译器环境状态检查功能
- **丰富的编译选项**: 支持条件编译符号、搜索路径、优化选项、调试信息、警告控制等

### 知识库功能

- **Delphi 源码知识库**: 内置 Delphi 官方源码知识库,支持类、函数搜索和语义搜索
- **项目知识库**: 为每个项目构建独立知识库,自动追踪三方库和项目源码
- **三方库知识库**: 从 .dproj 文件自动提取三方库路径并构建知识库
-…
