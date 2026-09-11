---
repo: "webfactory/create-aws-codedeploy-deployment"
name: "create-aws-codedeploy-deployment"
description: "Action to create AWS CodeDeploy deployments from GitHub Actions workflows"
readmeQualityOk: true
url: "https://github.com/webfactory/create-aws-codedeploy-deployment"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["github-actions", "aws-codedeploy", "webfactory"]
stars: 21
forks: 7
openIssues: 0
closedIssues: 8
watchers: 4
contributors: 11
recentReleases: 1
createdAt: "2020-06-17T11:02:27Z"
lastCommitAt: "2026-09-11T08:14:47Z"
lastReleaseAt: "2026-06-18T17:06:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 48
maintainers: ["mpdude", "dependabot[bot]", "megatronCGN"]
openGraphImageUrl: "https://opengraph.githubassets.com/85cdc7b51fce588161128a48e79f4d165c519ad8d0ed1bca031a1d69e72ad926/webfactory/create-aws-codedeploy-deployment"
---

# `create-aws-codedeploy-deployment`
### An Action to deploy GitHub repos with AWS CodeDeploy

This action creates [AWS CodeDeploy](https://aws.amazon.com/codedeploy/) deployments from your GitHub Actions workflow. Deployment Group and Deployment configuration itself are derived from an additional configuration section in `.appspec.yml`.

_Note:_ This README assumes you are familiar with the [basic AWS CodeDeploy concepts](https://docs.aws.amazon.com/codedeploy/latest/userguide/primary-components.html).
 
## Design Goals

While this Action tries to mostly get out of our way, it makes a few basic assumptions:

* For your GitHub repository, there is a corresponding CodeDeploy Application already set up.
* Git branches (and so, GitHub Pull Requests) will be mapped to CodeDeploy Deployment Groups. The action will create these, or update existing ones.
* Ultimately, a CodeDeploy Deployment is created with a [reference to the current commit in your GitHub repository](https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-partners-github.html).

The necessary configuration will be parsed from an additional `branch_config` key inside the `appspec.yml` file – which is the…
