---
repo: "VirtualSamuraii/flyphish"
name: "flyphish"
description: "Deploy a phishing infrastructure on the fly."
readmeQualityOk: true
url: "https://github.com/VirtualSamuraii/flyphish"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 80
forks: 7
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-12-20T23:28:50Z"
lastCommitAt: "2026-11-13T18:24:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 22
maintainers: ["VirtualSamuraii"]
openGraphImageUrl: "https://opengraph.githubassets.com/453acd68d9095764a8dc93784741b1b0e1e18b455289f9251725ab06e6d43012/VirtualSamuraii/flyphish"
---

# Flyphish

Flyphish is an Ansible playbook allowing cyber security consultants to deploy a phishing server in the cloud for security assessments.

The playbook installs and configures **Gophish**, **Postfix** and **OpenDKIM** on a virtual machine in the cloud. Additionally, for OPSEC purposes, the playbook removes default IOCs (SMTP headers) from Gophish and Postfix servers configurations.

# Install

## Requirements

* Make sure you have a Linux (Debian, Ubuntu or Kali) instance in the cloud (Amazon EC2, Azure VM, Google GCE...) with a public IPv4 address, Git & OpenSSH installed. Enable root access with SSH key-based authentication only.

* Make sure you have a domain name and set it's DNS records accordingly (A, MX and SPF records must point to your cloud instance's public IP address).

* Install Ansible on your own machine :

```
sudo apt install ansible
```

## Installation steps

* Clone the repository

```
git clone --recursively https://github.com/VirtualSamuraii/flyphish.git
```

* Put your cloud instance public IP address in the **hosts** file.

* Put your "phishing domain" and "sender domain" in the **group_vars/all.yml** file.

The "phishing_domain" variable is the…
