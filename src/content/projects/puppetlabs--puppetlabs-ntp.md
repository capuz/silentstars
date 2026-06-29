---
repo: "puppetlabs/puppetlabs-ntp"
name: "puppetlabs-ntp"
description: "Puppet module to manage the NTP service"
url: "https://github.com/puppetlabs/puppetlabs-ntp"
homepage: "http://forge.puppetlabs.com/puppetlabs/ntp"
language: "Ruby"
languages: ["Ruby", "Puppet"]
languagePcts: [74, 26]
topics: ["module", "supported", "hacktoberfest"]
stars: 146
forks: 321
openIssues: 6
closedIssues: 25
watchers: 171
contributors: 143
recentReleases: 0
createdAt: "2011-06-16T19:17:38Z"
lastCommitAt: "2026-06-29T07:23:13Z"
lastReleaseAt: "2025-08-11T15:59:21Z"
status: "thriving"
tags: ["legacy_hero", "community_watch", "fork_magnet"]
healthScore: 81
undervaluedScore: 32
maintainers: ["imaqsood", "github-actions[bot]", "skyamgarp"]
openGraphImageUrl: "https://opengraph.githubassets.com/0563bf1c324359539a15263bc61eb71fb3c8fae15da32601a906219a7c57e93f/puppetlabs/puppetlabs-ntp"
---

# ntp

#### Table of Contents

1. [Module Description - What the module does and why it is useful](#module-description)
1. [Setup - The basics of getting started with ntp](#setup)
1. [Usage - Configuration options and additional functionality](#usage)
1. [Reference - An under-the-hood peek at what the module is doing and how](#reference)
1. [Limitations - OS compatibility, etc.](#limitations)
1. [License](#license)
1. [Development - Guide for contributing to the module](#development)

## Module description

The ntp module installs, configures, and manages the NTP service across a range of operating systems and distributions.

## Setup

### Beginning with ntp

`include ntp` is enough to get you up and running. To pass in parameters specifying which servers to use:

```puppet
class { 'ntp':
  servers => [ 'ntp1.corp.com', 'ntp2.corp.com' ],
}
```

## Usage

All parameters for the ntp module are contained within the main `ntp` class, so for any function of the module, set the options you want. See the common usages below for examples.

### Install and enable NTP

```puppet
include ntp
```

### Change NTP servers

```puppet
class { 'ntp':
  servers => [ 'ntp1.corp.com',…
