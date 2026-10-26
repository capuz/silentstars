---
repo: "searxng/searx-instances"
name: "searx-instances"
description: "SearXNG instances list "
readmeQualityOk: true
url: "https://github.com/searxng/searx-instances"
homepage: "https://searx.space"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["searxng", "searxng-instance"]
stars: 220
forks: 43
openIssues: 6
closedIssues: 705
watchers: 9
contributors: 16
recentReleases: 0
createdAt: "2022-01-07T18:33:43Z"
lastCommitAt: "2026-10-26T03:04:30Z"
status: "thriving"
tags: ["solo_builder", "community_hub"]
healthScore: 97
undervaluedScore: 44
maintainers: ["vojkovic", "dependabot[bot]", "searxng-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5dfa25d900bd080a3d84835ac8aeae7a08b512f84a8aa12a1a28406699d0042/searxng/searx-instances"
discussionCount: 126
---

## How to add your instance to the list?

Create a new issue here: https://github.com/searxng/searx-instances/issues/new/choose

## For SearXNG instance operators

* [Create an issue](https://github.com/searxng/searx-instances/issues/new/choose) to add / remove / edit a SearXNG instance on https://searx.space/
* If you add a new instance, allow the IPs of ```check.searx.space``` to access your instance. It will checks your instance periodically ([source code](https://github.com/searxng/searx-space)). The results are displayed on https://searx.space/
* Wait for a reviewer to add your instance to [instances.yml](https://github.com/searxng/searx-instances/blob/master/searxinstances/instances.yml)

---

## For reviewers

### Add a new instance to the public list

* create a virtualenv, and then install `searxinstances`:

```python -m pip install .[update]```

* then `searxinstances` can help to edit instances.yml :
```
usage: searxinstances [-h] [--github-issues [GITHUB_ISSUE_LIST [GITHUB_ISSUE_LIST ...]]] [--add [ADD_INSTANCES [ADD_INSTANCES ...]]] [--remove [REMOVE_INSTANCES [REMOVE_INSTANCES ...]]] [--edit [EDIT_INSTANCES [EDIT_INSTANCES ...]]] [-m [MESSAGE]]
```

Or if you don't…
