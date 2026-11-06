---
repo: "DSO-Reconstruction/DSOR_Server"
name: "DSOR_Server"
description: "DSO Reconstruction is a project by group of Drakensang Online enjoyers (not necesesarily in it's current state) with aim of reverse engineering things related with DSO."
readmeQualityOk: true
url: "https://github.com/DSO-Reconstruction/DSOR_Server"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["drakensang", "dro", "dso", "raknet"]
stars: 14
forks: 6
openIssues: 1
closedIssues: 2
watchers: 5
contributors: 7
recentReleases: 0
createdAt: "2024-10-17T22:45:13Z"
lastCommitAt: "2026-11-06T13:19:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 66
maintainers: ["xm1rth", "shockblaze", "xl0g"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9e792bd56fdabfe99b14a68f8767e892ee71afc4f17844adb873882c72a107c/DSO-Reconstruction/DSOR_Server"
---

# DSO_SERVER

## Required client assets

Game client assets are not included in this repository. On Windows, run `py -3 setup_client_assets.py` after cloning. The script reads the official client's local cache at `%LOCALAPPDATA%\Temp\DSOClient`, and extracts the compatible server data files into `data/`. It shows the source and destinations before continuing. It does not download the game or copy the client executable, DLLs, logs, or local session files.

The client asset extraction and startup setup have been tested with client revision `rel261_192`. Use matching client and server content revisions.

If `%LOCALAPPDATA%\Temp\DSOClient` contains downloaded `.nb` bundle files but is missing local assets, the setup script first runs `tools/unpack_dso_bundles.py` into `data/client_unpacked/` (about 7 GB, git-ignored; the client folder is only read), then extracts the server data into `data/`. To let the official client read the files locally without an HTTP CDN service, add `--client-cache`: setup then unpacks into the client folder and its `dlcache` hierarchy instead (about 7 GB more there; `dlcache\__root.txt` is replaced and a copy kept as `__root.txt.before-unpack`). If the…
