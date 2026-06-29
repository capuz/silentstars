---
repo: "devops-actions/load-used-actions"
name: "load-used-actions"
description: "Load used actions from an entire organization"
url: "https://github.com/devops-actions/load-used-actions"
language: "TypeScript"
languages: ["TypeScript", "PowerShell"]
languagePcts: [50, 49]
topics: ["github-actions", "organization"]
stars: 18
forks: 8
openIssues: 1
closedIssues: 14
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-08-16T14:40:18Z"
lastCommitAt: "2026-06-29T07:23:57Z"
lastReleaseAt: "2023-12-01T10:03:59Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 70
maintainers: ["dependabot[bot]", "github-actions[bot]", "rajbos"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b0bb9af891c1cfe5fa16803c04c3da0367eb0cab2220f7b807ca71ce3ac54fb/devops-actions/load-used-actions"
fundingLinks: ["GITHUB:https://github.com/rajbos", "KO_FI:https://ko-fi.com/rob_bos"]
---

# load-used-actions

Load used actions from an entire organization, by calling the REST API with a Personal Access Token and loop through all workflows in all repositories in the user account or organization.

The output is stored with the name `actions`, which can be retrieved in another action with `${{ steps.<step id>.outputs.actions }}`.

Used for inserting data into the [internal actions marketplace](https://github.com/rajbos/actions-marketplace).

## Example usage
Minimal uses expression to use this action:

``` yaml
uses: devops-actions/load-used-actions@v1.3.7
with: 
    PAT: ${{ secrets.GITHUB_TOKEN }} # use an Access Token with correct permissions to view private repos if you need to
```
Note: the default GITHUB_TOKEN might only have read access to the current repository but can read the public repositories for any organization, depending on the specific setup of the GITHUB_TOKEN. Create a new access token (PAT or use a GitHub App) with `repo` scope to have full read-only access to the organization and use that as a parameter. To learn more about these types of tokens, read this [blogpost](https://devopsjournal.io/blog/2022/01/03/GitHub-Tokens).

### Using a GitHub App…
