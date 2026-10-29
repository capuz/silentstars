---
repo: "voxpupuli/puppet-splunk"
name: "puppet-splunk"
description: "Manage Splunk servers and forwarders using Puppet"
readmeQualityOk: true
url: "https://github.com/voxpupuli/puppet-splunk"
homepage: "https://forge.puppet.com/puppet/splunk"
language: "Ruby"
languages: ["Ruby", "Puppet"]
languagePcts: [58, 42]
topics: ["linux-puppet-module", "puppet", "windows-puppet-module", "hacktoberfest", "bsd-puppet-module", "centos-puppet-module", "debian-puppet-module", "freebsd-puppet-module", "redhat-puppet-module", "ubuntu-puppet-module"]
stars: 46
forks: 130
openIssues: 45
closedIssues: 69
watchers: 141
contributors: 128
recentReleases: 1
createdAt: "2012-12-18T22:10:51Z"
lastCommitAt: "2026-10-29T14:06:30Z"
lastReleaseAt: "2026-09-14T11:18:14Z"
status: "watched"
tags: ["hidden_gem", "legacy_hero", "community_watch", "funded", "fork_magnet"]
healthScore: 74
undervaluedScore: 41
maintainers: ["bastelfreak", "pccibot", "corporate-gadfly"]
openGraphImageUrl: "https://opengraph.githubassets.com/dfdcbe0ac7aceeffb78af81cc9e2c2123c8f480ed8f6eace7f587c09032a7642/voxpupuli/puppet-splunk"
fundingLinks: ["GITHUB:https://github.com/voxpupuli", "OPEN_COLLECTIVE:https://opencollective.com/vox-pupuli"]
---

# Puppet Module For Splunk

#### Table of Contents

1. [Overview](#overview)
1. [Module Description - What the module does and why it is useful](#module-description)
1. [Setup - The basics of getting started with splunk](#setup)
    * [What splunk affects](#what-splunk-affects)
    * [Setup requirements](#setup-requirements)
    * [Beginning with splunk](#beginning-with-splunk)
1. [Usage - Configuration options and additional functionality](#usage)
    * [Upgrade splunk/splunkforwarder packages](#upgrade-splunksplunkforwarder-packages)
      * [Upgrade Example](#upgrade-example)
1. [Reference - An under-the-hood peek at what the module is doing and how](#reference)
1. [Limitations - OS compatibility, etc.](#limitations)
1. [Development - Guide for contributing to the module](#development)

## Overview

This module provides a method to deploy Splunk Enterprise or Splunk Universal
Forwarder with common configurations and ensure the services maintain a running
state. It provides types/providers to interact with the various
Splunk/Forwarder configuration files.

## Module Description

This module does not configure firewall rules. Firewall rules will need to be
configured separately…
