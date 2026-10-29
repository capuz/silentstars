---
repo: "voxpupuli/puppet-strongswan"
name: "puppet-strongswan"
description: "Puppet Strongswan Module"
readmeQualityOk: true
url: "https://github.com/voxpupuli/puppet-strongswan"
language: "Ruby"
languages: ["Ruby", "Puppet"]
languagePcts: [51, 46]
topics: ["linux-puppet-module", "puppet", "hacktoberfest", "centos-puppet-module", "debian-puppet-module", "redhat-puppet-module", "ubuntu-puppet-module"]
stars: 10
forks: 13
openIssues: 3
closedIssues: 5
watchers: 37
contributors: 81
recentReleases: 0
createdAt: "2016-02-23T19:01:04Z"
lastCommitAt: "2026-10-29T14:06:36Z"
lastReleaseAt: "2018-01-03T10:45:00Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "funded", "fork_magnet"]
healthScore: 85
undervaluedScore: 42
maintainers: ["bastelfreak", "marcusdots", "sebastianrakel"]
openGraphImageUrl: "https://opengraph.githubassets.com/99d7d1c281603072422666fdd554549f39ab5091fac524e7993f966a6590c5c7/voxpupuli/puppet-strongswan"
fundingLinks: ["GITHUB:https://github.com/voxpupuli", "OPEN_COLLECTIVE:https://opencollective.com/vox-pupuli"]
---

# 

This Puppet module contains configurations for Strongswan.
## Example usage

### StrongSwan default config:

```puppet
include strongswan
```

### Strongswan self-signed CA:

```puppet
include strongswan::pki::ca
```

### Strongswan certificates management:

```puppet
strongswan::pki::certificate {'server':
  common_name => 'myvpn.local',
  san         => ['@strongswan-1','strongswan-1','192.168.33.42', '@192.168.33.42'],
}

strongswan::pki::certificate {'John Smith':
  common_name  => 'Jonh Smith',
  p12_password => 'mySuperStrongPass',
}
```

### Example configuration ipsec.conf:

```puppet
strongswan::conn { '%default':
  options => {
    "ike"         => "aes128gcm128-prfsha256-ecp256!",
    "esp"         => "aes128gcm128-ecp256!",
    "keyexchange" => "ikev2",
    "ikelifetime" => "60m",
    "lifetime"    => "20m",
    "margintime"  => "3m",
    "closeaction" => "restart",
    "dpdaction"   => "restart",
  }
}

strongswan::conn { 'IPsec-IKEv2':
  options => {
    "rekey"         => "no",
    "left"          => "%any",
    "leftsubnet"    => "0.0.0.0/0",
    "leftcert"      => "vpnHostCert.der",
    "right"         => "%any",
    "rightdns"      => "8.8.8.8,8.8.4.4",…
