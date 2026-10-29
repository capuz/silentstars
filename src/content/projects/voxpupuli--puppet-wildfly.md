---
repo: "voxpupuli/puppet-wildfly"
name: "puppet-wildfly"
description: "Puppet module to install, configure and manage Wildfly (8/9/10+), JBoss EAP (6.1+/7.0+) and some Wildfly based products like apiman, Keycloak and Infinispan."
readmeQualityOk: true
url: "https://github.com/voxpupuli/puppet-wildfly"
language: "Ruby"
languages: ["Ruby", "Puppet"]
languagePcts: [75, 22]
topics: ["jboss", "jboss-wildfly", "jboss-cli", "puppet", "puppet-forge", "puppet-module", "wildfly"]
stars: 29
forks: 80
openIssues: 31
closedIssues: 130
watchers: 42
contributors: 106
recentReleases: 0
createdAt: "2014-06-21T21:46:22Z"
lastCommitAt: "2026-10-29T14:06:41Z"
lastReleaseAt: "2016-12-22T19:54:35Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "community_watch", "funded", "fork_magnet"]
healthScore: 80
undervaluedScore: 41
maintainers: ["tuxmea", "bastelfreak", "pccibot"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b36f6e2cc0accb1cd0f4ec094d476a213e9259622d945724acae8469c789f91/voxpupuli/puppet-wildfly"
fundingLinks: ["GITHUB:https://github.com/voxpupuli", "OPEN_COLLECTIVE:https://opencollective.com/vox-pupuli"]
---

# wildfly

## Table of Contents

- [wildfly](#wildfly)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Module Description](#module-description)
  - [Setup](#setup)
    - [What wildfly affects](#what-wildfly-affects)
    - [Setup Requirements](#setup-requirements)
  - [Upgrade](#upgrade)
  - [to 1.2.0](#to-120)
    - [wildfly class](#wildfly-class)
    - [New dependency](#new-dependency)
    - [Defined types](#defined-types)
  - [to 2.0.0](#to-200)
  - [to 2.1.0](#to-210)
  - [Usage](#usage)
    - [Wildfly 25.0.0](#wildfly-2500)
    - [Wildfly 23.0.2](#wildfly-2302)
    - [Wildfly 10.1.0](#wildfly-1010)
    - [Wildfly 9.0.2](#wildfly-902)
    - [Wildfly 8.2.1](#wildfly-821)
    - [JBoss EAP 6.x (with hiera)](#jboss-eap-6x-with-hiera)
    - [JBoss EAP 7.0](#jboss-eap-70)
    - [JBoss EAP from RHEL Subscriptions](#jboss-eap-from-rhel-subscriptions)
    - [Keycloak](#keycloak)
    - [apiman](#apiman)
      - [Example](#example)
    - [Infinispan Server](#infinispan-server)
    - [Wildfly's Configuration Management](#wildflys-configuration-management)
    - [Patch management](#patch-management)
      - [Offline](#offline)
        - [EAP/Offline…
