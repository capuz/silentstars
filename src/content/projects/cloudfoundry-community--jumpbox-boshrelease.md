---
repo: "cloudfoundry-community/jumpbox-boshrelease"
name: "jumpbox-boshrelease"
description: "A BOSH release for jumpboxen"
readmeQualityOk: true
url: "https://github.com/cloudfoundry-community/jumpbox-boshrelease"
language: "Shell"
languages: ["Shell"]
languagePcts: [93]
topics: ["bosh-release"]
stars: 24
forks: 26
openIssues: 6
closedIssues: 52
watchers: 28
contributors: 104
recentReleases: 0
createdAt: "2015-04-21T02:28:40Z"
lastCommitAt: "2026-11-03T12:47:27Z"
lastReleaseAt: "2016-06-15T19:00:06Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 95
undervaluedScore: 53
maintainers: ["norman-abramovitz", "wayneeseguin", "cloudfoundry-community-ci-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/44a7e59d7c3d3d15458c31fc508b78640b561e7da173534590d38bb3129a892c/cloudfoundry-community/jumpbox-boshrelease"
---

# BOSH Release for jumpbox

The `jumpbox` BOSH release sets up a jumpbox for use with BOSH/CF/Concourse,
installing utilities we've found to be generally useful for these tasks, as
well as setting up custom user environments per user.

## Usage

To deploy a jumpbox, you can use the BOSH manifests supplied with the
repository.

```
bosh -e <env> -d jumpbox deploy manifests/jumpbox.yml
```

However, that won't generally be enough, since you should customize the
configuration with your own user accounts and SSH keys.  This repository
ships with an example ops file that you can modify to include your users,
environment setup scripts, and SSH keys.

To deploy that, use the `-o` option to `bosh deploy`:

```
bosh -e <env> -d jumpbox deploy \
  -o manifests/add-user-op.yml \
  manifests/jumpbox.yml
```

The following keys have meaning, for each user account under the
`jumpbox.users` parameter:

  1. `name` (**Required**) - The username for the account.

  2. `shell` - The full path to the user's interactive shell.
     This needs to be an allowed shell (per stemcell config).
     Defaults to `/bin/bash`.

  3. `sudo` (true|false) - Whether or not grant this user the
     ability to sudo…
