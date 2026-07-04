---
repo: "vieval-dev/vieval"
name: "vieval"
description: "🧪💥 Evaluation framework based on Vitest, the testing framework you familiar with, for agents, models, and more."
url: "https://github.com/vieval-dev/vieval"
homepage: "https://vieval.dev/en/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 17
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-15T15:52:17Z"
lastCommitAt: "2026-07-04T19:18:59Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 77
undervaluedScore: 38
maintainers: ["nekomeowww"]
openGraphImageUrl: "https://opengraph.githubassets.com/98ff9228127c317b076ebd7a792463560a2efaa6e92f323073dada4d70f7eef5/vieval-dev/vieval"
fundingLinks: ["GITHUB:https://github.com/nekomeowww", "GITHUB:https://github.com/luoling8192", "GITHUB:https://github.com/LemonNekoGH", "GITHUB:https://github.com/sumimakito", "GITHUB:https://github.com/kwaa", "KO_FI:https://ko-fi.com/proj_airi", "OPEN_COLLECTIVE:https://opencollective.com/proj-airi", "PATREON:https://patreon.com/proj_airi"]
---

# Vieval

Vitest-style evaluation framework for agents, models, and task pipelines.

`vieval` keeps eval authoring close to product code while giving you repeatable task discovery, matrix scheduling, live CLI output, JSON artifacts, and report commands.

## Why Vieval

- Familiar eval files with `describeTask`, `caseOf`, `casesFromInputs`, and `expect`.
- Project, eval, and task matrix layers for model, scenario, rubric, and dataset variants.
- Built-in chat-model registration through `ChatModels`, plus custom project executors for non-chat workloads.
- Human-readable terminal output and machine-readable JSON/report artifacts from the same CLI.
- Importable runner, scheduler, assertion, config, plugin, and testing entrypoints for advanced integration.

## Quick Start

### Step 1. Create a config

```ts
// vieval.config.ts
import { cwd } from 'node:process'

import { defineConfig, loadEnv, requiredEnvFrom } from 'vieval'
import { chatModelFrom, ChatModels } from 'vieval/plugins/chat-models'

export default defineConfig({
  env: loadEnv('test', cwd(), ''),
  plugins: [
    ChatModels({
      models: [
        chatModelFrom({
          aliases: ['agent-mini', 'judge-mini'],…
