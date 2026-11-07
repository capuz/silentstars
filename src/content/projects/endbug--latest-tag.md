---
repo: "EndBug/latest-tag"
name: "latest-tag"
description: ":octocat: Automatically generate & update a \"latest\" tag for your releases"
readmeQualityOk: true
url: "https://github.com/EndBug/latest-tag"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["actions", "ci", "github", "github-actions", "hacktoberfest", "latest", "tagging", "tags", "versioning"]
stars: 67
forks: 12
openIssues: 0
closedIssues: 10
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2019-09-17T19:26:47Z"
lastCommitAt: "2026-11-07T22:50:31Z"
lastReleaseAt: "2023-09-10T21:19:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 85
undervaluedScore: 31
maintainers: ["dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0748e97f3dfd94ce4c8a3caaacef01d9f7482027e9c442bd9f08a705b33c180e/EndBug/latest-tag"
fundingLinks: ["GITHUB:https://github.com/EndBug"]
---

# Latest tag

Automatically creates & updates a `latest` tag pointing to your latest release.

When using GitHub Actions you always have to put a reference for every action you use in your worflows: that means that you either need to choose a specific version or you need to use a branch.
If you want to use the **latest** release of an action you can only hope authors are mantaining a `latest` tag that they update with every version: although not impossible, it's not that easy to find someone willing to do that.

That's why I made this action: if you're the kind of guy that doesn't like to update tags you can simply use this action and forget about it. You can just put `latest` in the documentation: your users will get the benefits of using a branch as ref and the security of using only stable versions (as long as you don't make breaking changes).

## Usage

Add a step like this to your workflow:

```yaml
- name: Run latest-tag
  uses: EndBug/latest-tag@latest
  with:
    # You can change the name of the tag or branch with this input.
    # Default: 'latest'
    ref: someCustomTagName

    # If a description is provided, the action will use it to create an annotated tag. If none is…
