---
repo: "haskell-tls/hs-tls"
name: "hs-tls"
description: "TLS/SSL implementation in haskell"
readmeQualityOk: true
url: "https://github.com/haskell-tls/hs-tls"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [98]
stars: 414
forks: 112
openIssues: 33
closedIssues: 217
watchers: 17
contributors: 61
recentReleases: 0
createdAt: "2010-09-09T21:41:49Z"
lastCommitAt: "2026-09-25T09:02:34Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 92
undervaluedScore: 37
maintainers: ["kazu-yamamoto", "thevilledev", "hs-viktor"]
openGraphImageUrl: "https://opengraph.githubassets.com/9880075eda2100763751cfeea1ccdbcaa475a1e6e4505f33645cc7aa351eeacd/haskell-tls/hs-tls"
---

# Haskell TLS

* `tls` :: library for TLS 1.2/1.3 server and client purely in Haskell
* `tls-session-manager` :: library for in-memory session DB and session ticket.

If the `devel` flag is specified to `tls`, `tls-client` and `tls-server` are also built.

## Usage of `tls-client`

```
Usage: quic-client [OPTION] addr port [path]
  -d           --debug                print debug info
  -v           --show-content         print downloaded content
  -l <file>    --key-log-file=<file>  a file to store negotiated secrets
  -g <groups>  --groups=<groups>      specify groups
  -e           --validate             validate server's certificate
  -R           --resumption           try session resumption
  -Z           --0rtt                 try sending early data
  -S           --hello-retry          try client hello retry
  -2           --tls12                use TLS 1.2
  -3           --tls13                use TLS 1.3

  <groups> = ffdhe2048,ffdhe3072,ffdhe4096,ffdhe6144,ffdhe8192,p256,p384,p521,x25519,x448
```

### TLS 1.3 full negotiation

```
% tls-client -3 -d 127.0.0.1 443
------------------------
Version: TLS1.3
Cipher: TLS_AES_256_GCM_SHA384
Compression: 0
Groups: X25519…
