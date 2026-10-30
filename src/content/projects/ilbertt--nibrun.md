---
repo: "ilbertt/nibrun"
name: "nibrun"
description: "Upload a binary. Get a server."
readmeQualityOk: true
url: "https://github.com/ilbertt/nibrun"
homepage: "https://nibrun.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["binary", "bun", "cloud", "filesystem", "firecracker-sandbox", "hosting", "microvm", "sqlite"]
stars: 116
forks: 4
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-07-31T16:38:05Z"
lastCommitAt: "2026-10-30T10:22:40Z"
lastReleaseAt: "2026-08-31T10:44:46Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 38
maintainers: ["ilbertt", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3b4583523951392159dd169bebe7f24a822511e442b9371d7c18e399a26f234/ilbertt/nibrun"
discussionCount: 1
---

Small apps don't need to scale. They need a machine and a disk.

## Try it out

Visit [nibrun.com/apps](https://nibrun.com/apps) to see the available apps you can deploy in one click.

## Why

A compiled binary is already a whole application in one file. Whatever language produced it,
nothing has to be installed on the other side. The only two things it still needs are somewhere
to run and somewhere to read and write files.

For an app that five people use, most of the rest is ceremony:

| What it usually gets | What it actually needs |
| --- | --- |
| ❌ ~~A container image~~ | ✅ **A machine to run on** |
| ❌ ~~A managed Postgres~~ | ✅ **A disk to write to** |
| ❌ ~~An object storage bucket~~ | |
| ❌ ~~A load balancer, for one instance~~ | |
| ❌ ~~A VM to ssh into~~ | |
| ❌ ~~A firewall to open~~ | |
| ❌ ~~TLS to renew~~ | |
| ❌ ~~An OS to keep updated~~ | |

## What it is

nibrun is those two things and nothing else: a Firecracker microVM of its own (1 vCPU, 256 MiB)
and a `data/` directory that survives every redeploy. It answers on an HTTPS subdomain the moment
it boots, sleeps after five minutes idle, and wakes on the next request in ~120 ms.

If your app needs to be more than…
