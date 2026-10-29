---
repo: "voxpupuli/puppet-squid"
name: "puppet-squid"
description: "Puppet module for configuration of squid caching proxy."
readmeQualityOk: true
url: "https://github.com/voxpupuli/puppet-squid"
homepage: "https://forge.puppet.com/puppet/squid"
language: "Ruby"
languages: ["Ruby", "Puppet"]
languagePcts: [59, 38]
topics: ["bsd-puppet-module", "linux-puppet-module", "puppet", "hacktoberfest", "centos-puppet-module", "debian-puppet-module", "freebsd-puppet-module", "oraclelinux-puppet-module", "redhat-puppet-module", "scientific-puppet-module"]
stars: 13
forks: 61
openIssues: 1
closedIssues: 15
watchers: 37
contributors: 108
recentReleases: 0
createdAt: "2016-04-13T07:33:31Z"
lastCommitAt: "2026-10-29T14:06:32Z"
lastReleaseAt: "2025-06-08T15:03:24Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "funded", "fork_magnet"]
healthScore: 91
undervaluedScore: 48
maintainers: ["bastelfreak", "marcusdots", "sebastianrakel"]
openGraphImageUrl: "https://opengraph.githubassets.com/dfdcbe0ac7aceeffb78af81cc9e2c2123c8f480ed8f6eace7f587c09032a7642/voxpupuli/puppet-squid"
fundingLinks: ["GITHUB:https://github.com/voxpupuli", "OPEN_COLLECTIVE:https://opencollective.com/vox-pupuli"]
---

Puppet module for Squid
=======================

Description
-----------

Puppet module for configuring the squid caching service.

Usage
-----

The set up a simple squid server with a cache to forward
http port 80 requests.

```puppet
class { 'squid':
  http_ports => { '3128' => {} },
}
squid::acl { 'Safe_ports':
  type    => port,
  entries => ['80'],
}
squid::http_access { 'Safe_ports':
  action => allow,
}
squid::http_access{ '!Safe_ports':
  action => deny,
}
```
This module will set the SELINUX-context for the cache_dir and/or port, requires [puppet-selinux](https://github.com/voxpupuli/puppet-selinux)

### Parameters for squid Class
Parameters to the squid class almost map 1 to 1 to squid.conf parameters themselves.

* `ensure_service` The ensure value of the squid service, defaults to `running`.
* `enable_service` The enable value of the squid service, defaults to `true`.
* `config` Location of squid.conf file, defaults to `/etc/squid/squid.conf`.
* `config_user` user which owns the config file, default depends on `$operatingsystem`
* `config_group` group which owns the config file, default depends on `$operatingsystem`
* `daemon_user` user which runs the squid daemon,…
