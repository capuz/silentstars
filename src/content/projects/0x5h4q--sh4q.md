---
repo: "0x5h4q/Sh4q"
name: "Sh4q"
description: "Policy-controlled reconnaissance orchestration with scope enforcement, durable evidence, provenance, and reviewable DNS/HTTP/CT asset reports."
readmeQualityOk: true
url: "https://github.com/0x5h4q/Sh4q"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 11
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-08-09T16:59:41Z"
lastCommitAt: "2026-11-09T11:56:31Z"
lastReleaseAt: "2026-11-09T12:01:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 59
maintainers: ["0x5h4q"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1329015147/c5d9e7e9-6ebe-443f-ba85-ba7eabe5e618"
---

Sh4q helps security learners and practitioners map domains they own or are
authorised to test. Give it a domain and it checks DNS, looks for related
subdomains, checks which hosts respond over HTTP, records detected technologies,
and produces reports you can inspect or share.

It is a research prototype. It is not a vulnerability scanner, an exploitation framework, or a replacement for mature reconnaissance suites.

## Walkthrough

This short recording shows an authorised Sh4q scan, reviewing discovered
assets, filtering results, and exporting an HTML report.

The example uses a bug-bounty target with permission to test. Always confirm
the target's current program scope and disclosure rules before running or
publishing a scan.

## Start Here

If you are new to reconnaissance, think of Sh4q as a careful inventory tool:

- **Found** means a source mentioned a hostname or URL.
- **Resolved** means DNS returned an address for a hostname.
- **Responded** means an HTTP request received a response.
- **Historical** means a URL appeared in an archive; it is not proof that the
  URL works today.

Sh4q never treats every name returned by a tool as a confirmed live asset. It
checks scope…
