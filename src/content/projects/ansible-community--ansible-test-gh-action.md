---
repo: "ansible-community/ansible-test-gh-action"
name: "ansible-test-gh-action"
description: "A composite GitHub Action encapsulating the GitHub Actions CI/CD workflows setup necessary for testing Ansible collection repositories on GitHub"
url: "https://github.com/ansible-community/ansible-test-gh-action"
homepage: "https://github.com/marketplace/actions/ansible-test"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ansible", "ansible-test", "github-action", "github-actions", "idiomatic-ansible", "idiomatic", "actions", "github", "hacktoberfest"]
stars: 28
forks: 17
openIssues: 11
closedIssues: 14
watchers: 3
contributors: 22
recentReleases: 0
createdAt: "2020-11-17T19:06:36Z"
lastCommitAt: "2026-06-23T06:43:10Z"
lastReleaseAt: "2022-08-16T10:46:51Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "community_hub", "fork_magnet"]
healthScore: 74
undervaluedScore: 49
maintainers: ["felixfontein", "webknjaz", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/313716561/bb79d600-293d-11eb-8d37-26dfaf7c32dd"
discussionCount: 23
---

# ansible-test-gh-action for setting up CI in Ansible Collection repositories

A composite GitHub Action encapsulating the GitHub Actions CI/CD workflows
setup necessary for testing Ansible collection repositories on GitHub.

## Usage

To use the action add the following step to your workflow file (e.g.
`.github/workflows/ansible-test.yml`)

```yaml
- name: Perform integration testing with ansible-test
  uses: ansible-community/ansible-test-gh-action@release/v1
  with:
    ansible-core-version: stable-2.14
    pre-test-cmd: echo This runs before the ansible-test invocation
    target-python-version: 3.11
    controller-python-version: auto
    testing-type: integration
    test-deps: ansible.netcommon
- name: Perform sanity testing with ansible-test
  uses: ansible-community/ansible-test-gh-action@release/v1
  with:
    ansible-core-version: stable-2.14
    testing-type: sanity
- name: Perform unit testing with ansible-test
  uses: ansible-community/ansible-test-gh-action@release/v1
  with:
    ansible-core-version: stable-2.14
    pre-test-cmd: echo This runs before the ansible-test invocation
    target-python-version: 3.11
    testing-type: units
    test-deps: >-…
