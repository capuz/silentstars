---
repo: "minekube/connect"
name: "connect"
description: "Minekube Connect allows you to connect any Minecraft server, whether online mode, public, behind your protected home network or anywhere else in the world, with our managed, highly available, performant and low latency edge proxies network nearest to you."
readmeQualityOk: true
url: "https://github.com/minekube/connect"
homepage: "https://connect.minekube.com"
language: "Go"
languages: ["Go", "Vue"]
languagePcts: [43, 33]
topics: ["minecraft", "proxy", "minecraft-proxy", "golang", "java", "edge", "network", "paper", "minecraft-network", "ddos-protection"]
stars: 65
forks: 12
openIssues: 4
closedIssues: 11
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2022-01-28T16:41:44Z"
lastCommitAt: "2026-09-03T08:14:09Z"
lastReleaseAt: "2022-03-03T12:44:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 52
maintainers: ["robinbraemer", "minekube-ai-engineer[bot]", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/453142778/d735f7bd-81ab-4670-96e2-0d5eb4d34ac0"
---

# Minekube Connect

**Connect** allows you to connect any Minecraft server,
whether it's in online mode, public, behind your protected home network or anywhere else in the world,
with our highly available, performant and low latency edge proxies network nearest to you.

**Browse active servers now! Join `minekube.net` with your Minecraft client!**

> Note that the [client is open source](https://github.com/minekube/connect-java), but not the server side production service.

## Bedrock support

Connect now lets Bedrock players join connected servers through the same endpoint names,
`play.minekube.net` subdomains, and custom domains Java players already use. If you use
the Connect plugin on Paper/Spigot, Velocity, or BungeeCord, there is no Geyser plugin
or extra Bedrock proxy to install.

If you self-host standard Gate and want Bedrock players to connect directly to that Gate
instance, enable Gate-managed Bedrock with one config line:

```yaml
bedrock: true
```

You do not need this setting just to receive Bedrock players through the Connect network.

For proxy, TCPShield, direct-backend, and login-plugin setups, see the
[forwarding and topology…
