---
repo: "maravento/blackweb"
name: "blackweb"
description: "Domains Blacklist for Squid-Cache"
readmeQualityOk: true
url: "https://github.com/maravento/blackweb"
homepage: "https://www.maravento.com"
language: "Shell"
languages: ["Shell"]
languagePcts: [86]
topics: ["blacklist", "squid", "drugs", "porn", "malware", "warez", "spyware", "ransomware", "adware", "blocker-proxy"]
stars: 401
forks: 83
openIssues: 0
closedIssues: 25
watchers: 38
contributors: 1
recentReleases: 0
createdAt: "2016-06-14T17:35:15Z"
lastCommitAt: "2026-11-13T05:42:14Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 86
undervaluedScore: 30
maintainers: ["maravento"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfd4bd91e53208be41369e561ea7649d6e68e4defe2e6a51e46753c3887ac713/maravento/blackweb"
---

# [BlackWeb](https://www.maravento.com/p/blackweb.html)

## REQUIREMENTS

---

- `squid` (or `squid-openssl`) to apply the BlackWeb rules

```bash
apt install -y squid
```

### Compatibility

## DATA SHEET

---

| ACL | Blocked Domains | File Size |
| :---: | :---: | :---: |
| blackweb.txt | 7972530 | 194,3 MB |

## REPOSITORY STRUCTURE

---

```
bwupdate/
├── bwupdate.sh                  # Main script: downloads lists, builds blackweb.txt and reloads Squid
├── lst/                         # ACLs and helper lists used by bwupdate.sh
│   ├── ai.txt                      # Separate Squid ACL for AI-related domains; not modified by bwupdate.sh
│   ├── allowdomains.txt            # Separate Squid ACL for exempt domains; not modified by bwupdate.sh
│   ├── allowtlds.txt               # Allowed-TLD pattern used during debugging
│   ├── blockdomains.txt            # Separate Squid ACL for additional blocked domains; not modified by bwupdate.sh
│   ├── blocktlds.txt               # Separate Squid ACL for blocking whole TLDs; not modified by bwupdate.sh
│   ├── debugbl.txt                 # Added to the candidate blocklist before debugging
│   ├── debugwl.txt                 # Excludes…
