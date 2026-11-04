---
repo: "cloudfoundry/capi-release"
name: "capi-release"
description: "Bosh Release for Cloud Controller and friends"
readmeQualityOk: true
url: "https://github.com/cloudfoundry/capi-release"
language: "Ruby"
languages: ["Ruby", "HTML"]
languagePcts: [45, 43]
topics: ["cloudfoundry", "bosh-release", "bosh"]
stars: 24
forks: 112
openIssues: 10
closedIssues: 122
watchers: 41
contributors: 141
recentReleases: 0
createdAt: "2016-03-10T01:55:17Z"
lastCommitAt: "2026-11-04T08:03:09Z"
lastReleaseAt: "2016-10-25T22:58:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 98
undervaluedScore: 61
maintainers: ["ari-wg-gitbot", "dependabot[bot]", "serdarozerr"]
openGraphImageUrl: "https://opengraph.githubassets.com/a14467076843f1394c96c2fa95d3efe3ee2cd4ad0bbf8ec41dc32bc7cb300179/cloudfoundry/capi-release"
---

[slack.cloudfoundry.org](https://cloudfoundry.slack.com/messages/capi/)

# Cloud Foundry CAPI Bosh Release

This is the [bosh release](http://bosh.io/docs/release.html) for Cloud Foundry's [Cloud Controller API](https://github.com/cloudfoundry/cloud_controller_ng). 

**CI**: [CAPI Concourse Pipelines](https://concourse.app-runtime-interfaces.ci.cloudfoundry.org/teams/capi-team)

## Components

* [Cloud Controller](https://github.com/cloudfoundry/cloud_controller_ng): The primary API of Cloud Foundry.
* [Cloud Controller Clock](https://github.com/cloudfoundry/cloud_controller_ng): Triggers periodic jobs for the Cloud Controller.
* [Cloud Controller Workers](https://github.com/cloudfoundry/cloud_controller_ng): Execute background jobs for the Cloud Controller.
* [NFS Mounter](https://github.com/cloudfoundry/capi-release/tree/develop/jobs/nfs_mounter): Connects Cloud Controller with an NFS blobstore.
* [CC Uploader](https://github.com/cloudfoundry/cc-uploader): Uploads files from [Diego](https://github.com/cloudfoundry/diego-release) to the Cloud Controller.
* [TPS Watcher](https://github.com/cloudfoundry/tps): Reports crash events from Diego to the Cloud Controller.

For more…
