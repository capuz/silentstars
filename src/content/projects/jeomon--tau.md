---
repo: "Jeomon/Tau"
name: "Tau"
description: "Tau: self-extensible agent CLI with terminal UI, multi-provider LLM support, session management, and a plugin system, inspired by π."
readmeQualityOk: true
url: "https://github.com/Jeomon/Tau"
homepage: "https://github.com/Jeomon/Tau"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent", "cli", "llm", "multi-provider", "python"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-19T18:38:06Z"
lastCommitAt: "2026-07-11T05:57:38Z"
lastReleaseAt: "2026-06-29T15:00:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 67
maintainers: ["Jeomon"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ede3cf549aa17539619bdd37934f40f94a9f5dacdbee11306f83fce6aed375d/Jeomon/Tau"
---

<br>
  </a>
  </a>
  </a>
  <br>
  </a>
  </a>

</div>

<br>

Tau is a Python-based coding agent harness, heavily inspired by [Pi](https://github.com/earendil-works/pi) created by [Mario Zechner](https://github.com/badlogic). It combines an interactive terminal UI, multiple model providers, persistent sessions, tool execution, and an extension system in one package.

> **Note:** There are several coding-agent projects also named
> "Tau," including at least one that is itself a Python port of Pi. This
> project (`tau`, [Jeomon/Tau](https://github.com/Jeomon/Tau)) was built
> independently, taking inspiration only from the original
> [Pi](https://github.com/earendil-works/pi) project. No other "Tau" project,
> or any other Pi port, was referenced or used in its development.

</p>

## Quick start

Requires Python 3.12+.

```bash
pip install tau-coding-agent
export NVIDIA_API_KEY=nvapi-...
tau --provider nvidia
```

Then ask Tau to work in the current directory:

```text
Explain this repository, run its tests, and fix any failures.
```

**Other providers:** pass `--model <provider>/<model>` with the matching API
key set, e.g. `GOOGLE_API_KEY=... tau --model google/gemini-2.5-flash`.…
