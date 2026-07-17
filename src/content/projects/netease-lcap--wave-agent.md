---
repo: "netease-lcap/wave-agent"
name: "wave-agent"
description: "Wave Agent Code and SDK"
readmeQualityOk: true
url: "https://github.com/netease-lcap/wave-agent"
homepage: "https://netease-lcap.github.io/wave-agent/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 29
forks: 4
openIssues: 0
closedIssues: 29
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2025-10-27T02:28:19Z"
lastCommitAt: "2026-07-17T05:59:53Z"
lastReleaseAt: "2026-07-16T05:07:57Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 59
maintainers: ["lewis617"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b7d2e9aa5d9276a290e6a07012950979e855b4ce8f8ecd423f37c149b13315f/netease-lcap/wave-agent"
discussionCount: 1
---

# Wave Agent

A monorepo containing AI-powered development tools built with Node.js and TypeScript.

## Project Structure

This is a monorepo that contains multiple packages working together to provide AI-assisted development tools through a command-line interface:

### 📦 Packages

#### [`packages/code`](https://github.com/netease-lcap/wave-agent/blob/HEAD/packages/code)

CLI-based code assistant with interactive terminal interface built with React Ink. Similar to **Claude Code**.

- **Main Command**: `wave-code` or `wave` (short alias)
- **Technology**: Node.js, TypeScript, React Ink

#### [`packages/agent-sdk`](https://github.com/netease-lcap/wave-agent/blob/HEAD/packages/agent-sdk)

Core Node.js SDK used by the CLI frontend. Similar to **Claude Agent SDK**.

- **Technology**: Node.js, TypeScript

### 📄 Specifications

Detailed feature specifications and design documents can be found in the [`specs/`](https://github.com/netease-lcap/wave-agent/blob/HEAD/specs) directory.

## Development

### Prerequisites

- Node.js 22+
- pnpm (preferred package manager)

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd wave-agent

# Install dependencies for all packages…
