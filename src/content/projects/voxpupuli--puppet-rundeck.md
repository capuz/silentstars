---
repo: "voxpupuli/puppet-rundeck"
name: "puppet-rundeck"
description: "Module for managing the installatation and configuration of the rundeck orchestration tool"
readmeQualityOk: true
url: "https://github.com/voxpupuli/puppet-rundeck"
homepage: "https://forge.puppet.com/puppet/rundeck"
language: "Ruby"
languages: ["Ruby", "Puppet"]
languagePcts: [74, 25]
topics: ["linux-puppet-module", "puppet", "hacktoberfest", "centos-puppet-module", "debian-puppet-module", "redhat-puppet-module", "ubuntu-puppet-module"]
stars: 35
forks: 126
openIssues: 7
closedIssues: 134
watchers: 51
contributors: 130
recentReleases: 1
createdAt: "2014-03-28T09:35:23Z"
lastCommitAt: "2026-10-29T14:06:24Z"
lastReleaseAt: "2026-09-14T11:51:46Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "funded", "fork_magnet"]
healthScore: 76
undervaluedScore: 49
maintainers: ["bastelfreak", "tuxmea", "pccibot"]
openGraphImageUrl: "https://opengraph.githubassets.com/990263b487ac247f851145406ad0045c7fc27273b31911f4d2d72131bc638487/voxpupuli/puppet-rundeck"
fundingLinks: ["GITHUB:https://github.com/voxpupuli", "OPEN_COLLECTIVE:https://opencollective.com/vox-pupuli"]
---

# Rundeck module for Puppet

## Table of Contents

1. [Overview](#overview)
2. [Module Description - What the module does and why it is useful](#module-description)
3. [Setup - Requirements and beginning with rundeck](#setup)
4. [Usage - Configuration options and additional functionality](#usage)
5. [Reference - Module references](#reference)
6. [Limitations - OS compatibility, etc.](#limitations)
7. [Development - Guide for contributing to the module](#development)

## Overview

The rundeck puppet module for installing and managing [Rundeck](http://rundeck.org/)

### Supported Versions of Rundeck

| Rundeck Version  | Rundeck Puppet module versions |
| ---------------- | -------------------------------|
| 2.x   - 3.0.X    | v5.4.0 and older               |
| 3.1.x - 3.3.x    | v8.0.1 until v6.0.0            |
| 3.4.x - up       | v9.0.0 and newer               |

## Module Description

This module provides a way to manage the installation and configuration of rundeck and plugins.

## Setup

### Requirements

You need a compatible version of Java installed.
You can use [puppetlabs/java](https://github.com/puppetlabs/puppetlabs-java) module if there isn't already a suitable…
