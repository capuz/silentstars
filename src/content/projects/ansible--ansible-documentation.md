---
repo: "ansible/ansible-documentation"
name: "ansible-documentation"
description: "Ansible community documentation"
readmeQualityOk: true
url: "https://github.com/ansible/ansible-documentation"
homepage: "https://docs.ansible.com/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["ansible", "documentation"]
stars: 181
forks: 851
openIssues: 79
closedIssues: 267
watchers: 19
contributors: 5341
recentReleases: 0
createdAt: "2023-06-08T23:05:38Z"
lastCommitAt: "2026-09-14T09:12:46Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 94
undervaluedScore: 50
maintainers: ["ansible-documentation-bot[bot]", "oraNod", "Akasurde"]
openGraphImageUrl: "https://opengraph.githubassets.com/6df55ae3b86876cc94311edb3a23cad362beae150f2597c864002c866f4e22e3/ansible/ansible-documentation"
---

# ansible-documentation

This repository holds the ReStructuredText (RST) source, and other files, for user documentation related to the Ansible package and Ansible Core.

> Documentation for modules and plugins that are officially supported by the Ansible Core engineering team is available in the [`ansible/ansible`](https://github.com/ansible/ansible) repository.

## Verifying your pull request

We welcome all contributions to Ansible community documentation.
If you plan to submit a pull request with changes, you should [verify your PR](https://docs.ansible.com/ansible/latest/community/documentation_contributions.html#verifying-your-documentation-pr) to ensure it conforms with style guidelines and can build successfully.

### Setting up nox

This project includes a `nox` configuration to automate tests, checks, and other functions.
You can use these automated tests to help you verify changes before you submit a PR.
You can manually
[set up your environment](https://docs.ansible.com/ansible/latest/community/documentation_contributions.html#setting-up-your-environment-to-build-documentation-locally)
if you prefer, but `nox` is more straightforward and create an isolated environment…
