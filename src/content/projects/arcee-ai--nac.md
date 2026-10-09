---
repo: "arcee-ai/nac"
name: "nac"
description: "Give AI agents ambitious work without losing the plot. nac is an open-source harness for long-running tasks, using a central orchestrator, threads, and structured episodes to stay aligned with your intent."
readmeQualityOk: true
url: "https://github.com/arcee-ai/nac"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [71, 27]
topics: ["agent-harness", "agent-orchestration", "agent-skills", "agentic-workflows", "ai-agents", "developer-tools", "llm-agents", "long-running-agents", "mcp", "model-context-protocol"]
stars: 281
forks: 28
openIssues: 4
closedIssues: 44
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-03-28T04:02:01Z"
lastCommitAt: "2026-10-09T18:56:58Z"
lastReleaseAt: "2026-08-27T21:59:40Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 31
maintainers: ["allisoneer"]
openGraphImageUrl: "https://opengraph.githubassets.com/c80c45a4a9d992b592967ca1cd6d6c775557da68934daa611e6366f189a724b8/arcee-ai/nac"
---

nac is an open-source agent harness for longer, ambitious tasks — experiments, training runs, infrastructure, and prototyping that has to stay aligned with the original intent. It uses a thread-and-episode architecture inspired by [slate](https://randomlabs.ai/blog/slate): a central orchestrator plans and decomposes work but cannot execute commands or edit files; it only launches threads, which return episodes — structured summaries of what they accomplished. Also takes inspiration from [nanocode](https://github.com/1rgs/nanocode) and [pi](https://github.com/badlogic/pi-mono). For the technical write-up, see the [nac blog post](https://arcee.ai/blog/nac).

## Quickstart

**By Hand.** Install the latest stable release:

```sh
curl -fsSL https://raw.githubusercontent.com/arcee-ai/nac/main/scripts/install.sh | sh
```

The installer puts `nac-web` in `$HOME/.local/bin`. Add that directory to your `PATH` if needed, then start the dashboard from your project,

```sh
nac-web
```

and navigate to the interface in your browser (default: [http://127.0.0.1:3210](http://127.0.0.1:3210/)).

**By Agent.** Nac provides a portable onboarding skill and MCP integration; paste this into your chosen…
