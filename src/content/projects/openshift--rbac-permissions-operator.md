---
repo: "openshift/rbac-permissions-operator"
name: "rbac-permissions-operator"
description: "Operator to manage RBAC permissions for groups across subsets of namespaces"
readmeQualityOk: true
url: "https://github.com/openshift/rbac-permissions-operator"
language: "Go"
languages: ["Go", "Shell", "Python"]
languagePcts: [34, 31, 23]
topics: ["osdv4"]
stars: 35
forks: 67
openIssues: 1
closedIssues: 7
watchers: 36
contributors: 2940
recentReleases: 0
createdAt: "2019-06-14T22:15:37Z"
lastCommitAt: "2026-07-14T05:53:15Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 96
undervaluedScore: 59
maintainers: ["red-hat-konflux-kflux-prd-rh03[bot]", "openshift-merge-bot[bot]", "smarthall"]
openGraphImageUrl: "https://opengraph.githubassets.com/3400347925ef7395cb6701ec55f222d0d28b0c5cdcbc2814927b2194b949b7e9/openshift/rbac-permissions-operator"
---

# RBAC Permissions Operator

## Summary
The RBAC-Permissions-Operator was created for the OpenShift Dedicated platform to manage various permissions (via k8s RBAC policies) to
all the projects/namespaces within an OpenShift Dedicated cluster. The permissions must allow for cluster and namespace scope access
and the ability to safe list and/or blocklist namespaces.

It contains the following components:
* Namespace controller: watches for new namespaces and guarantees that the proper RoleBindings are assigned to them.
* SubjectPermission controller: watches for subject permission changes and creates ClusterRoleBindings and RoleBindings as needed.

To avoid giving admin permissions to specific namespaces (eg. infra/cluster-admin related), two regex are implemented in the
form of NamespacesAllowedRegex and NamespacesDeniedRegex. These will help us determine which namespaces should get
the RoleBinding assignment.

## Testing, Locally (CRC)
To test a new version of the operator locally using CRC you need to:

1. start CRC
1. run `make predeploy`
1. on a separate terminal run `make deploy-local`
1. apply any valid CR and watch for log changes

# Controllers

## Namespace Controller…
