---
repo: "vincemakes/kiso"
name: "kiso"
description: "The durable runtime for AI agents: event-sourced sessions, approvals that persist across processes, exact resume after a crash. A 2,200-line TypeScript kernel, and kiso-code, the coding agent built on it."
readmeQualityOk: true
url: "https://github.com/vincemakes/kiso"
homepage: "https://kiso.work"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["agent-framework", "ai-agent", "anthropic", "cli", "coding-agent", "deepseek", "durable-execution", "event-sourcing", "llm", "openai"]
stars: 86
forks: 9
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-03T12:11:15Z"
lastCommitAt: "2026-11-02T11:36:03Z"
lastReleaseAt: "2026-09-21T15:33:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 41
maintainers: ["vincemakes"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed8ba3c1f1a6a38b51d9de74a42a742780b81793bb30bae3a41fbce718e1a665/vincemakes/kiso"
---

## Install

```bash
npm install -g @vincemakes/kiso-code
kiso
```

Node ≥ 22 on macOS or Linux. Or run it without installing: `npx @vincemakes/kiso-code`. The first run needs no key: kiso plays a scripted demo turn, so you see the shape before anything is spent, then asks you to connect a model.

```bash
kiso login deepseek      # or anthropic / openai / zai
kiso login chatgpt       # a ChatGPT subscription: a browser sign-in, no key
kiso login --endpoint https://gateway.example/v1   # a gateway: its key, sent to it alone
```

Keys never go in the config file. Profiles, effort levels, context windows and every other option: [docs/configuration.md](https://github.com/vincemakes/kiso/blob/HEAD/docs/configuration.md).

## kiso web

The same agent in the browser, on this machine: a local web app with a stream of each run, its changes and files beside it, and the history of every folder's work. It is its own package, beside the terminal's:

```bash
npm install -g @vincemakes/kiso-web
kiso web
```

`kiso web` starts the host and opens the page at `http://127.0.0.1:4317` (`--port <n>` for another, `--no-open` to print the address instead). **The host must be running for the page to…
