---
repo: "tks98/snoopy"
name: "snoopy"
description: "Debug HTTPS without a proxy: see what any Linux program, browsers included, sends and receives over TLS, with eBPF."
readmeQualityOk: true
url: "https://github.com/tks98/snoopy"
language: "Go"
languages: ["Go", "C"]
languagePcts: [64, 35]
topics: ["ebpf", "golang", "ssl", "tls", "tracing", "uprobes", "boringssl", "http2", "http3", "https"]
stars: 22
forks: 4
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 9
createdAt: "2023-10-22T01:56:45Z"
lastCommitAt: "2026-10-25T02:46:10Z"
lastReleaseAt: "2026-10-25T01:06:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 72
maintainers: ["tks98", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6cf6409a5a1611c9219dab899bd64c7e1fc3f4f2d0fb145765a651152f7667a/tks98/snoopy"
---

# snoopy

Debug HTTPS without a proxy. snoopy shows what any Linux program sends and
receives over TLS, browsers included, without certificates or changes to the
program. It uses eBPF to read the data where the program hands it to its TLS
library, before it's encrypted and after it's decrypted.

Chromium loading example.com and Cloudflare's test page over HTTP/3, and
Wikipedia over HTTP/2, recorded with
[docs/demo/record.sh](https://github.com/tks98/snoopy/blob/HEAD/docs/demo/record.sh).

## Quick start

Download a binary for `linux_amd64` or `linux_arm64` from the
[releases page](https://github.com/tks98/snoopy/releases), or build one with
Go 1.26 or later, and copy it to where `sudo` finds it:

```bash
# a release binary
tar xzf snoopy_*_linux_amd64.tar.gz snoopy
sudo install snoopy /usr/local/bin/

# or with Go; sudo doesn't search Go's bin directory, hence the copy
go install github.com/tks98/snoopy/v2@latest
sudo install "$(go env GOPATH)/bin/snoopy" /usr/local/bin/
```

Then run `sudo snoopy --brief` and make some requests from another terminal,
here with curl over HTTP/1.1 and HTTP/2, and Chrome over HTTP/3:

```console
$ sudo snoopy --brief
06:42:53.389996 curl[32719]…
