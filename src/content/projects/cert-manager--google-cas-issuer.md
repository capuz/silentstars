---
repo: "cert-manager/google-cas-issuer"
name: "google-cas-issuer"
description: "cert-manager issuer for Google CA Service"
readmeQualityOk: true
url: "https://github.com/cert-manager/google-cas-issuer"
language: "Makefile"
languages: ["Makefile", "Go"]
languagePcts: [59, 33]
stars: 99
forks: 44
openIssues: 10
closedIssues: 54
watchers: 6
contributors: 35
recentReleases: 0
createdAt: "2020-10-21T18:09:16Z"
lastCommitAt: "2026-10-26T20:59:54Z"
lastReleaseAt: "2021-08-18T10:44:22Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 49
maintainers: ["cert-manager-prow[bot]", "renovate[bot]", "wallrj"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d43652d4c501193f190234ce1035f7a4fd1202f73ef0e4bae92a9b0dc59c33f/cert-manager/google-cas-issuer"
---

# Google Certificate Authority Service Issuer for cert-manager

This repository contains an [external Issuer](https://cert-manager.io/docs/contributing/external-issuers/)
for cert-manager that issues certificates using [Google Cloud
Certificate Authority Service (CAS)](https://cloud.google.com/certificate-authority-service/), using managed private CAs to issue certificates.

> [!IMPORTANT]
> The Google CAS Issuer project is currently in maintenance mode. We will continue to provide support for bug fixes and security updates, but no new major features are planned. We are looking for maintainers/ partners (eg. the Google CAS team) to continue the development of this project and take some of the maintainership responsibilities. If you are interested, please reach out to us on the [`cert-manager-dev` Slack via @cert-manager-maintainers](https://groups.google.com/forum/#!forum/cert-manager-dev).

> [!IMPORTANT]
> The `GoogleCASIssuer` and `GoogleCASClusterIssuer` CRDs are part of the `cas-issuer.jetstack.io` API group. This `jetstack.io` API group is used for legacy reasons and will not be immediately changed to preserve backwards compatibility. This project however is no longer…
