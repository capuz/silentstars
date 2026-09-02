---
repo: "qt/qtcoap"
name: "qtcoap"
description: "Qt CoAP client module"
readmeQualityOk: true
url: "https://github.com/qt/qtcoap"
language: "C++"
languages: ["C++"]
languagePcts: [96]
stars: 21
forks: 19
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 36
recentReleases: 0
createdAt: "2017-10-16T14:01:52Z"
lastCommitAt: "2026-09-02T07:31:09Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 78
undervaluedScore: 63
maintainers: ["isolovev", "jaheikk", "marcmutz"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f2bc5a0144c36729c1bf163b10c7dc465525f91c1f25e2ba2e48475e98a7b4d/qt/qtcoap"
---

## Introduction
This is the Qt CoAP module repository. CoAP is a protocol for IoT devices, and machine to machine communication.
The full specification can be found in [RFC 7252](https://tools.ietf.org/html/rfc7252).

### Supported features

- CoAP Client
- Send GET/POST/PUT/DELETE requests
- Discover resources (single server)
- Observe resources and cancel the observation
- Blockwise requests and replies
- Confirmable and non-confirmable messages
- Some options can be added to the request
- Replies can be received in a separate or piggybacked message

### Unsupported yet

- CoAP Server

## How to use the library

### GET/POST/PUT/DELETE requests
```c++
QCoapClient* client = new QCoapClient(this);
connect(client, &QCoapClient::finished, this, &MyClass::onFinished);
client->get(QUrl("coap://coap.me/test"));
client->put(QUrl("coap://coap.me/test"), QByteArray("payload"));
```
or
```c++
QCoapReply* reply = client->get(QCoapRequest("coap://coap.me/test"));
connect(reply, &QCoapReply::finished, this, &MyClass::onFinished);
```
The slot connected to the `QCoapReply::finished(QCoapReply *)` signal can use the `QCoapReply`
object like a `QIODevice` object.

### OBSERVE requests
Observe…
