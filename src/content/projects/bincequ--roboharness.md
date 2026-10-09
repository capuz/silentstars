---
repo: "BinceQu/RoboHarness"
name: "RoboHarness"
description: "A robotic harness that gives LLM agents a visual-geometric control panel so that they can directly understand and invoke embodied tasks."
readmeQualityOk: true
url: "https://github.com/BinceQu/RoboHarness"
homepage: "https://bincequ.github.io/RoboHarness/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 79
forks: 17
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-07T04:39:45Z"
lastCommitAt: "2026-10-09T10:50:24Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 33
maintainers: ["BinceQu", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1a2bb92a25ac8fa408c72513ccd82306f727ac68790914d4b7945a0ccc9c9d9/BinceQu/RoboHarness"
---

## A Simple Harness Can Outperform VLA and World Action Models

**[Project Page](https://bincequ.github.io/RoboHarness/) · [Quick Start](#run-a-task) · [Documentation](https://github.com/BinceQu/RoboHarness/blob/HEAD/docs/setup.md) · [中文](https://github.com/BinceQu/RoboHarness/blob/HEAD/README.zh-CN.md)**

## Overview

Without training models, RoboHarness combines visual clicks, keypoint tracking,
and geometric constraints to provide an embodied control panel for an LLM agent.

The LLM marks points of interest on a 2D image and continuously receives their
positions via optical-flow tracking and depth back-projection; with this
information, it composes accurate primitive actions to perform complex
manipulation.

The reported BEHAVIOR results use Claude Code 2.1.259 with
`Qwen3.8-Flash-Next-FP8` and the R1 Pro robot. A Codex harness is also available.

## What is included

| Component | Purpose |
| --- | --- |
| [`BEHAVIOR/`](https://github.com/BinceQu/RoboHarness/blob/HEAD/BEHAVIOR) | BEHAVIOR simulator and evaluator, pinned to v3.9.1 |
| [`interface/`](https://github.com/BinceQu/RoboHarness/blob/HEAD/interface) | RGB-D observations, robot control and interactive interface |
|…
