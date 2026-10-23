---
repo: "ansys/actions"
name: "actions"
description: "A collection of reusable workflows"
readmeQualityOk: true
url: "https://github.com/ansys/actions"
homepage: "https://actions.docs.ansys.com/"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["actions", "automation", "ci-cd", "github-actions", "workflows"]
stars: 21
forks: 7
openIssues: 20
closedIssues: 271
watchers: 32
contributors: 45
recentReleases: 0
createdAt: "2022-10-10T12:19:34Z"
lastCommitAt: "2026-10-23T09:32:50Z"
lastReleaseAt: "2022-12-07T08:39:20Z"
status: "thriving"
tags: ["hidden_gem", "community_watch"]
healthScore: 97
undervaluedScore: 59
maintainers: ["dependabot[bot]", "moe-ad", "SMoraisAnsys"]
openGraphImageUrl: "https://opengraph.githubassets.com/64172cc1ae1a5d81dc7f07f26e22ec63216cde5735a4c6cbbc0c7abdb351b322/ansys/actions"
discussionCount: 7
---

# Ansys actions

A repository containing a collection of [GitHub Workflows] to be reused by
projects in the Ansys ecosystem.

For more information on available actions and how to use them, see
[actions.docs.ansys.com].

## Recommended workflow strategy

The different actions provided by [ansys/actions] can be used to create a
simple but effective workflow.

The following lines describe the suggested workflows for various events, such as
pushing a new commit to a pull request, merging a commit to the main branch of a
repository, and performing a new release. Each image showcases the distinct job
steps declared in a YML file. Jobs highlighted in green signify that they
execute, while those with a blue background indicate that they do not execute.

For additional in-depth information refer to the poster [CI/CD pipelines for
scientists].

### Recommended workflow when pushing a new commit to a pull-request

This workflow is recommended to ensure that the code ready to be merged is
compliant with the project style, its code integrity, and that it is capable of
successfully generating all the desired library artifacts.

```mermaid
graph LR
    A(Doc style) --> B(Doc build)
    C(Code…
