---
repo: "nbprint/lerna"
name: "lerna"
description: "lerna is a rewrite of hydra in rust, including plugins and extensions"
readmeQualityOk: true
url: "https://github.com/nbprint/lerna"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [65, 35]
stars: 25
forks: 2
openIssues: 2
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2025-09-19T20:32:04Z"
lastCommitAt: "2026-11-09T03:30:54Z"
lastReleaseAt: "2026-09-03T00:56:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 59
maintainers: ["timkpaine", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf059eaa9536ad20ca9e378bfc920d9fb70fa8a88085aaab1842f1e78bbcd1fb/nbprint/lerna"
---

# Lerna

A high-performance configuration framework for Python applications, built with Rust.

Lerna is a rewrite of Facebook's [Hydra](https://github.com/facebookresearch/hydra) configuration framework. It provides the same powerful API with significantly improved performance through a Rust core.

## Features

- **Same Hydra API**: Drop-in replacement for Hydra - just change `import hydra` to `import lerna`
- **Rust-powered**: Core config parsing and loading implemented in Rust via PyO3
- **Full Compatibility**: 2,854 tests passing, nearly 100% Hydra compatibility
- **No ANTLR**: Override parser completely rewritten in Rust (~2,400 LOC removed)
- **Zero Warnings**: Clean Rust codebase with no compiler warnings
- **Extension Points**: Rust traits for Callback, ConfigSource, Launcher, and Sweeper with Python interoperability

## Installation

```bash
pip install lerna
```

## Quick Start

```python
import lerna
from omegaconf import DictConfig

@lerna.main(config_path="conf", config_name="config")
def my_app(cfg: DictConfig) -> None:
    print(cfg.db.driver)
    print(cfg.db.user)

if __name__ == "__main__":
    my_app()
```

## Migration from Hydra

Lerna is a **drop-in…
