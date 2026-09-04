---
repo: "thalesgroup-cert/suspicious"
name: "suspicious"
description: "AI-powered phishing & threat-analysis platform to automatically inspect, classify, and report suspicious emails, files, URLs, IPs, and hashes built for teams and organizations"
readmeQualityOk: true
url: "https://github.com/thalesgroup-cert/suspicious"
homepage: "https://thalesgroup-cert.github.io/suspicious/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [64, 28]
topics: ["django", "django-project", "docker", "docker-compose", "javascript", "mail", "mail-analysis", "python", "security", "tool"]
stars: 89
forks: 10
openIssues: 0
closedIssues: 5
watchers: 3
contributors: 20
recentReleases: 0
createdAt: "2025-10-03T12:14:34Z"
lastCommitAt: "2026-09-04T08:08:58Z"
lastReleaseAt: "2026-02-25T16:42:20Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 47
maintainers: ["dependabot[bot]", "TheoBhang", "georgiaclemencon"]
openGraphImageUrl: "https://opengraph.githubassets.com/8da121b4830507d356562116ef6da898ab453b92570863cf9fd5a2a70afa63ca/thalesgroup-cert/suspicious"
---

</p>
    <strong>Phishing & threat-analysis platform</strong>
</p>

    </a>
    </a>
    </a>
    </a>
    </a>
</p>

# Suspicious

> **Documentation:** <https://thalesgroup-cert.github.io/suspicious/>

Suspicious inspects, classifies, and reports suspicious emails, files, URLs, IPs,
and file hashes. Submit an item from the web UI or forward an email to a
monitored mailbox; Suspicious runs it through YARA rules, a sandbox, metadata
checks, and a machine-learning email classifier, then returns a scored verdict
and a full report.

Built and maintained by the [Thales Group CERT](https://www.thalesgroup.com/).

## What it does

- **Analyzes** emails (`.eml`, `.msg`), documents, archives, executables, URLs,
  IP addresses, and file hashes.
- **Scores** each submission as Safe, Inconclusive, Suspicious, or Dangerous.
- **Reports** results through a web UI with dashboards, per-analyzer output, and
  submission history.
- **Ingests** email automatically from IMAP/IMAPS mailboxes.
- **Notifies** reporters of the outcome by email.
- **Integrates** with Cortex, TheHive, MISP, LDAP, Elasticsearch, ChromaDB, and
  S3-compatible storage.

## Quick start

Requires Docker and Docker Compose v2.…
