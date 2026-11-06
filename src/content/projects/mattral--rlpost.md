---
repo: "Mattral/rlpost"
name: "rlpost"
description: "LLM post-training from scratch: SFT, reward model, PPO, DPO; parity-tested against TRL"
readmeQualityOk: true
url: "https://github.com/Mattral/rlpost"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["dpo", "large-language-models", "llm-alignment", "machine-learning", "policy-optimization", "ppo", "reinforcement-learning-from-human-feedback", "reward-modeling", "rlhf"]
stars: 28
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-02-02T14:05:57Z"
lastCommitAt: "2026-11-06T02:44:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 54
maintainers: ["Mattral", "SakaguchiAngosan", "Samuel-Taylor-Homes"]
openGraphImageUrl: "https://opengraph.githubassets.com/28071febbebc6f4f83036e12beba0d811ce36d7ce8ac931ae4e88cae496268cc/Mattral/rlpost"
---

# rlpost

Code for language-model post-training: supervised fine-tuning, a reward model, PPO, and DPO.

The repository was formerly [Improving-LLM-Models-with-RLHF-PPO-DPO](https://github.com/Mattral/Improving-LLM-Models-with-RLHF-PPO-DPO).

## Measured scope

Unit-tested on CPU. No GPU benchmark yet.

Check on 2026-10-30, Python 3.12, torch 2.15.0+cpu, `PYTHONPATH=src`:

- `pytest -q -m "not slow and not gpu"` collects 80 tests: 69 passed, 11 failed.
- The 11 failures are DPO and PPO tests. A judgment on each one is in [ROADMAP.md](https://github.com/Mattral/rlpost/blob/HEAD/ROADMAP.md) under S0.6. They are not marked xfail.
- `ruff check .` and `ruff format --check .` pass under the config in `pyproject.toml`.

Recount after you change tests:

```bash
PYTHONPATH=src pytest --collect-only -q
```

There is no coverage number in this README. A green coverage run has not been recorded.

## What is in the tree

| Path | What it is |
| --- | --- |
| `src/rlpost/config.py` | Pydantic configs. `TrainingConfig.toy_mode()` and `from_yaml`. Tested in `tests/test_config.py`. |
| `src/rlpost/ops.py` | `gather_logprobs`: logits at position `t` score token `t+1`. Shape `[B, T, V]` in, `[B,…
