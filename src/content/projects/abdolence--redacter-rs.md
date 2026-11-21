---
repo: "abdolence/redacter-rs"
name: "redacter-rs"
description: "Detect & Redact cli tool to find sensitive data in files, such as personal information (PII), passwords and API keys, and to securely copy and redact files removing it, across various filesystems."
readmeQualityOk: true
url: "https://github.com/abdolence/redacter-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 16
forks: 3
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-08-04T12:14:14Z"
lastCommitAt: "2026-11-21T11:33:05Z"
lastReleaseAt: "2024-08-14T10:31:39Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 69
maintainers: ["abdolence", "renovate[bot]", "zyl71"]
openGraphImageUrl: "https://opengraph.githubassets.com/4afbbbca652b30b87a7aec9769d247145d9c3bafc947bc4ecda49a7713acd6c2/abdolence/redacter-rs"
discussionCount: 0
---

# Redacter

Detect & Redact cli tool to find sensitive data in files, such as personal information (PII), passwords, API keys and
other secrets, and to securely copy and redact files removing it, across various sources and destinations and utilising
Data Leak/Loss Prevention (DLP) capabilities.
`redacter cp` copies files and redacts them on the way; `redacter scan` only reads them and reports what was found and
where, with an exit code a CI pipeline can gate on.

The tool ships four redacters that run entirely on your machine, a rule-based one with checksum validation, a small
multilingual named-entity model, a zero-shot span model that looks for labels you choose and a classifier for
credentials, and can also delegate to cloud DLP services and LLMs such as Google Cloud Platform's DLP API. Local
redaction keeps the data on the host and costs nothing per file. See [Choosing a redacter](#choosing-a-redacter) for the
measured recall and speed of every redacter.
