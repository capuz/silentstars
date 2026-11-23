---
repo: "Mindera/Alfie-Android"
name: "Alfie-Android"
description: "This repo is part of Alfie: a project to boostrap eCommerce Projects (Front-end mobile/web and BE and Graph APIs)"
readmeQualityOk: true
url: "https://github.com/Mindera/Alfie-Android"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [97]
topics: ["android", "kotlin"]
stars: 6
forks: 0
openIssues: 11
closedIssues: 19
watchers: 13
contributors: 14
recentReleases: 0
createdAt: "2024-07-10T13:58:19Z"
lastCommitAt: "2026-11-23T12:22:42Z"
status: "watched"
tags: ["hidden_gem", "community_watch"]
healthScore: 87
undervaluedScore: 60
maintainers: ["hoangnhatdrk", "nhathoang-mindera", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0f463396523086f8025e35ac5b2dfa58283c8778e0789efc46ea2ba5fc145f2/Mindera/Alfie-Android"
---

[Stub_local_IP.patch](https://github.com/user-attachments/files/24615309/Stub_local_IP.patch)# Alfie Native Android App

----

This is a repository for an e-commerce Android app template.

## Setup

If you wish to use Alfie-Mock server for BE purposes for real devices, please stub the local IP and allow the connection in network_security_config.xml
Like so: 

ApolloModule.kt:

network_security_config.xml:

### Agent skills

The `mattpocock-skills` plugin is pinned in `.claude/settings.json`. Trust the folder in Claude Code,
then install it once per checkout (a version bump is a change to its `"ref"`):

```bash
claude plugin install mattpocock-skills@mattpocock --scope project
```

## Network / GraphQL Setup

The app connects to two Apollo GraphQL services managed via Hilt-qualified `ApolloClient`s:
