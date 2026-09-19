---
repo: "Scorpikor/pynod-mirror-tool"
name: "pynod-mirror-tool"
description: "python mirror tool to create local mirror nod32 antivirus bases"
originalDescription: "python mirror tool  to create local mirror nod32 antivirus bases"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/Scorpikor/pynod-mirror-tool"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 30
forks: 14
openIssues: 7
closedIssues: 14
watchers: 8
contributors: 3
recentReleases: 0
createdAt: "2024-09-08T21:25:37Z"
lastCommitAt: "2026-09-19T02:46:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 33
maintainers: ["Scorpikor"]
openGraphImageUrl: "https://opengraph.githubassets.com/29d61bba51ea991314ba8dc8c2a98c03cc267274da06e137986c93d32ef86fb3/Scorpikor/pynod-mirror-tool"
---

# pynod-mirror-tool - Dockerized
 
 

python-mirror-tool is a Python script for creating a mirror of ESET NOD32 antivirus databases

pynod-mirror-tool is a Python script for creating a mirror of ESET NOD32 antivirus databases. It supports Windows, Linux, and FreeBSD operating systems, and can be run in Docker. Python 3.x and NGINX are required for operation to distribute the databases to antivirus programs.

# Installation:
1) cd pynod-mirror-tool
2) pip3 install -r requiments.txt
3) Edit the nod32ms.conf file to suit your needs
4) Run database download: python3 update.py
5) To distribute databases to antivirus programs, it is recommended to use NGINX, whose configuration file is located here (nginx-configs folder, select the one for your nginx version)

Quick start in docker: docker compose up -d

WARNING! The script does not search for keys. Its task is to connect to the official NOD32 database mirror server (if you have valid login and password) as well as unofficial ones, download the databases, organize them in folders, and then distribute them to antivirus programs or other mirrors through NGINX.
# 14.04.2026 Update
+ Added support for EP13

# 05.12.2025 Update
+ In the…
