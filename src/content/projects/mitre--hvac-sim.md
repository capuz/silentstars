---
repo: "mitre/hvac-sim"
name: "hvac-sim"
description: "HVACSim: a simulated server room HVAC system with BACnet, built as a target for MITRE Caldera for OT"
readmeQualityOk: true
url: "https://github.com/mitre/hvac-sim"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [78, 22]
topics: ["bacnet", "caldera", "caldera-for-ot", "hvac", "ics", "operational-technology", "ot", "scada", "simulator"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 15
recentReleases: 6
createdAt: "2026-01-07T23:12:56Z"
lastCommitAt: "2026-11-13T18:32:40Z"
lastReleaseAt: "2026-11-13T18:32:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 56
maintainers: ["SamirBou"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b79b71a1a613dd657e5eb1483671ae905f1ca906c0c38e568caf467e132a796/mitre/hvac-sim"
---

# HVACSim

A simulated server-room HVAC controller with BACnet process control, built as a target for [MITRE Caldera™ for OT](https://github.com/mitre/caldera-ot). For a walkthrough, read [Caldera for OT HVACSim: Expanding Access to OT Security Education](https://medium.com/@mitrecaldera/caldera-for-ot-hvacsim-expanding-access-to-ot-security-education-c4fcc47396ab).

## Authors

Created by University of Hawaii at Manoa students: Elijah Saloma and Jake Dickinson, advised by Samir Boussarhane.

In collaboration with MITRE Caldera™ for OT ([ot@mitre.org](mailto:ot@mitre.org)).

HVACSim is intended to grow open source collaboration in OT. We encourage forks and pull requests with improvements, new features, deployment notes, documentation, and tests.

The students' original version is preserved in the [v1.0.0 release](https://github.com/mitre/hvac-sim/releases/tag/v1.0.0).

## Description

HVACSim models a server room cooled by an intake fan, an exhaust fan and a chiller. The PLC is a BACnet/IP device that runs the thermal model and exposes the setpoint, the fan speeds and the emergency stop as writable objects, and the room temperature and chiller load as read-only inputs. The HMI is…
