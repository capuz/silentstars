---
repo: "sinrimin/harness-nexus"
name: "harness-nexus"
description: " Self-hosted management for your coding agents: configure MCP servers, skills and model settings once, deploy them to your own machines, and chat with your agents from the browser. "
readmeQualityOk: true
url: "https://github.com/sinrimin/harness-nexus"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 5
forks: 2
openIssues: 1
closedIssues: 18
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-21T07:56:35Z"
lastCommitAt: "2026-09-23T08:29:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 61
maintainers: ["sinrimin"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5a0fc26b04e146d84a9287f06eb924670a699608090006d3d564fa8953535b0/sinrimin/harness-nexus"
---

</p>

  <em>Self-hosted management for your coding agents: configure MCP servers,
  skills and model settings once, deploy them to your own machines, and chat
  with your agents from the browser.</em>
</p>

  English | <a href="README.zh-CN.md">简体中文</a>
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
</p>

If you run coding agents — Claude Code, Codex, DeepSeek, OpenCode, pi,
Hermes — the same MCP server and API key end up configured in every tool, on
every machine. Skills and hooks drift apart, and there is no single place to
see what is installed where. Harness Nexus is that place: a server and web UI
you host yourself, plus a lightweight client (`hnx`) on each machine that
does the local work.

## What you can do

- Register MCP servers once, with credentials stored encrypted; the tools
  are then served to your agents through one endpoint, or through a local
  stdio shim on each machine.
- Bundle skills, hooks, sub-agents, rules and MCP servers into a profile and
  deploy it to a machine as one job. Claude Code installs profiles through
  its own plugin marketplace; Codex, DeepSeek and Hermes through
  `hnx install`.
- Enroll a machine with `hnx enroll`, see what is installed on it, import it…
