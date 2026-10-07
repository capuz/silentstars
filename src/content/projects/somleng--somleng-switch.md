---
repo: "somleng/somleng-switch"
name: "somleng-switch"
description: "SomlengSWITCH. Somleng's TwiML Engine, FreeSWITCH configuration and infrastructure."
readmeQualityOk: true
url: "https://github.com/somleng/somleng-switch"
language: "Ruby"
languages: ["Ruby", "HCL"]
languagePcts: [41, 22]
topics: ["somleng", "twiml", "voice", "telephony", "hacktoberfest"]
stars: 57
forks: 28
openIssues: 1
closedIssues: 28
watchers: 5
contributors: 5
recentReleases: 0
createdAt: "2016-06-24T08:23:16Z"
lastCommitAt: "2026-10-07T10:30:20Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 99
undervaluedScore: 56
maintainers: ["github-actions[bot]", "dependabot[bot]", "dwilkie"]
openGraphImageUrl: "https://opengraph.githubassets.com/66f852c441d3cc01eda6f43f6cf95df9baaacd13f260ebb5f5f3d7709a841628/somleng/somleng-switch"
---

# SomlengSWITCH

SomlengSWITCH is a modular, open-source platform designed to facilitate programmable voice and messaging applications.
It serves as the core engine for Somleng's Telco-as-a-Service (TaaS) and Communications Platform-as-a-Service (CPaaS) offerings.

The architecture is structured into several key components, each playing a vital role in the system's functionality.

## Architecture Overview

### Public Gateway

The Public Gateway is an OpenSIPS powered SIP proxy which can be deployed behind a Network Load Balancer. This gateway is typically used by carriers who wish to connect to Somleng without using SIP registration. A carrier sends SIP requests to the Public Gateway which load balances them to FreeSWITCH containers, which can be deployed in a private subnet for horizontal scaling.

The Public Gateway uses IP address authentication which is configured from the Somleng Dashboard via [IP Address Authentication](https://www.somleng.org/docs.html#sip_trunks_ip_address_configuration).

The Public Gateway *does not* engage the media proxy, and media is send directly between the carrier and the FreeSWITCH container. If the FreeSWITCH instances are deployed behind a NAT…
