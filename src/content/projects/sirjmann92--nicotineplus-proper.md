---
repo: "sirjmann92/nicotineplus-proper"
name: "nicotineplus-proper"
description: "Nicotine+ as a WebUI in a Docker container"
url: "https://github.com/sirjmann92/nicotineplus-proper"
language: "Shell"
languages: ["Shell", "Dockerfile"]
languagePcts: [68, 32]
stars: 133
forks: 9
openIssues: 0
closedIssues: 37
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2024-04-28T14:23:10Z"
lastCommitAt: "2026-07-03T12:22:06Z"
status: "thriving"
tags: ["funded"]
healthScore: 83
undervaluedScore: 33
maintainers: ["sirjmann92", "droserasprout", "rcland12"]
openGraphImageUrl: "https://opengraph.githubassets.com/fe6f94ea670e77e256da2b8e64ce6c3092dea910302af6a529c99af2ca08837a/sirjmann92/nicotineplus-proper"
fundingLinks: ["GITHUB:https://github.com/sirjmann92"]
---

Nicotine+ as a WebUI in a Docker container
==========================================

Nicotine+ is a graphical client for the Soulseek peer-to-peer network.
  
Nicotine+ aims to be a lightweight, pleasant, free and open source (FOSS) alternative to the official Soulseek client, while also providing a comprehensive set of features.
  
For more information, head to the [official Nicotine+ website](https://nicotine-plus.org)
  
This is a Nicotine+ Docker image, using port 6565 (by default) to access Nicotine+ in a browser using the Broadway back end of GTK as the display server. This makes the image extremely small, lightweight, and fast, because it has less complications and dependencies. This also means there is no authentication available to access the application (as there would be with noVNC). If you plan to use this remotely as part of your self-hosted setup, you'll need to use something like Authentik or Authelia to provide the authenticaion layer. Alternatively, you could use a self-hosted VPN server and access the application externally as if you're on the local network. These items are outside the scope of this project but I wanted to provide alternatives if you need to…
