---
repo: "renaudallard/homeassistant_be_gas_prices"
name: "homeassistant_be_gas_prices"
description: "Home Assistant integration for Belgian all-in natural gas prices: energy, network tariffs and levies parsed from the suppliers' own tariff cards, per kWh and per m³, with year-to-date cost from the gas meter and contract comparison."
readmeQualityOk: true
url: "https://github.com/renaudallard/homeassistant_be_gas_prices"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["belgium", "bolt", "ebem", "ecofix", "eneco", "energie-be", "energyvision", "engie", "frank-energie", "gas"]
stars: 14
forks: 0
openIssues: 1
closedIssues: 13
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-09-29T09:14:31Z"
lastCommitAt: "2026-11-13T05:27:57Z"
lastReleaseAt: "2026-10-03T13:28:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 52
maintainers: ["renaudallard"]
openGraphImageUrl: "https://opengraph.githubassets.com/a9585aa0cef5910c54bdcc8c56b2f5180c51589df05dd2f0a0b37e15a06f0f73/renaudallard/homeassistant_be_gas_prices"
discussionCount: 0
---

---

Home Assistant integration that exposes the **all-in price paid for natural
gas** in Belgium, per kWh and per cubic metre, taking into account every part
of a Belgian gas bill (energy + distribution + transport + levies + VAT), and,
from your gas meter, the **running bill** of the year and of the month.

Prices are read **live** from each supplier's own published tariff card.
**No supplier price is hardcoded in the source.** A supplier is one Python
module that knows where its card is published and how to read it. If yours is
missing, **open an issue asking for it** with the
[supplier request](https://github.com/renaudallard/homeassistant_be_gas_prices/issues/new?template=supplier_request.yml)
form rather than writing the module: a card carries a dozen things that are
easy to read almost right, and getting them wrong mis-prices a bill quietly.

This is the gas sibling of
[Belgian Electricity Prices](https://github.com/renaudallard/homeassistant_be_electricity_prices)
and [Belgian Water Prices](https://github.com/renaudallard/homeassistant_be_water_prices).

To read a mechanical gas meter that has no smart output,
[Android…
