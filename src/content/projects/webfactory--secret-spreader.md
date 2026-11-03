---
repo: "webfactory/secret-spreader"
name: "secret-spreader"
description: "A tool to distribute GitHub Action secrets to a list of repositories"
readmeQualityOk: true
url: "https://github.com/webfactory/secret-spreader"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
stars: 37
forks: 2
openIssues: 0
closedIssues: 3
watchers: 4
contributors: 9
recentReleases: 0
createdAt: "2020-01-29T22:46:16Z"
lastCommitAt: "2026-11-03T11:14:48Z"
lastReleaseAt: "2020-02-04T12:50:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 75
undervaluedScore: 31
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ac3f710dbcafe7792811807703319537ce47cf7be467deb64a463c8c1610f48/webfactory/secret-spreader"
---

# `secret-spreader` for GitHub Actions

With this tool, you can keep a list of secret values in a Git repository. These secret values can then be distributed
as [GitHub Actions Secrets](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)
to a list of GitHub repositories, maintained in a config file.

**Attention** *This tool is in a very early development phase. Significant changes to usage, applicability, configuration syntax etc. may be possible and can happen on short or without prior notice.*

**Update 2020-05-14** GitHub [added secrets at the organization level](https://github.blog/changelog/2020-05-14-organization-secrets/) as a native feature for Action. You might be better off working with that officially supported feature instead of using this tool. 

## Why?

When using GitHub Actions to build, test or deploy your software, you will probably need to have access tokens, SSH deployment keys or other secret data available. Chances are that some of these secrets will be used on more than just one or a few repositories. 

For example, think of an SSH key needed to deploy your code to a staging environment. If…
