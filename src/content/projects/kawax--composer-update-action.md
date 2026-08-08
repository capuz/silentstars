---
repo: "kawax/composer-update-action"
name: "composer-update-action"
description: "GitHub Actions"
readmeQualityOk: true
url: "https://github.com/kawax/composer-update-action"
language: "PHP"
languages: ["PHP"]
languagePcts: [96]
topics: ["composer", "github-actions", "php"]
stars: 16
forks: 9
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2020-03-07T08:38:45Z"
lastCommitAt: "2026-08-08T04:32:55Z"
lastReleaseAt: "2022-12-09T03:00:39Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 67
maintainers: ["kawax", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/edc204267d3c7d580dadca41b92d35c28c90e7e3554db5051071bb66fbbeb05f/kawax/composer-update-action"
---

# composer update action

`composer update` and create pull request.

## Reusable workflow version
https://github.com/kawax/composer-workflow

## Version
| ver    | PHP    |
|--------|--------|
| v1     | 7.4    |
| v2     | 8.0    |
| v3     | 8.1    |
| v4     | 8.2    |
| master | latest |

> **Note:** Currently only the master version is available. v5 and later will not be released. If you need to specify the PHP version, use "Reusable workflow version" instead.

## Usage

Create `.github/workflows/update.yml`

```yaml
name: composer update

on:
  schedule:
    - cron: '0 0 * * *' #UTC

jobs:
  composer_update_job:
    runs-on: ubuntu-latest
    name: composer update
    steps:
      - name: Checkout
        uses: actions/checkout@v6
      - name: composer update action
        uses: kawax/composer-update-action@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## env
- COMPOSER_PATH : Specify if using subdirectory. Where composer.json is located.
- GIT_NAME : git user name
- GIT_EMAIL : git email
- APP_SINGLE_BRANCH : If set, the new functionality is enabled.
- APP_SINGLE_BRANCH_POSTFIX : A postfix for the branch used for updates. Default value is…
