---
repo: "toiroakr/politty"
name: "politty"
description: "npm"
readmeQualityOk: true
url: "https://github.com/toiroakr/politty"
homepage: "https://www.npmjs.com/package/politty"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 9
closedIssues: 14
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-12-24T00:58:49Z"
lastCommitAt: "2026-10-13T10:59:18Z"
lastReleaseAt: "2026-03-02T06:20:40Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 63
maintainers: ["renovate[bot]", "toiroakr", "toiroakr-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/144e95b63b318f4210a7bd3e5f7e99ca9e3eb0fbdff7e5f8a102b53229ea1572/toiroakr/politty"
fundingLinks: ["GITHUB:https://github.com/toiroakr"]
---

# politty

**politty** is a lightweight, type-safe CLI framework for Node.js built on **Zod v4**.

From simple scripts to complex CLI tools with subcommands, validation, and auto-generated help, you can build them all with a developer-friendly API.

## Features

- **Zod Native**: Use Zod schemas directly for argument definition and validation
- **Type Safety**: Full TypeScript support with automatic type inference for parsed arguments
- **Flexible Argument Definition**: Support for positional arguments, flags, aliases, arrays, and environment variable fallbacks
- **Subcommands**: Build Git-style nested subcommands (with lazy loading and alias support)
- **Lifecycle Management**: Guaranteed `setup` → `run` → `cleanup` execution order
- **Signal Handling**: Proper SIGINT/SIGTERM handling with guaranteed cleanup execution
- **Auto Help Generation**: Automatically generate help text from definitions, plus a `--help-json` flag for structured (JSON) help
- **Interactive Prompts**: Prompt for missing arguments with pluggable adapters (clack, inquirer)
- **Discriminated Union**: Support for mutually exclusive argument sets
- **Skill Management**: Manage agent skills (SKILL.md) with…
