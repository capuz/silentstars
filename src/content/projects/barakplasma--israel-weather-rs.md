---
repo: "barakplasma/israel-weather-rs"
name: "israel-weather-rs"
description: "gets weather forecast xml from ims.gov.il and parses it into rust structs / json"
readmeQualityOk: true
url: "https://github.com/barakplasma/israel-weather-rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["cli", "rust", "weather", "xml", "serde", "serde-xml-rs", "android", "automate", "termux", "android-app"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-12-26T13:11:23Z"
lastCommitAt: "2026-10-03T22:04:49Z"
lastReleaseAt: "2023-06-26T16:40:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 44
maintainers: ["barakplasma", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/27478137932bf268be047242ed0cfb15731150b52f50d4569746ee84b8837efc/barakplasma/israel-weather-rs"
---

# israel-weather-rs

Fetches weather forecast xml from the Israel Meteorology Service ims.gov.il and parses it into rust structs, which are then printed to stdout as json.

I scheduled the cross-compiled rust binary to run on my android phone with https://llamalab.com/automate/ and Termux. Termux parses the JSON output to alert me when it's likely to rain in the next 6 hours. Whats nice is that the week forecast is cached so that even if i lose network access,i still know if it will rain near me.

Could also be setup to alert you or run on linux/mac/windows/raspberry pi with another notification wrapper like https://github.com/nikoksr/notify or https://github.com/caronc/apprise

## Help
```
$ weather --help
Usage: weather [OPTIONS]

Options:
  -l, --location <LOCATION>  Location to check weather for (case-insensitive) [default: "Tel Aviv Coast"]
  -n, --next <NEXT>          Check next n hours ahead [default: 6]
  -a, --all                  Ignore location and print all weather data
  -o, --offline              Offline mode: only use the previously cached forecast
      --list-locations       List available location names and exit
      --now <NOW>            Pretend the current…
