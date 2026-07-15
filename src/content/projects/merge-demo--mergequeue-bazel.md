---
repo: "merge-demo/mergequeue-bazel"
name: "mergequeue-bazel"
description: "Bazel powered parallel merge queue"
readmeQualityOk: true
url: "https://github.com/merge-demo/mergequeue-bazel"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-02-12T20:59:03Z"
lastCommitAt: "2026-07-15T05:55:45Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 45
maintainers: ["phil-trunk", "EliSchleifer", "pat-trunk-io"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6da3655fa3eca131c9bdbd095bdc34571b4e7a62ffeeb64bb4419d7e8ead66e/merge-demo/mergequeue-bazel"
---

### Welcome

This repository is used to demonstrate the performance characteristics of a merge graph under
different simulated loads.

#### Usage

1. Fork this repo
2. Follow the instructions in the
   [docs.trunk.io](https://docs.trunk.io/merge-queue/set-up-trunk-merge) to set up a merge queue for
   your forked repo
3. Go to the actions tab of your forked repo and enable running github actions
4. In the actions tab, go to the `PR Factory` workflow and click on `Run workflow` on `main`. Note:
   this will run a 30 minute merge queue simulation, but you can also uncomment the cron job in
   `.github/workflows/pr-factory.yaml` to run the simulation indefinitely.
5. Go back to app.trunk.io and witness the merge queue in action

#### How does it work

The load imparted onto the connected queue is controlled by the `mq.toml` file in the .config
folder. The PR Factory workflow is set on a cron schedule to call `mq` which is then responsible for
generating the pull requests and enqueueing them.

The configuration system allows for setting the desired load on the queue, the flake rate and the
interdependence element of the pull requests.

```toml
# parallelqueue - will push deps…
