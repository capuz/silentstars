---
repo: "alexdelprete/ha-4noks-elios4you"
name: "ha-4noks-elios4you"
description: "HA Custom Component for 4-noks Elios4you devices"
url: "https://github.com/alexdelprete/ha-4noks-elios4you"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["4-noks", "home-assistant", "home-assistant-component", "homeassistant-components", "homeassistant-custom-component", "elios4you"]
stars: 5
forks: 4
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2024-02-09T13:16:22Z"
lastCommitAt: "2026-06-27T00:46:27Z"
lastReleaseAt: "2024-02-12T15:09:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 95
undervaluedScore: 81
maintainers: ["alexdelprete", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4357ff2579341132124faa2c1db5f2abb988634742cb44dbb975e6b4f2ac6ca2/alexdelprete/ha-4noks-elios4you"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/alexdelprete"]
---

# HA Custom Component for 4-noks Elios4you energy monitoring device

_This project is not endorsed by, directly affiliated with, maintained, authorized, or sponsored by 4-noks / Astrel Group_

## Introduction

HA Custom Component to integrate data from
[4-noks Elios4you](https://www.4-noks.com/product-categories/solar-photovoltaic-en/elios4you-en/?lang=en)
products.
Tested personally on my
[Elios4you Pro](https://www.4-noks.com/shop/elios4you-en/elios4you-pro/?lang=en)
to monitor tha main 3-phase 6kw line, plus my 7.5kW photovoltaic system.

Elio4you is a great product, it provides very reliable measurements, but it has no documented
local API to get the energy data. Luckily, 3y ago I found
[this great article](https://www.hackster.io/daveVertu/reverse-engineering-elios4you-photovoltaic-monitoring-device-458aa0)
by Davide Vertuani, that reversed-engineered how the official mobile app communicated with the
device to fetch data, and found out it's a tcp connection on port 5001, through which the app
sent specific commands to which the device replies with data. That was a great find by Davide,
and I initially used Node-RED to create a quick integration like Davide suggested in the…
