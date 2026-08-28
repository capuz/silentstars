---
repo: "cert-manager/approver-policy"
name: "approver-policy"
description: "approver-policy is a cert-manager approver that allows users to define policies that restrict what certificates can be requested."
readmeQualityOk: true
url: "https://github.com/cert-manager/approver-policy"
homepage: "https://cert-manager.io/docs/policy/approval/approver-policy/"
language: "Go"
languages: ["Go"]
languagePcts: [79]
topics: ["kubernetes", "authorization", "cert-manager"]
stars: 90
forks: 40
openIssues: 12
closedIssues: 47
watchers: 6
contributors: 37
recentReleases: 0
createdAt: "2021-03-19T14:25:11Z"
lastCommitAt: "2026-08-28T15:34:21Z"
lastReleaseAt: "2023-01-27T12:30:40Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 52
maintainers: ["cert-manager-prow[bot]", "renovate[bot]", "mladen-rusev-cyberark"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e393db0279c1fec7ad09ccbe6e69c754280c6ae0c0157222f6c78b81ba729fb/cert-manager/approver-policy"
---

</p>
</p>

# approver-policy

approver-policy is a [cert-manager](https://cert-manager.io) approver that is
responsible for [Approving or Denying
CertificateRequests](https://cert-manager.io/docs/concepts/certificaterequest/#approval).

approver-policy exposes the CertificateRequestPolicy resource which
administrators use to define policy over what, who, and how certificates are
signed by cert-manager.

---

Please follow the documentation at
[cert-manager.io](https://cert-manager.io/docs/usage/approver-policy/) for
installing and using approver-policy.

## Makefile modules

This project uses [Makefile modules](https://github.com/cert-manager/makefile-modules), see the README there for more information.
A summary of the available make targets can be found by running `make help`.

## Release Process

The release process is documented in [RELEASE.md](https://github.com/cert-manager/approver-policy/blob/HEAD/RELEASE.md).
