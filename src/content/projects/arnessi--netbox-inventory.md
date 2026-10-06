---
repo: "ArnesSI/netbox-inventory"
name: "netbox-inventory"
description: "Manage your hardware inventory in NetBox"
readmeQualityOk: true
url: "https://github.com/ArnesSI/netbox-inventory"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["netbox-plugin"]
stars: 329
forks: 45
openIssues: 20
closedIssues: 128
watchers: 22
contributors: 23
recentReleases: 0
createdAt: "2022-08-10T09:58:32Z"
lastCommitAt: "2026-10-06T10:41:51Z"
lastReleaseAt: "2023-04-09T17:57:12Z"
status: "thriving"
tags: []
healthScore: 88
undervaluedScore: 31
maintainers: ["matejv", "cruse1977", "dricoco"]
openGraphImageUrl: "https://opengraph.githubassets.com/6266aec40f4974a62d95900a1191d852dcb2c05f32aad266ac8bb01003a1e689/ArnesSI/netbox-inventory"
---

# NetBox Inventory Plugin

A [Netbox](https://github.com/netbox-community/netbox) plugin for hardware inventory.

## Features

Keep track of your hardware, whether it is installed or in storage. You can
define assets that represent hardware that can be used as a device, module, inventory item or rack in NetBox.

Each asset can have a storage location defined, when not in use. You can assign
an asset to a device, module or inventory item. The plugin can keep serial number
and asset tag between asset and device, module, inventory item or rack in sync if
enabled in settings.

On Site and Location detail views there is a new tab Assets that can show assets
that are stored or installed at that location or both. Rack details view also has
a tab for installed Assets. This provides a unified view of all assets at a given
location.

To properly support inventory items (that are used in NetBox to model SFP and
similar modules) the plugin defines inventory item types that are equivalent to
device types and module types. 

Inventory item types can be assigned into inventory item groups. On a group detail
view you have an overview of the number of contained assets broken down by asset
status…
