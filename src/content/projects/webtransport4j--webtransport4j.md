---
repo: "webtransport4j/webtransport4j"
name: "webtransport4j"
description: "Next-generation real-time high performance WebTransport server for the Java ecosystem. Low-latency streaming and datagrams via HTTP/3 and QUIC powered by Netty"
url: "https://github.com/webtransport4j/webtransport4j"
language: "Java"
languages: ["Java"]
languagePcts: [83]
topics: ["java", "realtime", "websocket", "webtransport", "netty", "socketio", "http3", "quic", "async", "client"]
stars: 48
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-01-18T09:36:36Z"
lastCommitAt: "2026-06-25T06:41:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 33
maintainers: ["sanjomo"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0f95f618e324dc9d0bc12105922cbabdaa55ad9180e2c9855891e74c4a79241/webtransport4j/webtransport4j"
---

# webtransport4j-incubator

The first high-performance WebTransport server for the Java ecosystem, powered by Netty's asynchronous HTTP/3 stack.

# Local Development Guide

Follow these steps to run `webtransport4j` locally with a trusted self-signed certificate and a secure browser connection.

## 1. Generate Certificates (mkcert)

WebTransport requires HTTPS. We use `mkcert` to create a locally trusted certificate.

1. **Install mkcert:**
```bash
brew install mkcert
brew install nss  # Only needed if you use Firefox

```

2. **Initialize Root CA:**
```bash
mkcert -install

```

3. **Generate Certs:**
Run this in your **Documents** folder to match the Java config below.
```bash
cd ~/Documents
mkcert localhost

```

*Output:* `localhost.pem` and `localhost-key.pem`

```
openssl req -new -key /Users/<username>/Documents/localhost-key.pem \
  -out /tmp/localhost.csr \
  -subj "/CN=localhost" \
  -config <(printf "[req]\ndistinguished_name=dn\nreq_extensions=ext\n[dn]\nCN=localhost\n[ext]\nsubjectAltName=DNS:localhost,IP:127.0.0.1,IP:::1")

CAROOT=$(mkcert -CAROOT)

openssl x509 -req -in /tmp/localhost.csr \
  -CA "$CAROOT/rootCA.pem" \
  -CAkey "$CAROOT/rootCA-key.pem" \…
