---
repo: "wicyn/taskflowlite"
name: "taskflowlite"
description: "⚡ Lightweight C++20 task parallelism and DAG scheduling library"
originalDescription: "⚡ 轻量级 C++20 任务并行与 DAG 调度库"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wicyn/taskflowlite"
language: "C++"
languages: ["C++"]
languagePcts: [97]
topics: ["concurrency", "cpp20", "dag", "header-only", "task-scheduler", "coroutine"]
stars: 17
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-02-13T15:11:20Z"
lastCommitAt: "2026-11-17T14:33:50Z"
lastReleaseAt: "2026-06-01T14:51:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 47
maintainers: ["wicyn"]
openGraphImageUrl: "https://opengraph.githubassets.com/28ad295ed73d8533f87c788049db6206c605785eee2f06f17a28c769aac88e68/wicyn/taskflowlite"
---

# TaskflowLite

**Simplified Chinese** · [English](https://github.com/wicyn/taskflowlite/blob/HEAD/README.en.md)

TaskflowLite (abbreviated tfl) is a lightweight, header-only C++20 task parallelism library, inspired by [Taskflow](https://github.com/taskflow/taskflow). It hands task graphs, async tasks, coroutines, and runtime control flow to the same executor for scheduling.

You describe the dependencies between tasks, and the executor schedules the runnable tasks on a thread pool. It suits dependent computations, batch workflows, subtasks determined only at runtime, and coroutines that need to suspend and wait for external completion notifications.

[Quick Start](#快速开始) · [Installation and Integration](#安装与集成) · [Core Concepts](#核心概念) · [Basic Usage](#基本用法) · [Coroutines](#协程任务) · [Execution Semantics and Usage Conventions](#执行语义与使用约定) · [Build and Test](#构建与测试) · [Documentation and Examples](#文档与示例)

Coroutine nodes support `call`, `fork/join`, and resuming external waits through `CoroToken`. See the [coroutine guide](https://github.com/wicyn/taskflowlite/blob/HEAD/documentation/coroutines.md) for details.

## Features

- **Task graph**: Build DAGs, manage task dependencies,…
