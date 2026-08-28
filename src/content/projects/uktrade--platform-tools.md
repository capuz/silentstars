---
repo: "uktrade/platform-tools"
name: "platform-tools"
description: "Tooling to assist with setting up and managing applications on DBT Platform"
readmeQualityOk: true
url: "https://github.com/uktrade/platform-tools"
language: "Python"
languages: ["Python", "HCL"]
languagePcts: [60, 39]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 15
contributors: 219
recentReleases: 0
createdAt: "2022-12-16T11:13:32Z"
lastCommitAt: "2026-08-28T14:33:55Z"
lastReleaseAt: "2024-05-02T09:02:02Z"
status: "thriving"
tags: ["hidden_gem", "community_watch"]
healthScore: 88
undervaluedScore: 58
maintainers: ["dependabot[bot]", "dragos441", "a-gleeson"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e3d8dcac34af6844daa4ab86a1634e7e98f15d7e76eb6c877c8838806305266/uktrade/platform-tools"
---

# Platform Tools

## Using the dbt-platform-helper package

See [the package documentation](https://github.com/uktrade/platform-tools/blob/main/dbt_platform_helper/README.md) for detail on what the package is and how to use it.

If you are migrating a service to DBT PaaS, [GOV.UK PaaS to DBT PaaS Migration](https://github.com/uktrade/platform-documentation/blob/main/docs/playbooks/migrating-from-govuk-paas/migration-guide.md) will also be relevant for you.

### Supported Python versions

3.10, 3.11, 3.12 and 3.13.

## Working on the dbt-platform-helper package

### Getting started

1. Clone the repository:

   ```
   git clone https://github.com/uktrade/platform-tools.git && cd platform-tools
   ```

2. Install dependencies:

    ```shell
    pip install poetry && poetry install
    ```
   
3. Install Trufflehog for the pre-commit hook:

    ```shell
    # Installation on Mac
    
    brew install trufflehog
    ```

   Alternative installation methods [here](https://github.com/trufflesecurity/trufflehog)

4. Install pre-commit hook:

    ```shell
    poetry run pre-commit install
    ```

5. (Optional) Enable more detailed Debug logging
   ```shell
   export DEBUG=True
   ```
###…
