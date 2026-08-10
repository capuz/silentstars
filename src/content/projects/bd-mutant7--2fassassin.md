---
repo: "Bd-Mutant7/2FAssassin"
name: "2FAssassin"
description: "Bypass Two-Factor-Authentication"
readmeQualityOk: true
url: "https://github.com/Bd-Mutant7/2FAssassin"
homepage: "https://github.com/maxwellkoh/2FAssassin"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-28T17:42:13Z"
lastCommitAt: "2026-08-10T05:06:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 51
maintainers: ["Bd-Mutant7"]
openGraphImageUrl: "https://opengraph.githubassets.com/b3b500d5fde72aafcf781d7f812f14b5cb5e796cbc447dd9cdb993121d61abb0/Bd-Mutant7/2FAssassin"
---

## Notes 

## Preamble 

- Code changes from time to time, please do a 'git pull' before running the tool.

## Intro 

- The effectiveness of the Two-Factor-Authentication depends on how well a user protects "something only the user has".
- The tool looks out for getting the OTP(s) and private keys using various methods.
- The private keys can be extracted from client certificates and cracked to be used for authentication.
- The tool exploits the common vulnerabilities that caused private keys leakage.
- Propagates the compromise starting from a single machine to the entire networks via looted private keys.

## Installing 

- Install python on Kali Linux, then run:
pip install 2fassassin
cd /root/2fassassin
OR
git clone https://github.com/bd-mutant7/2FAssassin.git
cd 2fassassin

## Features 

root@kali:~/2fassassin# python assassin.py -h

```
 ___ ___ _                      _
|_  ) __/_\   ______ __ _ _____(_)_ _
 / /| _/ _ \ (_-<_-</ _` (_-<_-< | '  \+v2
/___|_/_/ \_\/__/__/\__,_/__/__/_|_||_|

```

usage: assassin.py [-h] [--target TARGET] [--silent] [--scan SCAN]
                   [--check CHECK] [--cert CERT] [--filetype FILETYPE]
                   [--user USER] [--secret…
