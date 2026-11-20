---
repo: "voxpupuli/g10k"
name: "g10k"
description: "my r10k fork in Go"
readmeQualityOk: true
url: "https://github.com/voxpupuli/g10k"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["forge-modules", "puppetfile", "puppetlabs-forge", "puppet-git", "golang", "puppet", "puppet-modules", "puppet-control"]
stars: 143
forks: 58
openIssues: 26
closedIssues: 119
watchers: 17
contributors: 29
recentReleases: 0
createdAt: "2015-07-24T16:17:28Z"
lastCommitAt: "2026-11-19T11:57:21Z"
lastReleaseAt: "2016-11-02T15:51:46Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 89
undervaluedScore: 45
maintainers: ["TheMeier", "dhollinger", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5810412bf1bb4d9f215dd65b93b2423cafa6721f902c6f45aa4b9a39c5d8571/voxpupuli/g10k"
fundingLinks: ["GITHUB:https://github.com/voxpupuli", "OPEN_COLLECTIVE:https://opencollective.com/vox-pupuli"]
---

# g10k

My r10k fork written in Go, designed to work somewhat similar like [puppetlabs/r10k](https://github.com/puppetlabs/r10k).

### Why fork?

- Lack of caching/version-pre-checking in current r10k implementation hurt performance beyond a certain # of modules per Puppetfile
- We need distinct SSHKeys for each source in the r10k.yaml and 'rugged' never really wanted to play nice (fixed in r10k [2.2.0](https://github.com/puppetlabs/r10k/blob/master/CHANGELOG.mkd#220))
- Good excuse to try Go ;)

### Changes breaking complete r10k compatibility

- No SVN support
- Forge modules must be specified like this:

```
mod 'theforeman/puppet'
```

- Git modules must be specified like this:

```
mod 'apache',
  :git => 'https://github.com/puppetlabs/puppetlabs-apache.git'
```

### Non-breaking changes to r10k

- Download/Cache each git Puppet Module repository and each Puppetlabs Forge Puppet Module for each respective version only once
- Most things (git, forge, and copy operations) done in parallel over each branch
- Optional support for different ssh keys for each source inside the r10k.yaml
