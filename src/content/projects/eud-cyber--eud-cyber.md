---
repo: "EUD-cyber/eud-cyber"
name: "eud-cyber"
description: "cyber eud"
readmeQualityOk: true
url: "https://github.com/EUD-cyber/eud-cyber"
language: "Shell"
languages: ["Shell"]
languagePcts: [63]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2025-12-16T18:09:32Z"
lastCommitAt: "2026-10-15T08:33:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 53
maintainers: ["mmjo-80"]
openGraphImageUrl: "https://opengraph.githubassets.com/71aa9c5e747d79803f25b617c337dc65a0c47a6407b5d524a28e5531e72c8103/EUD-cyber/eud-cyber"
---

# eud-cyber
This github if created for the cyber education on danish technical colleges to create a safe and automated lab environment for the students to pratice in, but its free for all to download and play with

This script is testet with proxmox 9.1 and 9.1.1

just git clone this site and run  run install.sh \
then 4 options \
1 full install, wih options to install singel vm\
2 mini install requires, 4 cores, 32 gb memory, 500 gb hdd \
3 install multiple labs full spec on single proxmox \
4 install multiple labs mini spec on single proxmox

In the multi lab install it ask how many labs you want to install then it runs the input script x times for input on the guacvm and opnsense ip adresse, and create a labx_lanx network for each lab, then it runs all installation in a tmux session that waits for the other to complete.

Remember when the vm is created and started, the cloud-init goes to work so it can be some time before all things work, to check this use proxmox and login to the vm and type "cloud-init status" if it "running" grap a cup of coffee and wait for it to be "done"

When the GUACVM is up and running and the cloud-init is done, just http://ip_address (the ip adresse…
