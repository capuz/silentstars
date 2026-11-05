---
repo: "ungerik/go-fs"
name: "go-fs"
description: "One file API for Go: local disk, S3, Azure Blob, SFTP, FTP, SMB, WebDAV, Dropbox, HTTP, zip and tar"
readmeQualityOk: true
url: "https://github.com/ungerik/go-fs"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["azure-blob-storage", "dropbox", "filesystem", "ftp", "ftps", "go", "golang", "s3", "sftp", "smb"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 5
recentReleases: 9
createdAt: "2014-02-25T13:27:22Z"
lastCommitAt: "2026-11-05T08:06:02Z"
lastReleaseAt: "2026-11-03T16:09:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 80
undervaluedScore: 52
maintainers: ["ungerik", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c1b1f8ececaf49e16977d33d62808cd75215ad2acf69f5cf36fd12579a7198f/ungerik/go-fs"
---

go-fs
=====

One file API for Go over the local disk, memory, S3, Azure Blob Storage,
SFTP, FTP, SMB, WebDAV, Dropbox, HTTP, and ZIP and tar archives. A file is a
path or URI string like `s3://bucket/report.pdf`, and the same code reads,
writes, lists, copies and moves files on every one of them.

Install
-------

```bash
go get github.com/ungerik/go-fs@v1.0.0-rc.6
```

Requires Go 1.26 or newer. v1.0.0-rc.6 is the release candidate for v1.0.0,
which freezes the v1 API. Until v1.0.0 is tagged, `go get` without a version
installs v0.1.0, whose API differs; [docs/MIGRATION_v1.md](https://github.com/ungerik/go-fs/blob/HEAD/docs/MIGRATION_v1.md)
covers the upgrade from v0.x.

`httpfs`, `zipfs`, `tarfs` and `multipartfs` come with the core module. The
network backends are modules of their own: get the ones you use together
with the core module, at the same version.

```bash
go get github.com/ungerik/go-fs@v1.0.0-rc.6 github.com/ungerik/go-fs/s3fs@v1.0.0-rc.6 # or azureblobfs, sftpfs, ftpfs, smbfs, webdavfs, dropboxfs
```

Example
-------

```go
import (
    fs "github.com/ungerik/go-fs"
    _ "github.com/ungerik/go-fs/httpfs" // registers http:// and https://…
