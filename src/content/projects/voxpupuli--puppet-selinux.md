---
repo: "voxpupuli/puppet-selinux"
name: "puppet-selinux"
description: "Puppet Module to manage SELinux on RHEL machines"
readmeQualityOk: true
url: "https://github.com/voxpupuli/puppet-selinux"
homepage: "https://forge.puppet.com/puppet/selinux"
language: "Ruby"
languages: ["Ruby", "Puppet"]
languagePcts: [77, 20]
topics: ["linux-puppet-module", "puppet", "hacktoberfest", "amazon-puppet-module", "centos-puppet-module", "debian-puppet-module", "fedora-puppet-module", "redhat-puppet-module"]
stars: 49
forks: 147
openIssues: 12
closedIssues: 99
watchers: 43
contributors: 136
recentReleases: 0
createdAt: "2011-11-17T21:47:08Z"
lastCommitAt: "2026-10-29T14:06:25Z"
lastReleaseAt: "2026-05-20T19:54:26Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 72
undervaluedScore: 42
maintainers: ["bastelfreak", "kenyon", "pccibot"]
openGraphImageUrl: "https://opengraph.githubassets.com/10c927c0b3629218a5e93fdcd3dc17257d8dbc852bc0d2606ac44c789bc4c922/voxpupuli/puppet-selinux"
fundingLinks: ["GITHUB:https://github.com/voxpupuli", "OPEN_COLLECTIVE:https://opencollective.com/vox-pupuli"]
---

# SELinux module for Puppet

## Table of Contents

1. [Overview](#overview)
1. [Module Description - What the module does and why it is useful](#module-description)
1. [Usage - Configuration options and additional functionality](#usage)
1. [Reference - An under-the-hood peek at what the module is doing and how](#reference)
1. [Defined Types](#defined-types)
1. [Development - Guide for contributing to the module](#development)
1. [Authors](#authors)

## Overview

This class manages SELinux.

## Requirements

* See `metadata.json`

## Module Description

This module will configure SELinux and/or deploy SELinux based modules to
running system.

## Get in touch

* IRC: [#voxpupuli on irc.freenode.net](https://github.com/voxpupuli/puppet-selinux/blob/HEAD/irc://irc.freenode.net/voxpupuli)
  ([Freenode WebChat](http://webchat.freenode.net/?channels=%23voxpupuli))
* Mailinglist: <voxpupuli@groups.io>
  ([groups.io Webinterface](https://groups.io/g/voxpupuli/topics))

## Upgrading from puppet-selinux 0.8.x

* Previously, module building always used the refpolicy framework. The default
  module builder is now 'simple', which uses only checkmodule. Not all features are
  supported with this…
