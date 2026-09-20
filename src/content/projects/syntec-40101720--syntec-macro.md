---
repo: "SYNTEC-40101720/syntec-macro"
name: "syntec-macro"
description: "VS Code Extension: Provides syntax highlighting, intelligent completion, hover documentation, G/M code navigation, and real-time syntax checking for SYNTEC CNC macro programs"
originalDescription: "VS Code 扩展：为新代（Syntec）CNC 宏程序提供语法高亮、智能补全、悬停文档、G/M代码跳转、实时语法检查"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/SYNTEC-40101720/syntec-macro"
language: "JavaScript"
languages: ["JavaScript", "Rust"]
languagePcts: [65, 30]
topics: ["cnc", "macro", "syntax-highlighting", "syntec", "vscode-extension"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-04-15T12:57:41Z"
lastCommitAt: "2026-09-20T08:47:14Z"
lastReleaseAt: "2026-06-22T23:28:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 51
maintainers: ["SYNTEC-40101720"]
openGraphImageUrl: "https://opengraph.githubassets.com/e190f1f4c2b198860cd6e096e224815f396e62be4d7096912be4bad639994eb7/SYNTEC-40101720/syntec-macro"
---

# SYNTEC Macro Program VS Code Extension

Provides syntax highlighting, completion, hover documentation, code navigation, and real-time diagnostics for SYNTEC macro programs (syntec-macro).

## Quick Start

Open or create one of the following files:

- G/O programs without extension, for example `G1000`, `O8000`
- Machining files such as `.nc`, `.cnc`, `.tap`, `.prt`, `.mpf`, `.ptp`
- Files with `%@MACRO` on the first line will be automatically recognized as MACRO format

Example:

```macro
%@MACRO
#1 := 100;
#2 := 200;

IF #1 < #2 THEN
    #3 := #2 - #1;
    MSG("Result ready");
END_IF;
```

If the language is not automatically recognized, click the language mode in the bottom-right corner and select **SYNTEC Macro Program**.

## Common Features

| Feature | Usage |
| --- | --- |
| Completion | Type functions, keywords, G/M codes, or `#`, or press `Ctrl+Space` |
| Hover Documentation | Move your mouse over functions, G/M codes, or keywords |
| Go to Definition | `Ctrl+Click` to jump to N labels, G65/G66, M98/M198 targets |
| Find References | Press `Shift+F12` on static call targets |
| Symbol Navigation | `Ctrl+Shift+O` to view N labels and macro entry points |
| Workspace…
