---
repo: "ipfabric/docs"
name: "docs"
description: "IP Fabric Documentation living at https://docs.ipfabric.io"
readmeQualityOk: true
url: "https://github.com/ipfabric/docs"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 7
forks: 6
openIssues: 1
closedIssues: 0
watchers: 5
contributors: 69
recentReleases: 0
createdAt: "2022-09-01T15:05:28Z"
lastCommitAt: "2026-11-05T14:04:51Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 69
undervaluedScore: 69
maintainers: ["ipf-devops-bot", "richard-rozehnal-ipf", "tomas-svoboda-ipf"]
openGraphImageUrl: "https://opengraph.githubassets.com/54a4639c9215395dc9bac77d8e4c3272452acb4eea5749e49625e5561e2131c2/ipfabric/docs"
---

# IP Fabric Documentation Project

We are using [MkDocs](https://www.mkdocs.org/) with the excellent [Material for
MkDocs](https://squidfunk.github.io/mkdocs-material/). Last but not least, there
is [mike](https://github.com/jimporter/mike), which is a tool for building and
publishing different versions of the documentation.

## Release Process

One of the main motivations for migrating towards Markdown-based documentation
is the ability to follow a standard development model. Thus, any update to the
documentation happens as follows:

- Create your "feature" branch. It is good practice to include a ticket number
  at the beginning. For example, `NIM-5808_readme`.
- Do all your commits in the branch. When ready, open a merge request (MR) on
  GitLab (also make sure that it starts with your ticket number, correctly
  formatted).
- Set yourself as the assignee (as you are the owner of the MR).
- At the moment, please set the reviewer to @antonin.kral-ipf and/or
  @zdenek.sindylek-ipf for all your MRs.
- The CI/CD pipeline builds and publishes on every push to `main`.
- `mike` is then used by repository maintainers to push a new version release to
  the documentation web. (See the…
