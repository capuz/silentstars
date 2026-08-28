---
repo: "MetaMask/github-tools"
name: "github-tools"
description: "An assortment of tools interacting with the GitHub API to get metrics for things like PR review comments/reviews"
readmeQualityOk: true
url: "https://github.com/MetaMask/github-tools"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
stars: 12
forks: 7
openIssues: 6
closedIssues: 8
watchers: 53
contributors: 335
recentReleases: 0
createdAt: "2023-06-27T17:56:28Z"
lastCommitAt: "2026-08-28T12:23:28Z"
lastReleaseAt: "2026-01-09T17:54:02Z"
status: "watched"
tags: ["community_watch", "funded", "fork_magnet"]
healthScore: 85
undervaluedScore: 50
maintainers: ["github-actions[bot]", "Mrtenz", "HowardBraham"]
openGraphImageUrl: "https://opengraph.githubassets.com/14140653601962834dba6f306dbc4f62e67f2eedbdf422971db6a8653723f9bb/MetaMask/github-tools"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/metamask"]
---

# GitHub Tools

A place for internal GitHub tools to exist and be used.

## Usage

This repository holds a collection of scripts which are intended to be run locally:

- `yarn get-review-metrics`: Gets the PR load of the extension platform team.
- `yarn count-references-to-contributor-docs`: Counts the number of references to the `contributor-docs` repo in pull request comments.

- `yarn run slack:release-testing`: Publishes a notification to slack for active releases regarding the release testing statuses.

### Authentication

Some scripts require a GitHub token in order to run fully.

For best results, create a [classic personal token](https://github.com/settings/tokens) and ensure that it has the following scopes:

- `read:org`
- `public_repo`

To use the token, you need to set the `GITHUB_AUTH_TOKEN` environment variable:

```
GITHUB_AUTH_TOKEN="<your GitHub token>" <command>
```

It's recommended to use your machine's local keychain to store the token and retrieve it from there. For example, under macOS, you can use the following command to store the token:

```
security add-generic-password -a $USER -s 'GitHub auth token' -w "<your GitHub token>"
```

Now you can use the…
