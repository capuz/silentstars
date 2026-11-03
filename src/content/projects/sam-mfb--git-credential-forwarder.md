---
repo: "sam-mfb/git-credential-forwarder"
name: "git-credential-forwarder"
description: "Forward git credential requests from Docker container to host"
readmeQualityOk: true
url: "https://github.com/sam-mfb/git-credential-forwarder"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 11
forks: 1
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2024-04-05T20:45:35Z"
lastCommitAt: "2026-11-03T19:04:57Z"
lastReleaseAt: "2025-10-30T23:27:18Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 53
maintainers: ["sam-mfb", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/abeb84e5bad3a99d2511af82b11fcde426b6bd60e2da8826437b7601a3eb92ae/sam-mfb/git-credential-forwarder"
discussionCount: 0
---

# git-credential-forwarder

A helper that allows forwarding git credential requests from one git instance (the "client") to another (the "server"). The purpose is to allow the client to use the git credentials or credential helper present on the server.

This was created for the specific use case of being able to run git inside a Docker container while using the credential helper configured on the Docker host. This, for example, allows development inside a linux-based Docker development container while relying on credentials being managed by [git-credential-manager](https://github.com/git-ecosystem/git-credential-manager) on the host. This helper is particularly useful in that scenario because the tools for using git-credential-manager inside a CLI-only linux container have [some](https://github.com/git-ecosystem/git-credential-manager/blob/release/docs/credstores.md) [limitations](https://github.com/git-ecosystem/git-credential-manager/issues/1549), particularly when used with [MSAL oauth2](https://github.com/AzureAD/microsoft-authentication-library-for-dotnet/issues/3033).

Similar functionality is provided by VS Code's [Remote Containers…
