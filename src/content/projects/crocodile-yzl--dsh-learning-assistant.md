---
repo: "crocodile-yzl/dsh-learning-assistant"
name: "dsh-learning-assistant"
description: "Learning Assistant (Learning Assistant): DeepSeek Harness (dsh) plugin — the model answers as usual, and the plugin supplies explanations for technical terms it left unexplained: a knowledge tree in the right sidebar + highlighting in the body text + one-sentence explanations and learning paths."
originalDescription: "学习助手 (Learning Assistant):DeepSeek Harness (dsh) 插件——模型照常回答,插件补它没解释的专业词:右侧栏知识树 + 正文高亮 + 一句话解释与学习路径。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/crocodile-yzl/dsh-learning-assistant"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 14
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-14T02:59:11Z"
lastCommitAt: "2026-11-27T12:44:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 66
undervaluedScore: 18
maintainers: ["crocodile-yzl"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc795d9ae447fed2dce9323ce7b4cf88dced62e8b46651eb4582e8785b9709eb/crocodile-yzl/dsh-learning-assistant"
---

# dsh-learning-assistant

Learning Assistant: supplements explanations of technical terms in dsh answers, and provides term cards, a knowledge tree, body-text highlighting, and selection-based explanations in the right sidebar.

## Features

- After an answer finishes, automatically supplements technical terms that were not explained; the model can also record them proactively.
- Select text in the body to generate an explanation and a learning path.
- The right sidebar provides a "Terms / Knowledge tree" view, with filtering by the current conversation.
- Recorded terms are highlighted in the body; clicking a highlight locates its card, and double-clicking a card locates the body text.
- Clicking a concept in a learning path fills it into the chat input to continue asking.
- Supports adjusting the user level and explanation preference; terms are remembered across conversations.

## Requirements

- Verified: **dsh 0.2.2-rc.1, Node.js 22 / 24**. Other dsh versions are not yet verified.
- Installation invokes `pnpm` from dsh, so make sure `pnpm` is on the PATH of the dsh process.
- Installing from GitHub also requires `git` on the PATH.

The plugin neither bundles nor installs dsh.
