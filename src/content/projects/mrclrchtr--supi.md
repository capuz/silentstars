---
repo: "mrclrchtr/supi"
name: "supi"
description: "Pi coding agent extensions with code intelligence (LSP + Tree-sitter AST), semantic refactoring, code review, web/Context7 docs, and ask-user forms."
readmeQualityOk: true
url: "https://github.com/mrclrchtr/supi"
homepage: "https://pi.dev/packages?name=%40mrclrchtr"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["pi-extension", "pi-package", "ai-coding-agent", "code-intelligence", "code-review", "coding-agent", "developer-tools", "language-server-protocol", "lsp", "pi-coding-agent"]
stars: 103
forks: 7
openIssues: 21
closedIssues: 115
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-13T19:49:58Z"
lastCommitAt: "2026-10-29T14:06:52Z"
lastReleaseAt: "2026-05-17T05:09:26Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 35
maintainers: ["mrclrchtr", "renovate[bot]", "mrclrchtr-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2306b6218016f2541947ac6df28f93578fc73fe2d5fc105871e43471ac66b903/mrclrchtr/supi"
discussionCount: 0
---

# SuPi — Extension Stack for the Pi Coding Agent

SuPi (short for **Super Pi**) is an open-source TypeScript extension stack for the [Pi coding agent](https://github.com/earendil-works/pi). It adds LSP and Tree-sitter code intelligence, semantic refactoring, parallel code review, web and Context7 documentation access, structured ask-user forms, scoped skill controls, quick skill input, and context/session observability.

Install the recommended stack or pick only the packages you need. You keep prompting Pi normally; SuPi gives the agent additional tools and context it can use directly.

**If SuPi helps you, [give the repository a star on GitHub](https://github.com/mrclrchtr/supi/stargazers). Stars help other Pi users find the project.**

> SuPi is pre-release. Packages marked beta are the fastest-moving parts of the stack.

## The key difference: LSP + AST for the agent

Most coding agents can read files and search text. [`@mrclrchtr/supi-code-intelligence`](https://github.com/mrclrchtr/supi/blob/HEAD/packages/supi-code-intelligence/README.md) gives Pi direct, model-callable access to two complementary sources of code intelligence:

- **Language servers (LSP)** provide types,…
