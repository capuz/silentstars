---
repo: "isucon/isucon9-qualify"
name: "isucon9-qualify"
description: "ISUCON9 Qualifier"
originalDescription: "ISUCON9予選"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/isucon/isucon9-qualify"
homepage: "http://isucon.net/archives/53570241.html"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [33, 33]
stars: 244
forks: 184
openIssues: 3
closedIssues: 142
watchers: 8
contributors: 20
recentReleases: 0
createdAt: "2019-07-06T10:14:51Z"
lastCommitAt: "2026-11-08T14:13:44Z"
lastReleaseAt: "2024-01-13T03:48:59Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 47
maintainers: ["catatsuy", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/494fa1120cb8cf2f8f603c0dae5f298399339b3b8aed7c8eca25e0e150f757dd/isucon/isucon9-qualify"
---

# isucon9-qualify

## Directory structure

```
├── bench        # Source code of packages that the benchmarker and others depend on
├── cmd          # Source code of the benchmarker and others
├── docs         # Various documents prepared by the organizers for use on the event day and during development
├── initial-data # Initial data creation
├── provisioning # Ansible for setup
└── webapp       # Reference implementations in each language
```

## AMI

For competitors / benchmarker (Ubuntu 24.04):

| arch   |        AMI ID         |           AMI name           | Recommended instance type |
| ------ | :-------------------: | :--------------------------: | ---------------------- |
| x86_64 | ami-01e5d6ed3030d5df4 | isucon9-qualify-app-20241013 | c7a.large              |
| x86_64 | ami-02cd0768ce7639d01 |    isucon9-qualify-bench     | c7a.xlarge             |

If the benchmarker's IP address is 192.0.2.1, run the following command to modify `/etc/hosts`.

```bash
$ /home/isucon/add_hosts.sh 192.0.2.1
```

If the TLS certificate is outdated, run the following command.

```bash
$ sudo /etc/nginx/update_cert.sh
```

If the isucari application is at 203.0.113.1, you can run the…
