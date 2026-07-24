---
repo: "ballerina-platform/module-ballerina-tcp"
name: "module-ballerina-tcp"
description: "Ballerina socket module"
readmeQualityOk: true
url: "https://github.com/ballerina-platform/module-ballerina-tcp"
language: "Java"
languages: ["Java", "Ballerina"]
languagePcts: [71, 28]
topics: ["hacktoberfest", "ballerina", "integration", "tcp", "wso2"]
stars: 118
forks: 48
openIssues: 0
closedIssues: 0
watchers: 63
contributors: 89
recentReleases: 0
createdAt: "2020-04-16T12:02:41Z"
lastCommitAt: "2026-07-24T06:09:46Z"
lastReleaseAt: "2021-02-12T10:10:41Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 41
maintainers: ["ballerina-cicd-bot", "daneshk", "TharmiganK"]
openGraphImageUrl: "https://opengraph.githubassets.com/64a33b200046516ae5a14d70ad5f7f7fbbd471bfffff63c020ac275516d94a24/ballerina-platform/module-ballerina-tcp"
---

Ballerina TCP Library
===================

This library provides a client-server implementation for sending/receiving messages to/from another application process (local or remote) for connection-oriented protocols. 

#### Client

The `tcp:Client` is used to connect to a socket server and interact with it.
The client can send the data to the server and retrieve the data from the server.

A client can be defined by providing the `remoteHost` and the `remotePort`.
A simple client code is as follows.

```ballerina
import ballerina/tcp;

public function main() returns error? {
    tcp:Client socketClient = check new("localhost", 3000);

    string msg = "Hello Ballerina";
    byte[] msgByteArray = msg.toBytes();
    check  socketClient->writeBytes(msgByteArray);

    readonly & byte[] receivedData = check socketClient->readBytes();

    check socketClient->close();
}
```

#### Listener

The `tcp:Listener` is used to listen to the incoming socket request. The `onConnect(tcp:Caller)` remote method gets invoked when a new client is connected. The new client is represented using the `tcp:Caller`. The `onConnect(tcp:Caller)` method may return `tcp:ConnectionService|tcp:Error`.

The…
