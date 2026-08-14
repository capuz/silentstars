---
repo: "baalimago/clai"
name: "clai"
description: "Command line artificial intelligence - Context engineering for terminal powerusers"
readmeQualityOk: true
url: "https://github.com/baalimago/clai"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["ai", "cli", "go", "golang-tools", "llm", "context-feeder"]
stars: 146
forks: 10
openIssues: 0
closedIssues: 8
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2024-03-03T12:36:02Z"
lastCommitAt: "2026-08-14T05:16:21Z"
lastReleaseAt: "2024-06-17T16:42:02Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 44
maintainers: ["baalimago", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/75d0c500e6f2f33bcfc65b88f251d718538794f5f53d17c3224a1d001f0fc788/baalimago/clai"
---

# Command Line Artificial Intelligence

Test coverage: 71.805% 😌👏

<hr>
  <p><code>clai</code> (<i>/klaɪ/</i>, like "cli" in "<b>cli</b>mate") is a command line context-feeder for any ai task.</p>
</div>

</div>

## Get started

Installing:

```bash
curl -fsSL https://raw.githubusercontent.com/baalimago/clai/main/setup.sh | sh
```

You can also install via go:

```bash
go install github.com/baalimago/clai@latest
```

Then run:

```bash
clai help | clai query Please give a concise explanation of clai
```

Either look at `clai help` or the [examples](https://github.com/baalimago/clai/blob/HEAD/EXAMPLES.md) for how to use `clai`.
If you have time, you can also check out [this blogpost](https://lorentz.app/blog-item.html?id=clai) for a slightly more structured introduction on how to use Clai efficiently.

Install [Glow](https://github.com/charmbracelet/glow) for formatted markdown output when querying text responses.

## Features

</div>

- **[Shell context injection](https://github.com/baalimago/clai/blob/HEAD/architecture/shell-context.md)** - Inject shell context into the system prompt via configurable templates.
- **[Seamless conversation…
