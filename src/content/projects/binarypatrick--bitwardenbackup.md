---
repo: "binarypatrick/BitwardenBackup"
name: "BitwardenBackup"
description: "Script for backing up a Bitwarden vault and encrypting it for storage locally."
readmeQualityOk: true
url: "https://github.com/binarypatrick/BitwardenBackup"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-06-27T01:29:43Z"
lastCommitAt: "2026-11-21T13:26:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/5239f489179adfe8740304f5080cf0a61ffe718faae94965927efdcf3763997b/binarypatrick/BitwardenBackup"
---

# BitwardenBackup

This repo contains a script for backing up a Bitwarden vault and encrypting it for storage locally. It is an expansion of [this article](https://bitwarden.com/help/cli-auth-challenges/) on how to do scripted backups but it uses the users Bitwarden API Key so users with 2FA can have an automated backup.

## Key Takeaways

- Backups are encrypted
- A local copy can be kept safely

More usage detail documentation can be [found here](https://binarypatrick.dev/posts/2023/bitwarden-automated-backup/).

## Install

Install the Bitwarden CLI (`bw`) into `/usr/local/bin`:

```bash
./install.sh
```

The script elevates with `sudo` when needed and requires `wget` and `unzip`.

## Backup

Set the following environment variables before running the backup (all are required; the script fails fast if any are missing):

| Variable | Description |
| --- | --- |
| `BW_CLIENTID` | Bitwarden API Key Client ID |
| `BW_CLIENTSECRET` | Bitwarden API Key Client Secret |
| `BW_PASSWORD` | Bitwarden Vault Password |
| `BW_NOTIFICATION_EMAIL` | Address emailed (via `mail`) if the job fails |

Then run, passing the directory the encrypted backup should be written to:
