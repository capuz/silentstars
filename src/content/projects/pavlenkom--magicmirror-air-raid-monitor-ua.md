---
repo: "PavlenkoM/MagicMirror-air-raid-monitor-ua"
name: "MagicMirror-air-raid-monitor-ua"
description: "Air raid Sirens in Ukraine MagicMirror"
readmeQualityOk: true
url: "https://github.com/PavlenkoM/MagicMirror-air-raid-monitor-ua"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
topics: ["raspberry-pi", "ukraine", "civil-defence"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-05-31T20:20:58Z"
lastCommitAt: "2026-07-05T20:55:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 55
maintainers: ["PavlenkoM"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c749b9129044c6dde4cae9578f7bf6402ea604858bab6fa578b2be4f3410c02/PavlenkoM/MagicMirror-air-raid-monitor-ua"
---

#  MagicMirror-air-raid-monitor-ua

This is an extension for the [MagicMirror](https://github.com/MichMich/MagicMirror). It shows the current status of air raid alerts across Ukraine's regions on a map of the country.
Based on data from the [UkraineAlarm API](https://www.ukrainealarm.com/) — you'll need an API key from that service to use this module.

## Installation
1. Install and configure [MagicMirror](https://docs.magicmirror.builders).
2. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/PavlenkoM/MagicMirror-air-raid-monitor-ua.git`
3. To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MagicMirror-air-raid-monitor-ua',
		config: {
      		apiKey: 'YOUR_API_KEY',
			updateInterval: 90,
			fullAlertThreshold: 0.5,
		}
	}
]
````

## Configuration options
The following properties can be configured:

| Option | Description |
| --- | --- |
| `apiKey` | Your API key for accessing the air raid data. |
| `updateInterval` | Interval of updating information about air raids in Ukraine. Value in seconds. Default and minimum value 90 seconds (lower values are ignored) — the…
