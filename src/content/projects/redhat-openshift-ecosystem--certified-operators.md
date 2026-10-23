---
repo: "redhat-openshift-ecosystem/certified-operators"
name: "certified-operators"
description: "Production catalog for Red Hat Certified Operator Bundles "
readmeQualityOk: true
url: "https://github.com/redhat-openshift-ecosystem/certified-operators"
language: "Dockerfile"
languages: ["Dockerfile", "Makefile"]
languagePcts: [59, 41]
stars: 87
forks: 679
openIssues: 1
closedIssues: 38
watchers: 10
contributors: 614
recentReleases: 0
createdAt: "2021-09-27T17:16:03Z"
lastCommitAt: "2026-10-23T09:32:31Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 56
maintainers: ["rh-operator-bundle-bot", "turbodeploy", "dotneft"]
openGraphImageUrl: "https://opengraph.githubassets.com/92974af8293172461311c8139be36c9f5eb7928b7c7e24a0b8f9d280ab3301a4/redhat-openshift-ecosystem/certified-operators"
discussionCount: 1
---

# Red Hat certified operators production catalog
Production catalog for Red Hat Certified Operator Bundles

See our [documentation](https://redhat-openshift-ecosystem.github.io/operator-pipelines/) to
find out more about Certified operators and contribution.

# Operator bundle submission
A new operator bundle submission needs to follow a predefined directory
structure that is described below in this section. The new submission is
done through Github pull requests which can be either open by the [CI pipeline][ci-pipeline] or
manually by a user. The recommended way is to use the CI pipeline because it makes
sure all necessary data are provided in the correct format. Documentation about how
to use the pipeline is available in the pipeline repository.

## Pull request
A pull request with a new operator bundle needs to follow given rules to pass a tests:
 * Title format: `operator package-name (version)`
 * Pull request can only modify one operator
 * Pull request can't modify already merged operators
 * Associated images need to be pinned to specific image digest - tags are not allowed

Rules mentioned above are always followed when pull request is opened using CI pipeline.

##…
