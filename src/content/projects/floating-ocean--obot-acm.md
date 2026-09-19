---
repo: "Floating-Ocean/OBot-ACM"
name: "OBot-ACM"
description: "Source code of the qqbot OBot's ACM, a.k.a. O-bao's AC Dream."
originalDescription: "Source code of the qqbot OBot's ACM a.k.a. O宝的AC梦."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Floating-Ocean/OBot-ACM"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["bot", "competitive-programming", "entertainment", "qqbot", "tools", "atcoder", "codeforces", "emoticon", "nowcoder"]
stars: 15
forks: 2
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2023-11-04T17:13:03Z"
lastCommitAt: "2026-09-19T01:34:59Z"
lastReleaseAt: "2025-06-21T16:05:21Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 68
maintainers: ["Floating-Ocean", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c8989fbb9aecc8bdb0cb32d92dc7b019a3c4f1216ccefb4de5d30dbc49cb429/Floating-Ocean/OBot-ACM"
---

<br>
<h1 align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="/img/obot_logo_inv.png">
    <source media="(prefers-color-scheme: light)" srcset="/img/obot_logo.png">
  </picture>
</h1>
  <strong>A.k.a. O-bao's AC Dream · Real-time problem-solving record query for algorithmic competition platforms and more features</strong><br>
</div><br>

</div>
</div><br>

## Before You Start

Before running the bot, please copy **[`config_example.json`](https://github.com/Floating-Ocean/OBot-ACM/blob/HEAD/config_example.json)** to **`config.json`** and fill in the relevant fields according to the prompts in the file.

> [!CAUTION]
> 
> The project depends on submodules, which are referenced in the project as `git submodule`. Please add the `--recursive` parameter when cloning.

### Deployment

Before deploying, ensure that the system has installed the [`uv`](https://docs.astral.sh/uv/) environment.

```bash
git clone https://github.com/Floating-Ocean/OBot-ACM.git --recursive
cd OBot-ACM
uv sync --frozen
```

### Running

The project implements a simple daemon process that can be used as needed.

```bash
python main.py     # with daemon
python entry.py    # direct…
