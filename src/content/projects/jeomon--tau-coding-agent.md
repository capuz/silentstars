---
repo: "Jeomon/Tau-Coding-Agent"
name: "Tau-Coding-Agent"
description: "Tau: self-extensible agent CLI with terminal UI, multi-provider LLM support, session management, and a plugin system, inspired by π."
readmeQualityOk: true
url: "https://github.com/Jeomon/Tau-Coding-Agent"
homepage: "https://pypi.org/project/tau-coding-agent/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent", "cli", "llm", "multi-provider", "python"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-19T18:38:06Z"
lastCommitAt: "2026-08-07T05:14:42Z"
lastReleaseAt: "2026-06-29T15:00:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 64
maintainers: ["Jeomon"]
openGraphImageUrl: "https://opengraph.githubassets.com/813316b757f2bbeecb1e706dcfb8646b1ab5c5959c31da3de097207d2c9ccd80/Jeomon/Tau-Coding-Agent"
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

Tau is a Python-based coding agent harness, inspired by [Pi](https://github.com/earendil-works/pi). It combines an interactive terminal UI, multiple model providers, persistent sessions, tool execution, and an extension system in one package.

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
key set, e.g. `GOOGLE_API_KEY=... tau --model google/gemini-2.5-flash`.

## Embed Tau

`Runtime` is a Python SDK for driving the agent from your own app, script, or pipeline — no terminal UI required:

```python
import asyncio
from pathlib import Path

from tau.runtime.service import Runtime
from tau.runtime.types import RuntimeConfig

async def main() -> None:
    config = RuntimeConfig(
        cwd=Path.cwd(),
        model_id="claude-sonnet-4-6",
        provider="anthropic",
        persist_session=False,
    )
    runtime = await…
