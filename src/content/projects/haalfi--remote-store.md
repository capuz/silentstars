---
repo: "haalfi/remote-store"
name: "remote-store"
description: "Write file storage code once. Run it against local files, S3, SFTP, Azure, or OneDrive."
readmeQualityOk: true
url: "https://github.com/haalfi/remote-store"
homepage: "https://docs.remotestore.dev/"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["atomic-writes", "azure-blob-storage", "s3", "sftp", "streaming", "fsspec", "api", "file-storage", "filesystem", "object-storage"]
stars: 6
forks: 0
openIssues: 1
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-22T16:59:23Z"
lastCommitAt: "2026-10-10T10:05:30Z"
lastReleaseAt: "2026-02-28T12:06:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 70
maintainers: ["haalfi", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9625ac1b0fc7b41afd1378ce432194fda72546882b3efaa21871337b2061fcf/haalfi/remote-store"
discussionCount: 0
---

Write file storage code once. Run it against local files, S3, SFTP, Azure, or OneDrive.

> **Beta.** The API is settling, but until 1.0, minor releases may include breaking changes. See the [dependency and version policy](https://docs.remotestore.dev/stable/explanation/dependency-policy/) for what Beta promises and how dependency ranges are chosen, the [changelog](https://github.com/haalfi/remote-store/blob/master/CHANGELOG.md) for what's new, and [open an issue](https://github.com/haalfi/remote-store/issues) if something breaks.

Most Python projects that deal with files eventually grow storage glue:
small wrappers around local paths, S3 clients, SFTP connections, and cloud SDKs.
Those wrappers are usually duplicated across projects, slightly inconsistent,
and painful to replace later.

`remote-store` replaces them with one simple interface.
Where files live is configuration, not application code.
Under the hood, established Python libraries like `s3fs`, `paramiko`,
and `azure-storage-file-datalake` do the real work.

**Requires Python 3.11+.** The core API is synchronous; an async counterpart is available via `remote_store.aio` (also home to the async-only Microsoft Graph…
