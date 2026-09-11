---
repo: "hawkinslabdev/motomate"
name: "motomate"
description: "Your personal vehicle maintenance tracker to keep track of mileage, service history, and spending."
readmeQualityOk: true
url: "https://github.com/hawkinslabdev/motomate"
homepage: "https://motomate.mijnmotorparkeren.nl"
language: "Svelte"
languages: ["Svelte", "TypeScript"]
languagePcts: [53, 47]
topics: ["bicycle", "expense-tracker", "maintenance-log", "mileage-tracker", "motorcycle", "open-source", "self-hosted", "vehicle-maintenance", "bike", "lubelogger"]
stars: 34
forks: 5
openIssues: 5
closedIssues: 31
watchers: 0
contributors: 6
recentReleases: 7
createdAt: "2026-03-31T18:12:14Z"
lastCommitAt: "2026-09-11T08:15:17Z"
lastReleaseAt: "2026-08-19T18:29:29Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 49
maintainers: ["hawkinslabdev", "allcontributors[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1197608999/ea080318-8150-4ebc-80d7-495da47541f1"
---

# MotoMate

Take control of your **vehicle maintenance** with MotoMate, a self-hosted (maintenance) tracking web application. Access your digital maintenance journal from any mobile device to log tasks right from the garage. Because it is self-hosted, your data and service history never leave your own hardware.

View our [**demo-instance here**](https://motomate.mijnmotorparkeren.nl) (hosted by MijnMotorParkeren.nl). Want to try it yourself? Then set-up your own instance using the instructions below.

> [!WARNING]
> **We need your help!** MotoMate is still under _active_ development and you may encounter bugs. Please help improve the project by reporting issues, suggesting missing features, or, preferably, submitting a pull request.

We want to make it incredibly simple for riders and vehicle enthusiasts to host their own maintenance journals. Unlike more complex systems such as [LubeLogger](https://lubelogger.com/?ref=github.com/hawkinslabdev/motomate), MotoMate is designed to strip your tracking down to the absolute essentials. 

## Getting Started

You can run MotoMate locally using Docker Compose:

```sh
# You need to generate a random AUTH_SECRET first:
echo…
