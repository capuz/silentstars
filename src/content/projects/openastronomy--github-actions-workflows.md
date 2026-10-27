---
repo: "OpenAstronomy/github-actions-workflows"
name: "github-actions-workflows"
description: "Reusable workflows for GitHub Actions"
readmeQualityOk: true
url: "https://github.com/OpenAstronomy/github-actions-workflows"
homepage: "https://github-actions-workflows.openastronomy.org"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 21
forks: 27
openIssues: 24
closedIssues: 83
watchers: 5
contributors: 18
recentReleases: 0
createdAt: "2022-02-24T14:17:59Z"
lastCommitAt: "2026-10-27T12:39:12Z"
lastReleaseAt: "2022-11-04T16:37:54Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 87
undervaluedScore: 69
maintainers: ["neutrinoceros", "Cadair", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/59888a973d7aedbb5c4312447023ff29000a974c92ee23f3f8aa839524ce05ab/OpenAstronomy/github-actions-workflows"
---

# github-actions-workflows

Reusable workflows for GitHub Actions.

- [Test a Python package using tox](#test-a-python-package-using-tox)
- [Build and publish a Python package](#build-and-publish-a-python-package)
- [Build and publish a pure Python package](#build-and-publish-a-pure-python-package)

**If you are a new contributor to OpenAstronomy or any of it's related organisations, this is not a good repository for your first contribution.**

## Test a Python package using tox

This workflow makes it easy to map tox environments to GitHub Actions jobs.
To use this template, your repository will need to have a `tox.ini` file.
[Read the workflow documentation.](https://github-actions-workflows.openastronomy.org/en/stable/tox.html)

```yaml
jobs:
  test:
    uses: OpenAstronomy/github-actions-workflows/.github/workflows/tox.yml@v2
    with:
      posargs: '-n 4'
      envs: |
        - linux: pep8
          pytest: false
        - macos: py310
        - windows: py39-docs
          libraries:
            choco:
              - graphviz
      coverage: 'codecov'
    secrets:
      CODECOV_TOKEN: ${{ secrets.CODECOV_TOKEN }}
```

## Build and publish a Python package

Build, test and…
