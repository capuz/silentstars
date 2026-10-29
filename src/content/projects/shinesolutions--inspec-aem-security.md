---
repo: "shinesolutions/inspec-aem-security"
name: "inspec-aem-security"
description: "InSpec profile for compliance with AEM security checklist"
readmeQualityOk: true
url: "https://github.com/shinesolutions/inspec-aem-security"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [88]
topics: ["aem", "inspec", "security-guideline", "aem-opencloud", "testing"]
stars: 10
forks: 7
openIssues: 2
closedIssues: 3
watchers: 9
contributors: 8
recentReleases: 0
createdAt: "2017-10-15T04:50:23Z"
lastCommitAt: "2026-10-29T21:24:59Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 65
maintainers: ["ovlords", "cliffano", "shinesolutions-opensource"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e139539a43a172dcdd7475633c47e1dd43dd0f71c8fe7baaff6df264d829a2f/shinesolutions/inspec-aem-security"
---

# InSpec AEM Security

An [InSpec](https://www.inspec.io) profile for compliance with [AEM security checklist](https://helpx.adobe.com/experience-manager/6-2/sites/administering/using/security-checklist.html).

## Usage

Run profile directly from Chef Supermarket:

```shell
inspec supermarket exec shinesolutions/aem-security
```

Run profile directly from GitHub:

```shell
inspec exec https://github.com/shinesolutions/inspec-aem-security
```

Run all tests:

```shell
make test
```

Run all tests with custom configuration file:

```shell
INSPEC_AEM_SECURITY_CONF=some-aem.yaml make test
```

Run component specific tests:

```shell
make test-author
make test-publish
make test-publish-dispatcher
```
