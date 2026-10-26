---
repo: "urnetwork/connect"
name: "connect"
description: "Open core client, protocol, and api written in Go"
readmeQualityOk: true
url: "https://github.com/urnetwork/connect"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 50
forks: 17
openIssues: 26
closedIssues: 12
watchers: 3
contributors: 12
recentReleases: 0
createdAt: "2022-12-13T20:14:11Z"
lastCommitAt: "2026-10-26T02:58:35Z"
lastReleaseAt: "2026-03-25T04:32:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 49
maintainers: ["xcolwell", "bitprecipice", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/92cc3cf62aa8945dfdbc4d1bb40ac3f4c2f7765750c89ec67dd97852d14f45eb/urnetwork/connect"
---

# URnetwork Connect

A web-standards VPN marketplace with an emphasis on fast, secure internet everwhere. This project exists to create a trusted best-in-class technology for the "public VPN" market, that:

- Works on consumer devices from the normal app stores
- Allows consumer devices to tap into existing resources to enhance the public VPN. We believe a more ubiquitous and distributed VPN will be better for consumers.
- Emphasizes privacy, security, and availability

## Protocol

[Protocol defintion](https://github.com/urnetwork/connect/blob/HEAD/protocol): Protobuf messages for the realtime transport protocol

[API definition](https://github.com/urnetwork/connect/blob/HEAD/api): OpenAPI definition for the API for clients to interact with the marketplace

## Buffer reuse

Anywhere in the code that returns a `[]byte` will allocate it from the shared message pool. The following rules are used:

- When passing `[]byte` into a function that takes ownership of the `[]byte`, the final owner should return the byte to the message pool when finished. Examples of this are passing a `[]byte` to a channel and async io loop functions.
- When passing a `[]byte` to a callback, the callback…
