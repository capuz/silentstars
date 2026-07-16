---
repo: "Flamefire/lineageos_lilac"
name: "lineageos_lilac"
description: "Build LineageOS for Sony Xperia XZ1 Compact (lilac)"
readmeQualityOk: true
url: "https://github.com/Flamefire/lineageos_lilac"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [71, 29]
stars: 11
forks: 4
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-04-03T17:14:56Z"
lastCommitAt: "2026-07-16T05:58:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 65
undervaluedScore: 43
maintainers: ["Flamefire"]
openGraphImageUrl: "https://opengraph.githubassets.com/0036382e5c7a7dcdef4718faea9a209cc0d18693ad3177c00419debd9d60fedb/Flamefire/lineageos_lilac"
fundingLinks: ["GITHUB:https://github.com/Flamefire", "CUSTOM:https://www.paypal.me/AlexGrund"]
---

# LineageOS for Sony Xperia XZ1 Compact (lilac)

## How to build LineageOS

### Initial setup

* Make a workspace:

    ```bash
    mkdir -p ~/lineageos
    cd ~/lineageos
    ```

    Or use a subfolder for a specific version of LineageOS in a root folder, e.g.

    ```bash
    mkdir -p /lineageos/repo17
    cd /lineageos/repo17
    ```

* Initialize the repo:

    ```bash
    repo init -u git@github.com:LineageOS/android.git -b lineage-17.1
    ```

    Instead of `lineage-17.1` one can also use `lineage-18.1` or `lineage-19.1`
    for a different LineageOS version.

* Create local manifests, e.g. by checking out a copy of this project and symlinking the files from the appropriate folder according to the LineageOS version used:

    ```bash
    git clone git@github.com:Flamefire/lineageos_lilac.git
    mkdir .repo/local_manifests
    cd .repo/local_manifests
    ln -s ../../lineageos_lilac/manifests/17.1/*.xml .
    cd -
    ```

* Sync the repo:

    ```bash
    repo sync
    ```

* Tell git about Change-Id trailers

    ```bash
    git config --global --get-regexp 'trailer\.' | grep -qF 'Change-Id' || git config --global trailer.changeid.key "Change-Id"
    ```

### Build…
