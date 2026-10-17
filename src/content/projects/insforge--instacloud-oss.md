---
repo: "InsForge/instacloud-oss"
name: "instacloud-oss"
description: "Cloud infrastructure built from the ground up for agents to provision and operate directly. "
readmeQualityOk: true
url: "https://github.com/InsForge/instacloud-oss"
homepage: "https://www.instacloud.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [80]
topics: ["agent-native", "cloud-infrastructure", "instacloud", "self-hosted"]
stars: 164
forks: 19
openIssues: 6
closedIssues: 3
watchers: 0
contributors: 6
recentReleases: 7
createdAt: "2026-07-01T23:16:05Z"
lastCommitAt: "2026-10-16T22:21:52Z"
lastReleaseAt: "2026-10-09T05:29:12Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 84
undervaluedScore: 31
maintainers: ["CarmenDou", "Fermionic-Lyu", "jwfing"]
openGraphImageUrl: "https://opengraph.githubassets.com/c826a82eca5b3511d4a59192568de5b9832c818e801141b43dcd89c7b991692b/InsForge/instacloud-oss"
---

A self-hosted alternative to Railway, Render, Fly and AWS. One daemon over your Docker gives every
  app a managed Postgres and S3 bucket, git push-to-deploy, disposable branch environments that fork
  all three, and scale-to-zero, with the same <code>insta</code> CLI, MCP server and agent skills as
  the hosted platform.

```
project = a Postgres database + an S3 bucket + your app containers
branch  = a disposable, fully isolated clone of all three
```

## Quick start

On a fresh Ubuntu or Debian VPS (2 vCPU, 2 GiB RAM, 15 GiB free disk, with inbound 80 and 443
open), one command brings up the whole platform, TLS included:

```bash
curl -fsSL https://raw.githubusercontent.com/InsForge/instacloud-oss/main/install.sh | sudo sh
```

About a minute later you have a live URL and an admin setup page that mints your first CLI token.
Prefer to read the script first? Download it with `-o install.sh` and page through it before running,
rather than piping straight to `sudo sh`. No lock-in: it is plain Docker underneath, so your
containers keep running even if you stop using InstaCloud. Full walkthrough and your own domain are
in [Install on a VPS](#install-on-a-vps); running with no cloud…
