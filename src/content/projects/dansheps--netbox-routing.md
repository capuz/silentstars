---
repo: "DanSheps/netbox-routing"
name: "netbox-routing"
description: "A Netbox Routing plugin"
readmeQualityOk: true
url: "https://github.com/DanSheps/netbox-routing"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["netbox-plugin"]
stars: 107
forks: 27
openIssues: 11
closedIssues: 98
watchers: 4
contributors: 17
recentReleases: 0
createdAt: "2022-03-30T13:40:04Z"
lastCommitAt: "2026-11-07T16:12:08Z"
lastReleaseAt: "2024-09-19T16:14:01Z"
status: "thriving"
tags: ["funded"]
healthScore: 97
undervaluedScore: 47
maintainers: ["DanSheps", "andy-shady-org", "jvobelnet"]
openGraphImageUrl: "https://opengraph.githubassets.com/05bdebb1ece490402f1061201a9fc00d1ff199fab03d406e631f549ed8dbc9bf/DanSheps/netbox-routing"
fundingLinks: ["PATREON:https://patreon.com/dansheps", "CUSTOM:https://paypal.me/dansheps84?country.x=CA&locale.x=en_US"]
discussionCount: 6
---

# NetBox Routing

A plugin for tracking all kinds of routing information

## Features

### Current features

* **Static routing**
    * Define IPv4 or IPv6 routes for devices, optionally scoped to a VRF.
    * Choose an IP address or an interface as the next hop, and set route metrics, tags, names, or permanence.
* **EIGRP**
    * Model named or traditional routers with process identifiers and router IDs.
    * Organize networks and interfaces by address family and optional VRF; configure interface passivity, BFD, and
      authentication.
* **OSPF**
    * Track device instances with router IDs, process IDs, and optional VRFs, and organize them into typed areas.
    * Assign interfaces to areas and record passive mode, priority, BFD, and authentication settings. Interfaces are
      not restricted to a single IP version.
* **BGP**
    * Define routers and address-family scopes for the default routing table or individual VRFs, then associate peers
      with peer and source addresses and local or remote ASNs.
    * Configure address-family policy with prefix lists and route maps; use peer ("peer groups"), session, and policy
      templates to
      share settings and inherit…
