---
repo: "EdiWang/Azure-Blob-Sync"
name: "Azure-Blob-Sync"
description: "Sync files in Azure Blob Storage to local file system."
readmeQualityOk: true
url: "https://github.com/EdiWang/Azure-Blob-Sync"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["azure-storage-blob"]
stars: 17
forks: 4
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2017-12-03T08:01:05Z"
lastCommitAt: "2026-07-25T06:01:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 42
maintainers: ["EdiWang", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/4cdd69c75f00506cc1f85812c47a7f03a885e4aec280fab10e794b1d80fd4e34/EdiWang/Azure-Blob-Sync"
---

# Azure Blob Sync

> [!IMPORTANT]
> This project is no longer maintained.
>
> Azure Blob Sync was created before AzCopy supported the sync scenarios this tool needed. AzCopy now covers the primary use cases of this project with better performance, broader platform support, official maintenance, logging, retry, and resume behavior.
>
> New users should migrate to [AzCopy v10](https://learn.microsoft.com/azure/storage/common/storage-use-azcopy-v10). No new features or compatibility fixes are planned for `azblobsync`.

.NET Tool for backup files in Azure Blob Storage to local file system.

Use [AzCopy](https://learn.microsoft.com/azure/storage/common/storage-use-azcopy-blobs-synchronize) for the same job.

## Migration to AzCopy

### 1. Authenticate

AzCopy examples usually use Microsoft Entra ID or a SAS URL. If you use Microsoft Entra ID:

```bash
azcopy login
```

If you currently use `--connection`, generate a SAS token for the source container and use a URL like:

```text
https://<storage-account-name>.blob.core.windows.net/<container-name>?<sas-token>
```

### 2. Mirror a blob container to a local folder

Equivalent to a regular `azblobsync` run that downloads changed blobs and…
