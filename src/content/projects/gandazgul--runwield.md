---
repo: "gandazgul/runwield"
name: "runwield"
description: "RunWield is an anti-slop, human in the loop software engineering harness. It allows you to wield LLMs as precision tools that augment your capabilities."
readmeQualityOk: true
url: "https://github.com/gandazgul/runwield"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [54, 44]
topics: ["agentic-ai", "ai", "harness-ai", "human-in-the-loop", "llm", "memory-system", "plans", "software-engineering"]
stars: 21
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2026-04-26T00:12:47Z"
lastCommitAt: "2026-08-24T04:22:12Z"
lastReleaseAt: "2026-06-16T16:05:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 46
maintainers: ["gandazgul"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6aba755e496d37487e143d56e84555041f0af1315915d657901f3b4e04edae7/gandazgul/runwield"
---

# RunWield

**Review what the AI plans to do before it touches your code. Then prove it did it.**

RunWield is a coding harness that makes the agent slow down at the moments that matter. It sorts your request by risk,
writes a plan you actually review when the blast radius is real, executes it through specialized roles, and refuses to
call the work done until CI and a separate reviewer agree it matches the plan you approved.

```text
ideate -> plan -> execute -> record -> use records to plan better
```

[Install](#install-in-30-seconds) · [How it works](#the-problem) · [Documentation](https://github.com/gandazgul/runwield/blob/HEAD/docs/index.md)

---

## Install in 30 seconds

```bash
curl -fsSL https://raw.githubusercontent.com/gandazgul/runwield/main/install.sh | bash
```

Then, from your project root:

```bash
wld
```

First run asks you to connect a model — a subscription login or your own API key. RunWield works with any provider. Then
run `/init` once to let it explore the repo and build project context, and just say what you want:

```text
> fix the failing parser test
```

macOS and Linux, installs to `~/.local/bin`, no root required.

For full setup: model provider auth,…
