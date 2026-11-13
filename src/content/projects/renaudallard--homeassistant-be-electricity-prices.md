---
repo: "renaudallard/homeassistant_be_electricity_prices"
name: "homeassistant_be_electricity_prices"
description: "Home Assistant integration for Belgian all-in electricity prices: energy, network tariffs and levies parsed from the suppliers' own tariff cards, day-ahead spot from ENTSO-E, with year-to-date cost, contract comparison and solar injection credits."
readmeQualityOk: true
url: "https://github.com/renaudallard/homeassistant_be_electricity_prices"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["belgium", "electricity", "eneco", "home-assistant", "cociter", "bolt", "engie", "luminus", "mega", "totalenergies"]
stars: 76
forks: 3
openIssues: 1
closedIssues: 139
watchers: 5
contributors: 4
recentReleases: 0
createdAt: "2026-04-29T13:05:59Z"
lastCommitAt: "2026-11-13T05:27:57Z"
lastReleaseAt: "2026-04-29T23:14:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "community_hub"]
healthScore: 100
undervaluedScore: 35
maintainers: ["renaudallard"]
openGraphImageUrl: "https://opengraph.githubassets.com/61021fcadad763713b8d0789cbc11ae6102ae3d46346fed896b8b1a98fef231d/renaudallard/homeassistant_be_electricity_prices"
discussionCount: 26
---

---

Home Assistant integration that exposes the **all-in real EUR/kWh paid** for
Belgian electricity, taking into account every component of a Belgian bill
(energy + transport + distribution + levies + VAT) plus the Flanders
capacity tariff billed on the monthly peak.

Energy prices are fetched **live** from each supplier's own published
tariff card. **No supplier EUR value is hardcoded in the source**: the only
EUR rate in it is a regulated one no live source prints, the protected
customer's excise before August 2026, which the law's current text no longer
states. The household excise is read from the law itself, and the Flemish
network ceiling from Fluvius's yearly tariff sheet. A supplier is one
Python module, split into a few helpers for the larger ones, that knows where
to find that supplier's publication and how to read it. If yours is missing,
**open an issue asking for it** rather than
writing the module: a tariff card carries a dozen things that are easy to read
almost right -- which column a meter type bills on, whether a figure is per
year or per month, whether a levy carries VAT -- and getting those wrong
mis-prices a bill quietly. Reviewing that costs more than…
