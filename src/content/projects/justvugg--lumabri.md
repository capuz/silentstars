---
repo: "JustVugg/lumabri"
name: "lumabri"
description: "Run huge MoE models from a swarm of peers, with the colibri engine. Pure C."
readmeQualityOk: true
url: "https://github.com/JustVugg/lumabri"
language: "C"
languages: ["C"]
languagePcts: [77]
stars: 141
forks: 15
openIssues: 3
closedIssues: 7
watchers: 0
contributors: 4
recentReleases: 3
createdAt: "2026-08-04T19:01:18Z"
lastCommitAt: "2026-09-10T08:21:40Z"
lastReleaseAt: "2026-08-12T13:56:42Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 33
maintainers: ["JustVugg"]
openGraphImageUrl: "https://opengraph.githubassets.com/32a6bfa11334394035321e06cf536cfaa218a0ddf19e8621d29e57448b7c574d/JustVugg/lumabri"
---

# Your computers. One shared model.

Lumabri connects your computers into a private household cluster using
[Colibri](https://github.com/JustVugg/colibri). Choose a model, select the
computers that may help, and ask their owners to approve the allocation.
The interface and runtime are written in C.

## Start here

Build from source with a compatible Colibri checkout:

```sh
make ENGINE=/path/to/colibri/c
./lumabri
```

After launch, use **arrow keys and Enter**. Press **/** for workspace actions
and **Esc** to go back. Use a terminal at least 60 columns by 28 rows.

1. On one computer, open **/ → /create**. Keep Lumabri running.
2. On your other computers, open **/ → /join**. Select the household found
   on your LAN, compare its identity with **/create** on the owner computer,
   then enter the household key. Manual address entry remains available.
   Only share that key with your household.
3. Open **/settings** to set the maximum RAM you offer. Choose
   **Share resources** on each computer that may participate.
4. On the requesting computer, set **/settings** to the folder containing
   your existing Colibri model directories.
5. Open **Your computers**. Press Enter to select…
