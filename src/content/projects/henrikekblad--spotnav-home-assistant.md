---
repo: "henrikekblad/spotnav-home-assistant"
name: "spotnav-home-assistant"
description: "SpotNav for Home Assistant: charge your EV on the cheapest spot prices or solar surplus, within your main fuse"
readmeQualityOk: true
url: "https://github.com/henrikekblad/spotnav-home-assistant"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [76, 20]
topics: ["ev-charging", "hacs", "home-assistant", "ocpp", "electricity-prices", "entsoe", "home-assistant-integration", "load-balancing", "lovelace-card", "solar"]
stars: 16
forks: 2
openIssues: 0
closedIssues: 2
watchers: 3
contributors: 1
recentReleases: 10
createdAt: "2026-09-13T12:10:46Z"
lastCommitAt: "2026-11-15T08:27:42Z"
lastReleaseAt: "2026-10-02T18:21:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: ["henrikekblad"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1368351402/92464b38-322d-4ec5-b16b-11114333ee8d"
fundingLinks: ["GITHUB:https://github.com/henrikekblad"]
---

SpotNav plans and runs your EV charging inside Home Assistant. Tell it when the car must be ready, or
what charge level you want, and it charges in the cheapest hours, on your solar surplus, and within your
main fuse. It runs locally in Home Assistant and gets going in minutes: the setup finds your charger, your
meter and your cars.

- **Cheapest quarter-hours before departure.** It plans from the spot prices, fees and tax included,
  and starts and stops the charger to follow the plan.
- **Learns your car.** It learns the car's real charging power and the energy one percent of its
  battery takes, so a target such as "80 % by 07:00" gets the right amount of time.
- **Solar and hybrid.** Charge from surplus, or hold back grid energy when the forecast promises sun.
  Chargers that can switch between one and three phases do so to follow the sun.
- **Load balancing under your main fuse.** Several chargers share one fuse, with priority first,
  normal or last, also beside a [home battery](https://github.com/henrikekblad/spotnav-home-assistant/blob/HEAD/docs/home-battery.md) that charges from the grid.
- **Knows which car is plugged in.** With several cars at one charger it reads what…
