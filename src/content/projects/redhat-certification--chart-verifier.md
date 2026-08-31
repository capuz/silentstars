---
repo: "redhat-certification/chart-verifier"
name: "chart-verifier"
description: "A rules-based tool to certify Helm Charts."
readmeQualityOk: true
url: "https://github.com/redhat-certification/chart-verifier"
language: "Go"
languages: ["Go"]
languagePcts: [85]
stars: 61
forks: 57
openIssues: 3
closedIssues: 139
watchers: 5
contributors: 29
recentReleases: 0
createdAt: "2021-02-09T11:20:04Z"
lastCommitAt: "2026-08-31T09:58:20Z"
lastReleaseAt: "2022-03-08T21:18:08Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 60
maintainers: ["dependabot[bot]", "komish", "caxu-rh"]
openGraphImageUrl: "https://opengraph.githubassets.com/88bc727e39e81cfc4799954e0f4d2c98732098dc603f43c2c12cc2c885a5ff21/redhat-certification/chart-verifier"
---

# **chart-verifier**: Rules based tool to certify Helm charts

The **chart-verifier** CLI tool allows you to validate the Helm chart against a configurable list of checks. The tool ensures that the Helm charts include the associated metadata and formatting, and are distribution ready.

The tool allows users to validate a Helm chart URL and provides a report where each check has a `positive` or `negative` result. A negative result from a check indicates a problem with the chart, which needs correction. It ensures that the Helm chart works seamlessly on Red Hat OpenShift and can be submitted as a certified Helm chart in the [OpenShift Helm Repository](https://github.com/openshift-helm-charts).

The input is provided through the command-line interface, with the only required input parameter being the `uri` option. The output is represented through a YAML format with descriptions added in a human-readable format. The report should be submitted with a full set of checks thus validating the Helm chart.

The tool provides the following features:

-   Helm chart verification: Verifies if a Helm chart is compliant with a certain set of independent checks with no particular execution order.…
