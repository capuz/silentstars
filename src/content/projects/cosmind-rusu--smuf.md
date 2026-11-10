---
repo: "cosmind-rusu/smuf"
name: "smuf"
description: "Self-hosted HTTP tunnel tool — like ngrok, but yours. No quotas, no limits, on your own server."
readmeQualityOk: true
url: "https://github.com/cosmind-rusu/smuf"
homepage: "https://smuf.cdrusu.com"
language: "Go"
languages: ["Go", "HTML"]
languagePcts: [68, 27]
topics: ["http", "network", "ngrok", "simple", "tcp", "tunnel"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-04-13T14:19:10Z"
lastCommitAt: "2026-11-10T14:49:38Z"
lastReleaseAt: "2026-09-01T23:30:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 27
maintainers: ["cosmind-rusu"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b7b3155756c2bb78405a80a2b39b8858b53cbeef2c6532c714ea1bd7a556f57/cosmind-rusu/smuf"
discussionCount: 0
---

---

smuf exposes a local TCP port through a server you control. HTTP tunnels get a subdomain such as `https://myapp.tunnels.example.com`; raw TCP tunnels get a public port. The client and server are separate Go binaries, and [yamux](https://github.com/hashicorp/yamux) carries concurrent streams for each tunnel over one control connection.

```
localhost:3000  ◄─────►  http://a3f1c9d4e2b8.tunnels.example.com:8080
```

smuf does not require a smuf account or a hosted control plane. It also does not remove infrastructure limits: capacity depends on your server, network, hosting provider, and the connection limits you configure.

## When smuf fits

Use smuf when you want to expose a development HTTP service, webhook receiver, or TCP service without deploying that service, and you can provide:

- a publicly reachable server;
- a base domain and wildcard DNS for HTTP tunnels;
- inbound access to the control port and public service ports.

Choose something else if you need UDP, a managed public endpoint without running a server, per-user access control, an encrypted control channel built into the application, or multiple server replicas sharing tunnel state. smuf currently provides none…
