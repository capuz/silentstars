---
repo: "annetutil/annet"
name: "annet"
description: "Configuration generation and deploying utility for network equipment"
readmeQualityOk: true
url: "https://github.com/annetutil/annet"
homepage: "https://annetutil.github.io/annet/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["automation", "network-automation"]
stars: 193
forks: 70
openIssues: 8
closedIssues: 33
watchers: 11
contributors: 55
recentReleases: 0
createdAt: "2023-10-20T20:56:09Z"
lastCommitAt: "2026-09-11T08:15:21Z"
lastReleaseAt: "2024-04-11T08:26:01Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 44
maintainers: ["drtyrsa", "denballakh", "vdjdance"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c8bd27a3ea5c35b4b9ad857c05dcbbf5e86b0222aa826e2e141ea1cee51522c/annetutil/annet"
---

# Annet - configuration generation and deploying utility for network equipment

Annet is a configuration generator that can translate differences between old and new configurations into sequence of commands. This feature is vital for CLI-based devices, such as Huawei, Cisco IOS, Cisco NX-OS, Juniper. Devices configured via separate config files, Linux, FreeBSD and Cumulus are also supported.

It works this way. Annet `gen`erates configuration for a device by running Python code, which usually goes to the Network Source of Truth, like NetBox. Annet then gets the `diff`erence by getting the configuration from the device and comparing it. Finally, Annet translates the difference into a sequence of commands, called a `patch`. After `deploy`ing these commands, the diff will be empty.

Annet has a number of modes (subcommands):

- ```annet gen``` - generates the entire config for the specified devices or specified parts of it
- ```annet diff``` - first does gen and then builds diff with current config version
- ```annet patch``` - first does diff and then generates a list of commands to apply diff on the device
- ```annet deploy``` - first does patch and then deploys it to the device…
