---
repo: "voxpupuli/puppet-ssh_keygen"
name: "puppet-ssh_keygen"
description: "Generation of ssh keys with ssh-keygen"
readmeQualityOk: true
url: "https://github.com/voxpupuli/puppet-ssh_keygen"
homepage: "https://forge.puppet.com/puppet/ssh_keygen"
language: "Ruby"
languages: ["Ruby", "Puppet"]
languagePcts: [71, 29]
topics: ["puppet", "hacktoberfest"]
stars: 17
forks: 25
openIssues: 1
closedIssues: 7
watchers: 43
contributors: 83
recentReleases: 0
createdAt: "2012-12-06T18:59:40Z"
lastCommitAt: "2026-10-29T14:06:34Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "funded", "fork_magnet"]
healthScore: 89
undervaluedScore: 45
maintainers: ["bastelfreak", "marcusdots", "sebastianrakel"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5c07733bda04e0e9d70d042b627bec96440da77e6d0ecec6924b066ee29bffa/voxpupuli/puppet-ssh_keygen"
fundingLinks: ["GITHUB:https://github.com/voxpupuli", "OPEN_COLLECTIVE:https://opencollective.com/vox-pupuli"]
---

# puppet-ssh_keygen

## Table of Contents

1. [Usage - Configuration options and additional functionality](#usage)
1. [Development - Guide for contributing to the module](#development)

## Usage

Generate ssh keys for any user using ssh_keygen, that needs exist before using
the module

```puppet
ssh_keygen { 'john': }
```

or if not using the default `/home/john`

```puppet
ssh_keygen { 'john':
  home => '/var/home'
}
```

the key comment can also be overriden with

```puppet
ssh_keygen { 'john':
  comment => 'john key'
}
```

Generate a dsa key

```puppet
ssh_keygen { 'john':
  type => 'dsa'
}
```

specify the bit length

```puppet
ssh_keygen { 'john':
  bits => 4096
}
```

Generate new host key

```puppet
ssh_keygen { 'root':
  filename => '/etc/ssh/ssh_host_rsa_key'
}
```

## Development

This module is maintained by [Vox Pupuli](https://voxpupuli.org/). Voxpupuli
welcomes new contributions to this module, especially those that include
documentation and rspec tests. We are happy to provide guidance if necessary.

Please see [CONTRIBUTING](https://github.com/voxpupuli/puppet-ssh_keygen/blob/HEAD/.github/CONTRIBUTING.md) for more details.

### Authors

* Carlos Sanchez…
