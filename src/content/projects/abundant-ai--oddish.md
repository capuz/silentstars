---
repo: "abundant-ai/oddish"
name: "oddish"
description: "Run Harbor tasks in the cloud"
url: "https://github.com/abundant-ai/oddish"
homepage: "https://oddish.app/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [74, 26]
topics: ["eval", "llm", "rl"]
stars: 12
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 21
recentReleases: 5
createdAt: "2026-02-02T04:31:29Z"
lastCommitAt: "2026-06-30T06:49:37Z"
lastReleaseAt: "2026-04-24T02:14:21Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 63
maintainers: ["stateofkate", "aman-abundant", "anushbmx"]
openGraphImageUrl: "https://opengraph.githubassets.com/11f6f6b970f68e50510ac1d063dc04d6e8912116301257fb2445b579d5d3be56/abundant-ai/oddish"
---

</a>
</p>

  </a>
  </a>
  </a>
</p>

# Oddish

> Run evals on [Harbor](https://github.com/laude-institute/harbor) tasks in the cloud.

Oddish extends Harbor with:

- Provider-aware queuing and automatic retries for LLM providers
- Real-time monitoring via dashboard or CLI
- Postgres-backed state and S3 storage for logs

Just replace `harbor run` with `oddish run`.

## Quick Start

### 1. Install

```bash
uv pip install oddish
```

#### Install latest development version

```bash
uv pip install "oddish @ git+https://github.com/abundant-ai/oddish.git#subdirectory=oddish"
```

### 2. Generate an API key [here](https://oddish.app/)

- API key generation is restricted during the beta. To request access, contact the [maintainer](https://github.com/RishiDesai).

```bash
export ODDISH_API_KEY="ok_..."
```

### 3. Submit a job

```bash
# Run a single agent
oddish run -d terminal-bench@2.0 -a codex -m gpt-5.5 --n-trials 3
```

```bash
# Or sweep multiple agents
oddish run -d terminal-bench@2.0 -c job.yaml
```

Example [job.yaml](assets/light-run.yaml)

### 4. Monitor Progress

```bash
oddish status
```

## Documentation

- [CLI docs](DOCS.md)
- [Core library](oddish/README.md)
- [Web…
