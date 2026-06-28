---
repo: "suzuki-shunsuke/ghalint"
name: "ghalint"
description: "GitHub Actions linter"
url: "https://github.com/suzuki-shunsuke/ghalint"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["cli", "github-actions", "linter", "oss", "security"]
stars: 248
forks: 7
openIssues: 16
closedIssues: 31
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2023-01-21T12:27:30Z"
lastCommitAt: "2026-06-28T02:01:12Z"
lastReleaseAt: "2023-11-17T04:15:19Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 92
undervaluedScore: 37
maintainers: ["renovate[bot]", "suzuki-shunsuke"]
openGraphImageUrl: "https://opengraph.githubassets.com/27ef320acfc51ac0241a4f9608316f2aaf7d75bc51ab9742524c77d5e5dd1fd7/suzuki-shunsuke/ghalint"
fundingLinks: ["GITHUB:https://github.com/suzuki-shunsuke"]
---

# ghalint

[Install](docs/install.md) | [Policies](#policies) | [How to use](#how-to-use) | [Configuration](#configuration)

GitHub Actions linter for security best practices.

```console
$ ghalint run
ERRO[0000] read a workflow file                          error="parse a workflow file as YAML: yaml: line 10: could not find expected ':'" program=ghalint version= workflow_file_path=.github/workflows/release.yaml
ERRO[0000] github.token should not be set to workflow's env  env_name=GITHUB_TOKEN policy_name=workflow_secrets program=ghalint version= workflow_file_path=.github/workflows/test.yaml
ERRO[0000] secret should not be set to workflow's env    env_name=DATADOG_API_KEY policy_name=workflow_secrets program=ghalint version= workflow_file_path=.github/workflows/test.yaml
```

ghalint is a command line tool to check GitHub Actions Workflows and action.yaml for security policy compliance.

## :bulb: We've ported ghalint to lintnet module

- https://lintnet.github.io/
- https://github.com/lintnet-modules/ghalint

lintnet is a general purpose linter powered by Jsonnet.
We've ported ghalint to [the lintnet module](https://github.com/lintnet-modules/ghalint), so you can migrate ghalint…
