---
repo: "merge-demo/mergequeue-bazel"
name: "mergequeue-bazel"
description: "Bazel powered parallel merge queue"
url: "https://github.com/merge-demo/mergequeue-bazel"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-02-12T20:59:03Z"
lastCommitAt: "2026-06-24T23:38:57Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 47
maintainers: ["phil-trunk", "pat-trunk-io", "ben-trunk"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0a3567d95ece74482625e886a86ed8bf4e088e9cb3a98dd03972c8c22fdda93/merge-demo/mergequeue-bazel"
---

![light-complex (3)](https://github.com/trunk-io/mergequeue/assets/1265982/ded3489b-eef7-482f-b94f-0d944c1d93ce)

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

The configuration system allows for setting the desired load on the queue, the…
