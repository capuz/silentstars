---
repo: "ScriptedAlchemy/agent-bundle"
name: "agent-bundle"
description: "Build portable AI-agent plugin bundles for Codex, Claude Code, and Agent Plugins"
readmeQualityOk: true
url: "https://github.com/ScriptedAlchemy/agent-bundle"
homepage: "https://scriptedalchemy.github.io/agent-bundle/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 7
forks: 0
openIssues: 18
closedIssues: 65
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-13T23:42:01Z"
lastCommitAt: "2026-09-03T08:13:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 53
maintainers: ["ScriptedAlchemy", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f9d70a884061419d5ff4ab61f40f4fe9f356844d3372aac8ce17678adb0764d/ScriptedAlchemy/agent-bundle"
---

# agent-bundle

agent-bundle compiles an agent plugin — skills, hooks, MCP servers, and scripts, described by one typed config — into installable artifacts for Claude Code, Codex, and Cursor, plus a portable layout. You write the plugin once; the compiler emits each host's manifests and wrappers.

Requires Node.js 22.19 or later.

## Install

Nothing is published to npm yet (the `agent-bundle` name on npm currently belongs to an unrelated project). Until the first release, install the preview tarballs CI publishes for every commit and pull request:

```sh
npm i -D https://pkg.pr.new/ScriptedAlchemy/agent-bundle/agent-bundle@<sha-or-pr>
```

Use a PR number or the SHA of a commit whose package-preview run succeeded (every green `main` commit has one). See [Preview packages](https://github.com/ScriptedAlchemy/agent-bundle/blob/HEAD/docs/preview-packages.md) for pinning and details.

## Quick start

The fastest start is the scaffolder — it prompts for a name, a template
(`minimal`, `mcp-server`, or `cli-tool`), and the host targets, then emits a
project that already passes its own `check`:

```sh
npx https://pkg.pr.new/ScriptedAlchemy/agent-bundle/create-agent-bundle@<sha-or-pr>…
