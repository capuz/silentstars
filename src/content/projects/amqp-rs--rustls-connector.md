---
repo: "amqp-rs/rustls-connector"
name: "rustls-connector"
description: "Connector similar to openssl or native-tls for rustls"
readmeQualityOk: true
url: "https://github.com/amqp-rs/rustls-connector"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 8
forks: 4
openIssues: 0
closedIssues: 12
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2019-05-25T22:10:42Z"
lastCommitAt: "2026-11-22T08:23:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 92
undervaluedScore: 71
maintainers: ["Keruspe"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbbcb62b7a283a37b8d3c4995d4178ddf4b64928ef08f90eb23a5df8264807d6/amqp-rs/rustls-connector"
fundingLinks: ["GITHUB:https://github.com/Keruspe"]
---

**A TLS connector for rustls modelled after the `openssl` and `native-tls` APIs.**

rustls-connector gives rustls the connector API of the `openssl` and
`native-tls` crates: build a `RustlsConnector` from a choice of root
certificates, call `connect` on a stream such as a `TcpStream`, and retry the
handshake on non-blocking streams the same way. It is the rustls backend of
`tcp-stream`, and the `futures` feature adds an async `connect_async`.

Both connection methods accept borrowed I/O streams and streams that do not
implement `Send`; async streams must also implement `Unpin`.

## Feature flags

### Certificate store (pick at least one)

| Flag | Notes |
|------|-------|
| `platform-verifier` *(default)* | Platform trust store via rustls-platform-verifier |
| `native-certs` | Native root certificates via rustls-native-certs |
| `webpki-root-certs` | Bundled Mozilla root certificate set |
