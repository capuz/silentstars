---
repo: "spences10/my-pi"
name: "my-pi"
description: "My Pi coding agent setup: secret redaction, LSP, searchable context, recall, telemetry, observability, and team mode. Toggle with /extensions."
readmeQualityOk: true
url: "https://github.com/spences10/my-pi"
homepage: "https://my-pi.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["cli", "coding-agent", "llm", "mcp", "pi", "typescript", "evals", "lsp", "pi-package", "sqlite"]
stars: 139
forks: 20
openIssues: 5
closedIssues: 214
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2026-04-11T21:23:11Z"
lastCommitAt: "2026-11-02T11:43:27Z"
lastReleaseAt: "2026-11-01T20:32:13Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 40
maintainers: ["spences10", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d40c906624702d473071963d824736542d1dd5c16b1624bbb96c456d0b417fd/spences10/my-pi"
---

# my-pi

`my-pi` is my [Pi](https://pi.dev): upstream Pi with my extensions
built in. Each extension is also published on its own.

## Use

```bash
pnpx --allow-build=@google/genai --allow-build=protobufjs my-pi@latest
```

Turn extensions on or off with `/extensions`. Or install single
packages into your own Pi:

```bash
pi install npm:@spences10/pi-lsp
```

MCP, codemode, tool search, skills, themes, sessions, and package
configuration are upstream Pi features. See the
[Pi docs](https://pi.dev).

## Packages

| Package                                                                            | Purpose                                                    |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [`my-pi`](https://github.com/spences10/my-pi/blob/HEAD/packages/my-pi/README.md)                                              | My Pi: upstream Pi with all of these built in              |
| [`@spences10/pi-coding-preferences`](https://github.com/spences10/my-pi/blob/HEAD/packages/pi-coding-preferences/README.md)   | Configurable coding-workflow guardrails                    |
|…
