---
repo: "programmer-ke/replatform"
name: "replatform"
description: "Run your own websites and email accounts"
readmeQualityOk: true
url: "https://github.com/programmer-ke/replatform"
language: "Jinja"
languages: ["Jinja"]
languagePcts: [96]
topics: ["ansible", "debian", "dovecot", "email", "linux", "nginx", "postfix", "self-hosted", "website"]
stars: 7
forks: 1
openIssues: 4
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-08-11T10:03:44Z"
lastCommitAt: "2026-09-17T08:51:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 36
maintainers: ["programmer-ke", "nonholamilza"]
openGraphImageUrl: "https://opengraph.githubassets.com/d418a19a0f0b34730abd1ee676f79bbeded306c85dac87ccf5229c51daf83d4b/programmer-ke/replatform"
---

# replatform

Run your own websites and email accounts using a platform you control.

This project allows anyone with basic unix command-line skills to
quickly setup and easily maintain websites and email accounts on
Debian Linux.

It uses an [ansible][10] playbook to install and configure a server
with one or more domains on which you can host websites and any number
of email accounts.

All packages used are installed from Debian repositories. This makes
it much easier to stay up to date and secure, and reduces the work
needed to migrate to newer versions of Debian.

[10]: https://docs.ansible.com/ansible/latest/getting_started/index.html

## Features

- Supports multiple domains for email accounts and websites on one server
- Just one command to setup the entire system: `ansible-playbook site.yml`
- Critical security updates automatically installed once the server is up and running
- DKIM, SPF, DMARC configured reducing the probability of sent mail being marked as spam
- Automated, free TLS certificate via [Let's Encrypt][7] to secure your websites and emails
- Out of the box server side web analytics via [goaccess][9]

[7]: https://letsencrypt.org/
[9]: https://goaccess.io/

##…
