---
repo: "jackburton79/inventory-agent"
name: "inventory-agent"
description: "Lite inventory agent (compatibile with ocsinventory-ng and glpi)"
readmeQualityOk: true
url: "https://github.com/jackburton79/inventory-agent"
language: "C"
languages: ["C", "C++"]
languagePcts: [66, 21]
topics: ["inventory", "linux", "thinstation", "freebsd", "glpi", "ocsinventory-ng"]
stars: 14
forks: 6
openIssues: 4
closedIssues: 27
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2013-07-11T14:23:52Z"
lastCommitAt: "2026-09-25T09:03:15Z"
lastReleaseAt: "2018-04-18T15:44:51Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 71
maintainers: ["jackburton79", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cf11e6cda0db5d1960cc79fb818a6cc6a68077c0662af35dd6f1a1432a28df1/jackburton79/inventory-agent"
---

# Inventory Agent

A lightweight, high-performance inventory agent compatible with **OCS Inventory NG** and **GLPI**, designed for Linux, FreeBSD, and other Unix-like systems. The software collects hardware and software information from a machine and either sends it to an inventory server or exports it locally in XML format.

## Features

* Compatible with **OCS Inventory NG** and **GLPI**.
* Written in **C++**, with a small footprint and low resource consumption.
* Supports Linux and FreeBSD platforms.
* Sends inventory data over HTTP/HTTPS.
* Exports inventory data locally as XML files.
* Supports HTTP Basic Authentication.
* Suitable for embedded environments and systems with limited resources.
* Minimal dependencies: OpenSSL, zlib, and TinyXML2.

## Overview

Inventory Agent was originally developed as a lightweight alternative to the official OCS Inventory NG Unix agent. It was specifically designed to inventory resource-constrained systems such as PXE-booted thin clients and embedded environments where the Perl-based official agent was impractical.

The application gathers information about:

* Operating system
* CPU
* Memory
* Storage devices and volumes
* Network…
