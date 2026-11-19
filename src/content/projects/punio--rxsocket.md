---
repo: "punio/RxSocket"
name: "RxSocket"
description: "Socket wrapper for Rx"
readmeQualityOk: true
url: "https://github.com/punio/RxSocket"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 11
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2017-03-17T00:40:56Z"
lastCommitAt: "2026-11-19T05:00:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 55
maintainers: ["punio"]
openGraphImageUrl: "https://opengraph.githubassets.com/71bbe72c24010f0d113fc2bf1df7f003bad2c1313a034ab6276ddd70f003757b/punio/RxSocket"
---

# RxSocket [](https://www.nuget.org/packages/Punio.RxSocket/) [](https://github.com/punio/RxSocket/blob/master/LICENSE)

Socket wrapper for Rx

Targets .NET 6 and later.

## Install
```
PM> Install-Package Punio.RxSocket 
```

## Usage

### RxTcpClient
```cs
var client = new RxTcpClient();
// Subscribe
client.Error.Subscribe();
client.Closed.Subscribe();
client.Received.Subscribe();

// Connect
try{
  client.Connect("127.0.0.1",10000);
}catch(Exception){}
```

### RxTcpServer
```cs
var server = new RxTcpServer();
// Subscribe
server.Error.Subscribe();
server.Accepted.Subscribe();  // client connected
server.Closed.Subscribe();  // client closed
server.Received.Subscribe();

// Listen
try{
  server.Listen(IPAddress.Any.ToString(),10000);
}catch(Exception){}
```

### RxUdpListener

Subscribe to `Error` to detect when a receive failure stops the listener.
Call `Listen` again to resume receiving with the same `Received` subscription.
