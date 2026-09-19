---
repo: "openssh-rust/openssh-sftp-client"
name: "openssh-sftp-client"
description: "sftp v3 client implemented using pure rust"
readmeQualityOk: true
url: "https://github.com/openssh-rust/openssh-sftp-client"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["rust", "sftp", "sftp-client", "async", "tokio-rs"]
stars: 62
forks: 7
openIssues: 4
closedIssues: 36
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2021-11-26T10:45:16Z"
lastCommitAt: "2026-09-19T02:45:18Z"
lastReleaseAt: "2023-08-09T11:00:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 83
undervaluedScore: 31
maintainers: ["github-actions[bot]", "dependabot[bot]", "yshui"]
openGraphImageUrl: "https://opengraph.githubassets.com/2aff0d199978caef04ae4e6ca0ba6008d24ed720d99c5906f2a8c158e4ff036e/openssh-rust/openssh-sftp-client"
---

# openssh-sftp-client

openssh-sftp-client, implements [sftp v3] according to
[`openssh-portable/sftp-client.c`] in rust using `tokio` and `serde`.

It exposes highlevel `async` APIs that models closely after `std::fs` that are
easy to use.

[sftp v3]: https://www.openssh.com/txt/draft-ietf-secsh-filexfer-02.txt
[`openssh-portable/sftp-client.c`]: https://github.com/openssh/openssh-portable/blob/19b3d846f06697c85957ab79a63454f57f8e22d6/sftp-client.c

## Extensions

This crate support the following extensions:
 - limits
 - expand path
 - fsync
 - hardlink
 - posix rename
 - copy-data

## How to run tests

For macOS, please install latest rsync from homebrew.

```
./run_tests.sh
```
