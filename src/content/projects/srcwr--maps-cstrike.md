---
repo: "srcwr/maps-cstrike"
name: "maps-cstrike"
description: "https://fastdl.me"
readmeQualityOk: true
url: "https://github.com/srcwr/maps-cstrike"
homepage: "https://fastdl.me"
language: "Rust"
languages: ["Rust", "HTML"]
languagePcts: [51, 26]
topics: ["fastdl", "counter-strike-source"]
stars: 27
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2022-11-25T08:42:28Z"
lastCommitAt: "2026-08-24T04:22:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 57
maintainers: ["srcwrbot", "rtldg"]
openGraphImageUrl: "https://opengraph.githubassets.com/3193862a12a043d1287f4e286b19776c41482b83cee996e121142c4de00999fd/srcwr/maps-cstrike"
---

# hashes & filesizes of many map/bsp files for Counter-Strike: Source

Used to help with archiving maps & hosting a big fastdl.

Originally intended for bhop/surf/xc/kz/trikz maps... and then it spiraled out of control...
- movement/skill gamemode maps get the most love though... there's around 2000 rows of duplicate mapnames excluding bhop/surf/xc/kz/trikz/etc so... that will probably never be proactively dealt with for `/maps/` / `canon.csv`....
	- feel free to request setting the correct version of a map though

## LICENSE
Code, .html files, .txt files, and datasets (CSVs) are licensed under the [DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE](https://github.com/srcwr/maps-cstrike/blob/master/LICENSE) unless otherwise specified in the file.

## WHAT IS WHAT
- `fastdlsite/`
	- [`check.fastdl.me`](https://check.fastdl.me/)
		- Map submission form and commands to check your `maps` folder for unique things to upload
	- [`fastdl.me`](https://fastdl.me/)
		- The homepage
	- `fastdlpy/`
		- `99-cloudflared.conf`
			- some sysctls I put on to silence some cloudflared warnings
		- `main.py`
			- The meat of the name-to-hash redirections for [main.fastdl.me](https://main.fastdl.me/)
		-…
