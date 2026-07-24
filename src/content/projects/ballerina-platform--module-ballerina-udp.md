---
repo: "ballerina-platform/module-ballerina-udp"
name: "module-ballerina-udp"
description: "Ballerina UDP module enables transport layer communication over UDP protocol."
readmeQualityOk: true
url: "https://github.com/ballerina-platform/module-ballerina-udp"
language: "Java"
languages: ["Java", "Ballerina"]
languagePcts: [70, 29]
topics: ["udp", "transport-layer", "ballerina", "socket", "hacktoberfest", "integration", "wso2"]
stars: 111
forks: 28
openIssues: 0
closedIssues: 0
watchers: 63
contributors: 85
recentReleases: 0
createdAt: "2020-12-07T08:39:04Z"
lastCommitAt: "2026-07-24T06:09:43Z"
lastReleaseAt: "2021-04-23T15:13:30Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 79
undervaluedScore: 26
maintainers: ["ayeshLK", "ballerina-cicd-bot", "daneshk"]
openGraphImageUrl: "https://opengraph.githubassets.com/beb2826f74bbf5503952cfdae7059db0e656131e63cd628353a7cbdfe7a743e9/ballerina-platform/module-ballerina-udp"
---

Ballerina UDP Library
===================

This library provides APIs for sending/receiving messages to/from another application process (local or remote) for connectionless protocols.

When the local host address or the IP address is not given to the optional `localHost` field, the `localhost` address is bound by default.
The port number of the local port, which is used to connect to the remote server is determined randomly (ephemeral port).

#### Client
The `udp:Client` is used to interact with the remote UDP host and it can be defined as follows:

```ballerina
udp:Client socketClient = check new;

udp:Datagram datagram = {
    remoteHost: "localhost",
    remotePort : 48829,
    data : "Hello Ballerina".toBytes()
};

check socketClient->sendDatagram(datagram);

readonly & udp:Datagram result = check socketClient->receiveDatagram();

check socketClient->close();
```

#### ConnectClient
The `udp:ConnectClient` is configured by providing the `remoteHost` and `remotePort` so that it only receives data from and sends data to the configured remote host. Once connected, data may not be received from or sent to any other hosts. The client remains connected until it is explicitly…
