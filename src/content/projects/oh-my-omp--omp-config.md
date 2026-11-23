---
repo: "oh-my-omp/omp-config"
name: "omp-config"
description: "Versioned Oh My Pi configuration and plugin manifests"
readmeQualityOk: true
url: "https://github.com/oh-my-omp/omp-config"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agent-harness", "coding-agent", "llm", "oh-my-pi", "omp", "omp-config"]
stars: 16
forks: 4
openIssues: 5
closedIssues: 216
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-09-06T16:14:29Z"
lastCommitAt: "2026-11-23T10:17:49Z"
lastReleaseAt: "2026-11-18T23:19:44Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 56
maintainers: ["RiriAgent", "oh-my-omp-shared-sync[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/eeee5c0be1806f37a350343fa1ea23c13860b0e757ed702958ce30a5cfb3869f/oh-my-omp/omp-config"
---

# omp-config

English | [简体中文](https://github.com/oh-my-omp/omp-config/blob/HEAD/README.zh-CN.md)

- **Harness configuration**
  - `agent/config.yml` — Does: the machine harness config applied to `~/.omp/agent`: model-role labels (`modelTags`), subagent model bindings (`task.agentModelOverrides`), worktree isolation (`task.isolation`), the compaction method order, the `bashInterceptor` patterns that reroute shell commands to built-in tools, `edit.mode: hashline`, `retry.fallbackChains.web` and the other session settings. When: read by OMP on every start after the updater applies it. Example: `task.agentModelOverrides` binds `task:mid` to `commandcode/deepseek/deepseek-v4.1-flash:high`, `compaction.methodOrder` is `remote → soft → snapcompact → handoff → shake` with `asyncEnabled: false`, and an interceptor pattern sends `cat`/`head`/`tail` calls to `read` with the message "Use the `read` tool instead of cat/head/tail/less/more."
  - Model-role tags — Does: names the `/model` picker entries the extensions' helper roles bind to. When: resolved whenever an extension asks for its `@<extension>` role.
