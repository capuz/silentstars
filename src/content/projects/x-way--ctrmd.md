---
repo: "x-way/ctrmd"
name: "ctrmd"
description: "Conntrack entry removal daemon"
readmeQualityOk: true
url: "https://github.com/x-way/ctrmd"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["conntrack", "nflog", "netfilter", "golang", "iptables"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2019-02-22T04:49:33Z"
lastCommitAt: "2026-10-31T01:59:42Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 80
maintainers: ["renovate[bot]", "x-way"]
openGraphImageUrl: "https://opengraph.githubassets.com/3acd67404f84bcc457aaf7da592b21879bf1083091c2f2d29440be4e92eff4b4/x-way/ctrmd"
---

# ctrmd - conntrack entry removal daemon

ctrmd provides a mechanism to delete conntrack entries with iptables rules.

As there is no native support for deleting conntrack entries in iptables, the following approach is used:
-   packets are sent to a dedicated NFLOG group in iptables
-   ctrmd listens on this NFLOG group and issues conntrack delete instructions for each received packet

## Usage
Create iptables rule
```
# iptables -I FORWARDING -s 1.2.3.4 -d 5.6.7.8 -j NFLOG --nflog-group 666
```
Start ctrmd
```
# ctrmd -g 666
```
Observe how conntrack entries are deleted (destroyed in conntrack speak)
```
# conntrack -E -e DESTROY
[DESTROY] udp      17 src=1.2.3.4 dst=5.6.7.8 sport=49481 dport=53 src=5.6.7.8 dst=1.2.3.4 sport=53 dport=49481
[DESTROY] udp      17 src=1.2.3.4 dst=5.6.7.8 sport=40945 dport=53 src=5.6.7.8 dst=1.2.3.4 sport=53 dport=40945
[DESTROY] udp      17 src=1.2.3.4 dst=5.6.7.8 sport=49522 dport=53 src=5.6.7.8 dst=1.2.3.4 sport=53 dport=49522
```
