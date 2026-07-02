---
repo: "NETWAYS/check_vmware_nsxt"
name: "check_vmware_nsxt"
description: "Icinga check plugin for the VMware NSX-T REST API"
url: "https://github.com/NETWAYS/check_vmware_nsxt"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["plugin", "monitoring", "icinga", "vmware"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 6
watchers: 10
contributors: 25
recentReleases: 0
createdAt: "2021-04-29T17:10:59Z"
lastCommitAt: "2026-07-02T06:33:35Z"
lastReleaseAt: "2023-08-21T07:51:58Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 100
undervaluedScore: 41
maintainers: ["RincewindsHat", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3511b13c579320e049457f7ae9bd55cde2bbac0ee1a1d575c1d64be8d7197287/NETWAYS/check_vmware_nsxt"
---

# check_vmware_nsxt

Icinga check plugin for the VMware NSX-T REST API.

Supported Modes:

* cluster-status - retrieves the overall NSX-T cluster status from the API
* alarms - Retrieve and display open alarms from the API
* capacity-usage - Retrieves and checks capacity indicators from the API

## Installation

Python 3.8 is required, and you need the Python [requests](https://pypi.org/project/requests/) module.

Please prefer installation via system packages like `python3-requests`.

Alternatively you can install with pip:

    pip3 install -r requirements.txt

## Usage

```
check_vmware_nsxt.py --help

optional arguments:
  -h, --help            show this help message and exit
  --api API, -A API     VMware NSX-T URL without any sub-path (e.g. https://vmware-nsx.local)
  --username USERNAME, -u USERNAME
                        Username for Basic Auth (CHECK_VMWARE_NSXT_API_USER)
  --password PASSWORD, -p PASSWORD
                        Password for Basic Auth (CHECK_VMWARE_NSXT_API_PASSWORD)
  --mode MODE, -m MODE  Check mode
  --exclude [EXCLUDE ...]
                        Exclude alarms or usage from the check results.
                        Can be used multiple times and…
