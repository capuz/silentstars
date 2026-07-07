---
repo: "druide67/asiai"
name: "asiai"
description: "Multi-engine LLM benchmark & monitoring CLI for Apple Silicon"
readmeQualityOk: true
url: "https://github.com/druide67/asiai"
language: "Python"
languages: ["Python"]
languagePcts: [81]
topics: ["apple-silicon", "benchmark", "cli", "inference", "llm", "lm-studio", "mcp", "mlx", "monitoring", "ollama"]
stars: 10
forks: 1
openIssues: 6
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-28T16:50:25Z"
lastCommitAt: "2026-07-07T06:41:22Z"
lastReleaseAt: "2026-03-22T00:34:38Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 77
undervaluedScore: 36
maintainers: ["druide67", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1169414686/cbbcd0a3-d8e3-45f1-a7a6-d97fc30b3c33"
fundingLinks: ["GITHUB:https://github.com/druide67", "CUSTOM:https://asiai.dev"]
discussionCount: 1
---

</p>

<h1 align="center">asiai</h1>

  <strong>Apple Silicon AI</strong> — Multi-engine LLM benchmark & monitoring CLI
</p>

</p>

</p>

**asiai** compares inference engines side-by-side on your Mac. Load the same model on Ollama and LM Studio, run `asiai bench`, get the numbers. No guessing, no vibes — just tok/s, TTFT, power efficiency, and stability per engine.

Share your results with the community (`--share`), compare against other Apple Silicon users (`asiai compare`), and get smart engine recommendations (`asiai recommend`).

Born from the OpenClaw project, where we needed hard data to pick the fastest engine for multi-agent swarms on Mac Mini M4 Pro.

## Quick start

```bash
pipx install asiai        # Recommended: isolated install
```

Or via Homebrew:

```bash
brew tap druide67/tap
brew install asiai
```

Other options:

```bash
uvx asiai detect           # Run without installing (requires uv)
pip install asiai           # Standard pip install
```

Then benchmark and share:

```bash
asiai bench --quick --card --share    # Bench + shareable card in ~15 seconds
```

## Commands

### `asiai detect`

Auto-detect running inference engines across all known engine ports.

```
$…
