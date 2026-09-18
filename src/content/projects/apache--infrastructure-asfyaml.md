---
repo: "apache/infrastructure-asfyaml"
name: "infrastructure-asfyaml"
description: " .asf.yaml documentation and schema "
readmeQualityOk: true
url: "https://github.com/apache/infrastructure-asfyaml"
homepage: "https://infra.apache.org/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["apache", "git", "github", "selfserve", "yaml"]
stars: 16
forks: 23
openIssues: 27
closedIssues: 24
watchers: 11
contributors: 34
recentReleases: 0
createdAt: "2024-02-05T09:42:27Z"
lastCommitAt: "2026-09-18T08:27:18Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 83
undervaluedScore: 70
maintainers: ["Humbedooh", "alitheg", "ppkarwasz"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d0c96ea5f721c1bbf6a605c8f691c81929523206a6fbb70a9b133db6a89aefb/apache/infrastructure-asfyaml"
---

> [!Note]
> This is a work in progress. There will be omissions, factually incorrect items,
> and placeholders while we work to fully migrate the .asf.yaml specifications to this repository.
> Issues can be reported in this repository, and Pull Requests are also welcome.
> Changing the parser itself? See [how to test a change against the sandbox repo](https://github.com/apache/infrastructure-asfyaml/blob/HEAD/docs/testing-a-change.md).
> We ask that you do not create Jira tickets for suggestions or other remarks concerning this repository.

# Working with .asf.yaml

`.asf.yaml` is a branch-specific <a href="https://en.wikipedia.org/wiki/YAML" target="_blank">YAML</a> configuration file that a project may create (using a text editor of your choice) and put in the root of a Git repository to control features such as

  - notification schemes
  - website staging
  - GitHub settings
  - Pelican builds

It operates on a per-branch basis, meaning you can have different settings for different branches, and only those with an active `.asf.yaml` file will kick off a feature. Metadata settings (repo settings, features, labels) are not branch-dependent and should exist in the main (default)…
