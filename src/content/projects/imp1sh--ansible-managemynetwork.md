---
repo: "imp1sh/ansible_managemynetwork"
name: "ansible_managemynetwork"
description: "Ansible collection with plenty roles that you can use to manage your network, supporting Debian and OpenWrt"
readmeQualityOk: true
url: "https://github.com/imp1sh/ansible_managemynetwork"
language: "Jinja"
languages: ["Jinja", "CSS"]
languagePcts: [63, 24]
stars: 79
forks: 14
openIssues: 0
closedIssues: 6
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2021-03-23T10:50:56Z"
lastCommitAt: "2026-11-02T15:17:00Z"
lastReleaseAt: "2023-11-08T08:21:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 50
maintainers: ["imp1sh"]
openGraphImageUrl: "https://opengraph.githubassets.com/c204f978825a211563c20fa29f1b26d11d44241bddd69d3136ea5b57c243fdfb/imp1sh/ansible_managemynetwork"
---

# Ansible Managemynetwork Collection (MMN)

This is a collection that is flexible and extensive at the same time. It aims to handle all the tasks that one would want in a complex network environment (Manage My Network).
There are some paradigms every role in this collection shall conform with:
- A role shall only care about its own specific field / domain.
  Installing packages for example is exclusively done in the packages role and not within others. By 2025 not all roles comply with those requirements, yet.
- there's always the need to define vars on a host level and/or group level in Ansible. Thus the roles in this very collection shall also abide to having a dedicated host var (host suffix in the var name) and a dedicated group var (group suffix in the var name). This requirement though is soft and up to the maintainer of the role / collection.
- The main Focus will be **Debian Linux** and **OpenWrt**. It once supported Alpine and FreeBSD for a longer amount of time.
- New roles shall always be created in a fashion that they will be more easily adoptable for other OSes.
- OpenWrt specific roles will inherently all support the…
