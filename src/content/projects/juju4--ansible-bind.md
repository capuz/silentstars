---
repo: "juju4/ansible-bind"
name: "ansible-bind"
description: "ansible role to setup Bind/Named DNS server with sane secure default."
readmeQualityOk: true
url: "https://github.com/juju4/ansible-bind"
language: "Ruby"
languages: ["Ruby", "Jinja", "Shell"]
languagePcts: [46, 34, 20]
stars: 7
forks: 7
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2016-11-28T01:36:36Z"
lastCommitAt: "2026-08-05T06:07:52Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 69
undervaluedScore: 52
maintainers: ["renovate[bot]", "juju4"]
openGraphImageUrl: "https://opengraph.githubassets.com/02c24209d66cf76c41ada48b4b99decb826631dc0c34cb2218e5fa027b4c328b/juju4/ansible-bind"
---

# Secure Bind ansible role

Ansible role to setup Bind/Named DNS server with sane secure default.
Including
* Secure template from Team Cymru template (http://www.cymru.com/Documents/secure-bind-template.html).
Please note than separated internal/external views are not implemented currently.
* DNSSEC for authentication,
* RPZ to whitelist/blacklist entries
* Eventual integration with MISP RPZ export
* Authoritative DNS (mostly for internal zones)
Mostly as cache/forwarder but could be other roles.

For internal domains, be aware:
* [Reserved Top Level DNS Names, RFC2606](https://datatracker.ietf.org/doc/html/rfc2606): .test, .example, .invalid, .localhost, example.com, example.net, example.org; [Private DNS Namespaces, RFC6762](https://www.rfc-editor.org/rfc/rfc6762#appendix-G): .intranet, .internal, .private, .corp, .home, .lan
* [Approved Resolutions | Special Meeting of the ICANN Board | 29 July 2024: Reserving .INTERNAL for Private-Use Applications](https://www.icann.org/en/board-activities-and-meetings/materials/approved-resolutions-special-meeting-of-the-icann-board-29-07-2024-en#section2.a)
* [Active Directory: Best Practices for Internal Domain and Network…
