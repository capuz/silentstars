---
repo: "pukeko-robotics/gaunt-sloth"
name: "gaunt-sloth"
description: "Your DIY code assistant and stateless code reviewer."
readmeQualityOk: true
url: "https://github.com/pukeko-robotics/gaunt-sloth"
homepage: "https://gauntsloth.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai", "cli"]
stars: 13
forks: 8
openIssues: 1
closedIssues: 60
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2025-04-15T07:43:38Z"
lastCommitAt: "2026-07-23T06:15:48Z"
lastReleaseAt: "2025-05-16T04:58:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 80
maintainers: ["andruhon", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/966618770/52159760-bf4c-4071-86f8-23610db605be"
discussionCount: 6
---

# Gaunt Sloth

Gaunt Sloth is a command-line AI assistant for CI/CD workflows, code reviews, and DIY projects. It supports PR and diff reviews with requirements context, code and diff Q&A, interactive chat and coding sessions, and controlled automation through predefined tools and JSON or JavaScript configuration.

Based on [LangChain.js](https://github.com/langchain-ai/langchainjs)

[Documentation](https://gauntsloth.app/docs/) | [Official Site](https://gauntsloth.app/) | [NPM](https://www.npmjs.com/package/gaunt-sloth) | [GitHub](https://github.com/pukeko-robotics/gaunt-sloth)

## Why?

Gaunt Sloth's promise is that it is small, extendable, cross-platform and can itself be a dependency in your project.

The GSloth was initially built as a code review tool, fetching PR contents and Jira contents before feeding them to
the LLM, but we ourselves found many more use cases which we initially did not anticipate; for example,
we may have it as a dependency in an MCP project, allowing us to quickly spin it up to simulate or test some use cases.

The promise of Gaunt Sloth:

- **Minimum dependencies**. Ideally, we aim to only have CommanderJS and some packages from LangChainJS and…
