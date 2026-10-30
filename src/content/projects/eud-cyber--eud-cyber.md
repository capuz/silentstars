---
repo: "EUD-cyber/eud-cyber"
name: "eud-cyber"
description: "cyber eud"
readmeQualityOk: true
url: "https://github.com/EUD-cyber/eud-cyber"
language: "Shell"
languages: ["Shell"]
languagePcts: [64]
stars: 12
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2025-12-16T18:09:32Z"
lastCommitAt: "2026-10-30T10:23:39Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 54
maintainers: ["mmjo-80", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c657f97bd1e8c0e8689be2f8d7f609796ae4e6bf21fa0a1a0a4ccca984fb3460/EUD-cyber/eud-cyber"
---

# eud-cyber
This github if created for the cyber education on danish technical colleges to create a safe and automated lab environment for the students to pratice in, but its free for all to download and play with

This script is testet with proxmox 9.1, 9.1.1 and 9.2

just git clone this site and run  run install.sh \

When installing you have the install options.

Big install 
Big install multilab 
Mini install (not done yet)
Mini install multillab (not done yet)

big = hardware need x cores, 100 gb memory, 200 gb hdd
mini = hardware need x cores, x gb memory, x gb hdd
multilab = ask for x labs and the install the number, vm and network is called labx-

When choosen 90 i the install theres an option to install other vm in the lab, default is guacvm, opnsense, kali01, vulnsrv01, all the vm is on a single lan named lan1 the option vm og on either lan1 or lan2 see it in the option in the install

In the multi lab install it ask how many labs you want to install then it runs the input script x times for input on the guacvm and opnsense ip adresse, and create a labx_lanx network for each lab, then it runs all installation in a tmux session that waits for the other to complete.…
