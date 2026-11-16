---
repo: "Plaenkler/DDNS-Updater"
name: "DDNS-Updater"
description: "DDNS client with user-friendly frontend"
readmeQualityOk: true
url: "https://github.com/Plaenkler/DDNS-Updater"
homepage: "https://github.com/Plaenkler/DDNS-Updater"
language: "Go"
languages: ["Go", "HTML"]
languagePcts: [70, 20]
topics: ["ddns-client", "ddns-updater", "docker-image", "ddns", "dynamic-dns"]
stars: 9
forks: 3
openIssues: 0
closedIssues: 29
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-02-14T19:22:24Z"
lastCommitAt: "2026-11-16T11:55:56Z"
lastReleaseAt: "2023-04-12T09:34:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 87
undervaluedScore: 72
maintainers: ["Plaenkler", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c4c333ffc13a5becf56e5b93fe2f3ce513abb2c59b0e2e58a0331f49bae3e074/Plaenkler/DDNS-Updater"
fundingLinks: ["GITHUB:https://github.com/Plaenkler"]
---

# DDNS Updater

> This project was originally written entirely without the help of AI. Today it helps with troubleshooting, dependency updates and docs. Whether that is a mark of quality or the opposite is up to you.

DDNS Updater keeps your dynamic DNS records in sync with your public IPv4 address.
Update jobs and settings are managed in a web interface, so there is no need to edit files or work on the command line.

## Features

- Web interface for jobs, settings and logs
- Optional TOTP login and encrypted job parameters
- Updates only when the IP address has changed
- Runs as Docker container, standalone application or Windows service

## Supported providers

`Aliyun` `DD24` `DDNSS` `Dynu` `Hetzner` `INWX` `Infomaniak` `IONOS` `MaxiHoster` `NoIP` `Strato`

> If your provider is missing, open an issue and it will be added.

### Custom provider

Every provider that offers an update URL can be used with the provider **Custom**:

1. Enter the update URL in the **URL** field and put the placeholder `<ipv4>` where the IP address belongs.
2. Enter a text in the **Check** field that the provider's response contains when the update was successful.

## Installation

### Docker…
