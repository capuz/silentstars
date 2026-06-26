---
repo: "Zedeldi/epson-printer-snmp"
name: "epson-printer-snmp"
description: "Read information and reset waste ink counters on Epson printers, using SNMP."
url: "https://github.com/Zedeldi/epson-printer-snmp"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["epson", "printer", "snmp"]
stars: 123
forks: 43
openIssues: 5
closedIssues: 14
watchers: 5
contributors: 22
recentReleases: 0
createdAt: "2023-06-14T21:25:32Z"
lastCommitAt: "2026-06-26T06:46:33Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 28
maintainers: ["Zedeldi", "mazj42", "YoruNoHikage"]
openGraphImageUrl: "https://opengraph.githubassets.com/13e2efd677c28be7a07b2aa4a660132cc6101113670c03068d8b08fd33288c6e/Zedeldi/epson-printer-snmp"
---

# epson-printer-snmp

Read information and reset waste ink counters on Epson printers, using SNMP.

## Description

This project was designed for a EPSON WF-7525 Series printer, but inspired by [projects](#resources) for other models.
Hopefully, releasing this code will help save a printer from the trash and improve consumer repairability for these devices.
Information about specific models is stored in `models.json`.
Feel free to raise an issue/pull request for [adding support](CONTRIBUTING.md) for another model of printer, with logs from `wicreset` or similar attached.

The format for reading values is:

`{eeprom_link}.124.124.7.0.{password}.65.190.160.{oid}.0`

The format for setting values is:

`{eeprom_link}.124.124.16.0.{password}.66.189.33.{oid}.0.{value}.{eeprom_write}`

Where `eeprom_link` is consistently `1.3.6.1.4.1.1248.1.2.2.44.1.1.2.1` and `password` is two values, e.g. `101.0`. `password` and `eeprom_write` seem to vary between different models of printer. This can be found by using a tool, such as `wicreset`, and checking the request it sends.
A method for brute forcing the password is provided in `Session.brute_force`, which tries to get a value from the EEPROM,…
