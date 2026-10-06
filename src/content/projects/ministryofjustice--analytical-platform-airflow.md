---
repo: "ministryofjustice/analytical-platform-airflow"
name: "analytical-platform-airflow"
description: "Analytical Platform Airflow • This repository is defined and managed in Terraform"
readmeQualityOk: true
url: "https://github.com/ministryofjustice/analytical-platform-airflow"
homepage: "https://user-guidance.analytical-platform.service.justice.gov.uk/services/airflow"
language: "Python"
languages: ["Python"]
languagePcts: [76]
topics: ["analytical-platform", "ministryofjustice"]
stars: 5
forks: 5
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 117
recentReleases: 0
createdAt: "2024-10-24T17:33:48Z"
lastCommitAt: "2026-10-06T10:41:48Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 81
maintainers: ["MJCT-MOJ", "AntonyJScott", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9152c4e52fe7ab7370fe1b05d9f13678bb5a9c5a305635d47a2bce1dfe8f6640/ministryofjustice/analytical-platform-airflow"
---

# Analytical Platform Airflow

Please refer to our [User Guidance](https://user-guidance.analytical-platform.service.justice.gov.uk/services/airflow) for information on how to use Analytical Platform Airflow.

Commit signature verification is enabled on this repository. To set this up follow the instructions [on GitHub](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification#ssh-commit-signature-verification).

## 🧪 Running Workflow Scripts Locally

This project contains utility scripts under the [`scripts`](https://github.com/ministryofjustice/analytical-platform-airflow/blob/HEAD/scripts/) directory that support DAG development and validation.

These scripts import internal modules from the [`airflow/analytical_platform`](https://github.com/ministryofjustice/analytical-platform-airflow/blob/HEAD/airflow/analytical_platform/) package. To ensure Python can resolve these imports, you must set the `PYTHONPATH` environment variable when running the scripts locally.

### ✅ Quick Start

> [!NOTE]
> If you use the provided development container, it automatically handles package installation and setting `PYTHONPATH`.

1.…
