---
repo: "david-crespo/llm-cli"
name: "llm-cli"
description: "A simple CLI for using LLM APIs"
readmeQualityOk: true
url: "https://github.com/david-crespo/llm-cli"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 17
forks: 3
openIssues: 3
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-04-19T01:49:21Z"
lastCommitAt: "2026-07-09T20:44:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 50
maintainers: ["david-crespo"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e0e4bc85c8c702d4e1e5de5c1538dbfbb879d8af6ff9242c2f78c4530f9b128/david-crespo/llm-cli"
---

# llm-cli

A simple but full-featured CLI powered by Deno for chatting with LLMs.

Thanks to [Justin Bennett](https://github.com/zephraph) for the
[script](https://github.com/zephraph/deno.run/blob/0972d0cd3d8f050cb11c3a6d1c1c201608d100a9/chat-gpt.ts)
that inspired this.

## Features

### Supports a bunch of models

And it's easy to add more.

### Beautiful output powered by markdown

### Continue chat with replies

### Read input from stdin

### Upload chat to GitHub Gist for sharing or permanent storage

https://gist.github.com/david-crespo/a2bf06be5db310db967b2e35f6140da2

### Limitations

No vision, no streaming responses (yet).

## Setup

### API keys

Set any or all of these, depending on which models you want to use. It is often convenient
to put them in a `.env` file like below and call `source .env`.

```sh
export OPENAI_API_KEY=abc-123
export ANTHROPIC_API_KEY=def-456
export GEMINI_API_KEY=ghi-789
```

The script does not automatically pick up a `.env` file; the variables need to be set in the
environment.

### Dependencies

- [Deno](https://docs.deno.com/runtime/manual) (essential)
- [`gh`](https://cli.github.com/) (GitHub CLI, optional)
  - Only needed if you want to…
