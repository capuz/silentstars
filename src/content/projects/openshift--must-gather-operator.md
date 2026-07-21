---
repo: "openshift/must-gather-operator"
name: "must-gather-operator"
description: "Operator to enable CEE members to collect must-gathers from OSDv4 clusters"
readmeQualityOk: true
url: "https://github.com/openshift/must-gather-operator"
language: "Go"
languages: ["Go"]
languagePcts: [64]
topics: ["osdv4"]
stars: 15
forks: 76
openIssues: 2
closedIssues: 16
watchers: 35
contributors: 2950
recentReleases: 0
createdAt: "2020-08-27T23:32:36Z"
lastCommitAt: "2026-07-21T06:11:41Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 93
undervaluedScore: 62
maintainers: ["neha037", "praveencodes", "openshift-merge-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0724a829242ca52c9b6ddbaf2089261a7e9268814acddb3f3dc7a11627fb18d/openshift/must-gather-operator"
---

# Must Gather Operator

The Must Gather operator helps collecting must-gather information on a cluster and uploading it to a case.
To use the operator, a cluster administrator can create the following MustGather CR:

```yaml
apiVersion: operator.openshift.io/v1alpha1
kind: MustGather
metadata:
  name: example-mustgather-basic
spec:
  serviceAccountName: must-gather-admin
  uploadTarget:
    type: SFTP
    sftp:
      caseID: '02527285'
      caseManagementAccountSecretRef:
        name: case-management-creds
```

This request will collect the standard must-gather info and upload it to case `#02527285` using the credentials found in the `caseManagementCreds` secret.

## Collecting Audit logs
The field `audit` is **false** by default unless explicetely set to **true**.
This will generate the default collection of audit logs as per [the collection script: gather_audit_logs](https://github.com/openshift/must-gather/blob/master/collection-scripts/gather_audit_logs)
```yaml
apiVersion: operator.openshift.io/v1alpha1
kind: MustGather
metadata:
  name: example-mustgather-full
spec:
  serviceAccountName: must-gather-admin
  uploadTarget:
    type: SFTP
    sftp:
      caseID: '02527285'…
