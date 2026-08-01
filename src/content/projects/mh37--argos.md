---
repo: "mh37/Argos"
name: "Argos"
description: "A passive WiFi tracking and profiling based on probe request frames."
readmeQualityOk: true
url: "https://github.com/mh37/Argos"
homepage: "https://unit37.org/#Argos"
language: "C"
languages: ["C"]
languagePcts: [98]
topics: ["probe-requests", "security", "tracking", "wifi", "linux", "python", "sniffing", "wireless", "pentesting", "reconnaissance"]
stars: 15
forks: 1
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-09-20T06:55:30Z"
lastCommitAt: "2026-08-01T06:14:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 57
maintainers: ["mh37", "google-labs-jules[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c7f54d8c602666db5c9cead7c9eb69c9cf35aaa3049ae4474b47560aa4ade83/mh37/Argos"
---

# Argos

This tool serves the purpose to showcase the amount of data a Wi-Fi enabled device might reveal about the user. It does so by capturing probe request frames, extracting the SSID value, send it to Wigle to retrieve geographic information of the SSID location, and then show it on a Map with the help of the Google Maps API.

In short this tool utilizes passive WiFi tracking and profiling based on probe request frames. You can choose to save captured data, but depending on your local laws this might be infringing on data privacy laws.

## Arguments / Parameters

The tool currently supports the following arguments:

Network Interface: ```-i```
Write data to a certain location: ```-w```
Limit signal strength range: ```-lss```

As example, the following command will run the tool on NIC wlan1 and only capture probe requests that have a signal strength of -50 or higher.

```sudo python3 ./argos.py -i wlan1 -lss '-50'```

It is important to use the lss parameter if you want to limit the range of what you are scanning. This may be crucial depending on your environment and legal restrictions. 

## Ethics

This tool was only used in controlled environments under strict ethic…
