---
repo: "wikimedia/analytics-refinery"
name: "analytics-refinery"
description: "Github mirror of \"analytics/refinery\" - our actual code is hosted with Gerrit (please see https://www.mediawiki.org/wiki/Developer_access for contributing"
readmeQualityOk: true
url: "https://github.com/wikimedia/analytics-refinery"
language: "HiveQL"
languages: ["HiveQL", "Python"]
languagePcts: [73, 24]
stars: 20
forks: 6
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 82
recentReleases: 0
createdAt: "2014-05-14T15:36:07Z"
lastCommitAt: "2026-11-02T15:13:29Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 78
undervaluedScore: 57
maintainers: ["jobar", "xabriel", "aquwikimedia"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9356a65ad0a81d0d1bafefdc929e39975d55c98a2f0ea818e2de57e18890b44/wikimedia/analytics-refinery"
---

# Refinery

Refinery contains scripts, artifacts, and configuration for WMF's
analytics cluster.

## Setting up the refinery repository

1. Install git-lfs on your system.  Debian includes a git-lfs package.

2. Make sure the ```docopt``` and ```dateutil``` Python packages are
   available on your system.

   On Ubuntu systems, you can achiev this by running

   ```
   sudo apt-get install python-docopt
   sudo apt-get install python-dateutil
   ```

3. Clone the repository.

   You can find the commands to clone the repository at [WMF's gerrit](https://gerrit.wikimedia.org/r/#/admin/projects/analytics/refinery).

   To clone anonymously, just run

   ```
   git clone https://gerrit.wikimedia.org/r/analytics/refinery
   ```

4. change to the cloned repository by running

   ```
   cd refinery
   ```

5. Initialize git-lfs by running

   ```
   git lfs install
   ```

6. Pull existing artifacts into the repository by running

   ```
   git lfs pull
   ```

   (Depending on you internet connection, this step may take some time.)

7. Add the ```refinery/python``` directory to your ```PYTHONPATH```.

   To add it only in the running shell, you can use

   ```
   export…
